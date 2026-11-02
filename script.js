
document.head.insertAdjacentHTML("beforeend", `
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #100d25, #25204b, #15132c);
    color: white;
    transition: 0.5s;
}

.container {
    text-align: center;
    padding: 25px 15px;
    width: 100%;
}

h1 {
    font-size: 30px;
    letter-spacing: 5px;
    color: #e3b9ff;
}

.subtitle {
    color: #c6bbdf;
    margin: 10px 0 30px;
}

.card {
    width: 340px;
    max-width: 100%;
    height: 440px;
    margin: auto;
    perspective: 1000px;
    cursor: pointer;
}

.card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s;
}

.card.flipped .card-inner {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    position: absolute;
    inset: 0;
    padding: 25px;
    border: 1px solid #a987d8;
    border-radius: 25px;
    background: linear-gradient(145deg, #33244f, #17162f);
    box-shadow: 0 15px 40px #0008;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}

.top, .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    letter-spacing: 1px;
    color: #e3c5ff;
}

.chip {
    font-size: 28px;
}

.profile {
    margin: 25px 0;
}

.avatar {
    width: 100px;
    height: 100px;
    margin: auto auto 15px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: 48px;
    font-weight: bold;
    color: white;
    background: linear-gradient(135deg, #c88cff, #6850c8);
    border: 4px solid #ead5ff;
    box-shadow: 0 0 25px #b477ff66;
}

.profile h2 {
    font-size: 27px;
    letter-spacing: 4px;
}

.role {
    margin-top: 7px;
    color: #d2b2ff;
    font-size: 12px;
    letter-spacing: 3px;
}

.details {
    text-align: left;
    border-top: 1px solid #ffffff30;
    padding-top: 15px;
}

.details p {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin: 12px 0;
    font-size: 11px;
}

.details span {
    color: #c4b5df;
}

.details b {
    font-size: 11px;
}

.active {
    color: #77f6bd;
}

.bottom {
    border-top: 1px solid #ffffff30;
    padding-top: 15px;
    margin-top: 17px;
    font-size: 9px;
}

.card-back {
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(145deg, #593b7b, #211738);
}

.back-icon {
    font-size: 55px;
    color: #f0d5ff;
    margin-bottom: 20px;
}

.card-back h2 {
    letter-spacing: 2px;
    font-size: 22px;
}

.card-back p {
    line-height: 1.8;
    color: #e2d3f6;
    margin-top: 15px;
}

.back-line {
    width: 80px;
    height: 3px;
    background: #d5a5ff;
    margin: 25px;
    border-radius: 10px;
}

.card-back h3 {
    font-size: 12px;
    letter-spacing: 3px;
}

.card-back .small {
    font-size: 12px;
}

.back-footer {
    margin-top: 30px;
    font-size: 10px;
    letter-spacing: 1px;
    color: #edceff;
}

.buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 28px;
}

button {
    padding: 12px 18px;
    border: 1px solid #d4aaff;
    border-radius: 30px;
    background: #7548a6;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background: #bd8cf4;
    color: #20152e;
    transform: translateY(-3px);
    box-shadow: 0 5px 20px #bd8cf455;
}

.hint {
    color: #c8bbdf;
    font-size: 12px;
    margin-top: 22px;
}

body.pink {
    background: linear-gradient(135deg, #351629, #702f58, #28142e);
}

body.pink .card-front {
    background: linear-gradient(145deg, #743d66, #321b3d);
}

body.pink .card-back {
    background: linear-gradient(145deg, #984e7b, #3b1d43);
}

body.pink h1 {
    color: #ffbfe8;
}

body.pink button {
    background: #a94f83;
    border-color: #ffc4e7;
}

@media (max-width: 380px) {
    .card {
        height: 420px;
    }

    .card-front, .card-back {
        padding: 20px;
    }

    h1 {
        font-size: 25px;
    }
}
</style>
`);

const card = document.getElementById("card");

function flipCard() {
    card.classList.toggle("flipped");
}

card.addEventListener("click", flipCard);

document.getElementById("flipBtn").addEventListener("click", flipCard);

document.getElementById("themeBtn").addEventListener("click", function () {
    document.body.classList.toggle("pink");
});
