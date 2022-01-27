//1 - crie uma função que exiba uma mensagem no console
function hi(){
    console.log("oi, tudo bem?")
}
hi()
//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function substantivoProprio (nome){
    console.log ("Meu nome é " +nome )
}

substantivoProprio("Stephanie")

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function dados (nome, age, estiloMusical){
    console.log (`Meu nome é ${nome} tenho ${age} anos e gosto de escutar ${estiloMusical}`)
}

dados(`Stephanie`, 21, `pagode`)
dados (`Carolina`, 19, `rock` )
dados(`Célia`, 60, `louvores`)
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function hobbie (filme, musica){
    console.log (`Meu filme favorito é ${filme} e minha musica favorita é ${musica}`)
}

hobbie(`Titanic`, `Infiel`)
hobbie (`Moana`,`Apaixonado Coração`)
hobbie (`Encanto`, `Amor sem Limites`)


//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(numero){
    return numero*3
}
console.log(triplo(3))