<?php
	require_once('conn.php');
	
	$sql = 'SELECT * FROM tgreco';

	$rec = mysqli_query($db_remoto,$sql) or die($sql.'<br>'.mysqli_error($db_remoto));
	$num = mysqli_num_rows($rec);
	$i = 0;
	
	while($array=mysqli_fetch_array($rec,MYSQLI_ASSOC)) {
		$row = array(
					'id' => $array['id'],
                    'lettera' => $array['lettera'],
					);
		$out[$i] = $row;
		$i++;
	}

	$r = rand(0, $i - 1);

    $res = $out[$r]['lettera'];
	echo json_encode($res);
	
	
?>