import {series} from "./data";

function mostrarSeriesEnTabla() {                           //Función para mostrar las series en la tabla HTML
    const tabla = document.getElementById("tabla-series") as HTMLTableElement;
    const sumaSeasons = document.getElementById("sumSeasons") as HTMLHeadingElement;

    tabla.classList.add("table", "table-striped");          //Se agrega clases de Bootstrap a la tabla

    const headerRow = tabla.createTHead().insertRow();      //Encabezados
    const headers = ["#", "Name", "Channel", "Seasons"];
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    const tbody = document.createElement("tbody");  //Cuerpo
    tabla.appendChild(tbody);

    const rows = tabla.querySelectorAll("tbody tr:not(:first-child)"); //Cantidad de filas
    let totalSeasons = 0;                                              //Para almacenar la suma de las temporadas
    
    series.forEach(serie => {                       //Se llena la tabla con los datos de las series
        const fila = tbody.insertRow();
        const idCell = fila.insertCell();
        const nameCell = fila.insertCell();
        const channelCell = fila.insertCell();
        const seasonsCell = fila.insertCell();
        idCell.textContent = serie.id.toString();
                
        var link = document.createElement("a");     //Elemento de enlace <a> dentro de nameCell
        link.href = "#";
        link.textContent = serie.name;
        nameCell.appendChild(link);
        
        channelCell.textContent = serie.channel;
        seasonsCell.textContent = serie.seasons.toString();

        totalSeasons += serie.seasons;
    });

    const promSeasons = totalSeasons/(rows.length + 1);

    sumaSeasons.textContent = "Seasons average: " + promSeasons.toString();
}

window.onload = mostrarSeriesEnTabla;   //Mostrar las series al cargar la página