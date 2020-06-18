const _header_ = '#side header'
const _containerContacts_ = '.-GlrD._2xoTX'
const _attributeSelectContact_ = 'aria-selected'
const _containerMessages_ = '.z_tTQ'
let _speed_ = 2.0


const idInterval = setInterval(() => {

    const header = document.querySelector(_header_)
    if (!header) return

    clearInterval(idInterval)

    const button = document.createElement('button')
    button.innerHTML = `${_speed_}x`
    button.classList.add('btn2x')
    button.addEventListener('click', observerSelectContact)

    header.appendChild(button)

}, 1000)

function audioSpeed(containerMessages) {
    let audios = document.querySelectorAll('audio')

    if (containerMessages) audios = containerMessages.querySelectorAll('audio')

    console.log(audios)
    audios.forEach(audio => audio.playbackRate = 2.0)
}

function observerSelectContact() {
    console.log('click')

    const idInterval = setInterval(() => {
        const containerContacts = document.querySelector(_containerContacts_)

        if (!containerContacts) return

        clearInterval(idInterval)

        observerContainerMessage()

        const observer = new MutationObserver((mutationsList, observer) => {
            observerContainerMessage()
        })

        observer.observe(containerContacts, { attributes: true, attributeFilter: [_attributeSelectContact_], subtree: true })

        // observer.disconnect()
    }, 1000)
}

function observerContainerMessage() {
    const idInterval = setInterval(() => {
        const containerMessages = document.querySelector(_containerMessages_)

        if (!containerMessages) return

        setTimeout(() => audioSpeed(containerMessages), 300)

        clearInterval(idInterval)

        const observer = new MutationObserver((mutationsList, observer) => audioSpeed())

        observer.observe(containerMessages, { childList: true })

        // observer.disconnect()
    }, 1000)
}