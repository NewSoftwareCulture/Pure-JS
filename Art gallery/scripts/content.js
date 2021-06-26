const content = [
  {
    title: 'Copenhagen, Denmark',
    image: 'https://images.unsplash.com/photo-1561113500-8f4ad4f80a93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2250&q=80',
  },
  {
    title: 'Amsterdam, Netherlands',
    image: 'https://images.unsplash.com/photo-1542372401-dece95e4302d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
  },
  {
    title: 'Al Jaddaf, Dubai, United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1619645195119-82a608af08e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3000&q=80',
  },
  {
    title: 'Burj Al Arab, Dubai, United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1586643248404-1de8742a13ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80',
  },
  {
    title: 'Berlin, Germany',
    image: 'https://images.unsplash.com/photo-1562095670-19fc48376726?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3613&q=80',
  },
];

const deactive = () => {
  document
    .querySelectorAll('.slide')
    .forEach((slide) => {
      slide.classList.remove('active');
    });
};

const onClickSlide = (slide) => {
  slide.addEventListener('click', (i) => {
    const activeSlide = slide.classList.contains('active');
    if (activeSlide) {
      localStorage.removeItem('slide');
      return slide.classList.remove('active');
    };
    deactive();
    localStorage.removeItem('slide');
    localStorage.setItem('slide', slide.id);
    slide.classList.add('active');
  });
}

function loadContent(element) {
  const id = localStorage.getItem('slide');
  content.forEach((data, index) => {
    let slide = document.createElement('div');
    slide.classList.add('slide');
    slide.id = index;
    slide.innerHTML = `<h3>${data.title}</h3>`;
    slide.style.backgroundImage = `url('${data.image}')`;
    
    +id === index && slide.classList.add('active');

    onClickSlide(slide);
    
    element.appendChild(slide);
  });
};