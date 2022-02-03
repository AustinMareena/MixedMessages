const randQuotes = ['Good, better, best. Never let it rest. Until your good is better and your better is best.', 'When something is important enough, you do it even if the odds are not in your favor.', 
'Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.', 'If you fell down yesterday, stand up today.', 'It does not matter how slowly you go as long as you do no stop.', 
'A good plan violently executed now is better than a perfect plan executed next week.', 'Setting goals is the first step in turning the invisible into the visible.', 'It always seems impossible until it is done.',
'Start where you are. Use what you have. Do what you can.', 'If you can dream it, you can do it.', 'I do not believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be.', 
'Life is 10% what happens to you and 90% how you react to it.', 'If you\'re going through hell, keep going.', 'Aim for the moon. If you miss, you may hit a star.'];

function generateQuotes() {
    const quoteArray = [];
    for (let i = 0; i < 3; i++) {
        quoteArray.push(randQuotes[Math.floor(Math.random() * randQuotes.length)])
    }
    return `Good Morning! Today is another opportunity for greatness. 
Consider these motivational quotes as you navigate today's journey ahead.

    - ${quoteArray[0]}
    - ${quoteArray[1]}
    - ${quoteArray[2]}`
};

console.log(generateQuotes());