function calcularIMC(peso, altura) {
    if (altura <= 0 || peso <= 0) {
        return "Altura e peso devem ser maiores que zero.";
    }

    const imc = peso / (altura * altura);

    let categoria = '';

    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        categoria = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        categoria = 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
        categoria = 'Obesidade grau 2';
    } else {
        categoria = 'Obesidade grau 3';
    }

    return `Seu IMC é ${imc.toFixed(2)} e você está na categoria: ${categoria}.`;
}


const peso = 70; // Peso em kg
const altura = 1.75; // Altura em metros

console.log(calcularIMC(peso, altura));