
<!DOCTYPE HTML>
<html lang="zxx">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Lopels</title>
		<!-- Bootstrap CSS -->
		<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" media="all" />
		<!-- Slick nav CSS -->
		<link rel="stylesheet" type="text/css" href="assets/css/slicknav.min.css" media="all" />
		<!-- Iconfont CSS -->
		<link rel="stylesheet" type="text/css" href="assets/css/icofont.css" media="all" />
		<!-- Slick CSS -->
		<link rel="stylesheet" type="text/css" href="assets/css/slick.css">

		<link rel="stylesheet" href="assets/css/font-awesome.min.css">
		<!-- Owl carousel CSS -->
		<link rel="stylesheet" type="text/css" href="assets/css/owl.carousel.css">
		<!-- Popup CSS -->
		<link rel="stylesheet" type="text/css" href="assets/css/magnific-popup.css">
		<!-- Switcher CSS -->
		<link rel="stylesheet" type="text/css" href="assets/css/switcher-style.css">
		<!-- Animate CSS -->
		<link rel="stylesheet" type="text/css" href="assets/css/animate.min.css">
		<!-- Main style CSS -->
		<link rel="stylesheet" type="text/css" href="assets/css/style.css" media="all" />
		<!-- Responsive CSS -->
		<link rel="stylesheet" type="text/css" href="assets/css/responsive.css" media="all" />
		<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
		<!-- Favicon Icon -->
		<link rel="icon" type="image/png" href="assets/img/favcion.png" />
		<!--[if lt IE 9]>
		  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
		  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
	</head>
	<body data-spy="scroll" data-target=".header" data-offset="50">
		<!-- Page loader -->
	    <div id="preloader"></div>
		<!-- header section start -->
		<header class="header">
			<div class="container">
				<div class="row flexbox-center">
					<div class="col-lg-2 col-md-3 col-6">
						<div class="logo">
							<a href="#home"><img src="assets/img/logo.png" alt="logo" /></a>
						</div>
					</div>
					<div class="col-lg-10 col-md-9 col-6">
						<div class="responsive-menu"></div>
					    <div class="mainmenu">
                            <ul id="primary-menu">
                               
                                <li><a onclick="document.getElementById('id01').style.display='block'" class="appao-btn" href="#">Admin Panel</a></li>
                            </ul>
					    </div>
					</div>
				</div>
			</div>
		</header>
		<!-- header section end -->
		<div id="id01" class="w3-modal">
			<div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">
	
				<div class="w3-center"><br>
					<span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
					<img src="assets/img/logo_blue.png" alt="Avatar" style="width:30%" class="w3-circle w3-margin-top">
				</div>
	
				<form class="w3-container" action="index.php" method="POST">
					<div class="w3-section">
						<label><b>Username</b></label>
						<input class="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Username" name="username" required>
						<label><b>Password</b></label>
						<input class="w3-input w3-border" type="password" placeholder="Enter Password" name="password" required>
						<button class="w3-button w3-block w3-green w3-section w3-padding" name="submit" type="submit">Login</button>
						<input class="w3-check w3-margin-top" type="checkbox" checked="checked"> Remember me
					</div>
				</form>
	
				<div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
					<button onclick="document.getElementById('id01').style.display='none'" type="button" class="w3-button w3-red">Cancel</button>
					<span class="w3-right w3-padding w3-hide-small">Forgot <a href="#">password?</a></span>
				</div>
	
			</div>
		</div>
		<!-- hero area start -->
		<section class="hero-area" id="home">
			<div class="container">
				<div class="row">
					<div class="col-lg-7">
						<div class="hero-area-content">
							<h2 style="color:white;">To bring a customer, you must be good.</h2>
							<h1>To bring him again, you must be exceptional.</h1>
							
						</div>
					</div>
					<div class="col-lg-5">
					    <div class="hand-mockup text-lg-left text-center">
							<img src="assets/img/hand-mockup.png" alt="Hand Mockup" />
						</div>
					</div>
				</div>
			</div>
		</section><!-- hero area end -->
		<!-- about section start -->
		<section class="about-area ptb-90">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
					    <div class="sec-title">
							<h2>About Lopels<span class="sec-title-border"><span></span><span></span><span></span></span></h2>
							<p>Lopels is an AI powered Multi-Vendor Loyalty Platform</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4">
					    <div class="single-about-box">
							<i class="icofont icofont-ruler-pencil"></i>
							<h4>Better Customer Retention</h4>
							<p>Get your customers visit your shop again and again.</p>
						</div>
					</div>
					<div class="col-lg-4">
					    <div class="single-about-box active">
							<i class="icofont icofont-computer"></i>
							<h4>Easier Marketing</h4>
							<p>Target your potential customers and give customized offers for them.</p>
						</div>
					</div>
					<div class="col-lg-4">
					    <div class="single-about-box">
							<i class="icofont icofont-headphone-alt"></i>
							<h4>Less Expensive</h4>
							<p>Don't need to spend money for printing cards, scanners or swiping machines.</p>
						</div>
					</div>
				</div>
			</div>
		</section><!-- about section end -->
	
		
		<a href="#" class="scrollToTop">
			<i class="icofont icofont-arrow-up"></i>
		</a>
		
		<!-- jquery main JS -->
		<script src="assets/js/jquery.min.js"></script>
		<!-- Bootstrap JS -->
		<script src="assets/js/bootstrap.min.js"></script>
		<!-- Slick nav JS -->
		<script src="assets/js/jquery.slicknav.min.js"></script>
		<!-- Slick JS -->
		<script src="assets/js/slick.min.js"></script>
		<!-- owl carousel JS -->
		<script src="assets/js/owl.carousel.min.js"></script>
		<!-- Popup JS -->
		<script src="assets/js/jquery.magnific-popup.min.js"></script>
		<!-- Counter JS -->
		<script src="assets/js/jquery.counterup.min.js"></script>
		<!-- Counterup waypoints JS -->
		<script src="assets/js/waypoints.min.js"></script>
	    <!-- YTPlayer JS -->
	    <script src="assets/js/jquery.mb.YTPlayer.min.js"></script>
		<!-- jQuery Easing JS -->
		<script src="assets/js/jquery.easing.1.3.js"></script>
		<!-- Gmap JS -->
		<script src="assets/js/gmap3.min.js"></script>
        <!-- Google map api -->
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnKyOpsNq-vWYtrwayN3BkF3b4k3O9A_A"></script>
		<!-- Custom map JS -->
		<script src="assets/js/custom-map.js"></script>
		<!-- WOW JS -->
		<script src="assets/js/wow-1.3.0.min.js"></script>
		<!-- Switcher JS -->
		<script src="assets/js/switcher.js"></script>
		<!-- main JS -->
		<script src="assets/js/main.js"></script>
	</body>
</html>

<?php

require_once('connection.php');

if(isset($_POST['submit']))
{
	$username=$_POST['username'];
	$password=$_POST['password'];
	$query=mysqli_query($con,"SELECT * FROM shop WHERE username='$username' AND password='$password' ")or die("1");
	$flag=0;
	while($row=mysqli_fetch_array($query))
	{
		if($row['username']==$username && $row['password']==$password)
		{
			session_start();
			$_SESSION[loggedin]='true';
			$_SESSION['USER_LOGIN']=$row['username'];
			$flag=1;
		}
	}
	if($flag==1)
	{	
		echo "<script>window.location='admin/index.html'</script>";
	}
	else {
		echo "<script>alert('Username or Password Incorrect')</script>";
	}
}
?>