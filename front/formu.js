var nombre = [];
var poblacion = [];
let url2 = '';
fetch(url2)



.then(respuestas=>respuestas.json())

.then(function transformar(respuestas)
{

    var occurences = respuestas.reduce(function (r, row) {
        r[row.pais_nom] = ++r[row.pais_nom] || 1;
        return r;
    }, {});

    var result = Object.keys(occurences).map(function (key) {
        return { key: key, value: occurences[key] };
    });
    result.forEach(function agregar(result) {
        poblacion.push(result.key);
        nombre.push(result.value)
    });


    var graf1=
    {

        y: nombre,
        x: poblacion,
        type: 'scatter',
        marker: {
        color: 'rgb(255,0,0)',
            line: {
            color: 'rgb(255,0,0)',
            width: 0.1
            }
        }
    };
    var datosGraficas = [graf1];

    var layout =
    {
        title: 'Poblacion Paises',
        xaxis:
        {
            title: 'Pais'
        },
        yaxis:
        {
            title: 'Poblacion'
        },
        font: {
    family: 'Courier New, monospace',
    size: 18,
    color: '#7f7f7f'
  }
    };
    Plotly.newPlot('Pais', datosGraficas, layout);
});
