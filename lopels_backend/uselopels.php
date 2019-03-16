<?php
 require_once('connection.php');
/*REDEEMING
http://localhost/lopelskkk/uselopels.php?lopels=43&sid=3*/
$localBalance=0;
$globalBalance=0;
$flag=0;
if (isset($_GET['sid'])&&$_GET['lopels']) {
	# code...
	$lopels=$_GET['lopels'];
	$sId=$_GET['sid'];
	$l=$lopels;

	$query = mysqli_query($connection, "SELECT * FROM `lopels` WHERE sid='$sId'") or die("4");
	while ($row=mysqli_fetch_array($query)) {
		$localBalance=$row["locallopels"];
		$cId=$row["cid"];
	}
	$query = mysqli_query($connection, "SELECT * FROM `lopels` WHERE cid='$cId'") or die("5");
	while ($row=mysqli_fetch_array($query)) {
		$globalBalance=$globalBalance+$row["globallopels"];
	}

	if ($localBalance<=$lopels) {
		# code...
		$lopels=$lopels-$localBalance;
		$localBalance=0;
		if($lopels>0){
			if($globalBalance<=$lopels){echo json_encode("error");}
			else{$globalBalance=$globalBalance-$lopels;$flag=1;}
		}
	}
	else{
			$localBalance=$localBalance-$lopels;
			$flag=1;
		}	
	$result = mysqli_query($connection, "UPDATE `lopels` SET `locallopels`='$localBalance',`globallopels`='$globalBalance' WHERE sid='$sId'") or die("5");
	if ($result) {
		$flag=2;
	}

	$quer = mysqli_query($connection, "SELECT * FROM `shop` WHERE sid='$sId'") or die("4");
	while ($r=mysqli_fetch_array($quer)) {
		$wallet=$r["wallet"];
		$wallet=$wallet+$l;
		$query = mysqli_query($connection, "UPDATE `shop` SET `wallet`='$wallet' WHERE sid='$sId'") or die("4");
	}
	
	$resq=mysqli_query($connection,"INSERT INTO `trazlog`(`sid`, `cid`, `total`) VALUES ('$sId','$cId','$l')")or die("10");
	if ($resq) {
		if ($flag==2) {
			echo json_encode("successful");
		}
		else
			echo json_encode("error");
		}
}
?>