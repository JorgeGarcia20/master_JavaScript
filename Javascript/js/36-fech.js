'use strict'

//fetch(ajax) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector('#usuarios');//plurar
var div_profesor = document.querySelector('#profesor');
var div_usuario = document.querySelector('#usuario');//singular 

var usuarios = [];
//consumo de rest con fech 
getUsuarios()
  .then(data => data.json())//convertimos los datos a JSON
  .then(users => {
    usuarios = users.data;
    //console.log(usuarios);//solicitamos los usuarios solamente 
    listarUsuarios(users.data);

    return getInfo();
  })
  .then(data => {
    console.log(data);
    div_profesor.innerHTML = data;
    return getUsuario();
  })
  .then(data => data.json())
  .then(user => {
    listarUsuario(user.data);
  })
  .catch(error => {
    alert('Error al solicitar la informacion ' + error);
  });//cualquier tipo de error sera capturado gracias a catch

function getUsuarios() {
  return fetch('https://reqres.in/api/users?page=2')
}

function getUsuario() {
  return fetch('https://reqres.in/api/users/2')
}

//Crecion de una promesa desde cero
function getInfo() {
  var profesor = {
    nombre: 'Jorge',
    apellidos: 'Garcia',
    url: 'https://Djor.com'
  };
  return new Promise((resolve, rejec) => {
    var profesor_string = JSON.stringify(profesor);
    setTimeout(function () {
      if (typeof profesor_string != 'string' || profesor_string == '') {
        return rejec('error');
      }
      return resolve(profesor_string);
    }, 3000);
  });
}

function listarUsuarios(usuarios) {
  //funcion de callback que itera el nombre de los usuarios y los muestra en el body
  usuarios.map((user, i) => {
    let usuarios = document.createElement('h3');
    usuarios.innerHTML = i + '-' + user.first_name + ' ' + user.last_name;
    div_usuarios.appendChild(usuarios);

    var cargando = document.querySelector('#loading').style.display = 'none';

  });
}

function listarUsuario(user) {
  let usuario = document.createElement('h3');
  let avatar = document.createElement('img');

  usuario.innerHTML = user.first_name + ' ' + user.last_name;
  avatar.src = user.avatar;
  avatar.width = '100px';

  div_usuario.appendChild(usuario);
  div_usuario.appendChild(avatar);

  var cargando = document.querySelector('#usuario #loading').style.display = 'none';
}
