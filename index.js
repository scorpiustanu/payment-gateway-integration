var call = setInterval(() => {
    var content = document.getElementById("con");
    var i = Math.floor(Math.random() * (quotes.length));
    content.innerHTML = quotes[i];
}, 1050);

var quotes = [
    "“Be the sunshine in their storm.",
    "Alone, I can do little. Together, we can do anything.",
    "“Only by giving are you able to receive more than you already have.” - Jim Rohn",
    "“We make a living by what we get, but we make a life by what we give.” - Winston Churchill",
    "“Giving is not just about making a donation. It is about making a difference.” Kathy Calvin",
    "“Fundraising is the gentle art of teaching the joy of giving.” - Hank Rosson",
    "“It’s not how much we give, but how much love we put into giving.” - Mother Teresa",
    "“Giving to those in need will bring more joy than money could ever buy.” - Dave Ramsey",

]
