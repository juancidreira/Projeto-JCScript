// let sale = true

// if (sale === true) {
//     console.log('Vou vender!!')
// }

// let isMailSent = false

// if (isMailSent) {
//     console.log('e-mail enviado');
// }

// if (sale) {
//     console.log('Vou vender!!');
// } else {
//     console.log('Não vou vender');
// }

// let isTaskCompleted = true

// if (isTaskCompleted) {
    // console.log("Tarefa concluída.");
// } else {
    // console.log('Tarefa incompleta.');
// }

// let hungerLevel = 7

// if (hungerLevel > 7) {
//     console.log('Estou com fome!');
// } else {
//     console.log('Não estou com fome.');
// }

// let day = 'Segunda'

// if (day === 'Sábado' || day === 'Domingo') {
//     console.log('Fim de semana');
// } else {
//     console.log('Dia de trabalho');
// }

// let time = 9

// if (time < 10) {
//     console.log('Bom dia!');
// } else if (time < 18) {
//     console.log('Boa tarde!');
// } else {
//     console.log('Boa noite!');
// }

// let ph = 2

// if (ph < 7) {
//     console.log('Ácido');
// } else if (ph > 7) {
//     console.log('Básico');
// } else {
//     console.log('Neutro');
// }

// # Operador ternário
// condicao ? expressaoseforverdadeira : expressaoforfalsa
// let average = 7

// average >= 7 ? console.log('Aluno aprovado') : console.log('Aluno reprovado')

// let name = prompt('Qual o seu nome?')
// let age = prompt('Qual a sua idade?')

// document.writeln('Olá, ', name + '! Você tem ' + age + ' anos.')

// *Atividade 1: Calculadora Simples*

// - Escreva um programa que simula uma calculadora simples.
// - Declare duas variáveis, *num1* e *num2*, e atribua valores a elas (por exemplo, 10 e 5).
// - Declare uma variável *operador* e atribua uma operação (por exemplo, "+").
// - Use uma estrutura condicional para realizar a operação selecionada (adição, subtração, multiplicação ou divisão).
// - Mostre o resultado no console.

// let num1 = Number(prompt('Escreva um número.'))
// let num2 = Number(prompt('Escreva outro número.'))
// let operador = prompt('Escreva a operação (Ex: +, -, *, /).')
// let resultado

// if (operador === '+') {
//     resultado = num1 + num2
// } else if (operador === '-') {
//     resultado = num1 - num2
// } else if (operador === '*') {
//     resultado = num1 * num2
// } else if (operador === '/') {
//     resultado = num1 / num2
// } else {
//     alert('Operação inválida.')
// }

// alert('O resultado é: ' + resultado)

// ### *Atividade2 : Cálculo de Média e Status do Aluno*

// 1. *Leia 3 notas:* Utilize o *prompt* para ler as notas do aluno. Você deve ler três notas diferentes.
// 2. *Calcule a média:* Após obter as três notas, calcule a média dessas notas.
// 3. *Verifique o status do aluno:*
//     - Se a média estiver entre 9 e 10, mostre a mensagem "Aprovado com nota excelente" usando o *document.write*.
//     - Se a média estiver entre 7 e 8 (não incluso), mostre a mensagem "Aprovado com uma nota boa" usando o *document.write*.
//     - Se a média for inferior a 7, solicite uma nota de recuperação usando o *prompt*. Esta será a nota da recuperação.
//         - Se a nota de recuperação for maior que 6, mostre a mensagem "Aprovado na recuperação" usando o *document.write*.
//         - Se a nota de recuperação for igual ou menor que 6, mostre a mensagem "Reprovado, estude e pratique mais" usando o *document.write*.

let nota1 = Number(prompt('Escreva a primeira nota.'))
let nota2 = Number(prompt('Escreva a segunda nota.'))
let nota3 = Number(prompt('Escreva a terceira nota.'))
let recuperacao
let media = (nota1 + nota2 + nota3) / 3

if (media === 9 || media === 10) {
    document.writeln('Aprovado com nota excelente!')
} else if (media === 8 || media === 7) {
    document.writeln('Aprovado com nota boa.')
} else if (media < 7) {
    recuperacao = Number(prompt('Escreva a nota da recuperação.'))
        if (recuperacao > 6) {
            document.writeln("Aprovado na recuperação!")
        } else {
            document.writeln('Reprovado.')
        }
}