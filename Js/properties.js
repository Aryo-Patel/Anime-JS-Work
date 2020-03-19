
//CSS PROPERTIES
let cssPropertiesSquare = document.getElementById('css-properties-square');
let cssPropertiesSquareAnime;
cssPropertiesSquare.parentElement.addEventListener('click', e =>{
    if(cssPropertiesSquareAnime){
        cssPropertiesSquareAnime.restart();
    }
    else{
        cssPropertiesSquareAnime = anime({
            targets: cssPropertiesSquare,
            translateX: '240px',
            backgroundColor: '#fff',
            borderRadius: '50%',
            easing: 'easeInOutQuad'
        });
    }
});

//CSS TRANSFORMS
let cssTransformSquare = document.getElementById('css-transform-square');
let cssTransformSquareAnime;
cssTransformSquare.parentElement.addEventListener('click', e =>{
    if(cssTransformSquareAnime){
        cssTransformSquareAnime.restart();
    }
    else{
        cssTransformSquareAnime = anime({
            targets: cssTransformSquare,
            translateX: '250px',
            scale: 2,
            rotate: '1turn'
        })
    }
});

//DOM ATTRIBUTES
let cssTransformDomAttributes = document.getElementById('css-transform-dom-attributes');
let value = 0;
let cssTransformDomAttributesAnime;
let textOutput = document.getElementById('text-output');
cssTransformDomAttributes.parentElement.addEventListener('click', e =>{
    if(cssTransformDomAttributesAnime){
        cssTransformDomAttributesAnime.restart();
    }
    else{
        console.log('in loop');
        cssTransformDomAttributesAnime = anime({
            targets: '#text-output',
            value: [0,1000],
            round: 1,
            easing: 'easeInOutExpo'
        });
        console.log("loop finished");
        
    }
})

//ANIMATION RESET WHEN CLICKING OUT OF BOX
window.addEventListener('click', e => {
    try{
        //CSS PROPERTIES
        if(e.target !== cssPropertiesSquare && e.target !== cssPropertiesSquare.parentNode){
            cssPropertiesSquareAnime.reset();
        }
        //CSS TRANSFORMS
        if(e.target !== cssTransformSquare && e.target !== cssTransformSquare.parentNode){
            cssTransformSquareAnime.reset();
        }
        //DOM ATTRIBUTES
        if(e.target !== cssTransformDomAttributes && e.target!== cssTransformDomAttributes.parentNode){
            cssTransformDomAttributesAnime.reset();
        }
    }
    catch{
    }

})