const globo = $('#globo');

let tamaño = 200;
let colores = ["red", "green", "blue"];
let colorIndex = 0;

globo.click(() => {
    tamaño += 10;

    colorIndex = (colorIndex + 1) % colores.length;

    globo.css({
        "width" : tamaño + "px",
        "height" : tamaño + "px",
        "background-color": colores[colorIndex]
    });



    if (tamaño > 420) {
        tamaño = 200;
        colorIndex = 0;
        globo.css({
            "width": tamaño + "px",
            "height": tamaño + "px",
            "backgroundColor": colores[colorIndex]
        });
        
    }
});

globo.mouseout(() => {
    tamaño -= 5;
    if (tamaño < 200) tamaño = 200;

   colorIndex = (colorIndex - 1 + colores.length) % colores.length;

    globo.css({
        "width": tamaño + "px",
        "height": tamaño + "px",
        "background-color": colores[colorIndex]
});
});