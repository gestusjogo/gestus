<?php
$db_handle = pg_connect("host=ec2-54-164-22-242.compute-1.amazonaws.com dbname=dc5ssns9cdsk52 user=pzwruillafjvix password=f4b462b358e278660c11bfd243ead82ad574b2ad7fec4244a2ea52e8bfde059c");


if ($db_handle) {
echo 'Connection attempt succeeded.';
} else {
echo 'Connection attempt failed.';
}
?>