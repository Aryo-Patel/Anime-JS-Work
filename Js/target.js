
//CSS SELECTOR
let cssSelectorSquare = document.getElementById('css-selector-square');
let cssSelectorSquareAnime
cssSelectorSquare.parentElement.addEventListener('click', e =>{
    if(cssSelectorSquareAnime){
        cssSelectorSquareAnime.restart();
    }
    else{
        cssSelectorSquareAnime = anime({
            targets: cssSelectorSquare,
            translateX: 250
        });
    }

});


//DOM NODE / NODE LIST
let domSquares = document.querySelectorAll('.dom-squares');
domSquares = Array.from(domSquares);
var domSquareAnime;
domSquares[0].parentElement.addEventListener('click', e =>{
    if(domSquareAnime){
        domSquareAnime.restart();
    }
    else{
        domSquareAnime = anime({
            targets: domSquares,
            translateX: 250
        });
    }
});


//JAVASCRIPT OBJECT
let javascriptObjectText = document.getElementById('javascript-object-text');
let javascriptObjectTextAnime;
let textInput = {
    charged: "0%",
    cycles: 120
};
javascriptObjectText.innerText = JSON.stringify(textInput);
javascriptObjectText.parentElement.addEventListener('click', e =>{
    if(javascriptObjectTextAnime){
        javascriptObjectTextAnime.restart();
    }
    else{
        javascriptObjectTextAnime = anime({
            targets: textInput,
            charged: '100%',
            cycles: 130,
            round: 1,
            easing: 'linear',
            update: function(){
                javascriptObjectText.innerText = JSON.stringify(textInput);
            }
        })
    }
})

//ANIMATION RESET ON WHEN CLICKING OFF OF BOX 
window.addEventListener('click', e => {
    try{
        //CSS SELECTOR
        if(e.target !== cssSelectorSquare && e.target !== cssSelectorSquare.parentNode){
            cssSelectorSquareAnime.reset();
        }
        //DOM NODE / NODE LIST 
        if(e.target !== domSquares[0].parentNode && e.target !== domSquares[0] && e.target !== domSquares[1] && e.target !== domSquares[2]){
            domSquareAnime.reset();
        }
        //JAVASCRIPT OJBECT
        if(e.target !== javascriptObjectText.parentNode && e.target !== javascriptObjectText){
            textInput['charged'] = '0%';
            textInput['cycles'] = 0;
            javascriptObjectText.innerText = JSON.stringify(textInput);
        }
    }
    catch{
    }

})
