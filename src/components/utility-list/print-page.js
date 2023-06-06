class PrintPage {
  static init() {
    const printPages = document.querySelectorAll('.js-print-page')
    printPages.forEach((printPage) => {
      printPage.addEventListener('click', () => {
        window.print()
      })
    })
  }
}

window.addEventListener('DOMContentLoaded', () => {
  PrintPage.init()
})

export default PrintPage
