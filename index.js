const compliment = [
    "You have a beautiful smile",
 "Your positivity is infectious.",
 "You have a heart of gold.",
 "Your resilience in challenging times is inspiring.",
 "You're not just good-looking; you're also kind-hearted.",
 "Your sense of humor brightens up any room.",
 "You have a unique and beautiful perspective on life.",
 "Your generosity knows no bounds.",
 "Your intelligence and creativity amaze me.",
 "You make a significant impact on everyone you meet.",
 "Your ability to empathize makes you a true friend.",
 "Your dedication to your goals is commendable.",
 "Your authenticity is a rare and valuable trait.",
 "You have a natural talent for making people feel valued.",
 "Your sincerity and honesty are refreshing.",
 "You possess an inner strength that radiates outward.",
 "Your thoughtfulness and consideration make you stand out.",
 "You bring out the best in those around you.",
 "Your passion for [insert interest/hobby] is inspiring.",
"Your kindness and compassion make the world a better place.",
"Your presence alone is a gift to those fortunate enough to know you."
];


function generateCompliment(){
    const complimentContainer = document.getElementById("complimentContainer");
    const compliment = document.getElementById("compliment");
    // Get random index number from array
    let randomIndex = Math.floor(Math.random() * compliment.length);
    let randomCompliment = compliment[randomIndex];

    compliment.innerHTML = randomCompliment;
    complimentContainer.style.backgroundColor = getRandomColor();
}

function getRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0;i<6;i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}