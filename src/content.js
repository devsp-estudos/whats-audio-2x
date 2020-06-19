const _header_ = '#side header'
const _containerContacts_ = '.-GlrD._2xoTX'
const _attributeSelectContact_ = 'aria-selected'
const _containerMessages_ = '.z_tTQ'

let _speed_ = 1.0
let actived = false


const idInterval = setInterval(() => {

    const header = document.querySelector(_header_)
    if (!header) return

    clearInterval(idInterval)

    const container = document.createElement('div')
    container.classList.add('container')
    container.innerHTML = `
        <button class="btn2x">1.0x</button>
        <ul class="list">
            <li name="1.0">1.0</li>
            <li name="1.5">1.5</li>
            <li name="1.7">1.7</li>
            <li name="2.0">2.0</li>
            <li name="2.3">2.3</li>
            <li name="2.7">2.7</li>
            <li name="3.0">3.0</li>
        </ul>
    `
    container.querySelectorAll('li').forEach(li => li.addEventListener('click', speed.select))

    header.appendChild(container)

}, 1000)

const speed = {
    select: (event) => {
        if (!event) return

        const speedString = event.target.innerHTML

        _speed_ = Number(speedString)
        document.querySelector('.btn2x').innerHTML = `${speedString}x`

        if (speedString !== '1.0') {
            console.log(actived)

            if (actived) {
                speed.accelerate()
            } else {
                actived = true
                selectContact.observe()
            }
        } else {
            selectContact.disconnect()
            containerMessage.disconnect()
            actived = false
            speed.accelerate()
        }
    },

    accelerate: (containerMessages) => {
        let audios = document.querySelectorAll('audio')

        if (containerMessages) audios = containerMessages.querySelectorAll('audio')

        console.log(audios)
        audios.forEach(audio => audio.playbackRate = _speed_)
    }
}

const selectContact = {
    objObserver: null,

    observe: () => {
        const idInterval = setInterval(() => {
            const containerContacts = document.querySelector(_containerContacts_)

            if (!containerContacts) return

            clearInterval(idInterval)

            containerMessage.observe()

            const observer = new MutationObserver((mutationsList, observer) => {
                containerMessage.observe()
                console.log(mutationsList)
            })

            observer.observe(containerContacts, { attributes: true, attributeFilter: [_attributeSelectContact_], subtree: true })

            selectContact.objObserver = observer
        }, 1000)
    },

    disconnect: () => {
        if (selectContact.objObserver) {
            selectContact.objObserver.disconnect()
            selectContact.objObserver = null
        }
    }
}

const containerMessage = {
    objObserver: null,

    observe: () => {
        const idInterval = setInterval(() => {
            const containerMessages = document.querySelector(_containerMessages_)

            if (!containerMessages) return

            setTimeout(() => speed.accelerate(containerMessages), 200)

            clearInterval(idInterval)

            const observer = new MutationObserver((mutationsList, observer) => {
                speed.accelerate()
                console.log(mutationsList)
            })

            observer.observe(containerMessages, { childList: true })

            containerMessage.objObserver = observer
        }, 1000)
    },

    disconnect: () => {
        if (containerMessage.objObserver) {
            containerMessage.objObserver.disconnect()
            containerMessage.objObserver = null
        }
    }
}
