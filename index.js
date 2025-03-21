<<<<<<< HEAD
// RESOLUÇÃO DE BUGS:

let iniciar = prompt("Deseja iniciar o programa? s/n");

if (iniciar != "s") {
    alert("Programa encerrado!");
} else {
    alert("Programa iniciado!");
    let opcao = prompt("Escolha uma ação a ser feita -> 1 - Mensagem motivacional; 2 - Mensagem desmotivacional; 3 - nada");

    switch (opcao) {
        case "1":
            alert("Continue tentando, você VAI conseguir!");
            break;
        case "2":
            alert("Você NÃO VAI conseguir, desista!");
            break;
        case "3":
            alert("...");
            break;
        default:
            alert("Opção inválida, selecione um número de 1 a 3.");
            break;
    }
}
=======
//CAÇA BUGS - CONDICIONAIS

let iniciar = prompt("Deseja iniciar o programa? s/n")

if (iniciar == "s") {
    alert("Programa encerrado!")
} else {
    alert("Programa iniciado!")
    let opcao = prompt("Escolha uma ação a ser feita -> 1 - Mensagem motivacional; 2 - Mensagem desmotivacional; 3 - nada")
    switch (iniciar) {
        case 1:
            alert("Você NÃO VAI conseguir, desista!")
        case 2:
            alert("Continue tentando, você VAI conseguir!")
        case 3:
            alert("Opção inválida selecione um número de 1 a 3.")
        default:
            alert("...")
    }
}
>>>>>>> db84c634184ed895fcb9b3224db4f982d00b864a
