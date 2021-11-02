const socials = document.querySelector('.open-share');
const shareBtn = document.getElementById('share');

const removeShareButton = document.getElementById('remove-share');
shareBtn.addEventListener('click', () =>{
    socials.classList.toggle('clicked');
})
removeShareButton.addEventListener('click', () =>{
    socials.classList.remove('clicked');
})