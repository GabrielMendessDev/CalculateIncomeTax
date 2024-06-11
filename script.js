function calculateTax() {
    const salary = parseFloat(document.getElementById('salary').value);
    const inputSalary = document.getElementById('salary');
    const currency = document.getElementById('currency').value;
    const result = document.getElementById('result');
    let taxRate;

    switch(currency) {
        case 'real':
            taxRate = 0.15; // Exemplo: 15% de imposto
            break;
        case 'dolar':
            taxRate = 0.20; // Exemplo: 20% de imposto
            break;
        case 'euro':
            taxRate = 0.25; // Exemplo: 25% de imposto
            break;
    }

    const tax = salary * taxRate;
    if(salary && salary > 0 && currency != 'default'){
        if(currency == 'real'){
            result.innerText = `O imposto total é de: R$ ${tax.toFixed(2)} reais`;
        }else if(currency == 'dolar'){
            result.innerText = `O imposto total é de: $ ${tax.toFixed(2)} doláres`;
        }else{
            result.innerText = `O imposto total é de: € ${tax.toFixed(2)} euros`;
        }
    }else{
        result.innerText = `⚠️ Erro ao calcular imposto. Preencha todos os campos. O salário não pode ser negativo.`;
        result.style.color = "white";
        inputSalary.focus();
    }

}

function updateCurrencyImage() {
    const currency = document.getElementById('currency').value;
    const currencyImage = document.getElementById('currency-image');
    switch(currency) {
        case 'default':
            currencyImage.src = './assets/interrogation.png';
            result.innerText = ``;
            break;
        case 'real':
            currencyImage.src = './assets/real.png';
            result.innerText = ``;
            break;
        case 'dolar':
            currencyImage.src = './assets/dolar.png';
            result.innerText = ``;
            break;
        case 'euro':
            currencyImage.src = './assets/euro.png';
            result.innerText = ``;
            break;
        default:
            currencyImage.src = '';
    }
}