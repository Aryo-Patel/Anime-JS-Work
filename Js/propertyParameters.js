
//SPECIFIC PROPERTY PARAMETERS
let specPropertyParameter = document.getElementById('specific-property-parameter-square');
let specPropertyParameterAnime;

specPropertyParameter.parentElement.addEventListener('click', e =>{
    if(specPropertyParameterAnime){
        specPropertyParameterAnime.restart();
    }
    else{
        specPropertyParameterAnime = anime({
            targets: specPropertyParameter,
            translateX: {
                value: 250,
                duration: 800
            },
            rotate: {
                value: 360,
                duration: 1800,
                easing: 'easeInOutSine'
            },
            scale: {
                value: 2,
                duration: 1600,
                delay: 800,
                easing: 'easeInOutQuart'
            },
            delay: 250
        })
    }
});


//ANIMATION RESET WHEN CLICKING OUT OF BOX
window.addEventListener('click', e => {
    try{
        //SPECIFIC PROPERTY PARAMETERS
        if(e.target !== specPropertyParameter && e.target !== specPropertyParameter.parentNode){
            specPropertyParameterAnime.reset();
        }
    }
    catch{
    }

})