class GenerateSocialLinks {
  static appendSocialLinks() {
    const socialLinks = document.querySelectorAll('.facebook-share, .linkedin-share, .twitter-share, .email-share')
    socialLinks.forEach((link) => {
      switch (link.classList[0]) {
        case 'facebook-share':
          link.setAttribute('href', `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`)
          break
        case 'linkedin-share':
          link.setAttribute('href', `https://www.linkedin.com/shareArticle?url=${window.location.href}&title=${document.title}`)
          break
        case 'twitter-share':
          link.setAttribute('href', `https://twitter.com/intent/tweet?url=${window.location.href}&text=${document.title}`)
          break
        case 'email-share':
          link.setAttribute('href', `mailto:?subject=${encodeURIComponent(`Check out this page: ${document.title}&body=${window.location.href}`)}`)
          break
        default:
          console.log('No social links found')
      }
    })
  }

  static init() {
    GenerateSocialLinks.appendSocialLinks()
  }
}

window.addEventListener('DOMContentLoaded', () => {
  GenerateSocialLinks.init()
})

export default GenerateSocialLinks
