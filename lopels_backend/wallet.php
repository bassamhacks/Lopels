<?php
 require_once('connection.php');
/*HOME WALLET
http://http://localhost/lopelskkk/wallet.php?mobileno=9447100043&t=t*/
$tempm = array();
if (isset($_GET['mobileno'])&& isset($_GET['t'])) {
	$mobileNo=$_GET['mobileno'];
	$t=$_GET['t'];

	
		$result = mysqli_query($connection, "SELECT * FROM `userdetails` WHERE mobileno=".$mobileNo) or die("3");
		while ($row=mysqli_fetch_array($result)) {
			$cId=$row["cid"];
		}
	if ($t=="l") {
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
						$temp = array("sid"=>$sId,"shopname" =>$row["shopname"] ,"locallopels"=>$r["locallopels"] );
    					array_push($tempm, $temp);
						}
    				}
    			}
    		}
		}
		$m = array('all' => $tempm );
		echo json_encode($m);
	}
	
    if ($t=="t") {
    		$query=mysqli_query($connection,"SELECT * FROM `lopels` WHERE cid=".$cId)or die("6");
		if(mysqli_num_rows($query)>0)
    	{
    	$outp=array();
		$globalBalance=0;
		$localBalance=0;
		while ($row=mysqli_fetch_array($query)) {
				$globalBalance = $globalBalance+$row["globallopels"];
				$localBalance = $localBalance+$row["locallopels"];
				}
			$outp = array("locallopels" => $localBalance,"globallopels"=>$globalBalance);
    		echo json_encode($outp);
    		}
    	}	
	
}

?>