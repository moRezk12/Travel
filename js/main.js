const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")


if(navToggle){
    navToggle.addEventListener("click" , () =>{
        navMenu.classList.add("show-menu"); 
    })
};

if(navClose) {
    navClose.addEventListener("click" , () =>{
        navMenu.classList.remove("show-menu"); 
    })
};



// show scroll

const scrollup = ()=>{
    const scrollup = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                        : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll' , scrollup);





// SCROLL REVEAL ANIMATION

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '3000',
    delay: 400,
    // reset: true //Animation repeat
})

sr.reveal(`.home-data , .explore-data, .explore-user , .footer-container`);
sr.reveal(`.home-card` , {delay: 600,distance:'100px', interval: 100});
sr.reveal(`.about-data , .join-image` , {origin: 'right'});
sr.reveal(`.about-image , .join-data` , {origin: 'left'});
sr.reveal(`.popular-card` , {interval: 200});

