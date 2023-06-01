/**
 * Función que permite mostrar u ocultar div según la elección de los radio button
 * @method mostrar_ocultar
 * @param {string} valor - El valor de los radio button (Triángulo, Cuadrado, Círculo o Rectángulo)
 * @return
 */
function mostrar_ocultar(valor){
    document.getElementById("perimetro_Triangulo").style.display = "none";
    document.getElementById("perimetro_Cuadrado").style.display = "none";
    document.getElementById("perimetro_Rectangulo").style.display = "none";
    document.getElementById("perimetro_Circulo").style.display = "none";
    if (valor === "Triangulo") {
        document.getElementById("perimetro_Triangulo").style.display = 'block';
    } else if (valor === "Cuadrado") {
        document.getElementById("perimetro_Cuadrado").style.display = 'block';
    }  else if (valor === "Circulo") {
        document.getElementById("perimetro_Circulo").style.display = 'block';
    } else if (valor === "Rectangulo") {
        document.getElementById("perimetro_Rectangulo").style.display = 'block';
    }
}

/**
 * Función que permite calcular el perímetro del Triángulo
 * @method CalculodePerimetro
 * @return {number} Resultado del Perimetro
 */

function PerimetroTrian() {
    let Lado1,Lado2,Lado3;
    Lado1 = document.getElementById("Lado1").value;
    Lado2 = document.getElementById("Lado2").value;
    Lado3 = document.getElementById("Lado3").value;

    Lado1 = Number(Lado1.replace("," , "."));
    Lado2 = Number(Lado2.replace("," , "."));
    Lado3 = Number(Lado3.replace("," , "."));

    if(Lado1< 0 || Lado2 < 0 || Lado3 < 0 ){
        alert("Se ingresó un valor incorrecto");
    }
    if (isNaN(Lado1)|| isNaN(Lado2)|| isNaN(Lado3)){
        alert("Se ingresó un valor incorrecto.Deben ser numeros");
    }
    if(Lado1 > 0 && Lado2 > 0 && Lado3 > 0 && !isNaN(Lado1) && !isNaN(Lado2) && !isNaN(Lado3)){
        document.getElementById("Resultado").value = Lado1 + Lado2 + Lado3;
        localStorage.setItem("Lado1",Lado1);
        localStorage.setItem("Lado2",Lado2);
        localStorage.setItem("Lado3",Lado3);
    }
    DibujarTriangulo();
}

/**
 * Función que permite calcular el perímetro del Rectángulo
 * @method CalculodePerimetro
 * @return {number} Resultado del Perimetro
 */

function PerimetroRec() {
    let Base,Altura;
    Base = (document.getElementById("Base").value);
    Altura = (document.getElementById("Altura").value);

    Base = Number(Base.replace("," , "."));
    Altura = Number(Altura.replace("," , "."));


    if(Base < 0 || Altura  < 0 ){
        alert("Se ingresó un valor incorrecto");
    }
    if (isNaN(Base)|| isNaN(Altura)){
        alert("Se ingresó un valor incorrecto.Deben ser numeros");
    }
    if(Base > 0 && Altura > 0  && !isNaN(Base) && !isNaN(Altura)){
        document.getElementById("Resultado").value = 2*Base + 2*Altura;
        localStorage.setItem("Base",Base);
        localStorage.setItem("Altura",Altura);

    }
    DibujarRectangulo();
}

/**
 * Función que permite calcular el perímetro del Cuadrado
 * @method CalculodePerimetro
 * @return {number} Resultado del Perimetro
 */

function PerimetroCuad() {
    let Lado;
    Lado = document.getElementById("Lado").value;

    Lado = Number(Lado.replace("," , "."));


    if(Lado < 0 ){
        alert("Se ingresó un valor incorrecto");
    }
    if (isNaN(Lado)){
        alert("Se ingresó un valor incorrecto.Deben ser numeros");
    }
    if(Lado > 0  && !isNaN(Lado)){
        document.getElementById("Resultado").value = 4*Lado;
        localStorage.setItem("Lado",Lado);


    }

    DibujarCuadrado();
}

/**
 * Función que permite calcular el perímetro del Círculo
 * @method CalculodePerimetro
 * @return {number} Resultado del Perimetro
 */
function PerimetroCirc() {
    let Radio;
    Radio = document.getElementById("Radio").value;
    Radio = Number(Radio.replace("," , "."));


    if(Radio < 0 ){
        alert("Se ingresó un valor incorrecto");
    }
    if (isNaN(Radio)){
        alert("Se ingresó un valor incorrecto.Deben ser numeros");
    }
    if(Radio > 0  && !isNaN(Radio)){
        document.getElementById("Resultado").value = 2* Math.PI*Radio ;
        localStorage.setItem("Radio",Radio);


    }

    DibujarCirculo();
}


/**
 * Función que permite dibujar un triángulo según la longitud de sus tres lados
 * @method DibujarTriangulo
 * @param Lado1 - Lado 1 ingresado por el usuario
 * @param Lado2 - Lado 2 por el usuario
 * @param Lado3- Lado 3 por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */

Posicionx=0;
function DibujarTriangulo(){
    var Lado1, Lado2, Lado3;
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
    var anchoMax;
    Lado1 = localStorage.getItem("Lado1");
    Lado1 = localStorage.getItem("Lado2");
    Lado3 = localStorage.getItem("Lado3");
    anchoMax=canvas.width;
    ctx.beginPath();
    ctx.moveTo(100+Posicionx, 100);
    ctx.lineTo(Base/2+Posicionx,Altura);
    ctx.lineTo(Base+Posicionx,100);
    ctx.closePath();
    ctx.strokeStyle = "#bc57d5";
    ctx.stroke();
    Posicionx=Posicionx+10;
    if(Posicionx>canvas.width)
    {
        Posicionx=0;
    }
}
/**
 * Función que permite dibujar un rectángulo según la longitud de su Base y Altura
 * @method DibujarRectangulo
 * @param Base - La base ingresada por el usuario
 * @param Altura - La altura ingresada por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */

function DibujarRectangulo(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d")
    var base, altura;
    var margen=50;
    base=localStorage.getItem("Base")*0.1;
    altura=localStorage.getItem("Altura")*0.1;
    canvas.width = canvas.width;
    ctx.fillStyle = "#bc57d5";
    ctx.fillRect(Posicionx, 0 + margen, 100*base, 100*altura);
    Posicionx=Posicionx+10;
    if(Posicionx>canvas.width)
    {
        Posicionx=0;
    }
}

/**
 * Función que permite dibujar un cuadrado según la longitud de su Lado
 * @method DibujarCuadrado
 * @param Lado - El lado ingresado por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */
function DibujarCuadrado(Lado){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var margen = 50;
    var lado;
    lado=localStorage.getItem("Lado")*0.1;
    canvas.width = canvas.width;
    ctx.fillStyle = "#bc57d5";
    ctx.fillRect(Posicionx, 0 + margen, 100*lado, 100*lado);
    Posicionx=Posicionx+10;
    if(Posicionx>canvas.width)
    {
        Posicionx=0;
    }

}

/**
 * Función que permite dibujar un círculo según la longitud de su Radio
 * @method DibujarCirculo
 * @param Radio - El radio ingresado por el usuario
 * @return {canvas} dibujo de la figura geométrica
 */


function DibujarCirculo(radio) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    // Establecer el tamaño del canvas
    canvas.width = radio * 2;
    canvas.height = radio * 2;

    // Dibujar el círculo
    ctx.beginPath();
    ctx.arc(radio, radio, radio, 0, 2 * Math.PI);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}