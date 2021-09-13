function classToggle() {
    const navs = document.querySelectorAll('.Navbar__items');
  
  navs.forEach(nav => nav.classList.toggle('.Navbar__toggleshow'));
  }
  
  document.querySelector('.Navbar-toggle')
  .addEventListener('click', classToggle);
  
  