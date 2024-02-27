'use strict';

/**
 * Element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }


/**
 * Navbar variables
 */

const navbar = document.querySelector("[data-navbar]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navCloseBtn, navOpenBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header scroll sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

})



//------------------for sliding images--------------
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.querySelectorAll("#imgs");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); 
  }

  // ----------CARDS----------------

        function toggleContent() {
            var content = document.getElementById("profileContent");
            var button = document.querySelector(".read-more-button");

            if (content.style.display === "none") {
                content.style.display = "block";
                button.textContent = "Close";
            } else {
                content.style.display = "none";
                button.textContent = "Read More";
            }
        }
  
        //------two------------
         function toggleContent2() {
           var content = document.getElementById("profileContent2");
           var button = document.querySelector(".read-more-button");

           if (content.style.display === "none") {
             content.style.display = "block";
             button.textContent = "Close";
           } else {
             content.style.display = "none";
             button.textContent = "Read More";
           }
         }

        //  ------------three-----------
         function toggleContent3() {
           var content = document.getElementById("profileContent3");
           var button = document.querySelector(".read-more-button");

           if (content.style.display === "none") {
             content.style.display = "block";
             button.textContent = "Close";
           } else {
             content.style.display = "none";
             button.textContent = "Read More";
           }
         }
         
        //  ------------FOUR--------------
              function toggleContent4() {
                var content = document.getElementById("profileContent4");
                var button = document.querySelector(".read-more-button");

                if (content.style.display === "none") {
                  content.style.display = "block";
                  button.textContent = "Close";
                } else {
                  content.style.display = "none";
                  button.textContent = "Read More";
                }
              }


              //  ------------FIVE-----------
         function toggleContent5() {
           var content = document.getElementById("profileContent5");
           var button = document.querySelector(".read-more-button");

           if (content.style.display === "none") {
             content.style.display = "block";
             button.textContent = "Close";
           } else {
             content.style.display = "none";
             button.textContent = "Read More";
           }
         }
        //  -------------SIX-----------
              function toggleContent6() {
                var content = document.getElementById("profileContent6");
                var button = document.querySelector(".read-more-button");

                if (content.style.display === "none") {
                  content.style.display = "block";
                  button.textContent = "Close";
                } else {
                  content.style.display = "none";
                  button.textContent = "Read More";
                }
              }
// -----------------SEVEN-----------
      function toggleContent7() {
        var content = document.getElementById("profileContent7");
        var button = document.querySelector(".read-more-button");

        if (content.style.display === "none") {
          content.style.display = "block";
          button.textContent = "Close";
        } else {
          content.style.display = "none";
          button.textContent = "Read More";
        }
      }

      // ---------------EIGHT-------------
            function toggleContent8() {
              var content = document.getElementById("profileContent8");
              var button = document.querySelector(".read-more-button");

              if (content.style.display === "none") {
                content.style.display = "block";
                button.textContent = "Close";
              } else {
                content.style.display = "none";
                button.textContent = "Read More";
              }
            }




