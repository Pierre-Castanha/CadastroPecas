     ///////////////////////////////////////////////////////
     // Inicio da Programação através do JavaScript       //
     // Sistema de Cadastro de Peças                      //
     // Aula On line - 05.10.2021 - Senai                 //
     // Instrutores: Thiago Nascimento && Ordilei Sabella //
     ///////////////////////////////////////////////////////


//////////////////// R E Q U I S I T O S ///////////////////////////
//                                                                //
// 1. Peça pode ser cdastrada caso o peso seja maior que 100g;    //
//                                                                //
// 2. Lista de peças tem capacidade máxima de 10 peças;           //
//                                                                //
// 3. A peça deve ter um nome maior que 3 caracteres, senão erro. //
//                                                                //
////////////////////////////////////////////////////////////////////


let peso = 100; // cria a variável "peso" e define o valor


if (peso > 100) {     
    console.log("A peça possui um peso adequado, pode ser cadastrada!")
} else {
    console.log("Peça não pode ser cadastrada")    
}

let ListaPecas = ["Disco de Freio", "Amortecedor","Virabequim","Vela", "Bateria", "Radiador", "Correia","Carter","Ignição", "Embreagem"]

if (ListaPecas.length < 11) {
    console.log ("A Lista possui espaço para mais peças")
} else {
    console.log("Não há espaço disponivel na lista")
}

let nomePecas = "Disco de Freio"

if ( nomePecas.length > 3) {
    console.log("Nome de peça válida, pode seguir com o cadastro");
} else {
    console.log("Nome de peça inválida, o nome deve ter mais de 3 caracteres")
}

