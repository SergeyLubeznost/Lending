let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let text = document.getElementsByClassName("textlist");
  let textcity = document.querySelector("#city");
  let textsquare = document.querySelector("#square");
  let textmonth = document.querySelector("#month");
  let textrequest = document.querySelector("#request");

  for (i = 0; i < slides.length; i++){
    if(n==1){
      textcity.innerHTML="Rostov-on-Don LCD admiral";
    }
    if(n==2){
      textcity.innerHTML="Sochi Thieves            ";
      textsquare.innerHTML="45 m2";
      textmonth.innerHTML="2.5 mounth";
      textrequest.innerHTML="No limits";
    }
    if(n==3){
      textcity.innerHTML="Rostov-on-Don Patriotic";
      textsquare.innerHTML="80 m2";
      textmonth.innerHTML="1.5 mounth";
      textrequest.innerHTML="No limits";
    }
    if (n > slides.length){
      slideIndex = 1
      textcity.innerHTML="Rostov-on-Don LCD admiral";
      textsquare.innerHTML="35 m2";
      textmonth.innerHTML="3.5 mounth";
      textrequest.innerHTML="Upon request";
    }
   
  }

  if (n > slides.length){
    slideIndex = 1
  }
  if (n < 1){
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++){
    slides[i].style.display= "none"; 
  }
  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace("active","");
  }
  for (i = 0; i < text.length; i++){
    text[i].className = text[i].className.replace("actives","");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  text[slideIndex-1].className += " actives";
  
}



