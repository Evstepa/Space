(() => {
  //menu
  let menus = [...document.querySelectorAll('.circular-menu')];

  menus.map((menu) => {
    let items = menu.querySelectorAll('.circular-menu__link');
    let button = menu.querySelector('.circular-menu__button');
    let active = false;
    const length = items.length;
    const arc = 2 * Math.PI * (1 / length);
    const radius = 40;
    button.addEventListener('click', (e) => {
      e.preventDefault();
      active = !active;
      if (active) {
        button.classList.add('circular-menu__button-active');
        for (let i = 0; i < length; i++) {
          const angle = i * arc;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          items[i].style.left = 50 + x + '%';
          items[i].style.top = 50 + y + '%';
          items[i].style.opacity = 1;
        }
      } else {
        button.classList.remove('circular-menu__button-active');
        for (let i = 0; i < length; i++) {
          items[i].removeAttribute('style');
        }
      }
    })
  });

  //btn-up
  const $btn = document.getElementById('btn_up');

  window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', event => {
      if (event.currentTarget.scrollY > 100) {
        $btn.classList.remove('d-none');
      } else {
        $btn.classList.add('d-none');
      }
    }, {passive: true});

    $btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  });

  // аккордеон
  let accord = document.querySelectorAll('.item__btn');
  accord.forEach(function(accord_btn) {
    accord_btn.addEventListener('click', function(e) {
      if(e.currentTarget.classList.contains('item__btn--active')) {
        e.currentTarget.classList.remove('item__btn--active');
      }
      else {
        accord.forEach (function(btn) {
          btn.classList.remove('item__btn--active');

        });
        e.currentTarget.classList.add('item__btn--active');
      };
    });
  });

}) ();

