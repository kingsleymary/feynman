let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let slide = document.querySelector('.carousel');
let list = document.querySelector('.list');
let thumbnail = document.querySelector('.thumbnail');
let darkMode = document.getElementById("switch");
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');
let menuOpen = false;

toggle.addEventListener('click', function() {
    if (menuOpen == false) {
        nav.style.display = "block";
        menuOpen = true;
    }
     else if (menuOpen == true) {
        nav.style.display = "none";
        menuOpen = false;
     }
});

darkMode.addEventListener('click', function() {
    document.body.classList.toggle("dark");
})

nextButton.onclick = function() {
    showSlider('next');
}

prevButton.onclick = function() {
    showSlider('prev');
}

let timeRunning = 3000;
let autoRun = 7000;
let runTimeOut;
let autoNext = setTimeout(() => {
        nextButton.click();
    }, autoRun);

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.item');
    let itemThumb = document.querySelectorAll('.t-item');

    if(type === 'next') {
        list.appendChild(itemSlider[0]);
        thumbnail.appendChild(itemThumb[0]);
        slide.classList.add('next');
    } else {
        let replace = itemSlider.length - 1;
        list.prepend(itemSlider[replace]);
        thumbnail.prepend(itemThumb[replace]);
        slide.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        slide.classList.remove('next');
        slide.classList.remove('prev');
    }, timeRunning)

    clearTimeout(autoNext);
    autoNext = setTimeout(() => {
        nextButton.click();
    }, autoRun)
}

document.querySelectorAll('a[href^="#biology"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


document.querySelectorAll('a[href^="#research"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


document.querySelectorAll('a[href^="#awards"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


document.querySelectorAll('a[href^="#works"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


document.querySelectorAll('a[href^="#gallery"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const modalTrigger = document.getElementById('modal-trigger');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');

modalTrigger.addEventListener('click', () => {
  modal.style.display = 'flex';
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});
//  Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});



const modalTriggerTwo = document.getElementById('modal-trigger-2');
const modalTwo = document.getElementById('modal-2');
const modalCloseTwo = document.getElementById('modal-close-2');

modalTriggerTwo.addEventListener('click', () => {
  modalTwo.style.display = 'flex';
});

modalCloseTwo.addEventListener('click', () => {
  modalTwo.style.display = 'none';
});
//  Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === modalTwo) {
    modalTwo.style.display = 'none';
  }
});


const modalTriggerThree = document.getElementById('modal-trigger-3');
const modalThree = document.getElementById('modal-3');
const modalCloseThree = document.getElementById('modal-close-3');

modalTriggerThree.addEventListener('click', () => {
  modalThree.style.display = 'flex';
});

modalCloseThree.addEventListener('click', () => {
  modalThree.style.display = 'none';
});
//  Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === modalThree) {
    modalThree.style.display = 'none';
  }
});


const modalTriggerFour = document.getElementById('modal-trigger-4');
const modalFour = document.getElementById('modal-4');
const modalCloseFour = document.getElementById('modal-close-4');

modalTriggerFour.addEventListener('click', () => {
  modalFour.style.display = 'flex';
});

modalCloseFour.addEventListener('click', () => {
  modalFour.style.display = 'none';
});
//  Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === modalFour) {
    modalFour.style.display = 'none';
  }
});