console.log("Hola mundo...");

// Continuar codigo javascript desde aqui ...
var insertar = document.getElementById("nueva");
var dialogoModal = document.getElementById("editForm");
insertar.addEventListener('click',function(){
    dialogoModal.showModal();
});
var discartChanges = document.getElementById("cancelInsert");
discartChanges.addEventListener('click', function(){
    dialogoModal.close();
})

var botonesBorrar = document.querySelectorAll('.borrarCoche');
var dialogoModalConfirmacion = document.getElementById("borrarDialog");
var botonConfirmar = document.getElementById('confirmarBorrar');
var botonCancelarBorrar = document.getElementById('noBorrar');
function openDialog(){
    dialogoModalConfirmacion.showModal();
}
botonesBorrar.forEach(function(boton){
    boton.addEventListener('click',openDialog);
});

botonConfirmar.addEventListener('click', function(){
    dialogoModalConfirmacion.close();
})
botonCancelarBorrar.addEventListener('click', function(){
    dialogoModalConfirmacion.close();
})