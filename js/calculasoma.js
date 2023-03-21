let titulo = document.querySelector('.titulo')
titulo.textContent = 'Clínica Video Cuiabá'
let clientes = document.querySelectorAll('.paciente')
let soma = 0 
console.log(paciente)
let camposoma = document.querySelector('.soma')
for (let i = 0; i <= paciente.length; i++) {
    let paciente = paciente[i]


    let quantidadeTd = paciente.querySelector('.info-quantidade')

    let quantidade = Number(quantidadeTd.textContent)


    soma = soma + quantidade

    camposoma.textContent=soma
}