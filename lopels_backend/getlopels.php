<?php
 require_once('connection.php');
/*SHOPKEEPER PAYS LOPELS 
http://localhost/lopelskkk/getlopels.php?cid=1&sid=3&amount=100*/
if (isset($_GET['cid'])&& isset($_GET['sid'])&&isset($_GET['amount'])) {
	$cId=$_GET['cid'];
	$sId=$_GET['sid'];
	$amount=$_GET['amount'];

	$result= mysqli_query($connection,"SELECT * FROM lopels WHERE cid='$cId' AND sid='$sId'") or die("2");
	$flag=0;
 	while ($row=mysqli_fetch_array($result)) { 
 		$localBalance=$row["locallopels"];
 		$globalBalance=$row["globallopels"];
 		$query=mysqli_query($connection,"SELECT * FROM shop WHERE sid='$sId'") or die("3");
 		while ($r=mysqli_fetch_array($query)) {
 			$percentage=$r["lpersentage"];
 			$wallet=$r["wallet"];
 			$flag=1;
 		}
 	}
 	if ($flag==1) {
 		# code...
 		$avg=0.0;
 		$avg=($amount*$percentage)/100;
 		$localBalance=$localBalance+(30*$avg)/100;
 		$globalBalance=$globalBalance+(68*$avg)/100;
 		$wallet=$wallet-($localBalance+$globalBalance);
 		$result=mysqli_query($connection,"UPDATE `shop` SET `wallet`='$wallet' WHERE sid='$sId'") or die("2");
 		if ($result) {
 			$query = mysqli_query($connection,"UPDATE `lopels` SET `globallopels`='$globalBalance',`locallopels`='$localBalance' WHERE cid='$cId' AND sid='$sId'") or die("2"); 
 			if ($query) {
 				$query = mysqli_query($connection,"INSERT INTO `trazlog`(`sid`, `cid`, `total`) VALUES ('$sId','$cId','$amount')") or die("2"); 
 				    $m = array('status' => "success" );

 				echo json_encode($m);
 			}
 			else{
 				$m = array('status' => "success" );
 				echo json_encode($m);}
 		}
 	}
 }



?>