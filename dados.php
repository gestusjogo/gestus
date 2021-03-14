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
echo "Hello World";

$db_handle = pg_connect("host=ec2-54-164-22-242.compute-1.amazonaws.com dbname=dc5ssns9cdsk52 user=pzwruillafjvix password=f4b462b358e278660c11bfd243ead82ad574b2ad7fec4244a2ea52e8bfde059c");


if ($db_handle) {
	$query = "SELECT * FROM Fases_concluidas INNER JOIN Usuario on Usuario.Id = Fases_concluidas.idUsuario";

	$result = pg_exec($db_handle, $query);

	if ($result) {

		for ($row = 0; $row < pg_numrows($result); $row++) {
			?>
            <tr>
		<td><?=pg_result($result, $row, 'Nome')?></td>
		<td><?=pg_result($result, $row, 'Idade')?></td>
		<td><?=pg_result($result, $row, 'Data')?></td>
		<td><input type="checkbox" <?=(pg_result($result, $row, 'Multiplayer') == 1) ? "checked" : ""?>/></td>
		<td><input type="checkbox" <?=(pg_result($result, $row, 'Inicio') == 1) ? "checked" : ""?>/></td>
		<td><input type="checkbox" <?=(pg_result($result, $row, 'Mercado') == 1) ? "checked" : ""?>/></td>
		<td><input type="checkbox" <?=(pg_result($result, $row, 'Fliperama') == 1) ? "checked" : ""?>/></td>
		<td><input type="checkbox" <?=(pg_result($result, $row, 'Sorveteria') == 1) ? "checked" : ""?>/></td>
		<td><input type="checkbox" <?=(pg_result($result, $row, 'Praca') == 1) ? "checked" : ""?>/></td>
		<td><input type="checkbox" <?=(pg_result($result, $row, 'Ambiental') == 1) ? "checked" : ""?>/></td>
		<td><input type="checkbox" <?=(pg_result($result, $row, 'Escola') == 1) ? "checked" : ""?>/></td>
	    </tr>
<?php
        }
?>
} else {

	echo 'Connection attempt failed.';

}
?>
</tbody>
Quantidade de acessos: <?=pg_num_rows($result)?>
</table>
</body>
<?php
	pg_close($db_handle);
?>
</html>
