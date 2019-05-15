// toggle menu
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.getElementById('menu');

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("open");
}

  
  var hero_slider = new Swiper('.hero_slider_container', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  var tours_slider = new Swiper('.tours_slider_container', {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
 
    // when window width is <= 1279px
    // when window width is <= 839px
    839: {
      slidesPerView: 1,
      spaceBetween: 10
    },
  }
});

  var categories_slider = new Swiper('.categories_slider_container', {
    slidesPerView: 4,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
    // when window width is <= 599px
    599: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is <= 719px
    839: {
      slidesPerView: 2,
    },
    1279: {
      slidesPerView: 3,
    },
  }
});
 
// map
 function initMap() {
      //Map options

      var options = {
        zoom: 8,
        center: {lat: 41.729483, lng: 44.4884286}
      }

      // New Map
      var map = new google.maps.Map(document.getElementById('map'), options);

      // Add Marker
      var marker = new google.maps.Marker({
        position: {lat: 42.4668, lng: 45.9495}, 
        map:map,
        icon:'pin_map.png'
      });

      var infoWindow = new google.maps.InfoWindow({
        content:'<h1>Machavariani STR. 6</h1>'
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }

    // gallery slider
     var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop:true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });

    // კალენდარი
    $('.calendar').dateDropper();

    // Ion RangeSlider
    $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 1000,
      from: 200,
      to: 500,
      skin: "square",
      onChange: function (data) { 
        $('.start_value').val(data.from_pretty);
      },
      onFinish: function (data) {
        $('.finish_value').val(data.to_pretty);
      },
    });