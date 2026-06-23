import './components'
import ExternalIcon from '../icons/icon--external.svg?raw'

// make the computed font size easily available throughout
window.fontSize = (): number => {
    return Number(
        window
            ?.getComputedStyle(document.body)
            ?.getPropertyValue('font-size')
            ?.match(/\d+/)![0]
    )
}

// add icon to external links
function tagExternalLinks() {
    const links: HTMLAnchorElement[] = Array.from(
        document.querySelectorAll(
            'a:not(.work-card):not(.client-logo):not(nav a)'
        )
    )

    links.forEach((l: HTMLAnchorElement) => {
        if (!l.href || l.href == '') {
            return
        }
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
}

// set body current data attr when frame is updated; moves nav links depending on what is current
function frameIntersectHandler(entries: IntersectionObserverEntry[]) {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            document.body.dataset.current = e.target.id
        }
    })
}

// setup frame intersect observer
function initFrameObserver() {
    const observer = new IntersectionObserver(frameIntersectHandler, {
        threshold: 0.5,
    })

    document.querySelectorAll('.frame').forEach((f) => {
        observer.observe(f)
    })
}

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('initialized')
    tagExternalLinks()
    initFrameObserver()
})
