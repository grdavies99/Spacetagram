function LikeAnimation(name){
        $('i#title-of-the-image').toggleClass('fa-heart-animation');
}

function LoadContent(){
    var pictureObject = "";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            pictureObject = JSON.parse(this.responseText);
            $('p.card-text').html(pictureObject.explanation);
            $('img.card-img').attr('src', pictureObject.url);
            $('h5.card-title').html('<button class=" like-review" onclick="LikeAnimation(\'title of the image\');"><i class="fa fa-heart" id="title-of-the-image"></i> </button>' 
            + pictureObject.title);
            // $('i#title-of-the-image').attr('data-title', pictureObject.title);
        }
    };
        
    xmlhttp.open("GET", "https://api.nasa.gov/planetary/apod?api_key=E0ivgdohXIG7nAB0msyOhb5LpZEDQX6YYDWOGrIR", true);
    xmlhttp.send();
    
}


