---
project_name: sunriselabs.com
tags: [Wordpress, PHP, Javascript, SCSS]
url: 'https://sunriselabs.com'
github: ''
summary: ''
description: 'A marketing website for a growing growing / farming Robot company.'
duration: 'Autumn 2022'
slug: 'sunrise-labs'
header_image: '/images/projects/sl/sl__header.webp'
published: true
---

## About

I would say this is about as straight over the plate a client project as I've ever worked on. Straightforward design, typical implementation for that team, quick turnaround. The typical stack of an in-house theme using Bootstrap and ACF for blocks.

### Navigation

![A screenshot of sunriselabs.com's primary navigation.](/images/projects/sl/sl__nav.webp)

### Locked Slider

![A screenshot of sunriselabs.com's Locked Slider component.](/images/projects/sl/sl__locked-slider.webp)

[Link](https://sunriselabs.com/our-approach/)

### Team Member Slider

![A screenshot of the Team Member Slider component from sunriselabs.com](/images/projects/sl/sl__team-member-slider.webp)

[Link](https://sunriselabs.com#block_021ae6deb4ff0233506261fbe36b1d1d)

I include this almost in shame. It _almost_ works and it's just so damn frustrating when it causes the page to overscroll or the images haven't loaded in time.

### Grid Snapping System

For those interested, it was a (relatively) simple system that functioned more or less to snap components on the page to the background grid that still survives in some components. On page load and resize, the target elements (we had a handful of ways to target elements but didn't settle on one before scrapping it altogether) would have their size and left transform offset adjusted to align to the background grid. Initially sounds straightforward, but this amounted to a huge script that needed to account for a partially responsive grid, columns, mobile among other roadblocks I can't really recall. Ultimately none of us were happy with the direction it was going and too much time had been sunk into it, so we scrapped it and moved on to more pressing things.
