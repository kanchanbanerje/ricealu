$(document).ready(function() {
    // HEADER
    $(window).scroll(function(){
        var sticky = $('.site-header'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 600) sticky.addClass('sticky');
        else sticky.removeClass('sticky');
      });
    
    // MOBILE MENU
    
    
    // setTimeout(function() {
    //     $('.mmenu-open-fade').removeClass('mmenu-open-fade');
    // }, 4000);

    const menu = document.querySelector(".menu");
        const menuMain = menu.querySelector(".menu-main");
        const goBack = menu.querySelector(".go-back");
        const menuTrigger = document.querySelector(".mobile-menu-trigger");
        const closeMenu = menu.querySelector(".mobile-menu-close");
        let subMenu;
        menuMain.addEventListener("click", (e) => {
            if (!menu.classList.contains("active")) {
                return;
            }
            if (e.target.closest(".menu-item-has-children")) {
                const hasChildren = e.target.closest(".menu-item-has-children");
                showSubMenu(hasChildren);
            }
        });
        goBack.addEventListener("click", () => {
            hideSubMenu();
        })
        menuTrigger.addEventListener("click", () => {
            toggleMenu();
        })
        closeMenu.addEventListener("click", () => {
            toggleMenu();
        })
        document.querySelector(".menu-overlay").addEventListener("click", () => {
            toggleMenu();
        })
        function toggleMenu() {
            menu.classList.toggle("active");
            document.querySelector(".menu-overlay").classList.toggle("active");
        }
        function showSubMenu(hasChildren) {
            subMenu = hasChildren.querySelector(".sub-menu");
            subMenu.classList.add("active");
            subMenu.style.animation = "slideLeft 0.5s ease forwards";
            const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
            menu.querySelector(".current-menu-title").innerHTML = menuTitle;
            menu.querySelector(".mobile-menu-head").classList.add("active");
        }

        function hideSubMenu() {
            subMenu.style.animation = "slideRight 0.5s ease forwards";
            setTimeout(() => {
                subMenu.classList.remove("active");
            }, 300);
            menu.querySelector(".current-menu-title").innerHTML = "";
            menu.querySelector(".mobile-menu-head").classList.remove("active");
        }

        window.onresize = function () {
            if (this.innerWidth > 991) {
                if (menu.classList.contains("active")) {
                    toggleMenu();
                }

            }
        }
 
// hero slider

// $('.hero-slider').owlCarousel({
//     loop: true,
//     animateOut: 'fadeOut',
//     autoplay: true,
//     items: 1,
//     navText: ['<span class="zmdi zmdi-chevron-left"></span>', '<span class="zmdi zmdi-chevron-right"></span>'],
//     nav: false,
//     autoplayTimeout: 8000,
//     smartSpeed: 5000,
//     dots: false
// });

  // custom tab in impact stories page

//   $('.tab_item li a').on('click', function(){
//     var target = $(this).attr('data-rel');
//  $('.tab_item li a').removeClass('active');
//     $(this).addClass('active');
//     $("#"+target).fadeIn('slow').siblings(".tab-box").hide();
//     return false;
// });

// var swiper2 = new Swiper(".blog_right_sldr", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     loop: true,
//     autoplay: {
//         delay: 8500,
//         disableOnInteraction: false,
//     },
//     // effect: "fade",
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },

// });

// // trendy slider

// var swiper = new Swiper(".trendyslider", {
//     slidesPerView: 4,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     autoplay: {
//         delay: 5500,
//         disableOnInteraction: false,
//     },
//     loop: true,
//     loopFillGroupWithBlank: true,
//     breakpoints: {
//         1023: {
//             slidesPerView: 4
//         },
//         768: {
//             slidesPerView: 3
//         },
//         576: {
//             slidesPerView: 2
//         },
//         0: {
//             slidesPerView: 1
//         },
//     }
// });

// // banner slider

// var swiper2 = new Swiper(".banner-slider", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 8500,
//         disableOnInteraction: false,
//     },
//     effect: "fade",
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },

// });


});


