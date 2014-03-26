<?php

namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\Mvc\MvcEvent;
use Application\Model\Twitter;

class IndexController extends AbstractActionController
{
	protected $twitterTable;

    public function indexAction()
    {
    	$out = array();
    	$results = $this->getTwitterTable()->fetchAll();
    	foreach ($results as $key => $value) {
    		$out[] = (array)$value;
    	}

        return new ViewModel(array('tweets'=>str_replace("'", "\\'", json_encode($out,JSON_NUMERIC_CHECK))));
    }

    public function getTwitterTable()
     {
         if (!$this->twitterTable) {
             $sm = $this->getServiceLocator();
             $this->twitterTable = $sm->get('Application\Model\TwitterTable');
         }
         return $this->twitterTable;
     }

     public function getTwitterFeeds(){
     	$result = exec("curl --get 'https://api.twitter.com/1.1/statuses/user_timeline.json' --data 'screen_name=Rick_Li_Yu' --header 'Authorization: OAuth oauth_consumer_key=\"ljiY4uUndydF9acAi3YGvQ\", oauth_nonce=\"668736bd2e8b60f3369527b63968999f\", oauth_signature=\"mNqMn322scN51afhsq6v8hVOJxU%3D\", oauth_signature_method=\"HMAC-SHA1\", oauth_timestamp=\"1395789897\", oauth_token=\"825444092-aIAaG1AobgbXBp6VR15T6tBG1bVfMrpHjR2h5IvR\", oauth_version=\"1.0\"' --verbose");
    	foreach(json_decode($result) as $key=>$value){
    		$text = $value->text;
			$created_at = date("Y-m-d H:i:s", strtotime($value->created_at)); 
    		$twitter = new Twitter();
    		$data = array();
    		$data['text'] = $text;
    		$data['created_at'] = $created_at;
    		$twitter->exchangeArray($data);
    		$this->getTwitterTable()->saveTwitter($twitter);
    	}
     }
}
