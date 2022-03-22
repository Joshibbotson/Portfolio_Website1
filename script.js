const scrollDown = document.querySelector("#scrollDown");


scrollDown.addEventListener('click', () => {
    console.log('scrolled!');
    window.scroll({
        top:800,
        behavior: 'smooth'
    });
    
    
})

const imageChange = document.querySelector('img.main-image')

imageChange.innerHTML = '<img class="main-image" id="main-image" src="https://3.imimg.com/data3/ON/CI/MY-7084738/face-sculpture-500x500.jpg" alt="Statue face">'