const showModal = () => {
    let isOpen = document.getElementById('modal_video');
    isOpen.style.visibility = 'visible'
    isOpen.style.transition = 'all 0.5s'
}

const closeModal = () => {
    let onClose = document.getElementById('modal_video')
    onClose.style.visibility = 'hidden'
}
