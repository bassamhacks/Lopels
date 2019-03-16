<?php
 require_once('connection.php');
/*SHOPKEEPER PAYS LOPELS 
http://localhost/lopelskkk/shoplogin.php?username=m&password=123*/
if (isset($_GET['username'])&&isset($_GET['password'])) {
	# code...
	$name=$_GET['username'];
	$pin=$_GET['password'];
	$result= mysqli_query($connection,"SELECT * FROM shopdetails") or die("2");

	$flag=0;
 	while ($row=mysqli_fetch_array($result)) { 
 		# code...
 		if ($_GET['username']==$row["username"] && $_GET['password']==$row["password"]) {
				# code...
				$flag=1;
				$sId=$row["sid"];
 				break;
 		}
 	}

 	if ($flag==1) {
 		# code...
 		$query= mysqli_query($connection,"SELECT * FROM shop WHERE sid='$sId'") or die("3");
 			while ($r=mysqli_fetch_array($query)) {
 				$e = array("access"=>"G","sid"=>$row["sid"],"wallet"=>$r["wallet"],"shopname"=>$r["shopname"]);
 			}
 		echo json_encode($e);
 	}
 	else{
 		$e = array("access" =>"D" , "sid"=>"nill","wallet"=>"nill","shopname"=>"nill");
 		echo json_encode($e);
 	}

}
?>