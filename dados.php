<html>
<head></head>
<body>
<table border="2">
<thead>
	<th>Nome</th>
	<th>Idade</th>
	<th>Data</th>
	<th>Multijogador</th>
	<th>Completou Inicio</th>
	<th>Completou Supermercado</th>
	<th>Completou Fliperama</th>
	<th>Completou Sorveteria</th>
	<th>Completou Praça</th>
	<th>Completou Ambiental</th>
	<th>Completou Escola</th>
</thead>
<?php
$mysqli = new mysqli("localhost","id15247847_admin","3J{NV22Ce~4w!9l5","id15247847_gestus");

$sql = "SELECT * FROM Fases_concluidas INNER JOIN Usuario on Usuario.Id = Fases_concluidas.idUsuario";

    if ($result = $mysqli->query($sql)) {
        while($obj = $result->fetch_object()){
?>
            <tr>
		<td><?=$obj->Nome?></td>
		<td><?=$obj->Idade?></td>
		<td><?=$obj->Data?></td>
		<td><input type="checkbox" <?=($obj->Multiplayer == 1) ? "checked" : ""?>/></td>
		<td><input type="checkbox" <?=($obj->Inicio == 1) ? "checked" : ""?>/></td>
		<td><input type="checkbox" <?=($obj->Supermercado == 1) ? "checked" : ""?>/></td>
		<td><input type="checkbox" <?=($obj->Fliperama == 1) ? "checked" : ""?>/></td>
		<td><input type="checkbox" <?=($obj->Sorveteria == 1) ? "checked" : ""?>/></td>
		<td><input type="checkbox" <?=($obj->Praca == 1) ? "checked" : ""?>/></td>
		<td><input type="checkbox" <?=($obj->Ambiental == 1) ? "checked" : ""?>/></td>
		<td><input type="checkbox" <?=($obj->Escola == 1) ? "checked" : ""?>/></td>
	    </tr>
<?php
        }
    }
?>
</tbody>
Quantidade de acessos: <?=$result->num_rows?>
</table>
</body>
<?php
    $result->close();
?>
</html>
