class CopyToClipboard {
  static copyToClipboard(element) {
    const input = document.createElement('input')
    input.setAttribute('value', window.location.href)
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    const copiedElement = element
    copiedElement.classList.add('copied')
    copiedElement.innerHTML = '<span class="material-icons nsw-material-icons" focusable="false" aria-hidden="true">link</span> Copied'
    setTimeout(() => {
      copiedElement.classList.remove('copied')
      copiedElement.innerHTML = '<span class="material-icons nsw-material-icons" focusable="false" aria-hidden="true">link</span> Copy link'
    }, 3000)
  }

  static checkCopyAnchor() {
    const checkCopyAnchor = document.querySelector('.js-copy-clipboard-anchor')
    if (checkCopyAnchor) {
      const h2Elements = document.querySelectorAll('h2')
      h2Elements.forEach((h2) => {
        if (h2.id) {
          const span = document.createElement('span')
          span.classList.add('material-icons', 'nsw-material-icons')
          span.setAttribute('focusable', 'false')
          span.setAttribute('aria-hidden', 'true')
          span.innerText = 'link'
          const labelSpan = document.createElement('span')
          labelSpan.innerText = ''
          const textSpan = document.createElement('span')
          textSpan.innerText = labelSpan.innerText
          h2.appendChild(span)
          h2.classList.add('copy-clipboard-anchor')
          h2.appendChild(textSpan)
          h2.addEventListener('click', () => {
            const input = document.createElement('input')
            const url = window.location.href.includes('#') ? window.location.href.split('#')[0] : window.location.href
            input.setAttribute('value', `${url}#${h2.id}`)
            document.body.appendChild(input)
            input.select()
            document.execCommand('copy')
            document.body.removeChild(input)
            textSpan.innerText = ' Copied'
            setTimeout(() => {
              textSpan.innerText = labelSpan.innerText
            }, 3000)
          })
        }
      })
    }
  }

  static init() {
    // Check for copy to clipboard anchor feature toggle
    CopyToClipboard.checkCopyAnchor()
    // Add event listener to copy buttons
    const copyButtons = document.querySelectorAll('.nsw-copy-clipboard')
    copyButtons.forEach((button) => {
      button.addEventListener('click', () => {
        CopyToClipboard.copyToClipboard(button)
      })
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  CopyToClipboard.init()
})

export default CopyToClipboard
