//LINE ANIMATION
let myAnimationsLineNoText = document.getElementById('my-animations-line-no-text');
let myAnimationsLineNoTextAnime;

myAnimationsLineNoText.parentElement.addEventListener('click', e =>{
    if(myAnimationsLineNoTextAnime){
        myAnimationsLineNoTextAnime.restart();
    }
    else{
        myAnimationsLineNoTextAnime = anime({
            targets: myAnimationsLineNoText,
            scaleY: [0, 1],
            opacity: [0.1, 1],
            easing: 'easeOutExpo',
            duration: 400,
            complete: () =>{
                anime({
                    targets: myAnimationsLineNoText,
                    translateX: {
                        value: 250,
                        duration: 800
                    },
                    complete: () =>{
                        anime({
                            targets: myAnimationsLineNoText,
                            scaleY: [1, 0],
                            opacity: [1,0],
                            easing: 'easeOutExpo',
                            duration: 400,
                        })
                    }
                })
            }
        })
    }
});


//APPEARING TEXT
$('#intro-letters').each(function(){
    $(this).html($(this).text().replace(/\w/g, "<span id = intro-letter>$&</span>"));
});

let introLine = document.getElementById('intro-line');
let introLineAnime;

introLine.parentElement.parentElement.addEventListener('click', e =>{
    if(introLineAnime){
        introLineAnime.restart();
    }
    else{
        introLineAnime = anime({
            targets: '#intro-line',
            scaleY: [0, 1],
            opacity: [0.1, 1],
            easing: 'easeOutExpo',
            duration: 400,
            delay: 100,
            complete: () =>{
                anime({
                    targets: introLine,
                    translateX: [0, $('#intro-letters').width()],
                    easing: 'easeOutExpo',
                    duration: 600
                })
                anime({
                    targets: '#intro-letter',
                    opacity: [0,1],
                    easing: 'easeOutExpo',
                    //offset: '-=775px',
                    delay: function(element, i){
                        return 40 * (i+1);
                    },
                    complete: () =>{
                        anime({
                            targets: introLine,
                            scaleY: [1,0],
                            opacity: [1,0],
                            duration: 400
                        })
                    }
                })
            }
        })
    }
})