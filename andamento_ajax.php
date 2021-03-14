<?php

$db_handle = pg_connect("host=ec2-54-164-22-242.compute-1.amazonaws.com dbname=dc5ssns9cdsk52 user=pzwruillafjvix password=f4b462b358e278660c11bfd243ead82ad574b2ad7fec4244a2ea52e8bfde059c");

$data = new DateTime();
$agora = ($data->sub(new DateInterval('PT3H')))->format('d/m/Y H:i:s');

if (($_GET['acao']) == "inicio") {
    $id_usuario = trim($_POST['id_usuario']);

    $query = pg_query("INSERT INTO Fases_concluidas(`idUsuario`) VALUES ('$id_usuario')");
    $fch = pg_fetch_row($query);
}else if (($_GET['acao']) == "atualizacao") {
    $id_usuario = trim($_POST['id_usuario']);
    $fase = trim($_POST['fase']);
    $query = "UPDATE  Fases_concluidas SET ".$fase." = '1' WHERE idUsuario =".$id_usuario;
    $result = pg_exec($db_handle, $query);
}
?>