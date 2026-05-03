let cats_array = [{"name":"kissa", "src":"images/kissa.jpg"}, {"name":"koira", "src":"images/koira.jpg"}, 
{"name":"koira2", "src":"images/koira2.jpg"}];

let index=0;
let localstoragekey = "kuvaID";
let kuva;


window.onload = function(){
    if(this.localStorage.hasOwnProperty(localstoragekey)){
        index = parseInt(localStorage.getItem(localstoragekey));
    }
    kuva = document.getElementById("kuvaID");
    kuva.src = cats_array[index].src;
}

function showPrev(){
    index--;
    
    if(index < 0){
        index = cats_array.length - 1;
    }
    localStorage.setItem(localstoragekey, index);
    
    kuva.src = cats_array[index].src;
}

function showNext(){
    index++;
   
    if(index >= cats_array.length){
        index = 0;
    }
    localStorage.setItem(localstoragekey, index);
    kuva.src = cats_array[index].src;
}

let autoplayInterval = null;

function togglePlay(button){
    if (autoplayInterval === null) {
        autoplayInterval = setInterval(showNext, 1000);
        button.classList.remove('bi-play-fill');
        button.classList.add('bi-pause-fill');
    } else {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
        button.classList.remove('bi-pause-fill');
        button.classList.add('bi-play-fill');
    }
}

