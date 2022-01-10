function LikeAnimation(name){
        $('i#title-of-the-image').toggleClass('fa-heart-animation');
}

function LoadContent(){
    var pictureObject = "";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            pictureObject = JSON.parse(this.responseText);
            console.log(pictureObject.explanation);
        }
    };
        
    xmlhttp.open("GET", "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", true);
    xmlhttp.send();
    return pictureObject.explanation;
}


