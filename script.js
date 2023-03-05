const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
document.addEventListener('DOMContentLoaded',getJoke);

button.addEventListener('click',getJoke);

async function getJoke(){
    const jokeData = await fetch('https://icanhazdadjoke.com/',{
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    jokeText.innerHTML = jokeObj.joke;
    var randomNum = Math.floor(Math.random() * 16777215);
    var hexNum = '#' + randomNum.toString(16);
    if(hexNum.length == '7'){
        document.body.style.backgroundColor = hexNum;
        button.style.backgroundColor = hexNum;
    }
    else{
        document.body.style.backgroundColor = hexNum + '0';
        button.style.backgroundColor = hexNum + '0';
    }
}