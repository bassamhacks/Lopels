<?php
 require_once('connection.php');
/*HOMESHOP
http://localhost/lopelskkk/homeshop.php?mobileno=9447100043*/
$tempm = array();
if (isset($_GET['mobileno'])) {
	$mobileNo=$_GET['mobileno'];

	$result = mysqli_query($connection, "SELECT * FROM `userdetails` WHERE mobileno=".$mobileNo) or die("3");
	while ($row=mysqli_fetch_array($result)) {
		$cId=$row["cid"];
	}
	if ($cId) {

		$res=mysqli_query($connection,"SELECT * FROM `shop`")or die("4");
		if(mysqli_num_rows($res)>0)
    	{
    		$temp = array();
    		while ($row=mysqli_fetch_array($res)) {
    			$sId=$row["sid"];
    			$query=mysqli_query($connection,"SELECT * FROM `lopels` WHERE cid='$cId' AND sid='$sId'")or die("5");
				if(mysqli_num_rows($query)>0)
    			{
				while ($r=mysqli_fetch_array($query)) {
						$temp = array("sid"=>$sId,"shopname" =>$row["shopname"] , "spent"=>$row["lspent"], "persentage"=>$row["lpersentage"],"locallopels"=>$r["locallopels"],"image"=>$row["image"]);
    					array_push($tempm, $temp);
					}
    			}
    		}
    	}


					
    $m = array('all' => $tempm );

	echo json_encode($m);
	}
	
}

?>