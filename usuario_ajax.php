<?php
$mysqli = new mysqli("localhost","id15247847_admin","3J{NV22Ce~4w!9l5","id15247847_gestus");

$data = new DateTime();
$agora = ($data->sub(new DateInterval('PT3H')))->format('d/m/Y H:i:s');

if (($_GET['acao']) == "inserir_single") {
    $nome = trim($_POST['nome']);
    $idade = trim($_POST['idade']);

    $query = "INSERT INTO Usuario(`nome`,`data`,`idade`,`multiplayer`) VALUES ('$nome', '$agora', '$idade', '0')";
    $mysqli -> query($query);
    echo $mysqli -> insert_id;
}else if (($_GET['acao']) == "inserir_multi") {
    $nome = trim($_POST['nome']);
    $idade = trim($_POST['idade']);
    $nome2 = trim($_POST['nome2']);
    $idade2 = trim($_POST['idade2']);

    $query = "INSERT INTO Usuario(`nome`,`data`,`idade`,`multiplayer`) VALUES ('$nome', '$agora', '$idade', '1')";
    $mysqli -> query($query);
    echo $mysqli -> insert_id;

    $query = "INSERT INTO Usuario(`nome`,`data`,`idade`,`multiplayer`) VALUES ('$nome2', '$agora', '$idade2', '1')";
    $mysqli -> query($query);
    echo ',';
    echo $mysqli -> insert_id;
}
?>