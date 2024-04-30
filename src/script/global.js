window.addEventListener('DOMContentLoaded', () => {
    const titleEl = document.querySelector('title')
    const originalTitle = titleEl.innerText

    let currentTitle = 0
    const waitTime = 10000
    const rand = Math.floor(Math.random() * 56323)
    const titles = [
        'Achievement Unlocked: Been here 30 seconds!',
        '...',
        'Thanks for liking my content so much. Plan on being here long?',
        '...',
        '...',
        '...',
        '90 seconds closer to being just best pals... just the best pals',
        '...',
        '...',
        'Two minutes? No one has that kind of attention span.',
        '...',
        "Yeah, you've definitely forgotten about me.",
        '...',
        'ENGAGING CRYPTO MINING MODE.',
        '...',
        `MINING CRYPTO ON YOUR MACHINE: SUCCESSFULLY MINED ${rand} LYNCHCOIN`,
        '...',
        "Just jokin'. Lynchcoin doesn't exist but I wish it did!",
        '...',
        '...',
        'Anyway, back to your regularly scheduled programming.',
        '...',
    ]

    setTimeout(() => {
        const i = setInterval(() => {
            if (!titles[currentTitle]) {
                titleEl.innerText = originalTitle
                clearInterval(i)
                return
            }

            titleEl.innerText = titles[currentTitle]
            currentTitle++
        }, waitTime)
    }, 20000)

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
