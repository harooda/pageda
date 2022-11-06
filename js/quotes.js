const quotes = [
    {
        quote: "당신의 꿈이 꿈으로 남지 않길",
        author: "-윤기-",
    },
    {
        quote: "항상 저희를 응원해주시지만 저희 또한 마음속으로 여러분의 삶과 행복을 응원한다는 것을 잊지 말아주세요.",
        author: "-남준-",
    },
    {
        quote:"너를 위해 해줄 수 있는건 없지만 너에게 힘이 되어줄순 있어.",
        author: "-지민-",
    },
    {
        quote: "열정없이 사느니 죽는게 낫다.",
        author: "-정국-",
    },
    {
        quote: "너의 수고는 너자신만 알면돼",
        author: "-석진-",
    },
    {
        quote: "어제보다 더 내일보다 덜 당신을 사랑합니다.",
        author: "-태형-",
    },
    {
        quote: "항상 나는 최고라고 주문을 겁니다 나를믿고 괜찮아, 잘할수있어라고 응원하죠 거짓말처럼 잘하고 있을거예요",
        author: "-석진-",
    },
    {
        quote: "지금 새우잠을 자더라도 꿈은 고래 답게",
        author: "-호석-",
    },
    {
        quote: "여러분들이 저의 우주라는 사실을  잊지 말아주셨으면 좋겠습니다.",
        author: "-남준-",
    },
    {
        quote: "지금 그대가 아는 답이 정답이에요.",
        author: "-남준-",
    },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = `"${todayQuote.quote}"`;
author.innerText = todayQuote.author;