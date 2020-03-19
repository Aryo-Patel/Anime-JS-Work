

//container animations to make the correct container high light
let containers = document.querySelectorAll(".container");
containers = Array.from(containers);

containers.forEach((container, i) => {
    container.addEventListener('click', (e) =>{
        let classToAdd = container.parentNode.id + '-container-clicked';
        container.classList.add(classToAdd);
        containers.forEach((containerNest, j) =>{
            if(j !== i){
                for(let i  = 0; i < containerNest.classList.length; i++){
                    if(containerNest.classList[i].includes('-container-clicked')){
                        containerNest.classList.remove(containerNest.classList[i]);
                    }
                }    
            }
        })
    });
});

