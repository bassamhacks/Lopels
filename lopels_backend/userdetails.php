<?php
 require_once('connection.php');

 /*LOGIN PAGE
 http://localhost/lopelskkk/userdetails.php?mobileno=9447100043&pin=1234*/

if (isset($_GET['mobileno'])&&isset($_GET['pin'])) {
	# code...
	$name=$_GET['mobileno'];
	$pin=$_GET['pin'];
	$result= mysqli_query($connection,"SELECT * FROM userdetails") or die("2");

	$flag=0;
 	while ($row=mysqli_fetch_array($result)) { 
 		# code...
 		if ($_GET['mobileno']==$row["mobileno"] && $_GET['pin']==$row["pin"]) {
				# code...
				$flag=1;
 				break;
 		}
 	}

 	if ($flag==1) {
 		# code...
 		$e = array("access"=>"G","id"=>$row["cid"],"mobileno"=>$row["mobileno"]);
 		echo json_encode($e);
 	}
 	else{
 		$e = array("access" =>"D" , "id"=>"nill", "mobileno"=>"nill" );
 		echo json_encode($e);
 	}

}

?>