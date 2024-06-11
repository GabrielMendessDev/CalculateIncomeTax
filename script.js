function calculateTax() {
    const salary = parseFloat(document.getElementById('salary').value);
    const currency = document.getElementById('currency').value;
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
    if(currency == 'real'){
        document.getElementById('result').innerText = `O imposto total é de: R$ ${tax.toFixed(2)} reais`;
    }else if(currency == 'dolar'){
        document.getElementById('result').innerText = `O imposto total é de: $ ${tax.toFixed(2)} doláres`;
    }else{
        document.getElementById('result').innerText = `O imposto total é de: € ${tax.toFixed(2)} euros`;
    }
}

function updateCurrencyImage() {
    const currency = document.getElementById('currency').value;
    const currencyImage = document.getElementById('currency-image');
    switch(currency) {
        case 'real':
            currencyImage.src = '/assets/real.svg';
            break;
        case 'dolar':
            currencyImage.src = '/assets/dolar.svg';
            break;
        case 'euro':
            currencyImage.src = '/assets/euro.svg';
            break;
        default:
            currencyImage.src = '';
    }
}