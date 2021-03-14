<?php 
echo "Hello World";

$db_handle = pg_connect("host=ec2-54-164-22-242.compute-1.amazonaws.com dbname=dc5ssns9cdsk52 user=pzwruillafjvix password=f4b462b358e278660c11bfd243ead82ad574b2ad7fec4244a2ea52e8bfde059c");


if ($db_handle) {

echo 'Connection attempt succeeded.';

} else {

   

echo 'Connection attempt failed.';

}

echo "<h3>Checking the query status</h3>";

$query = "SELECT nome from teste";

$result = pg_exec($db_handle, $query);

if ($result) {

echo "The query executed successfully.<br>";

echo "<h3>Print First and last name:</h3>";

for ($row = 0; $row < pg_numrows($result); $row++) {

$firstname = pg_result($result, $row, 'nome');

echo $firstname;

}

}
pg_close($db_handle);
?>
