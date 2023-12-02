const shareBtn = document.getElementById("share_image")
const share__box = document.getElementById("share__box")

shareBtn.addEventListener('click',()=>{
    share__box.classList.toggle('hidden')
})
