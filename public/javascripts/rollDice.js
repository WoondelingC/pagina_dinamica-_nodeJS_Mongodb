const dado = document.getElementById('dado');
const inputPlayer = Number(document.querySelector('.player1').textContent);


const numberRandom = () => {
    const min = 1;
    const max = 7;
    let numberAleatorio = Math.floor(Math.random() * (max - min) + min);
    if (inputPlayer === numberAleatorio) {
        console.log('Winner');
        
    }

    console.log(numberAleatorio);
    return numberAleatorio;
}

dado.innerHTML = `<h1 class="dado">${numberRandom()}</h1>`;

