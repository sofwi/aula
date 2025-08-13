// //        
//         function mostrarOla(){
//             var nome =document.getElementById("nome").value;
//             document.getElementById("resposta").textContent = "Olá, " + nome;
//         }
//             var mostrar =document.getElementById("mostrar");
//             mostrar.addEventListener("click", mostrarOla);
// //


// function calcularIdade(){
//     var valor1 =document.getElementById("valor1").value;
//     var valor2 =document.getElementById("valor2").value;
//     var resultado =document.getElementById("resultado")

//     if(valor1 > valor2){

//     }
// }

function calcularIdade(){
    const valor1 =+document.getElementById("valor1").value;
    const valor2 =+document.getElementById("valor2").value;
    
    const maior = (valor1 > valor2) * valor1 + (valor2 >=valor1) * valor1
document.getElementById("resultado").textContent = `${maior}`;
}

    var mostrar =document.getElementById("mostrar");
    mostrar.addEventListener("click", calcularIdade);
