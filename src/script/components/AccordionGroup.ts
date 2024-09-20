export class AccordionGroup extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const items: HTMLDetailsElement[] = Array.from(
            this.querySelectorAll('details')
        )

        items.forEach((i) => {
            i.addEventListener('click', (e) => {
                const t: HTMLElement = e.target as HTMLElement

                if (t.tagName.toLowerCase() == 'a') return

                e.preventDefault()

                if (i.hasAttribute('open')) return i.removeAttribute('open')

                items.forEach((x) => {
                    x.removeAttribute('open')
                })

                i.setAttribute('open', 'true')
            })
        })
    }
}
