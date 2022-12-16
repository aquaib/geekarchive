document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){

  if(document.getElementById("nome").value != "" &&
      document.getElementById("email").value != "" &&
      document.getElementById("telefone").value != "" ){

    alert("Uhul! Você receberá novidades geek por email.")
   }else{
     alert("C'mon, geek! Preencha os campos corretamente")
   }
 }