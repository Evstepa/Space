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
    });

    items.forEach((item) => {
      item.addEventListener('click', (e) => {
        let href = e.currentTarget.href.split('#')[1];
        const target = document.getElementById(href).firstElementChild;
        if (!target.classList.contains('unvisible')) {
          e.preventDefault();
        }
        target.classList.toggle('unvisible');
      })
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
        // accord.forEach (function(btn) {
        //   btn.classList.remove('item__btn--active');
        // });
        e.currentTarget.classList.add('item__btn--active');
      };
    });
  });

  // слайдер в модальном окне
  if(document.querySelector('.modal__swiper')) {
    const swiperModal = document.querySelector('.modal__swiper');
    const swiperOpenBtn = document.querySelector('.item__swiper-open');

    swiperOpenBtn.addEventListener('click', function(e) {
      //swiper
      const swiperVoids = new Swiper('.modal__swiper-big.voids__swiper', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 40,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: 'true',
        },
        slidesPerView: 'auto',
        slidesPerGroup: 1,
      });

      //открыть окно
      swiperModal.classList.add('modal--isopen');
      document.body.classList.add('stop-scroll');

      //закрыть окно
      const btnSwiperModalClose = document.querySelector('.modal__swiper-close');
      btnSwiperModalClose.addEventListener('click', () => {
        swiperModal.classList.remove('modal--isopen');
        document.body.classList.remove('stop-scroll');
      });
    })
  }
}) ();

