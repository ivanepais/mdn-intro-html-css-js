//let saludo = 'Hola Mundo!';
//alert(saludo);

/*const miTitulo = document.querySelector('h1'); //seleccionamos el elemento
miTitulo.textContent = 'Hola Mundo!'; //le damos valor, llamandolo y usando .tC*/

let helado = 'chocolate'; 
if (helado === 'chocolate') {
	alert('Siiii, mi sitio favorito!');
	
	}else{
		alert('NOOO, yo quería de chocolate');
	
}

		
/*function multiplica(num1, num2) {
  let resultado = num1 * num2;
  return resultado;
}*/

/*
let num1;
let num2;
function multiplicacion (num1,num2) {
	return num1*num2; 
	}*/

//multiplica(2, 2); 
//console.log(multiplica); no me toma el resultado, tengo que escribir 

//podría hacer que la func se muestre en el h1

//document.querySelector('html').onclick = function() {
//alert('¡Ouch! ¡Deja de pincharme!');
//}
	
//seleccionamos el html o cualquier elemento y le agregamos una funcion						
// Cuando pinche en cualquier lado de la pagina, me va a tirar el alert/mensaje. No especifique un elemento del html 
// o

/*let miHTML = document.querySelector('html');
miHTML.onclick = function(){}; es una forma más extensa/pesada/ineficiente de escribir el mismo codigo */

let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/logo-Mozilla-Firefox.png') {
      miImage.setAttribute('src','images/firefox2.png');
    } else {
      miImage.setAttribute('src', 'images/logo-Mozilla-Firefox.png');
    }
}

//tenemos que hacer click en la img para que funcione
//seleccionamos img y lo guardamos, tomamos la variable, le agrega propiedad click y le damos una funcion: que es 
//en una nueva variable guardamos la funcion anterior (osea, esta nueva variable va a tener todo lo anterior)
//y le agregamos una propiedad y un bucle: compara la var nueva que tiene toda la func con el link de la img

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() { //funcion sin parametro
	let miNombre = prompt('Por favor, ingresa tu nombre');
	localStorage.setItem('nombre', miNombre);
	miTitulo.textContent = 'Mozilla es genial, ' + miNombre; 
	}
	
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();

	}else{
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial, ' + nombreAlmacenado;	
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}
	
