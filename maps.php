<?php
include "dbconnection.php";

if(!isset($_SESSION['mobile'])){
    header('Location: login.php');
}
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Gossip - Google Maps</title>
<link href="modules.css" rel="stylesheet" type="text/css">
<script src="https://widget.rss.app/v1/carousel.js" type="text/javascript" async></script>
<script src="http://use.edgefonts.net/montserrat:n4:default;source-sans-pro:n2:default.js" type="text/javascript"></script>
<script type="text/javascript" src="time.js"></script>
</head>
<body>
<div id="he"><center><h2><span id="text">GET READY TO CHANGE THE WAY YOU MULTITASK<br>#GOSSIP LAUNCHING SOON<br></span><span id="time"></span></h2></center></div>
<div id="News" class="News"><rssapp-carousel id="ZLFUmqSWEZR1yzWW"></rssapp-carousel></div>
<br>
<center><input type="button" class="change" value="Module Focus" onClick="openFullscreen2()" />
<input type="button" class="change" value="Focus Mode" onClick="openFullscreen()" /></center>
<div class="grid-container2">
  <div class="item1"><iframe id="m" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14744.250057787433!2d88.23708707546388!3d22.50183757271154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1601400870794!5m2!1sen!2sin" width="800" height="505" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  </div> 
  <div class="item2"><iframe src="mod.html" height="245" width="425"></iframe>
  </div>
  <div class="item3"><iframe src="mod.html" height="245" width="425"></iframe>
  </div>
</div>
<br>
<br>
<br>
<div id="nav">
	<ul>
  		<li><a href="login.php">Logout</a></li>
		<li><a href="#" id="prof"></a></li>
  		<li><a href="homepage.php">Home</a></li>
		<li><a href="#News">News</a></li>
		<li class="log"><img width="50px" src="logo.png"></li>
		<li class="te">Gossip © 2020 - All Rights Reserved</li>
	</ul>
</div>
</body>
<div id="profnav">
	<?php
		include "navprof.php";
	?>
</div>
<script type="text/javascript" src="mod.js"></script>
</html>