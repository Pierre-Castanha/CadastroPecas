//let peso = 100

let peso = 80

//let ListaPecas = ["Disco de Freio", "Amortecedor", "Farol", "Chicote de Embreagem", "Pneus","Fusível"];

let ListaPecas = ["Disco de Freio", "Amortecedor", "Farol", "Chicote de Embreagem", "Pneus","Fusível", "Disco de Freio", "Amortecedor", "Farol", "Chicote de Embreagem", "Pneus","Fusível"];

//let NomePecas = "Disco de Freio";

let NomePecas = "Di";


if (peso >= 100 && ListaPecas.length < 10 && NomePecas.length > 3) {
    console.log("Peça com peso válido, Gravação Permitida e Nome da Peça válida!"); 
} else if (peso < 100) {
    console.log("Peça com peso inválido!"); 
} else if (ListaPecas.length > 10) {
    console.log("Gravação não permitida, banco de dados sem espaço!"); 
} else if (NomePecas.length <= 3) {
    console.log("Nome inadequado, nome da peça deve ser superior a 03 Letras!"); 
} else {
    console.log("Cadastro inválido! Mais de um requisito foi informado errado")
}