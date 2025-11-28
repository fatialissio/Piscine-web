const globo = document.getElementById('globo');

let tamaño = 200;
let colores = ["red", "green", "blue"];
let colorIndex = 0;

globo.addEventListener('click', () => {
    tamaño += 10;

    colorIndex = (colorIndex + 1) % 3;
    globo.style.backgroundColor = colores[colorIndex];

    globo.style.width = tamaño + "px";
    globo.style.height = tamaño + "px";

    if (tamaño > 420) {
        tamaño = 200;
        colorIndex = 0;
        globo.style.width = tamaño + "px";
        globo.style.height = tamaño + "px";
        globo.style.backgroundColor = colores[colorIndex];
    }
});

globo.addEventListener('mouseout', () => {
    tamaño -= 5;

    if (tamaño < 200) tamaño = 200;

    globo.style.width = tamaño + "px";
    globo.style.height = tamaño + "px";

    colorIndex = (colorIndex -1 + 3) %3;
    globo.style.backgroundColor = colores[colorIndex];
});