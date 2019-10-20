const anchors = [... document.querySelectorAll('a[href*="#"]')]
  , search = document.querySelector('.navbar-search')
  , burger = document.querySelector('.navbar-menu__button')
  , navbarMobile = document.querySelector('.navbarMobile')
  , navbarMobileAnimation = [... document.querySelectorAll('.navbarMobile__link')];



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
  search.innerHTML = '<input type="search" placeholder="find" >'
  search.querySelector('input').classList = 'navbar-search__input'
  let input = document.querySelector('.navbar-search__input')
  input.focus();

  setTimeout(function timerFunction() {
    let timer = setTimeout(timerFunction, 100)

    if (document.activeElement != input) {
      search.innerHTML = '<span></span>'
      search.querySelector('span').classList = 'navbar-search__icon'
      clearTimeout(timer)
    }
  }, 100)
});

burger.addEventListener('click', function(e) {
  navbarMobile.classList.add('navbarMobile-f')

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
      navbarMobile.classList.remove('navbarMobile-f')
    }, 1000)
  });
})



