<?php
 require_once('connection.php');

 /*MY PROFILE VIEW
 http://localhost/lopelskkk/myprofile.php?mobileno=9447100043&type=v
 http://localhost/lopelskkk/myprofile.php?mobileno=9447100043&type=u*/

if (isset($_GET['mobileno'])) {
	# code...
	$mobileNo=$_GET['mobileno'];
	$rType=$_GET['type'];
	
	if ($rType=="v") {
		$result = mysqli_query($connection, "SELECT * FROM `userdetails` WHERE mobileno=".$mobileNo) or die("3");
		while ($row=mysqli_fetch_array($result)) {
		$e = array("username" =>$row["username"] ,"mobileno"=>$row["mobileno"] , "emailid"=>$row["emailid"] );
		echo json_encode($e);
		}
	}
	if ($rType=='u') {

		$json = file_get_contents('php://input');
		$obj=json_decode($json,TRUE);
		$name=$obj['username'];
		$emailId=$obj['emailid'];
		$dPic=$obj['dp'];
		if (is_null($dPic)) {
			$result = mysqli_query($connection, "SELECT * FROM `userdetails` WHERE mobileno=".$mobileNo) or die("3");
			while ($row=mysqli_fetch_array($result)) {$dPic=$row["dp"];}
			}
		$result = mysqli_query($connection, "UPDATE `userdetails` SET `username`='$name',`emailid`='$emailId', `dp`='$dPic' WHERE mobileno=".$mobileNo) or die("3");
		if ($result) {
			echo json_encode("update successful");
		}
		else
			echo json_encode("error");
	}
}
?>