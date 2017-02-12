// czekanie na zaladowanie DOM
// $(document).ready(function(){  
//   console.log('DOM załadowany - można się bawić');
// });

// czekanie na załadowanie DOM
$(function(){
  var carouselList = $("#carousel ul");

  setInterval(changeSlide, 3000); //co 3 sek. wykona funkcję zmieniającą slajd. 
  
  function changeSlide(){
  carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);    
  }

  function moveFirstSlide(){ 
  var firstItem = carouselList.find("li:first");
  var lastItem = carouselList.find("li:last");
  lastItem.after(firstItem);
  carouselList.css({marginLeft:0});
}
});





