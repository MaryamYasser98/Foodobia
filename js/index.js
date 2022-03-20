
let bar = document.querySelector('#menu-bars');
let nav = document.querySelector('.navbar');

let search_bar = document.querySelector('#search-icon')
let close_search = document.querySelector('#close')  
let forms = document.querySelector('.search-form');

let All_sections = document.querySelectorAll('section');
let Links_navbar = document.querySelectorAll('header .navbar a')

bar.onclick = function(){
    bar.classList.toggle('fa-times')
    nav.classList.toggle('active')

    // search_bar.classList.remove('fa-times');
    // forms.classList.remove('active')
}

// search_bar.onclick = function(){
//     search_bar.classList.toggle('fa-times');
//     forms.classList.toggle('active')

//     bar.classList.remove('fa-times')
//     nav.classList.remove('active')
// }

search_bar.onclick = function(){
    forms.classList.toggle('active')
}

close_search.onclick = function(){
    forms.classList.remove('active')
}



window.onscroll = function(){
    bar.classList.remove('fa-times')
    nav.classList.remove('active')
    // search_bar.classList.remove('fa-times');
    // forms.classList.remove('active')

    //******* scroll py *********/
    All_sections.forEach(s =>{

      let top = window.scrollY;
      let height = s.offsetHeight;
      let offset = s.offsetTop - 150;
      let id = s.getAttribute('id');
      // console.log(id)

      if(top > offset && top < offset + height){
        Links_navbar.forEach(link =>{
          link.classList.remove('active');
          document.querySelector(`header .navbar a[href*= ${id}]`).classList.add('active');
        })//end of forEach links

      }//end of if 
    })//end of foEach


}//end of on scroll



var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });


  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints:{
      0:{slidesPerView:1,
      },
      640:{slidesPerView:2,
      },
      768:{slidesPerView:3,
      },
    }
  });



// loading
function loading(){
  document.querySelector('.loading-container').classList.add('fade-out')
}
function fadeOut(){
  setInterval(loading,3000)
}
window.onload = fadeOut();

