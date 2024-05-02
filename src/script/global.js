window.addEventListener('DOMContentLoaded', () => {
    const inlineLinks = document.querySelectorAll('p a')

    inlineLinks.forEach((l) => {
        l.dataset.content = l.innerText
    })

    const navEls = document.querySelectorAll('nav li')
    const visMode = document.querySelector('#vis-mode')

    // setup intersection observer
    let observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    document.body.dataset.current = e.target.id
                }
            })
        },
        {
            threshold: 0.5,
        }
    )

    document.querySelectorAll('.frame').forEach((f) => {
        console.log(f)
        observer.observe(f)
    })

    navEls.forEach((l) => {
        const w = `${l.offsetWidth}px`
        l.style.setProperty('--base-width', w)
    })

    visMode.addEventListener('click', () => {
        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark')
            document.body.classList.add('light')
        } else if (document.body.classList.contains('light')) {
            document.body.classList.remove('light')
            document.body.classList.add('dark')
        }
    })
})
