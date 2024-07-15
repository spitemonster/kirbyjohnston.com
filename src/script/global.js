window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a:not(.work-card):not(nav a)')

    links.forEach((l) => {
        const linkUrl = new URL(l.href)
        const currentUrl = new URL(window.location.href)

        // add external link icon to all external links
        if (
            linkUrl.hostname != '' &&
            linkUrl.hostname != 'localhost' &&
            linkUrl.hostname != currentUrl.hostname &&
            !l.parentElement.classList.contains('controls')
        ) {
            l.setAttribute('target', '_blank')
            l.innerHTML += `<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="var(--color-accent)" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg></span>`
        }
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
