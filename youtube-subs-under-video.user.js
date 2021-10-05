// ==UserScript==
// @name        Youtube subtitles under video frame 
// @description Have you ever been annoyed by youtube subtitles covering some important part of the video? No more! The userscript moves subtitles under video frame (but you can still drag-move them horizontally). It works for default and theater modes. 
// @namespace   https://github.com/t1ml3arn-userscript-js
// @version     1.0.0
// @match       https://www.youtube.com/*
// @grant       none
// @run-at      document-idle
// @author      T1mL3arn
// @icon        data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGRlZnM+PHN5bWJvbCBpZD0iYSIgdmlld0JveD0iMCAwIDM0NCA1OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3QgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwKSIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIvPjxwYXRoIGQ9Ik0tNTAtNTBINTBWNTBILTUwVi01MHoiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgNTApIi8+PHBhdGggZD0iTS01MC01MEg1MFY1MEgtNTBWLTUweiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIwIiB0cmFuc2Zvcm09Im1hdHJpeCguNDUgMCAwIC43NiAxNTYuNDEgMzY5Ljc1KSIvPjxwYXRoIGQ9Ik0tNTAtNTBWNTBINTBWLTUwSC01MHoiIGZpbGw9IiNGRkYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwIiB0cmFuc2Zvcm09Im1hdHJpeCgyLjQxIDAgMCAuMiAxMjAuNSAxMCkiLz48cGF0aCBkPSJNLTUwLTUwVjUwSDUwVi01MEgtNTB6IiBmaWxsPSIjRkZGIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMCIgdHJhbnNmb3JtPSJtYXRyaXgoLjcgMCAwIC4yIDMxMC4xOCAxMCkiLz48cGF0aCBkPSJNLTUwLTUwVjUwSDUwVi01MEgtNTB6IiBmaWxsPSIjRkZGIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMCIgdHJhbnNmb3JtPSJtYXRyaXgoLTIuNDEgMCAwIC0uMiAyMjQuNjggNTApIi8+PHBhdGggZD0iTS01MC01MFY1MEg1MFYtNTBILTUweiIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0ibWF0cml4KC0uNyAwIDAgLS4yIDM1IDUwKSIvPjwvc3ltYm9sPjwvZGVmcz48ZyBjbGFzcz0ibGF5ZXIiPjxwYXRoIGQ9Ik00OTguMjk0IDU3LjI5OWMtNS44MjgtMjEuNzc2LTIyLjk0Mi0zOC44ODgtNDQuNzE4LTQ0LjcxN0M0MTQuMTUgMi4wMDYgMjU1Ljk3MiAyLjAwNiAyNTUuOTcyIDIuMDA2cy0xNTguMTc0IDAtMTk3LjYwMyAxMC41NzZDMzYuNTkzIDE4LjQxIDE5LjQ4IDM1LjUyMyAxMy42NTIgNTcuMjk5IDMuMDc2IDk2LjcyOCAzLjA3NiAxNzkuMDQyIDMuMDc2IDE3OS4wNDJzMCA4Mi4zMTUgMTAuNTc2IDEyMS43NDRjNS44MjkgMjEuNzc2IDIyLjk0MSAzOC44ODggNDQuNzE3IDQ0LjcxNiAzOS40MjkgMTAuNTc2IDE5Ny42MDMgMTAuNTc2IDE5Ny42MDMgMTAuNTc2czE1OC4xNzcgMCAxOTcuNjA0LTEwLjU3NmMyMS43NzYtNS44MjggMzguODktMjIuOTQgNDQuNzE4LTQ0LjcxNiAxMC41NzYtMzkuNDMgMTAuNTc2LTEyMS43NDQgMTAuNTc2LTEyMS43NDRzLS4wNDItODIuMzE0LTEwLjU3Ni0xMjEuNzQzeiIgZmlsbD0icmVkIi8+PHBhdGggZD0iTTAgLjVoNTEydjUxMkgwVi41eiIgZmlsbD0idHJhbnNwYXJlbnQiLz48cGF0aCBkPSJNNDMuNzg4IDM3MWg0MjQuNDI3djEzMS4zMkg0My43ODhWMzcxeiIvPjx1c2UgdHJhbnNmb3JtPSJtYXRyaXgoLjczNjA4IDAgMCAuOTYyMTcgLTc1Ljk5IC00ODUuMDY1KSIgeD0iMTk0LjE0NCIgeGxpbms6aHJlZj0iI2EiIHk9IjcwMiIvPjxwYXRoIGQ9Im0yMDUuMzQ1IDI1NS4wODYgMTMxLjQwNC03NS44Ni0xMzEuNDA0LTc1Ljg2djE1MS43MnoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+
// @homepageURL https://github.com/t1ml3arn-userscript-js/Youtube-subtitles-under-video-frame
// @supportURL  https://github.com/t1ml3arn-userscript-js/Youtube-subtitles-under-video-frame/issues
// @license     GPLv3
// ==/UserScript==

const css = `
.yfms-userjs:not([fullscreen]) .caption-window.ytp-caption-window-bottom {
    margin-bottom: 0 !important;
    margin-top: 0 !important;
    position: absolute !important;
    bottom: 0 !important;
    top: calc(100% + 16px) !important;
    z-index: 9999 !important;
}

.yfms-userjs .html5-video-player {
    /* to make subs visible when they are outside player frame */
    overflow: visible;
    /* to make player to be on top 
    (combined with captions z-index rule, 
    it places captions over any element on the page) */
    z-index: 999;
}

ytd-watch-flexy #info.ytd-watch-flexy {
    transition: margin-top 0.25s;
}

.yfms-userjs #info.ytd-watch-flexy {
    margin-top: 64px;
    transition: margin-top 0.25s;
}

.yfms-userjs[theater] #info.ytd-watch-flexy {
    margin-top: 84px;
}
`

const SUBS_BUTTON_SELECTOR = '.ytp-subtitles-button'
const USERJS_ELT_CLASS = 'yfms-userjs'
const USERJS_STYLE_ID = 'youtube-subs-under-video-css'

function waitElem(selector, interval = 500, timeout = 10000) {

    const e = document.querySelector(selector)
    if (e)
        return Promise.resolve(e)
    else
        return new Promise((resolve, reject) => {

            let timerId, timeoutId;

            timerId = setInterval(() => {
                const e = document.querySelector(selector)
                if (e) {
                    clearInterval(timerId)
                    clearTimeout(timeoutId)
                    resolve(e)
                }
            }, interval);

            timeoutId = setTimeout(() => {
                clearInterval(timerId)
                clearTimeout(timeoutId)
                reject(`Cannot find element "${selector}" (timeout)`)
            }, timeout);
        })
}

function addStyles() {
    const style = document.head.appendChild(document.createElement('style'))
    style.textContent = css;
    style.id = USERJS_STYLE_ID
}

function switchSubtitlesMarker(subsButton) {

    const pressed = subsButton.getAttribute('aria-pressed')

    // this elt gets special attribute by youtube when view mode changes,
    // so it also gets my marker class to apply my CSS
    const playerElt = document.querySelector('ytd-watch-flexy')
    if (pressed === 'true')
        playerElt.classList.add(USERJS_ELT_CLASS)
    else if (pressed === 'false')
        playerElt.classList.remove(USERJS_ELT_CLASS)
}

const init = async () => {
    'use strict';

    let subsButton;

    try {
        subsButton = await waitElem(SUBS_BUTTON_SELECTOR, 100, 4000)
    } catch (e) {
        console.info(`Video ${window.location.href} has no subtitles`);
        return
    }
    
    switchSubtitlesMarker(subsButton)

    subsButton.addEventListener('click', e => {
        // if my styles are not added - add them
        if (!document.getElementById(USERJS_STYLE_ID)) {
            addStyles()
        }
        switchSubtitlesMarker(subsButton)
    })
}

init();