const anchors = [... document.querySelectorAll('a[href*="#"]')]
  , search = document.querySelector('.navbar-search')
  , burger = document.querySelector('.navbar-menu__button')
  , navbarMobile = document.querySelector('.navbarMobile')
  , navbarMobileAnimation = [... document.querySelectorAll('.navbarMobile__link')]
  , navbarMenu = document.querySelector('.navbar-menu')
  , navbarWrap__menu = document.querySelector('.navbar-wrap__menu')
  , input = document.querySelector('.navbar-search__input');



anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();  
    let coordYItemHref = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;

    setTimeout(function timerFunction() {
      let timer = setTimeout(timerFunction, 1);

      if (window.pageYOffset > coordYItemHref) clearTimeout(timer);
      scrollTo(window.pageYOffset, window.pageYOffset + 10)
    }, 5)
  });
});

search.addEventListener('click', function(e) {
  let icon = document.querySelector('.navbar-search__icon')
    , logo = document.querySelector('.navbar-logo');

  logo.classList.add('navbar-logo_media');
  navbarWrap__menu.classList.add('navbar-wrap__menu_media');
  icon.classList.add('navbar-search__icon_n');
  input.classList.add('navbar-search__input_f');
  input.focus();
  
  navbarMenu.classList.add('navbar-menu_n');
  burger.classList.add('navbar-menu__button_f');
  
  setTimeout(function timerFunction() {
    let timer = setTimeout(timerFunction, 100);
    
    if (document.activeElement != input) {
      logo.classList.remove('navbar-logo_media');
      navbarWrap__menu.classList.remove('navbar-wrap__menu_media');
      icon.classList.remove('navbar-search__icon_n')
      input.classList.remove('navbar-search__input_f')
      navbarMenu.classList.remove('navbar-menu_n')
      burger.classList.remove('navbar-menu__button_f');

      clearTimeout(timer)
    };
  }, 100);
});

burger.addEventListener('click', function(e) {
  navbarMobile.classList.add('navbarMobile_f')

    setTimeout(function timerFunction () {
      let timer = setTimeout(timerFunction, 1);
      navbarMobile.style.opacity = `${+navbarMobile.style.opacity + 0.006}`
      if (navbarMobile.style.opacity > 1) clearTimeout(timer)
    }, 10)
})

navbarMobileAnimation.forEach((item) => {
  item.addEventListener('click', function(e) {
    setTimeout(function timerFunction () {
      let timer = setTimeout(timerFunction, 1);
      navbarMobile.style.opacity = `${+navbarMobile.style.opacity - 0.006}`
      if (navbarMobile.style.opacity == 0) clearTimeout(timer)
    }, 10)
  
    setTimeout(() => {
      navbarMobile.classList.remove('navbarMobile_f')
    }, 1000)
  });
})

let a = document.querySelectorAll('a')
  , h1 = document.querySelectorAll( 'h1')
  , h2 = document.querySelectorAll( 'h2')
  , h3 = document.querySelectorAll( 'h3')
  , p = document.querySelectorAll('p')
  , arrayWords = [];

arrayWords.push(a);
arrayWords.push(h1);
arrayWords.push(h2);
arrayWords.push(h3);
arrayWords.push(p);

let count = [];
let counter = 0;

function searchWords() {
  count = [];
  arrayWords.forEach((item) => {
    item.forEach((itemElem) => {

      if (itemElem.innerHTML.toLowerCase().split(' ').indexOf(input.value.toLowerCase()) != -1 && itemElem.getBoundingClientRect().top != 0 && itemElem.innerHTML != 0) {
        // console.log(itemElem.getBoundingClientRect().top)
        count.push(itemElem.getBoundingClientRect().top);    
        console.log(count.length);
      }

    });
  });
}


input.addEventListener('input', searchWords);
input.addEventListener('keyup', function moveToWords(e) {
  if (e.keyCode === 13) {
    if (count[counter]) {
      scrollTo(0, count[counter]);
      // setTimeout(function timerFunction() {
      //   let timer = setTimeout(timerFunction, 50);
      //   if (window.pageYOffset > count[counter]) clearTimeout(timer);
      //   scrollBy(0, 10); 
      // }, 50)
    } else {
      scrollTo(0, 0);

    }
    counter += 1;
  }
});

  

     



//   function search() {
 
//     var name = document.getElementById("searchForm").elements["searchItem"].value;
//     var pattern = name.toLowerCase();
//     var targetId = "";
  
//     var divs = document.getElementsByClassName("col-md-2");
//     for (var i = 0; i < divs.length; i++) {
//        var para = divs[i].getElementsByTagName("p");
//        var index = para[0].innerText.toLowerCase().indexOf(pattern);
//        if (index != -1) {
//           targetId = divs[i].parentNode.id;
//           document.getElementById(targetId).scrollIntoView();
//           break;
//        }
//     }  
//  }