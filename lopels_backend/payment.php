<?php
 require_once('connection.php');
/*REDEEM
http://localhost/lopelskkk/payment.php?mobileno=9447100043&sid=1*/
$temp = array();
$tempm = array();
if (isset($_GET['mobileno'])&& isset($_GET['sid'])) {
	$mobileNo=$_GET['mobileno'];
	$sId=$_GET['sid'];

	
		$result = mysqli_query($connection, "SELECT * FROM `userdetails` WHERE mobileno='$mobileNo'") or die("3");
		while ($row=mysqli_fetch_array($result)) {
			$cId=$row["cid"];
		}

			$res=mysqli_query($connection,"SELECT * FROM `shop` WHERE sid='$sId'")or die("4");
			if(mysqli_num_rows($res)>0)
    		{
        		while ($row=mysqli_fetch_array($res)) {
        			$temp = array("sid"=>$sId,"shopname" =>$row["shopname"] );
    			$query=mysqli_query($connection,"SELECT * FROM `lopels` WHERE cid='$cId' AND sid='$sId'")or die("5");
				if(mysqli_num_rows($query)>0)
    			{
				while ($r=mysqli_fetch_array($query)) {
						$tempm = array("locallopels"=>$r["locallopels"] );
					}
    			}
    		}
		}
	
    	$query=mysqli_query($connection,"SELECT * FROM `lopels` WHERE cid=".$cId)or die("6");
		if(mysqli_num_rows($query)>0)
    	{
    	$outp=array();
		$globalBalance=0;
		while ($row=mysqli_fetch_array($query)) {
				$globalBalance = $globalBalance+$row["globallopels"];
			}
			$outp = array("globallopels"=>$globalBalance);
    	}
    	$tempm=array_merge($tempm,$temp);
    	$outp=array_merge($tempm,$outp);
    	echo json_encode($outp);	
}

?>