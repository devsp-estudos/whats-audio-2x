const idInterval = setInterval(() => {

    const header = document.querySelector('#side header')
    if (!header) return

    clearInterval(idInterval)

    const button = document.createElement('button')
    button.innerHTML = '2.0x'
    button.classList.add('btn2x')
    button.addEventListener('click', observerSelectContact)

    header.appendChild(button)

}, 1000)

function audioSpeed(containerMessages) {
    console.log('---audioSpeed---')

    let audios = document.querySelectorAll('audio')

    if (containerMessages) {
        console.log(audios)
        audios = containerMessages.querySelectorAll('audio')
    }

    console.log(audios)

    audios.forEach(audio => audio.playbackRate = 2.0)
}

function observerSelectContact() {
    console.log('click')

    const idInterval = setInterval(() => {
        const containerContacts = document.querySelector('.-GlrD._2xoTX')

        if (!containerContacts) return

        clearInterval(idInterval)

        const observer = new MutationObserver((mutationsList, observer) => {
            observerContainerMessage()
        })

        observer.observe(containerContacts, { attributes: true, attributeFilter: ["aria-selected"], subtree: true })

        // observer.disconnect()
    }, 1000)
}

function observerContainerMessage() {
    const idInterval = setInterval(() => {
        const containerMessages = document.querySelector('.z_tTQ')

        if (!containerMessages) return

        setTimeout(() => audioSpeed(containerMessages), 300)

        clearInterval(idInterval)

        const observer = new MutationObserver((mutationsList, observer) => audioSpeed())

        observer.observe(containerMessages, { childList: true })

        // observer.disconnect()
    }, 1000)
}