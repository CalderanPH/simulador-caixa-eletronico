var opcao;
var valor_saque;
var saldo = 0;
var min = 10;
var max = 600;

function saque(opcao) {
  do {
    opcao = parseInt(
      prompt("Escolha uma opção:\n1 - Saque\n2 - Depósito\n3 - Saldo\n0 - Sair")
    ); // MENU inicial
    switch (opcao) {
      case 1:
        valor_saque = parseInt(prompt("Qual o valor do saque:"));
        if (valor_saque <= saldo && valor_saque <= max) {
          if (valor_saque >= min) {
            saldo = saldo - valor_saque;
            alert("Saque sendo Processado");
            alert(
              "Saindo..." + parseInt(valor_saque / 100) + " " + "notas de 100"
            );
            valor_saque = valor_saque % 100;
            alert(
              "Saindo..." + parseInt(valor_saque / 50) + " " + "notas de 50"
            );
            valor_saque = valor_saque % 50;
            alert(
              "Saindo..." + parseInt(valor_saque / 20) + " " + "notas de 20"
            );
            valor_saque = valor_saque % 20;
            alert(
              "Saindo..." + parseInt(valor_saque / 10) + " " + "notas de 10"
            );
            valor_saque = valor_saque % 10;
            alert("Saindo..." + parseInt(valor_saque / 5) + " " + "notas de 5");
            valor_saque = valor_saque % 5;
            alert("Saindo..." + parseInt(valor_saque / 2) + " " + "notas de 2");
            valor_saque = valor_saque % 2;
            alert("Saindo..." + parseInt(valor_saque / 1) + " " + "notas de 1");
            valor_saque = valor_saque % 1;

            alert("....... Retire da bandeja");
            alert("Agradecemos por utilizar os nossos serviços.");
          } else {
            alert("O saque minimo é de R$10,00.");
          }
        }
        if (valor_saque > 600) {
          alert(
            "O valor de saque excedido. Saque um valor inferior a R$600,00"
          );
        }
        if (valor_saque > saldo) {
          alert("O seu saldo não é suficiente para esse saque.");
        }
        break;
      case 2:
        deposito = parseInt(
          prompt("Quanto você quer depositar?")
        ); /*Opção pra saber o valor pra depositar*/
        alert("O valor de : R$ " + deposito + " foi depositado com sucesso,");
        saldo = saldo + deposito;
      case 3:
        alert(
          "O seu saldo em conta é de : R$ " +
            saldo +
            " Deseja fazer mais alguma coisa? Espero o outro menu."
        );
    }
  } while (opcao != 0);
}
