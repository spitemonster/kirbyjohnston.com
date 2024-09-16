import ExternalIcon from '../icons/icon--external.svg?raw'
// gets the direction, normalized (between 0 and 1) between two given 2d points on the page
function getNormalizedDirection(vecFrom, vecTo) {
    const directionX = vecTo.X - vecFrom.X
    const directionY = vecTo.Y - vecFrom.Y
    const maxDistance = 500

    const distance = Math.sqrt(directionX ** 2 + directionY ** 2)
    const clampedDistance = Math.min(distance, maxDistance)
    const normalizedDistance = clampedDistance / maxDistance

    const normalizedDirection = {
        x: (directionX / distance) * normalizedDistance,
        y: (directionY / distance) * normalizedDistance,
        distance: normalizedDistance,
    }

    return normalizedDirection
}

// make the computed font size easily available throughout
window.fontSize = () => {
    return Number(
        window
            .getComputedStyle(document.body)
            .getPropertyValue('font-size')
            .match(/\d+/)[0]
    )
}

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('initialized')
    // add external link icon to all external links and open them in a new tab
    // excluding the control bar and work card links
    const links = document.querySelectorAll('a:not(.work-card):not(nav a)')
    links.forEach((l) => {
        const linkUrl = new URL(l.href)
        const currentUrl = new URL(window.location.href)

        if (
            linkUrl.hostname != '' &&
            linkUrl.hostname != 'localhost' &&
            linkUrl.hostname != currentUrl.hostname
        ) {
            l.setAttribute('target', '_blank')
            l.classList.add('external')

            if (
                l.closest('.control-bar') != null ||
                l.classList.contains('img--client-logo')
            )
                return
            // if not in the control bar add an external icon
            l.innerHTML += ExternalIcon
        }
    })

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

    // set up mouse-tracking box-shadow
    // track mouse position on move
    const mousePosition = { X: 0, Y: 0 }
    window.addEventListener('mousemove', (e) => {
        mousePosition.X = e.clientX
        mousePosition.Y = e.clientY
    })

    // target elements and sizes
    const headshot = document.querySelector('.img--headshot')
    const headshotSize = headshot.offsetWidth
    const headshotHalfSize = headshotSize / 2
    const headshotCenter = {
        X:
            headshot.getBoundingClientRect().left +
            window.scrollX +
            headshotHalfSize,
        Y:
            headshot.getBoundingClientRect().top +
            window.scrollY +
            headshotHalfSize,
    }

    function tick() {
        headshotCenter.X =
            headshot.getBoundingClientRect().left +
            window.scrollX +
            headshotHalfSize
        headshotCenter.Y =
            headshot.getBoundingClientRect().top +
            window.scrollY +
            headshotHalfSize

        const delta = getNormalizedDirection(headshotCenter, mousePosition)

        // this custom property is used in CSS to control the box shadow
        headshot.style.setProperty('--delta-x', delta.x)
        headshot.style.setProperty('--delta-y', delta.y)
        headshot.style.setProperty('--dist', delta.distance)

        requestAnimationFrame(tick)
    }

    // only tick this on desktop
    if (window.innerWidth > window.fontSize() * 60) {
        requestAnimationFrame(tick)
    }
})
