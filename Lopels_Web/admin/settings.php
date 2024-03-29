<?php
require_once('connection.php');
session_start();
if($_SESSION['USER_LOGIN'])
{
$username= $_SESSION['USER_LOGIN'];
$query=mysqli_query($con,"SELECT * FROM shop WHERE username='$username'")or die("1");
while($row=mysqli_fetch_array($query))
{
	$shop_id= $row['shop_id'];
}
$shop_query=mysqli_query($con,"SELECT * FROM shop_details WHERE shop_id='$shop_id'")or die("1");
}
else
{
	header("Location: index.php");
}
?>

<!DOCTYPE html>
<html class="side-header">
	
<head>

		<!-- Basic -->
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">	

		<title>Lopels | Dashboard</title>	

		<meta name="keywords" content="HTML5 Template" />
		<meta name="description" content="Porto - Responsive HTML5 Template">
		<meta name="author" content="okler.net">

		<!-- Favicon -->
		<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
		<link rel="apple-touch-icon" href="img/apple-touch-icon.png">

		<!-- Mobile Metas -->
		<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no">

		<!-- Web Fonts  -->
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800%7CShadows+Into+Light" rel="stylesheet" type="text/css">

		<!-- Vendor CSS -->
		<link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="vendor/font-awesome/css/fontawesome-all.min.css">
		<link rel="stylesheet" href="vendor/animate/animate.min.css">
		<link rel="stylesheet" href="vendor/simple-line-icons/css/simple-line-icons.min.css">
		<link rel="stylesheet" href="vendor/owl.carousel/assets/owl.carousel.min.css">
		<link rel="stylesheet" href="vendor/owl.carousel/assets/owl.theme.default.min.css">
		<link rel="stylesheet" href="vendor/magnific-popup/magnific-popup.min.css">

		<!-- Theme CSS -->
		<link rel="stylesheet" href="css/theme.css">
		<link rel="stylesheet" href="css/theme-elements.css">
		<link rel="stylesheet" href="css/theme-blog.css">
		<link rel="stylesheet" href="css/theme-shop.css">

		<!-- Current Page CSS -->
		<link rel="stylesheet" href="vendor/rs-plugin/css/settings.css">
		<link rel="stylesheet" href="vendor/rs-plugin/css/layers.css">
		<link rel="stylesheet" href="vendor/rs-plugin/css/navigation.css">
		<link rel="stylesheet" href="vendor/circle-flip-slideshow/css/component.css">
		
		
		<!-- Demo CSS -->


		<!-- Skin CSS -->
		<link rel="stylesheet" href="css/skins/default.css">		<script src="master/style-switcher/style.switcher.localstorage.js"></script> 

		<!-- Theme Custom CSS -->
		<link rel="stylesheet" href="css/custom.css">

		<!-- Head Libs -->
		<script src="vendor/modernizr/modernizr.min.js"></script>

	</head>
	<body>
		<div class="body">
			<header id="header" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': false, 'stickyEnableOnMobile': true, 'stickyStartAt': 57, 'stickySetTop': '-55px', 'stickyChangeLogo': true}">
				<div class="header-body">
					<div class="header-container container">
						<div class="header-row">
							<div class="header-column">
								<div class="header-row">
									<div class="header-logo">
										<a href="index.html">
											<img alt="Porto" width="111" height="54" data-sticky-width="82" data-sticky-height="40" data-sticky-top="33" src="img/logo_blue.png">
										</a>
									</div>
								</div>
							</div>
							<div class="header-column justify-content-end">
								<div class="header-row pt-3 pt-lg-0">
									<div class="header-search d-none d-md-block">
										<form id="searchForm" action="http://preview.oklerthemes.com/porto/6.1.0/page-search-results.html" method="get">
											<div class="input-group">
												<input type="text" class="form-control" name="q" id="q" placeholder="Search..." required>
												<span class="input-group-append">
													<button class="btn btn-light" type="submit"><i class="fas fa-search"></i></button>
												</span>
											</div>
										</form>
									</div>
								</div>
								<div class="header-row">
									<div class="header-nav">
										<div class="header-nav-main header-nav-main-effect-4 header-nav-main-sub-effect-1">
											<nav class="collapse">
												<ul class="nav nav-pills" id="mainNav">
													<li class="dropdown">
														<a class="dropdown-item " href="index.html">
															Dashboard
														</a>
														
													</li>
													<li class="">
														<a class="nav-link" href="best_customer.html">
															Best Customers
														</a>
													</li>
													<li class="">
															<a class="nav-link" href="recommended.html">
																Recommended Customers
															</a>
													</li>
													<li class="">
																<a class="nav-link active" href="#">
																	Settings
																</a>
													</li>
												</ul>
											</nav>
										</div>
										<button class="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main nav">
											<i class="fas fa-bars"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div role="main" class="main">
				<section class="page-header">
						<div class="container">
							<div class="row">
								<div class="col">
									<ul class="breadcrumb">
										<li><a href="index.php">Dasboard</a></li>
										
									</ul>
								</div>
							</div>
							<div class="row">
								<div class="col">
									<h1>Welcome</h1>
								</div>
							</div>
						</div>
					</section>
					<div class="container">
						<div class="col">
							<div class="heading heading-border heading-middle-border heading-middle-border-center text-center">
								<h2>Update <span class="inverted">Cashback</span> Percentage</h2>
							</div>
						</div>
						<section class="card card-admin form-wizard" id="w4">
							<div class="card-body">
								<form action="settings.php" class="form-horizontal form-bordered" method="POST" enctype="multipart/form-data">

							<div id="ifYes" class="one">	
							<div class="form-group row">
								<label class="col-lg-3 control-label text-lg-right pt-2" for="inputDefault">Percentage</label>
									<div class="col-lg-6">
										<input type="text" name="percentage" class="form-control" id="inputDefault" required>
									</div>
							</div>
							<div class="modal-footer">
										<button type="submit"  class="btn btn-light" name="submit"  >Update</button>
							</div>

						</form>
					</div>
							
						</section>
	
					<div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="formModalLabel" aria-hidden="true">
							<div class="modal-dialog">
									<div class="modal-content">
											<div class="modal-header">
												<h4 class="modal-title" id="formModalLabel">Send Custom Offer</h4>
													<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
											</div>
											<div class="modal-body">
												<form action="index.php" id="demo-form" class="mb-4" novalidate="novalidate" method="POST">
													<div class="form-group row align-items-center">
														<label class="col-sm-3 text-left text-sm-right mb-0">Offer Description</label>
															<div class="col-sm-9">
																<input type="text" name="username" class="form-control" placeholder="Buy For Rs. 500 & above, get 5% cashback" required/>
															</div>
													</div>
													<div class="form-group row align-items-center">
														<label class="col-sm-3 text-left text-sm-right mb-0">Cashback</label>
															<div class="col-sm-9">
																<input type="password" name="password" class="form-control" placeholder="5%" required/>
															</div>
															</div>
												
											</div>
											<div class="modal-footer">
												<button type="submit"  class="btn btn-light" name="submit" >Send</button>
											</div>
											</form>
									</div>		
							</div>
					</div>
	
	
					
					
	 
				
			</div>
	
			<!-- Vendor -->
			<script src="vendor/jquery/jquery.min.js"></script>
			<script src="vendor/jquery.appear/jquery.appear.min.js"></script>
			<script src="vendor/jquery.easing/jquery.easing.min.js"></script>
			<script src="vendor/jquery-cookie/jquery-cookie.min.js"></script>
			<script src="master/style-switcher/style.switcher.js" id="styleSwitcherScript" data-base-path="" data-skin-src=""></script>
			<script src="vendor/popper/umd/popper.min.js"></script>
			<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
			<script src="vendor/common/common.min.js"></script>
			<script src="vendor/jquery.validation/jquery.validation.min.js"></script>
			<script src="vendor/jquery.easy-pie-chart/jquery.easy-pie-chart.min.js"></script>
			<script src="vendor/jquery.gmap/jquery.gmap.min.js"></script>
			<script src="vendor/jquery.lazyload/jquery.lazyload.min.js"></script>
			<script src="vendor/isotope/jquery.isotope.min.js"></script>
			<script src="vendor/owl.carousel/owl.carousel.min.js"></script>
			<script src="vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
			<script src="vendor/vide/vide.min.js"></script>
			
			<!-- Theme Base, Components and Settings -->
			<script src="js/theme.js"></script>
			
			<!-- Current Page Vendor and Views -->
			<script src="vendor/rs-plugin/js/jquery.themepunch.tools.min.js"></script>		<script src="vendor/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>		<script src="vendor/circle-flip-slideshow/js/jquery.flipshow.min.js"></script>		<script src="js/views/view.home.js"></script>
			
			<!-- Theme Custom -->
			<script src="js/custom.js"></script>
			
			<!-- Theme Initialization Files -->
			<script src="js/theme.init.js"></script>
	
			<script>
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','../../../www.google-analytics.com/analytics.js','ga');
			
				ga('create', 'UA-42715764-5', 'auto');
				ga('send', 'pageview');
			</script>
			<script src="master/analytics/analytics.js"></script>
	
		</body>
	
	</html>

	<?php
	require_once('connection.php');
	if(isset($_POST['submit']))
	{
		$percentage=$_POST['percentage'];
	
	$update_query="UPDATE shop_details SET percent='$percentage' WHERE shop_id='$shop_id' ";
	if (mysqli_query($con, $update_query)) {
    echo "<script>alert('Percentage Updated')</script>";
    echo "<script>window.location='index.html'</script>";
	} else {
	    echo "Error: " . $insert_query . "<br>" . mysqli_error($con);
	}

	mysqli_close($con);
			
	}

?>	
