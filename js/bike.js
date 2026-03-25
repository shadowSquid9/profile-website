

//controls the hover effect
function hover(n) {
var hover = document.getElementsByClassName("hover");
hover[n].style.display = "block";
hover[n].style.visibility = "visible";
console.log("hovered");
console.log(n);
}

function remove(n) {
var hover = document.getElementsByClassName("hover");
hover[n].style.visibility = "hidden";
console.log("removed");
}



var mq = window.matchMedia( "(max-width: 760px)" );
if (mq.matches) 
  {
    // window width is at less than 760px
    var slideIndex = 1;
    showSlides(slideIndex);


    // Next/previous buttions
    function plusSlides(n) 
    {
      showSlides(slideIndex += n);
    }

    function showSlides(n) 
    {
      var slides = document.getElementsByClassName("Slides1");

      //makes sure that u cant go past the number of sides 
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}

      // makes every slide not display
      slides[0].style.display = "none";
      slides[1].style.display = "none";
      slides[2].style.display = "none";
      slides[3].style.display = "none";
      slides[4].style.display = "none";
      slides[5].style.display = "none";

      // displays the slide
      slides[slideIndex-1].style.display = "inline";

    }
  }
else 
  {
    // window width is greater than 760px
    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous buttions
    function plusSlides(n) 
    {
      showSlides(slideIndex += n);
    }

    function showSlides(n) 
    {
      var slides = document.getElementsByClassName("Slides");

      //makes sure that u cant go past the number of sides 
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}

      // makes every slide not display
      slides[0].style.display = "none";
      slides[1].style.display = "none";

      // displays the slide
      slides[slideIndex-1].style.display = "inline";

    }
  }









