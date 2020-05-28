const idInterval = setInterval(() => {

    const header = document.querySelector('._3auIg')
    if (!header) return

    clearInterval(idInterval)

    const button = document.createElement('button')
    button.innerHTML = '2x'
    button.classList.add('btn2x')

    button.addEventListener('click', () => {
        const audios = document.querySelectorAll('audio')
        audios.forEach(audio => {
            console.log(audio)
            audio.playbackRate = 2
        })
    })

    header.appendChild(button)
})
