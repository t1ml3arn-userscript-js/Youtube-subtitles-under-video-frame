## Some links

- how to get youtube captions - https://stackoverflow.com/questions/32142656/get-youtube-captions
- api to fetch youtube captions - https://github.com/jdepoix/youtube-transcript-api
- someone with the same problem: showing subs outside video frame - https://www.sitepoint.com/community/t/youtube-api-how-to-display-closed-captions-in-my-own-div/374755
- non-public youtube api - https://www.youtube.com/api/timedtext
  it is needed to pass lots of arguments such as video id, languages etc.
- Similar script [Move Youtube subtitle to the bottom of the viewport](https://greasyfork.org/en/scripts/390669-move-youtube-subtitle-to-the-bottom-of-the-viewport) - didn't work for me

## Markup info

- html5-video-container - container with youtube `<video>` element
- window._yt_player - player object

## Online SVG editors

- https://svgeditoronline.com/editor/
- https://mediamodifier.com/free-svg-editor
- https://www.freecodeformat.com/svg-editor.php
- https://svgedit.netlify.app/editor

## Issues

### Captions with custom effect

TODO: Some subs can have its own layout, e.g. https://www.youtube.com/watch?v=zLak0dxBKpM . So it is worth to test it and handle this case if necessary.

### Glitch above the video frame

Finaly fixed! There are several ways to fix it, see [this discussion ](https://greasyfork.org/en/scripts/433440-youtube-subtitles-under-video-frame/discussions/190367).

Video to test: https://www.youtube.com/watch?v=0JLWaVW0XWI (for dark theme)

### Script does not work on video that was navigated from another youtube page

Probably completely fixed with v1.3.1

The reason was several caption buttons are present on the page and the script obtained the wrong one.

To reproduce:

- open channel e.g. https://www.youtube.com/@btd_channel
- open some video e.g. https://www.youtube.com/watch?v=xI_kd_7lass
- subs under video does not work
- BUG REASON: in above scenario there are TWO subs buttons and my script
  affects the hidden one, not the actual visible button.
