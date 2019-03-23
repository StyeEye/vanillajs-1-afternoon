const grabber = document.getElementById(`grabber`);
const styler = document.getElementById(`styler`);

function setCard() {
    const target = document.getElementById(grabber.value);

    console.log(target);

    target.style.color = styler.value;
}

function resetAll() {
    for (let i = 1; i <= 4; ++i) {
        const card = document.getElementById(`card${i}`);
        card.style.color = "grey";
    }
}