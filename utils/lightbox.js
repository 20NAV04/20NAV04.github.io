const images = Array.from(document.querySelectorAll('#gallery-container>.image>img'));
const lightbox = document.getElementById('lightbox');
const lbImgContainer = document.getElementById('lb-img-container');

images.forEach(elem=>{
    elem.addEventListener('click', ()=>{
        const img = document.createElement('img');
        img.src = elem.src;

        while(lbImgContainer.firstChild) {
            lbImgContainer.removeChild(lbImgContainer.firstChild);
        }

        lbImgContainer.appendChild(img);
        lightbox.classList.add('active');
    })
})

lightbox.onclick = (e)=> {
    console.log(e.target);
    if (!(e.target.matches('img'))) {
        lightbox.classList.remove('active');
    } else {
        return;
    }
}