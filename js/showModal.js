const showModal = () => {
    let isOpen = document.getElementById('modal_video');
    isOpen.style.display = 'block'
    isOpen.style.transition = 'all 0.5s'

}

const closeModal = () => {
    let onClose = document.getElementById('modal_video')
    onClose.style.display = 'none'

}
