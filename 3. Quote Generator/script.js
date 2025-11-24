const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Get busy living or get busy dying. - Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Act as if what you do makes a difference. It does. - William James",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "The best way to predict the future is to create it. - Peter Drucker",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Everything you’ve ever wanted is on the other side of fear. - George Addair",
    "Opportunities don't happen, you create them. - Chris Grosser",
    "Dream big and dare to fail. - Norman Vaughan",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");
function generateQuote(){
    if (usedIndexes.size >= quotes.length){
        usedIndexes.clear();
    // quoteElement.innerHTML = "All quotes have been used. Resetting...";
    }

    while (true) {
        const randomIndex = Math.floor(Math.random() * quotes.length);

        if (usedIndexes.has(randomIndex)) continue

        const quote = quotes[randomIndex];
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIndex);
        break;
    }
}