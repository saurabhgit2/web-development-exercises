let apiQuotes=[];
let currentQuote={};
const newQuoteBtn=document.getElementById('new-quote');
const quotes=document.getElementById('quote');
const author=document.getElementById('author');
const twitter=document.getElementById('twitter');


function newQuote(){
    const quote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    console.log(quote);

    currentQuote=quote;

    quotes.textContent=quote.text;
    author.textContent=quote.author;
}

function postTwitter(){
    const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentQuote.text + " - " + currentQuote.author)}`;
    window.open(twitterURL, '_blank');
}


async function getQuotes(){
    const apiURL= 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const response=await fetch(apiURL);
        apiQuotes= await response.json();
        newQuote();
    }
    catch(error){
        alert("Error 404, try again after sometime.")
    }
}

getQuotes();


newQuoteBtn.addEventListener('click', newQuote);
twitter.addEventListener('click',postTwitter);

