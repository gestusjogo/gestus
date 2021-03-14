<?php
$db_handle = pg_connect("host=ec2-54-164-22-242.compute-1.amazonaws.com dbname=dc5ssns9cdsk52 user=pzwruillafjvix password=f4b462b358e278660c11bfd243ead82ad574b2ad7fec4244a2ea52e8bfde059c");

$data = new DateTime();
$agora = ($data->sub(new DateInterval('PT3H')))->format('d/m/Y H:i:s');

if (($_GET['acao']) == "inserir_single") {
    $nome = trim($_POST['nome']);
    $idade = trim($_POST['idade']);

    $query = pg_query("INSERT INTO Usuario(`nome`,`data`,`idade`,`multiplayer`) VALUES ('$nome', '$agora', '$idade', '0') RETURNING Currval('Usuario_id_seq')");
    $fch = pg_exec($db_handle,$query);
    echo $fch;
}else if (($_GET['acao']) == "inserir_multi") {
    $nome = trim($_POST['nome']);
    $idade = trim($_POST['idade']);
    $nome2 = trim($_POST['nome2']);
    $idade2 = trim($_POST['idade2']);

    $query = pg_query("INSERT INTO Usuario(`nome`,`data`,`idade`,`multiplayer`) VALUES ('$nome', '$agora', '$idade', '1') RETURNING Currval('Usuario_id_seq')";
    $fch = pg_exec($db_handle,$query);
    echo $fch;

    $query = pg_query("INSERT INTO Usuario(`nome`,`data`,`idade`,`multiplayer`) VALUES ('$nome2', '$agora', '$idade2', '1') RETURNING Currval('Usuario_id_seq')";
    echo ',';
    $fch = pg_exec($db_handle,$query);
    echo $fch;
}
?>