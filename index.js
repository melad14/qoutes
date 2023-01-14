var quote = document.getElementById('quote');
var randomQuotes = [
{'qoute':`
Be yourself; everyone else is already taken.`,
'auther':`Oscar Wilde`
},
{'qoute':`I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
'auther':`Marilyn Monroe`
},
{'qoute':`Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
'auther':`Albert Einstein`
},
{'qoute':`Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
'auther':` Bernard M. Baruch`
},
{'qoute':`You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,
'auther':` Dr. Seuss`
},
{'qoute':`You only live once, but if you do it right, once is enough.`,
'auther':` Mae West`
},


];

function changeQuotes() {
  var i = Math.floor((Math.random() * randomQuotes.length));
    document.getElementById("quote").innerHTML=randomQuotes[i].qoute    ;
      document.getElementById("auther").innerHTML=randomQuotes[i].auther    ;   
}

