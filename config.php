<?php
DEFINE('DB_USER', 'id15247847_admin');
DEFINE('DB_PASSWORD', '3J{NV22Ce~4w!9l5');
DEFINE('DB_HOST', 'localhost');
DEFINE('DB_NAME', 'id15247847_gestus');
/* Attempt to connect to MySQL database */
$con = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
 
// Check connection
if ($con === false) {
    die("ERRO: Não é possível conectar. " . mysqli_connect_error());
}else{
    echo 'Teste';
}
?>