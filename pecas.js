     ///////////////////////////////////////////////////////
     //    Inicio da Programação através do JavaScript    //
     //          Sistema de Cadastro de Peças             //
     //        Aula On line - 05.10.2021 -                //
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

let peso = 100
//let peso = 80

let ListaPecas = ["Disco de Freio", "Amortecedor", "Farol", "Chicote de Embreagem", "Pneus","Fusível"];
//let ListaPecas = ["Disco de Freio", "Amortecedor", "Farol", "Chicote de Embreagem", "Pneus","Fusível", "Disco de Freio", "Amortecedor", "Farol", "Chicote de Embreagem", "Pneus","Fusível"];

let NomePecas = "Disco de Freio";
//let NomePecas = "Di";

if (peso < 100) {
    console.log("Peça com peso inválido!"); 
} else if (ListaPecas.length > 10) {
    console.log("Gravação não permitida, banco de dados sem espaço!"); 
} else if (NomePecas.length <= 3) {
    console.log("Nome inadequado, nome da peça deve ser superior a 03 Letras!"); 
} else {
    console.log("Peça com peso válido, Gravação Permitida e Nome da Peça válida!")
}