HTML
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invitación Romántica</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <div class="contenedor">
        <h1>Te invito a celebrar nuestros 23 meses juntos</h1>
        <div class="imagen">
            <input type="file" id="imagen" multiple>
            <div id="galeria"></div>
        </div>
        <div class="pregunta">
            <p>¿Aceptas esta invitación?</p>
            <button id="si">Sí</button>
            <button id="no">No</button>
        </div>
        <div class="detalles" id="detalles" style="display: none;">
            <p>Para el día sábado 18 de octubre, debes tener lo siguiente:</p>
            <ul>
                <li>Ponte el mejor vestido que tengas</li>
                <li>1 botella de alcohol</li>
                <li>Papeles y colores</li>
            </ul>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
