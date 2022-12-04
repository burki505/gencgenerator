const responsive = {
  0: {
      items: 1
  },
  320: {
      items: 1
  },
  560: {
      items: 2
  },
  960: {
      items: 3
  }
}

const navShow = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.middle-menus');
    const links = document.querySelectorAll('.middle-menus a');
  
    burger.addEventListener('click',()=>{
      nav.classList.toggle('middle-menus-active');
      
  
      links.forEach((link,index)=>{
        if (link.style.animation) {
          link.style.animation = '';
        }else{
          link.style.animation = `linksFade 0.5s ease forwards ${index / 5 + 0.2}s`;
        }
      });
  
      
    });
  }

  const card1=document.querySelector(".card-1");
  const card2=document.querySelector(".card-2");
  const card3=document.querySelector(".card-3");
  const card4=document.querySelector(".card-4");
  const plus1=document.querySelector(".plas1");
  const plus2=document.querySelector(".plas2");
  const plus3=document.querySelector(".plas3");
  const plus4=document.querySelector(".plas4");

  card1.addEventListener("mouseover",function(){
    plus1.style.background="orange";
  });
  card1.addEventListener("mouseout",function(){
    plus1.style.background="transparent";
  });
  
  card2.addEventListener("mouseover",function(){
    plus2.style.background="orange";
  });
  card2.addEventListener("mouseout",function(){
    plus2.style.background="transparent";
  });

  card3.addEventListener("mouseover",function(){
    plus3.style.background="orange";
  });
  card3.addEventListener("mouseout",function(){
    plus3.style.background="transparent";
  });

  card4.addEventListener("mouseover",function(){
    plus4.style.background="orange";
  });
  card4.addEventListener("mouseout",function(){
    plus4.style.background="transparent";
  });


  button=$("#up-btn");

button.click(function () {
  $('html, body').animate({
      scrollTop: 0
  }, 1000);
})


  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive
});

navShow();
AOS.init();





  