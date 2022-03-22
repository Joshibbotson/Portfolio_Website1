const scrollDown = document.querySelector("#scrollDown");


scrollDown.addEventListener('click', () => {
    console.log('scrolled!');
    window.scroll({
        top:800,
        behavior: 'smooth'
    });
    
    
})