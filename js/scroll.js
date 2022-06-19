const SL = document.getElementById('scroll-left');
const SR = document.getElementById('scroll-right');

const cards = document.getElementsByClassName('card');
const scrollBtns = document.getElementsByClassName('scroller-nav-btn');

let cardDimensions = cards[0].getBoundingClientRect();
let cardWidth = cardDimensions.width;

let posX = 0;
let counter = 0



SL.addEventListener('click', () => {
    if(counter > 0){
        posX += cardWidth + 90;

        Array.from(cards).forEach(card => {
            card.style.left = posX + "px";
        });

        if(cards[0].style.left == "0px"){
            scrollBtns[0].style.backgroundColor = "#7d2ae8";
            scrollBtns[1].style.backgroundColor = "transparent";
            scrollBtns[2].style.backgroundColor = "transparent";
        }else if(cards[0].style.left == "-1110px"){
            scrollBtns[0].style.backgroundColor = "transparent";
            scrollBtns[1].style.backgroundColor = "#7d2ae8";
            scrollBtns[2].style.backgroundColor = "transparent";
        }

        counter--;
    }
    

});
SR.addEventListener('click', () => {
    if(counter < cards.length - 3){
        posX -= cardWidth + 90;

        Array.from(cards).forEach(card => {
            card.style.left = posX + "px";
        });

        if(cards[0].style.left == "-1110px"){
            scrollBtns[0].style.backgroundColor = "transparent";
            scrollBtns[1].style.backgroundColor = "#7d2ae8";
            scrollBtns[2].style.backgroundColor = "transparent";
        }else if(cards[0].style.left == "-2220px"){
            scrollBtns[0].style.backgroundColor = "transparent";
            scrollBtns[1].style.backgroundColor = "transparent";
            scrollBtns[2].style.backgroundColor = "#7d2ae8";
        }
        counter++
    }
});



Array.from(scrollBtns).forEach((scrollBtn, i) => {
        scrollBtn.addEventListener('click', () => {
            scrollBtn.style.backgroundColor = "#7d2ae8";
            
            if(i == 0){
                scrollBtns[1].style.backgroundColor = "transparent";
                scrollBtns[2].style.backgroundColor = "transparent";

                posX = 0;
 
                Array.from(cards).forEach(card => {
                    card.style.left = posX + "px";
                });
                counter = 0;
            }else if(i == 1){
                scrollBtns[0].style.backgroundColor = "transparent";
                scrollBtns[2].style.backgroundColor = "transparent";

                posX = -1110;

                Array.from(cards).forEach(card => {
                    card.style.left = posX + "px";
                });
                counter = 3;
            }else if(i == 2){
                scrollBtns[0].style.backgroundColor = "transparent";
                scrollBtns[1].style.backgroundColor = "transparent";

                posX = -2220;

                Array.from(cards).forEach(card => {
                    card.style.left = posX + "px";
                });
                counter = 6;
            }
        });
    }
);

const scroller = document.getElementsByClassName('scroller')[0];
let initialX = 0;

document.addEventListener('mousedown', (event) => {
        initialX = event.clientX;
        scroller.style = "user-select: none;";
    }
);

function mouseup(event){
    console.log(event.clientX, ":", initialX);
    if(event.clientX - initialX > 300){
        if(posX != 0){
            posX -= -1110;

            Array.from(cards).forEach(card => {
                card.style.left = posX + "px";
            });

            if(cards[0].style.left == "0px"){
                scrollBtns[0].style.backgroundColor = "#7d2ae8";
                scrollBtns[1].style.backgroundColor = "transparent";
                scrollBtns[2].style.backgroundColor = "transparent";
            }else if(cards[0].style.left == "-1110px"){
                scrollBtns[0].style.backgroundColor = "transparent";
                scrollBtns[1].style.backgroundColor = "#7d2ae8";
                scrollBtns[2].style.backgroundColor = "transparent";
            }
        }
        
    }else if(event.clientX - initialX < -300){
        if(posX != -2220){
            posX += -1110;

            Array.from(cards).forEach(card => {
                card.style.left = posX + "px";
            });

            if(cards[0].style.left == "-1110px"){
                scrollBtns[0].style.backgroundColor = "transparent";
                scrollBtns[1].style.backgroundColor = "#7d2ae8";
                scrollBtns[2].style.backgroundColor = "transparent";
            }else if(cards[0].style.left == "-2220px"){
                scrollBtns[0].style.backgroundColor = "transparent";
                scrollBtns[1].style.backgroundColor = "transparent";
                scrollBtns[2].style.backgroundColor = "#7d2ae8";
            }
        }
    }

    scroller.style = "user-select: text;";
}
document.addEventListener('mousedown', () => {
    document.addEventListener('mouseup', mouseup);
});
//160 1190

