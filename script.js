const jokeUrl = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky';
let joke = [];
const button = document.getElementById('button');
function textToSpeech(){
    VoiceRSS.speech({
        key: '0792acaccebc4a4fad03ea1e36ff4990',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

async function getJoke(){
    try{
        const response = await fetch(jokeUrl).then((jokes)=>{return jokes.json()});
        console.log(response);
        if(response.setup){
            joke = `${response.setup}... ${response.delivery}`;
        }else{
            joke = response.joke;
        }
        console.log('Joke',joke)
        textToSpeech();
        
    }catch(e){
        console.log('Eroor',e);
    }
}
getJoke();
//button.addEventListener('click',getJoke);