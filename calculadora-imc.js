const altura = 1.72
const peso = 60

if (altura > 0 && altura < 3 && peso > 0) {
    const imc = peso / (altura * altura)
    console.log("IMC: " + imc)
}