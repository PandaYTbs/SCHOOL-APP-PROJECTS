document.getElementById('imgWidthSlider').addEventListener('input', function() {
    const sliderValue = parseFloat(this.value)
    const images = document.querySelectorAll('.galery img')
    const imageWidth = sliderValue + '%'
    const marginWidth = calcMargins(sliderValue, 3)
 
    images.forEach((image, index) => {
        image.style.width = imageWidth
        if((index + 1) % 3 !== 0)
            image.style.marginRight = marginWidth + '%'
        else
            image.style.marginRight = '0%'
    })
})
 
function calcMargins(sliderValue, perRow) {
    const totalImageWidth = perRow * sliderValue
    const totalMarginSpace = 100 - totalImageWidth
    return totalMarginSpace / (perRow - 1)
}
 
document.querySelectorAll('.galery img').forEach(image => {
    image.addEventListener('click', () => {
        const lightboxImge = document.getElementById('lightbox-img')
        lightboxImge.src = image.src
        document.getElementById('lightbox').style.display = 'flex'
    })
})
 
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none'
}