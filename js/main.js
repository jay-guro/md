window.onload = function () {
  particlesJS.load('tsparticles-js_cs', 'js/particles.json', function () {
    console.log('callback - particles.js config loaded');
  });
};

function throttle(fn, delay) {
  let last;
  let timer;
  return () => {
    const now = +new Date();
    if (last && now < last + delay) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn();
      }, delay);
    } else {
      last = now;
      fn();
    }
  };
}
function onScroll() {
  if (window.pageYOffset) {
    $$header.classList.add('is-active');
  } else {
    $$header.classList.remove('is-active');
  }
}
const $$header = document.querySelector('.js-header');
window.addEventListener('scroll', throttle(onScroll, 25));

function myFunction() {
  var x = document.getElementById('mobile-header');
  if (x.className === 'mobile-header') {
    x.className += ' responsive';
  } else {
    x.className = 'mobile-header';
  }
}

$(function () {
  $.scrollUp({
    scrollName: 'scrollUp',
    topDistance: '300',
    topSpeed: 100,
    animation: 'fade',
    animationInSpeed: 200,
    animationOutSpeed: 200,
    scrollText: '<i class="ti-arrow-up"></i>',
    activeOverlay: false,
  });
});

function generateRandomString() {
  const rand = Math.floor(Math.random() * 10);
  let randStr = '';

  for (let i = 0; i < 20 + rand; i++) {
    randStr += String.fromCharCode(33 + Math.floor(Math.random() * 94));
  }

  return randStr;
}

window.onload = () => {
  const fragment = new URLSearchParams(window.location.hash.slice(1));

  if (fragment.has('access_token')) {
    const urlState = fragment.get('state');
    const stateParameter = localStorage.getItem('stateParameter');
    if (stateParameter !== atob(decodeURIComponent(urlState))) {
      return console.log('You may have been clickjacked!');
    }

    const accessToken = fragment.get('access_token');
    const tokenType = fragment.get('token_type');

    fetch('https://discord.com/api/users/@me', {
      headers: {
        authorization: `${tokenType} ${accessToken}`,
      },
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        const { username, discriminator } = response;
        document.getElementById('info').innerText += ` ${username}#${discriminator}`;
      })
      .catch(console.error);
  } else {
    const randStr = generateRandomString();
    localStorage.setItem('stateParameter', randStr);

    document.getElementById('login').href += `&state=${encodeURIComponent(btoa(randStr))}`;
    document.getElementById('login').style.display = 'block';
  }
};

$(function () {
  $('#accordion').accordion({
    heightStyle: 'content',
    collapsible: true,
    active: false,
  });
});
