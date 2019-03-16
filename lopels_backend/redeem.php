<?php
 require_once('connection.php');
/*REDEEM
http://localhost/lopelskkk/redeem.php?mobileno=9447100043&sid=1*/
$localBalance=0;
$globalBalance=0;
if (isset($_GET['sid'])) {
	# code...

	$sId=$_GET['sid'];

	$query = mysqli_query($connection, "SELECT * FROM `lopels` WHERE sid='$sId'") or die("4");
	while ($row=mysqli_fetch_array($query)) {
		$localBalance=$row["locallopels"];
		$cId=$row["cid"];
	}
	$query = mysqli_query($connection, "SELECT * FROM `lopels` WHERE cid='$cId'") or die("5");
	while ($row=mysqli_fetch_array($query)) {
		$globalBalance=$globalBalance+$row["globallopels"];
	}
	$total=$localBalance+$globalBalance;
	$query = mysqli_query($connection, "SELECT * FROM `shop` WHERE sid='$sId'") or die("6");
	while ($row=mysqli_fetch_array($query)) {
			$temp = array("shopname" => $row["shopname"], "tlopels"=>$total);	
		}
	
	echo json_encode($temp);
}
?>