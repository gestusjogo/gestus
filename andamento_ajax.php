<?php
$mysqli = new mysqli("localhost","id15247847_admin","3J{NV22Ce~4w!9l5","id15247847_gestus");

$data = new DateTime();
$agora = ($data->sub(new DateInterval('PT3H')))->format('d/m/Y H:i:s');

if (($_GET['acao']) == "inicio") {
    $id_usuario = trim($_POST['id_usuario']);

    $query = "INSERT INTO Fases_concluidas(`idUsuario`) VALUES ('$id_usuario')";
    $mysqli -> query($query);

}else if (($_GET['acao']) == "atualizacao") {
    $id_usuario = trim($_POST['id_usuario']);
    $fase = trim($_POST['fase']);
    $query = "UPDATE  Fases_concluidas SET ".$fase." = '1' WHERE idUsuario =".$id_usuario;
    $mysqli -> query($query);
}
?>