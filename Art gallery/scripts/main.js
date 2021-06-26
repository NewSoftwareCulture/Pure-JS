const header = document.querySelector('header');
const body = document.querySelector('body');
const container = document.querySelector('.container');
const changeThemeButton = document.querySelector('#change_theme_button');

const elements = [body, header, changeThemeButton];

window.addEventListener('load', () => {
  loadContent(container)
  const theme = localStorage.getItem('theme');
  setTheme(theme);
});

const changeTheme = () => {
  const darkActive = elements.some((element) => element.classList.contains('dark'));
  const theme = darkActive ? 'light' : 'dark';
  setTheme(theme);
};

const setTheme = (theme = 'light') => {
  if (theme === 'light') {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'light');
    elements.forEach((element) => element.classList.remove('dark'))
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'dark');
    elements.forEach((element) => element.classList.add('dark'));
  };
};