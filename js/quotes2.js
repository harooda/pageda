const quotes = [
    {
        quote: "����� ���� ������ ���� �ʱ�",
        author: "-����-",
    },
    {
        quote: "�׻� ���� �������ֽ����� ���� ���� ���������� �������� ��� �ູ�� �����Ѵٴ� ���� ���� �����ּ���.",
        author: "-����-",
    },
    {
        quote:"�ʸ� ���� ���� �� �ִ°� ������ �ʿ��� ���� �Ǿ��ټ� �־�.",
        author: "-����-",
    },
    {
        quote: "�������� ����� �״°� ����.",
        author: "-����-",
    },
    {
        quote: "���� ����� ���ڽŸ� �˸��",
        author: "-����-",
    },
    {
        quote: "�������� �� ���Ϻ��� �� ����� ����մϴ�.",
        author: "-����-",
    },
    {
        quote: "�׻� ���� �ְ��� �ֹ��� �̴ϴ� �����ϰ� ������, ���Ҽ��־��� �������� ������ó�� ���ϰ� �����ſ���",
        author: "-����-",
    },
    {
        quote: "���� �������� �ڴ��� ���� �� ���",
        author: "-ȣ��-",
    },
    {
        quote: "�����е��� ���� ���ֶ�� �����  ���� �����ּ����� ���ڽ��ϴ�.",
        author: "-����-",
    },
    {
        quote: "���� �״밡 �ƴ� ���� �����̿���.",
        author: "-����-",
    },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = `"${todayQuote.quote}"`;
author.innerText = todayQuote.author;