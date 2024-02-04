const accordion = document.querySelectorAll('.accordion>h1');

Array.from(accordion).forEach(elem=> {
    elem.addEventListener("click", (e)=>{
        e.target.classList.toggle('active');
        const panel = e.target.nextElementSibling;
        panel.classList.toggle('visible-panel');
    });
})