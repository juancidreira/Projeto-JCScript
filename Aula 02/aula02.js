// Operadores

// Operadores Aritméticos -> Cálculos matemáticos
// +, -, *, 

// 10 / 3 -> 3
// 10 % 3 -> 1

// Incremento e Decremento
// ++, --

// 10++ = 11
// 10-- = 9

// 2**3 -> 2 elevado a 3 -> 8

// let soma = 10 + 5
// document.writeln(soma)

// let subtracao = 10 - 5
// document.writeln(subtracao)

// let rest = 10 % 3
// document.writeln(rest)

// let x = 5
// x++
// x--
// x = 7
// document.writeln(x)

// let potencia = 2**3
// document.writeln(potencia)

// let numero1 = 10
// let nome = 'Carla'

// NaN -> Not a Number
// document.writeln(numero1 * nome)

// let num1 = 10
// let num2 = '20'
// document.writeln(num1 + Number(num2))

// parseInt -> transforma uma string em um número inteiro
// parseFloat -> transforma uma string em um número decimal
// Number -> transforma uma string em um número, se possível

// Operadores de atribuição

// = -> atribui um valor a uma variável
let x = 10
// document.writeln(x)

// += -> adiciona um valor á variável
x += 5
// x = x + 5
// document.writeln(x)

x -= 3
// x = x - 3
// document.writeln(x)

x *= 2
// x = x * 2
// document.writeln(x)

x /= 4
// x = x + 4
// document.writeln(x)

// Operadores relacionais
// >, <, >=, <= 

// Operadores lógicos
// &&, ||, 1 -> boolean
// AND &&
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false
// -> só é true, se todos os operadores forem true

// OR ||
// true || true -> true
// true  || false -> true
// false || true -> true 
// false || false -> false

// Declare duas variáveis com os valores 10 e 3. Calcule e exiba o resultado da soma,
// subtração, multiplicação, divisão, resto da divisão e potência entre eles.
// let num1 = 10
// let num2 = 3
// let soma = num1 + num2
// let subtracao = num1 - num2
// let multiplicacao = num1 * num2
// let divisao = num1 / num2
// let restoDaDivisao = num1 % num2
// let potencia = num1 ** num2
// document.writeln(soma)
// document.writeln(subtracao)
// document.writeln(multiplicacao)
// document.writeln(divisao)
// document.writeln(restoDaDivisao)
// document.writeln(potencia)

// Crie três variáveis: nome, sobrenome e idade.
// Concatene-as para formar uma frase de apresentação e exiba no console.
// let nome = "Juan"
// let sobrenome = "Cidreira"
// let idade = 14
// document.writeln("Meu nome é " + nome + " " + sobrenome + ", e tenho " + idade + " anos.")

// Converta uma string "42" para número e some 8.
// Depois converta o número 100 para string e concatene com " reais".
// let number1 = "42"
// document.writeln(parseInt(number1) + 8)
// let number2 = 100
// document.writeln(String(number2) + " reais")

// Declare a = 15 e b = 20. Verifique se a é igual a b, menor que b, maior que b,
// e menor ou igual a b usando operadores de comparação.
// let a = 15
// let b = 20
// document.writeln(a > b)
// document.writeln(a < b)
// document.writeln(a >= b)
// document.writeln(a <= b)

// Crie duas variáveis booleanas: maiorDeIdade = true e temCarteira = true. Verifique 
// usando AND (&&), OR (||) e NOT (!) se a pessoa pode dirigir (ambas devem ser true).

// let maiorDeIdade = true
// let temCarteira = true

// if (maiorDeIdade && temCarteira) {
//     document.writeln('Pode dirigir!')
// } else if (maiorDeIdade || temCarteira) {
//     document.writeln('Não pode dirigir.')
// } else if (!maiorDeIdade || !temCarteira) {
//     document.writeln('Não pode dirigir.')
// }

// Um aluno obteve as notas 7.5, 8.0 e 9.5 em três provas. 
// Calcule a média e verifique se ele foi aprovado (média >= 7).

// let nota1 = 3.5
// let nota2 = 3.0
// let nota3 = 9.5
// let media = (nota1 + nota2 + nota3) / 3

// if (media >= 7) {
//     document.writeln('Aprovado!')
// } else {
//     document.writeln('Desaprovado.')
// }

// Comece com valor = 10. Use os operadores 
// +=, -=, *= e /= para modificar o valor e exiba o resultado após cada operação.
// let valor = 10

// valor += 1
// document.writeln(valor)

// valor -= 1
// document.writeln(valor)

// valor *= 2
// document.writeln(valor)

// valor /= 4
// document.writeln(valor)

// Um produto custa R$ 150. Calcule 
// o desconto de 20% e exiba o preço original, o valor do desconto e o preço final.

// let produto = 150
// let produtoAposDesconto = produto - (produto * 0.2)

// document.writeln('Preço original: ' + produto + '<br>');
// document.writeln('Valor do desconto: 20%' + '<br>');
// document.writeln('Preço após o desconto: ' + produtoAposDesconto);