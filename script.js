const navIcon = document.querySelector('#navicon');
const navBar = document.querySelector('#navbar');
const closeIcon = document.querySelector('#close-icon');


const showNavBar = () => {
    navIcon.style.display = 'none';
    navBar.style.display = 'flex';
}

navIcon.addEventListener('click', showNavBar)

const closeNavBar = () => {
    navBar.style.display = "none";
    navIcon.style.display = "block";
}

closeIcon.addEventListener('click', closeNavBar);