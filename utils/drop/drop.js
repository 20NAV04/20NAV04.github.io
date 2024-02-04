navChecks = Array.from(document.querySelectorAll('.nav-check'));
toTopButton = document.getElementById('to-top');

document.addEventListener('click', (e) => {
    console.log(e.target);
    if(!(e.target.matches('.nav-check')) && !(e.target.matches('.nav-links-drop>div'))) {
        navChecks.forEach(elem=> {
            elem.checked = false;
        })
    }
})

window.addEventListener("scroll", ()=>{
    if (document.documentElement.scrollTop > 300) {
        toTopButton.classList.add('visible');
    } else {
        toTopButton.classList.remove('visible');
    }
});

toTopButton.addEventListener('click', ()=> {
    document.documentElement.scrollTop = 0;
});