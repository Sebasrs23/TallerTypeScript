"use strict";
import {series} from './data.js';

function mostrarSeriesEnTabla() {
    var tabla = document.getElementById("tabla-series");
    var sumaSeasons = document.getElementById("sumSeasons");
    tabla.classList.add("table", "table-striped"); //Se agrega clases de Bootstrap a la tabla
    var headerRow = tabla.createTHead().insertRow(); //Encabezados
    var headers = ["#", "Name", "Channel", "Seasons"];
    headers.forEach(function (headerText) {
        var th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    var tbody = document.createElement("tbody"); //Cuerpo
    tabla.appendChild(tbody);
    
    var totalSeasons = 0; //Para almacenar la suma de las temporadas
    series.forEach(function (serie) {
        var fila = tbody.insertRow();
        var idCell = fila.insertCell();
        var nameCell = fila.insertCell();
        var channelCell = fila.insertCell();
        var seasonsCell = fila.insertCell();
        idCell.textContent = serie.id.toString();
        var link = document.createElement("a"); //Elemento de enlace <a> dentro de nameCell
        link.href = "#";
        link.textContent = serie.name;
        nameCell.appendChild(link);
        channelCell.textContent = serie.channel;
        seasonsCell.textContent = serie.seasons.toString();
        totalSeasons += serie.seasons;
    });

    var rows = tabla.querySelectorAll("tbody tr:not(:first-child)"); //Cantidad de filas    
    var promSeasons = totalSeasons/(rows.length + 1);
    sumaSeasons.textContent = "Seasons average: " + promSeasons.toString();
}
window.onload = mostrarSeriesEnTabla; //Mostrar las series al cargar la página
