/* Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021.
A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).
Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando
até que um valor correto seja preenchido.
*/

let nomeCompleto = prompt("Digite seu nome completo: ")

function calculoIdade(ano1) {
    if (ano1 < 1922 || ano1 > 2022 || isNaN(ano1)) {
        throw new Error ("Ano inválido. Digite novamente")
    }
    return 2023 - ano1
    }

while(true) {
    let anoDeNascimento = parseInt(prompt("Digite seu ano de nascimento: "))
    try { 
        resultado = calculoIdade(anoDeNascimento)
        break;
    } catch (error) {
        alert('Ocorreu um erro: ' + error)   
        }
}    
alert(`${nomeCompleto}, você tem/terá ${resultado} anos em 2023!`)











