<?php

if(!defined('wp_pma_allowed')) exit("direct_access_forbidden. err8");
 
$i = 0;

$i++;
$cfg['Servers'][$i]['host'] 			= 'localhost:3306';
$cfg['Servers'][$i]['connect_type'] 	= 'tcp';
$cfg['Servers'][$i]['socket'] 			= '';
$cfg['Servers'][$i]['AllowNoPassword']	= false;   // true/false
$cfg['blowfish_secret']					= '$#T%SoSM=X]G3~!fwU2uH.W@8ZP_*O{)' ;  // i.e. '$b~`lnkwm>^^jNUEE;(4xB$L\'b?."\'o9' 
$cfg['DefaultLang']						= 'en';		// 'en'
$cfg['Servers'][$i]['only_db']			= [file_get_contents(__DIR__."/_session_temp_db_name_".$_SERVER["HTTP_HOST"].".php")] ;    //i.e. array('db1', 'db2') Show only listed databases
$cfg['PmaAbsoluteUri'] 					= 'https://sportseeker.tk/wp-content/plugins/wp-phpmyadmin-extension/lib/phpMyAdmin_oiWyXfhmZJVPNtuzAY3Ip04/';			//used, if different directory by htaccess ; or parse_url($GLOBALS['PMA_PHP_SELF']);
//$cfg['LoginCookieValidity']			= 14400;

$cfg['ForceSSL'] = false;
$cfg['ServerDefault'] = 1;  // If you have more than one server configured, you can set $cfg['ServerDefault'] to any one of them to auto-connect to that server when phpMyAdmin is started,  or set it to 0 to be given a list of servers without logging in If you have only one server configured, $cfg['ServerDefault'] *MUST* be  set to that server. 
$cfg['UploadDir'] = '';  //'Upload directoryDocumentation Directory on server where you can upload files for import.';
$cfg['SaveDir'] = '';  // 'Save directoryDocumentation Directory where exports can be saved on server';

//$cfg['Servers'][$i]['port']		= 10222;
//$cfg['Servers'][$i]['ssl']		= true;  //Compress connection to MySQL server.
//$cfg['Servers'][$i]['compress']	= false;
$cfg['Servers'][$i]['auth_type']	= 'cookie';
//$cfg['Servers'][$i]['user']		= 'User for config authDocumentation Leave empty if not using config auth.';
//$cfg['Servers'][$i]['password']	= 'Password for config authDocumentation Leave empty if not using config auth.';
$cfg['Servers'][$i]['DisableIS']	= true;  //disable information schema
//$cfg['Servers'][$i]['SessionTimeZone']= 'Session timezoneDocumentation Sets the effective timezone; possibly different than the one from your database server';
//$cfg['Servers'][$i]['controlhost']= 'Control host';
//$cfg['Servers'][$i]['controlport']= 'Control port';
//$cfg['Servers'][$i]['controluser']= 'Control user';
//$cfg['Servers'][$i]['controlpass']= 'Control user password';
$cfg['RetainQueryBox'] 				= true;
$cfg['ShowDbStructureCharset'] 		= true;
$cfg['NavigationTreeEnableGrouping']= false; //disable grouping
$cfg['MaxNavigationItems']			= 200;	// # of tables to show in left table list
$cfg['FirstLevelNavigationItems']	= 200;	// same
//$cfg['AllowThirdPartyFraming'] = SAMEORIGIN;
//$cfg['AllowArbitraryServer']		= true;
//$cfg['ArbitraryServerRegexp']		= 'Restrict login to MySQL serverDocumentation Restricts the MySQL servers the user can enter when a login to an arbitrary MySQL server is enabled by matching the IP or hostname of the MySQL server to the given regular expression.';

//disable errors if needed
$cfg["SendErrorReports"] = 'ask';
?>