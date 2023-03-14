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

let oko2 = document.querySelector("#showBck2I");
let empire = document.querySelector("#empire");
let oko1 = document.querySelector("#slidesOko");
let oko3 = document.querySelector("#oko3");
let oko4 = document.querySelector("#oko4");
let american = document.querySelector("#american")
let classic = document.querySelector("#classic")
let loft = document.querySelector("#loft")
let minimalism = document.querySelector("#minimalism")
let provence = document.querySelector("#provence")
let romantism = document.querySelector("#romantism")
let scandi = document.querySelector("#scandi")
let medi = document.querySelector("#medi")
let hight = document.querySelector("#hight")
let eclectic = document.querySelector("#eclectic")

american.classList.add("listBorder");

empire.addEventListener("click", ()=>{
  oko1.classList.add('a2');
  oko1.classList.remove('showBck1');
  oko2.classList.add('b2');
  oko2.classList.remove('showBck2');
  oko3.classList.add('c2');
  oko3.classList.remove('showBck3');
  oko4.classList.add('d2');
  oko4.classList.remove('showBck4');
  empire.classList.add("listBorder");
 
  american.classList.remove('listBorder');
  classic.classList.remove('listBorder');
  loft.classList.remove('listBorder');
  minimalism.classList.remove('listBorder');
  provence.classList.remove('listBorder');
  romantism.classList.remove('listBorder');
  scandi.classList.remove('listBorder');
  medi.classList.remove('listBorder');
  eclectic.classList.remove('listBorder');
  hight.classList.remove('listBorder');
})

american.addEventListener("click", ()=>{
  oko1.classList.add('showBck1');
  oko1.classList.remove('a2');
  oko2.classList.add('showBck2');
  oko2.classList.remove('b2');
  oko3.classList.add('showBck3');
  oko3.classList.remove('c2');
  oko4.classList.add('showBck4');
  oko4.classList.remove('d2');
  american.classList.add("listBorder");

  empire.classList.remove('listBorder');
  classic.classList.remove('listBorder');
  loft.classList.remove('listBorder');
  minimalism.classList.remove('listBorder');
  provence.classList.remove('listBorder');
  romantism.classList.remove('listBorder');
  scandi.classList.remove('listBorder');
  medi.classList.remove('listBorder');
  hight.classList.remove('listBorder');
  eclectic.classList.remove('listBorder');
})

classic.addEventListener("click", ()=>{
  oko1.classList.add('showBck1');
  oko1.classList.remove('a2');
  oko2.classList.add('showBck2');
  oko2.classList.remove('b2');
  oko3.classList.add('showBck3');
  oko3.classList.remove('c2');
  oko3.classList.add('fade');
  oko4.classList.add('showBck4');
  oko4.classList.remove('d2');
  classic.classList.add("listBorder");
 
  american.classList.remove('listBorder');
  empire.classList.remove('listBorder');
  loft.classList.remove('listBorder');
  minimalism.classList.remove('listBorder');
  provence.classList.remove('listBorder');
  romantism.classList.remove('listBorder');
  scandi.classList.remove('listBorder');
  medi.classList.remove('listBorder');
  hight.classList.remove('listBorder');
  eclectic.classList.remove('listBorder');
})

loft.addEventListener("click", ()=>{
  oko1.classList.add('a2');
  oko1.classList.remove('showBck1');
  oko2.classList.add('b2');
  oko2.classList.remove('showBck2');
  oko3.classList.add('c2');
  oko3.classList.remove('showBck3');
  oko4.classList.add('d2');
  oko4.classList.remove('showBck4');
  loft.classList.add("listBorder");
 
  american.classList.remove('listBorder');
  empire.classList.remove('listBorder');
  classic.classList.remove('listBorder');
  minimalism.classList.remove('listBorder');
  provence.classList.remove('listBorder');
  romantism.classList.remove('listBorder');
  scandi.classList.remove('listBorder');
  medi.classList.remove('listBorder');
  hight.classList.remove('listBorder');
  eclectic.classList.remove('listBorder');
})

minimalism.addEventListener("click", ()=>{
  oko1.classList.add('showBck1');
  oko1.classList.remove('a2');
  oko2.classList.add('showBck2');
  oko2.classList.remove('b2');
  oko3.classList.add('showBck3');
  oko3.classList.remove('c2');
  oko3.classList.add('fade');
  oko4.classList.add('showBck4');
  oko4.classList.remove('d2');
  minimalism.classList.add("listBorder");
 
  american.classList.remove('listBorder');
  classic.classList.remove('listBorder');
  empire.classList.remove('listBorder');
  loft.classList.remove('listBorder');
  provence.classList.remove('listBorder');
  romantism.classList.remove('listBorder');
  scandi.classList.remove('listBorder');
  medi.classList.remove('listBorder');
  hight.classList.remove('listBorder');
  eclectic.classList.remove('listBorder');
})

provence.addEventListener("click", ()=>{
  oko1.classList.add('a2');
  oko1.classList.remove('showBck1');
  oko2.classList.add('b2');
  oko2.classList.remove('showBck2');
  oko3.classList.add('c2');
  oko3.classList.remove('showBck3');
  oko4.classList.add('d2');
  oko4.classList.remove('showBck4');
  provence.classList.add("listBorder");
 
 
  american.classList.remove('listBorder');
  minimalism.classList.remove('listBorder');
  empire.classList.remove('listBorder');
  classic.classList.remove('listBorder');
  minimalism.classList.remove('listBorder');
  romantism.classList.remove('listBorder');
  scandi.classList.remove('listBorder');
  medi.classList.remove('listBorder');
  hight.classList.remove('listBorder');
  eclectic.classList.remove('listBorder');
})

romantism.addEventListener("click", ()=>{
  oko1.classList.add('showBck1');
  oko1.classList.remove('a2');
  oko2.classList.add('showBck2');
  oko2.classList.remove('b2');
  oko3.classList.add('showBck3');
  oko3.classList.remove('c2');
  oko3.classList.add('fade');
  oko4.classList.add('showBck4');
  oko4.classList.remove('d2');
  romantism.classList.add("listBorder");
 
 
  american.classList.remove('listBorder');
  minimalism.classList.remove('listBorder');
  empire.classList.remove('listBorder');
  classic.classList.remove('listBorder');
  minimalism.classList.remove('listBorder');
  provence.classList.remove('listBorder');
  scandi.classList.remove('listBorder');
  medi.classList.remove('listBorder');
  hight.classList.remove('listBorder');
  eclectic.classList.remove('listBorder');
})

scandi.addEventListener("click", ()=>{
  oko1.classList.add('a2');
  oko1.classList.remove('showBck1');
  oko2.classList.add('b2');
  oko2.classList.remove('showBck2');
  oko3.classList.add('c2');
  oko3.classList.remove('showBck3');
  oko4.classList.add('d2');
  oko4.classList.remove('showBck4');
  scandi.classList.add("listBorder");
 
 
  american.classList.remove('listBorder');
 
  minimalism.classList.remove('listBorder');
  empire.classList.remove('listBorder');
  classic.classList.remove('listBorder');
  minimalism.classList.remove('listBorder');
  romantism.classList.remove('listBorder');
  medi.classList.remove('listBorder');
  hight.classList.remove('listBorder');
  eclectic.classList.remove('listBorder');
})

medi.addEventListener("click", ()=>{
  oko1.classList.add('showBck1');
  oko1.classList.remove('a2');
  oko2.classList.add('showBck2');
  oko2.classList.remove('b2');
  oko3.classList.add('showBck3');
  oko3.classList.remove('c2');
  oko3.classList.add('fade');
  oko4.classList.add('showBck4');
  oko4.classList.remove('d2');
  medi.classList.add("listBorder");
 
 
  american.classList.remove('listBorder');
  romantism.classList.remove('listBorder');
  empire.classList.remove('listBorder');
  classic.classList.remove('listBorder');
  minimalism.classList.remove('listBorder');
  provence.classList.remove('listBorder');
  scandi.classList.remove('listBorder');
  hight.classList.remove('listBorder');
  eclectic.classList.remove('listBorder');
})

hight.addEventListener("click", ()=>{
  oko1.classList.add('a2');
  oko1.classList.remove('showBck1');
  oko2.classList.add('b2');
  oko2.classList.remove('showBck2');
  oko3.classList.add('c2');
  oko3.classList.remove('showBck3');
  oko4.classList.add('d2');
  oko4.classList.remove('showBck4');
  hight.classList.add("listBorder");
 
 
  american.classList.remove('listBorder');
 
 
  minimalism.classList.remove('listBorder');
  empire.classList.remove('listBorder');
  classic.classList.remove('listBorder');
  minimalism.classList.remove('listBorder');
  romantism.classList.remove('listBorder');
  medi.classList.remove('listBorder');
  eclectic.classList.remove('listBorder');
})

eclectic.addEventListener("click", ()=>{
  oko1.classList.add('showBck1');
  oko1.classList.remove('a2');
  oko2.classList.add('showBck2');
  oko2.classList.remove('b2');
  oko3.classList.add('showBck3');
  oko3.classList.remove('c2');
  oko3.classList.add('fade');
  oko4.classList.add('showBck4');
  oko4.classList.remove('d2');
  eclectic.classList.add("listBorder");
 
 
  american.classList.remove('listBorder');
 
  romantism.classList.remove('listBorder');
  empire.classList.remove('listBorder');
  classic.classList.remove('listBorder');
  minimalism.classList.remove('listBorder');
  provence.classList.remove('listBorder');
  scandi.classList.remove('listBorder');
  hight.classList.remove('listBorder');
})