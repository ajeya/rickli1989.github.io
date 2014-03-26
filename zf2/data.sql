-- --------------------------------------------------------

--
-- Table structure for table `twitter`
--

CREATE TABLE `twitter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `twitter`
--

INSERT INTO `twitter` (`id`, `text`, `created_at`) VALUES
(1, 'The is for a test, the end~~~~', '2014-03-25 10:34:17'),
(2, 'I don''t use Twitter a lot.', '2014-03-25 10:33:59'),
(3, 'Here is my linkedin profile http://t.co/o3g0lBXQuU', '2014-03-25 10:33:30'),
(4, 'There are some demos using Backbone and RequireJS with CSS3 animations', '2014-03-25 10:32:11'),
(5, 'Welcome to my github account https://t.co/iackVxbLR3', '2014-03-25 10:31:38'),
(6, 'As a full stack developer, you have to know a bit here and there.', '2014-03-25 10:30:46'),
(7, 'Recently working on Backbone, learning Augular, also Node, mongodb, etc', '2014-03-25 10:30:29'),
(8, 'Mastering java, javascript, CSS3 as well.', '2014-03-25 10:29:33'),
(9, 'Have been working with php for a couple of years using Zend and Symfony', '2014-03-25 10:29:07'),
(10, 'My name is Rick, who is current working as a software engineer.', '2014-03-25 10:28:39');
