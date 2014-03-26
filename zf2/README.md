Zend Framework 2 Twitter User Timeline Feed
=======================

Introduction
------------
This is a simple, twitter application using the ZF2 MVC layer and module
systems to get the feed from a user and store it into database, finally using
Angular js ngTable to sort and filter in front-end.

Installation
------------

Using Git
--------------------
You need to an install using native git submodules:

    git clone https://github.com/rickli1989/Zend-Framework-2-twitter.git

Web Server Setup
----------------

### PHP CLI Server

The simplest way to get started if you are using PHP 5.4 or above is to start the internal PHP cli-server in the root directory:

    php -S 0.0.0.0:8080 -t public/ public/index.php

This will start the cli-server on port 8080, and bind it to all network
interfaces.

**Note: ** The built-in CLI server is *for development only*.

### Apache Setup

To setup apache, setup a virtual host to point to the public/ directory of the
project and you should be ready to go! It should look something like below:

    <VirtualHost *:80>
        ServerName zf2-twitter.localhost
        DocumentRoot /path/to/zf2-twitter/public
        <Directory /path/to/zf2-twitter/public>
            DirectoryIndex index.php
            AllowOverride All
            Order allow,deny
            Allow from all
        </Directory>
    </VirtualHost>
