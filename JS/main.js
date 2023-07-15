/* Global */
var btn = document.getElementById('btn');
var quote = document.getElementById('quoteOutput');
var author = document.getElementById('authorOutput');

var current = Math.floor(Math.random() * 10);
var prev;


/* onClick Event  */
btn.onclick = function () {
    quoteGenerate();
};

/* Quote Generate function */
function quoteGenerate() {
    var arr = [
        {
            quoteOutput: '“Be yourself; everyone else is already taken.”',
            authorOutput: "--Oscar Wilde",
        },
        {
            quoteOutput: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
            authorOutput: "--Albert Einstein",
        },
        {
            quoteOutput: '“A room without books is like a body without a soul.”',
            authorOutput: "--Marcus Tullius Cicero",
        },
        {
            quoteOutput: '“A friend is someone who knows all about you and still loves you.”',
            authorOutput: "--Elbert Hubbard",
        },

        {
            quoteOutput: '“Always forgive your enemies; nothing annoys them so much.”',
            authorOutput: "--Oscar Wilde",
        },

        {
            quoteOutput: "“It always seems impossible until it's done.”",
            authorOutput: "--Nelson Mandela",
        },

        {
            quoteOutput: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
            authorOutput: "--Maya Angelou",
        },

        {
            quoteOutput: '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
            authorOutput: "--Mahatma Gandhi",
        },

        {
            quoteOutput: '“We accept the love we think we deserve.”',
            authorOutput: "--Stephen Chbosky",
        },

        {
            quoteOutput: '“Without music, life would be a mistake.”',
            authorOutput: "--Friedrich Nietzsche",
        }
    ];
    quote.innerHTML = arr[current].quoteOutput;
    author.innerHTML = arr[current].authorOutput;
    prev = current;
    while (current == prev) {
        current = Math.floor(Math.random() * 10);
    };
};