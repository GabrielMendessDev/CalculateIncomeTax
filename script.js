function calculateTax() {
    const salary = parseFloat(document.getElementById('salary').value);
    const inputSalary = document.getElementById('salary');
    const currency = document.getElementById('currency').value;
    const result = document.getElementById('result');
    let taxRate;

    switch(currency) {
        case 'real':
            if(salary <= 2259.20){
                taxRate = 0;
            }else if(salary <= 2826.65){
                taxRate = 7.5 / 100;
            }else if(salary <= 3751.05){
                taxRate = 15 / 100;
            }else if(salary <= 4664.68){
                taxRate = 22.5 / 100;
            }else{
                taxRate = 27.5 / 100;
            }
            break;
        case 'dolar':
            if(salary <= (11000 / 12)){
                taxRate = 10 / 100;
            }else if(salary <= (44725 / 12)){
                taxRate = 12 / 100;
            }else if(salary <= (95375 / 12)){
                taxRate = 22 / 100;
            }else if(salary <= (182100 / 12)){
                taxRate = 24 / 100;
            }else if(salary <= (231250 / 12)){
                taxRate = 32 / 100;
            }else if(salary <= (578125 / 12)){
                taxRate = 35 / 100;
            }else{
                taxRate = 37 / 100;
            }
            break;
        case 'euro':
            if(salary <= 941.17){
                taxRate = 0;
            }else if(salary <= 2399.75){
                taxRate = 11 / 100;
            }else if(salary <= 6861.75){
                taxRate = 30 / 100;
            }else if(salary <= 14758.83){
                taxRate = 41 / 100;
            }else{
                taxRate = 45 / 100;
            }
            break;
    }

    const tax = salary * taxRate;
    const finalSalary = salary - tax;

    if(salary && salary > 0 && currency != 'default'){
        if(currency == 'real'){
            result.innerText = `O imposto total é de: R$ ${tax.toFixed(2)} reais. Salário final: R$ ${finalSalary.toFixed(2)} reais.`;
        }else if(currency == 'dolar'){
            result.innerText = `O imposto total é de: $ ${tax.toFixed(2)} doláres. Salário final: R$ ${finalSalary.toFixed(2)} doláres.`;
        }else{
            result.innerText = `O imposto total é de: € ${tax.toFixed(2)} euros. Salário final: R$ ${finalSalary.toFixed(2)} euros.`;
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
            currencyImage.src = './assets/interrogation.png';
            result.innerText = ``;
    }
}