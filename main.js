// Nav Bar
const navBar = document.getElementById('main-nav')
const navBarLinks = document.querySelectorAll('nav.main-nav .container.nav-container ul li a')


// Slider
const slides = document.querySelectorAll('.slide')
const isAutoSliding = true
const autoSlideIntervalTime = 3000
let slideInterval


// Update active link
navBarLinks.forEach((navBarLink) =>
{
   navBarLink.addEventListener('click', () =>
   {
      navBarLinks.forEach((navBarLink) => navBarLink.classList.remove('active'))
      navBarLink.classList.add('active')
   })
})


// Slider //
// Next Slide
const nextSlide = () =>
{
   // Get current class
   const current = document.querySelector('.current')
   // Remove current class
   current.classList.remove('current')
   // Check for next slide
   if (current.nextElementSibling)
   {
      // Add current to next sibling
      current.nextElementSibling.classList.add('current')
   }
   else
   {
      // Add current to start
      slides[0].classList.add('current')
   }

   setTimeout(() => current.classList.remove('current'))
}

// Previous Slide
const previousSlide = () =>
{
   // Get current class
   const current = document.querySelector('.current')

   // Remove current class
   current.classList.remove('current')

   // Check for prev slide
   if (current.previousElementSibling)
   {
      // Add current to prev sibling
      current.previousElementSibling.classList.add('current')
   }
   else
   {
      // Add current to last
      slides[slides.length - 1].classList.add('current')
   }

   setTimeout(() => current.classList.remove('current'))
}

// Auto Slide
if (isAutoSliding)
{
   slideInterval = setInterval(nextSlide, autoSlideIntervalTime)
}
