// BRINGING IN THE ELEMENTS TO THE DOM //

// Nav Bar
const overlay = document.querySelector('.body-overlay');
const navBar = document.getElementById('main-nav')
const navBarLinks = document.querySelectorAll('nav.main-nav .container.nav-container ul li a')

// Scroll To Top Button
const scrollToTopBtn = document.getElementById('scroll-to-top-btn')

// Slider
const slides = document.querySelectorAll('.slide')
const isAutoSliding = true
const autoSlideIntervalTime = 3000
let slideInterval


// Modals
const openGokartModalBtn = document.getElementById('open-gokart-modal-btn')
const openMinigolfModalBtn = document.getElementById('open-minigolf-modal-btn')
const openPaintballModalBtn = document.getElementById('open-paintball-modal-btn')
const openSumoWrestlingModalBtn = document.getElementById('open-sumowrestling-modal-btn')
const closeGokartModalBtn = document.getElementById('close-gokart-modal-btn')
const closeMinigolfModalBtn = document.getElementById('close-minigolf-modal-btn')
const closePaintballModalBtn = document.getElementById('close-paintball-modal-btn')
const closeSumoWrestlingModalBtn = document.getElementById('close-sumowrestling-modal-btn')
const goKartModal = document.getElementById('gokart-modal')
const miniGolfModal = document.getElementById('minigolf-modal')
const paintBallModal = document.getElementById('paintball-modal')
const sumoWrestlingModal = document.getElementById('sumowrestling-modal')

const openModalBtn = document.getElementsByClassName('open-modal-btn')
const closeModalBtn = document.getElementById('close-modal-btn')
const activityCards = document.querySelectorAll('.card')


// EVENT LISTENERS //

// Modals
openGokartModalBtn.addEventListener('click', openGokartModal)
openMinigolfModalBtn.addEventListener('click', openMinigolfModal)
openPaintballModalBtn.addEventListener('click', openPaintBallModal)
openSumoWrestlingModalBtn.addEventListener('click', openSumoWrestlingModal)
closeGokartModalBtn.addEventListener('click', closeGoKartModal)
closeMinigolfModalBtn.addEventListener('click', closeMinigolfModal)
closePaintballModalBtn.addEventListener('click', closePaintBallModal)
closeSumoWrestlingModalBtn.addEventListener('click', closeSumoWrestlingModal)

activityCards.forEach((activityCard) =>
{
   activityCard.addEventListener('click', (e) =>
   {
      let imageURL = e.target.getAttribute('src')
      let chosenActivity = generateObjectForChosenActivity(imageURL)
   })

})

// Window Events //
window.addEventListener('scroll', () =>
{
   // Adding and removing the 'shrink' class based on the scroll position on the y-axis
   if (window.scrollY < 600)
   {
      navBar.classList.remove('shrink')
   } else
   {
      navBar.classList.add('shrink')
   }

   if (window.scrollY > 600)
   {
      scrollToTopBtn.classList.add('active')
   } else
   {
      scrollToTopBtn.classList.remove('active')
   }
})

window.addEventListener('load', () =>
{
   navBarLinks[0].classList.add('active')
   scrollToTopOfWindow()
})

scrollToTopBtn.addEventListener('click', scrollToTopOfWindow)



// FUNCTIONS //

// Scroll To Top of Window
function scrollToTopOfWindow()
{
   navBarLinks.forEach((navBarLink) => navBarLink.classList.remove('active'))
   navBarLinks[0].classList.add('active')
   window.scrollTo({ top: 0, behavior: 'smooth' })
}

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
   } else
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
   } else
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


// Open Modal
function openModal()
{
   document.body.classList.add('overlay')
   document.body.style.pointerEvents = 'none'
}



// Open Gokart Modal
function openGokartModal()
{
   goKartModal.classList.add('active')
   openModal()
}

// Open Minigolf Modal
function openMinigolfModal()
{
   miniGolfModal.classList.add('active')
   openModal()
}

// Open Paintball Modal
function openPaintBallModal()
{
   paintBallModal.classList.add('active')
   openModal()
}

// Open Sumowrestling Modal
function openSumoWrestlingModal()
{
   sumoWrestlingModal.classList.add('active')
   openModal()
}


// Close Modal
function closeModal()
{

   if (!goKartModal.classList.contains('active') || !miniGolfModal.classList.contains('active') || !paintBallModal.classList.contains('active') || !sumoWrestlingModal.classList.contains('active'))
   {

      modals.classList.remove('active')

      if (!modals.classList.contains('active'))
      {
         document.body.classList.remove('overlay')
         document.body.style.pointerEvents = 'all'
      }
   }
}


// Close modals

// Close Gokart Modal
function closeGoKartModal()
{
   goKartModal.classList.remove('active')
   closeModal()
}

// Close Minigolf Modal
function closeMinigolfModal()
{
   miniGolfModal.classList.remove('active')
   closeModal()
}

// Close Paintball Modal
function closePaintBallModal()
{
   paintBallModal.classList.remove('active')
   closeModal()
}

// Open Sumowrestling Modal
function closeSumoWrestlingModal()
{
   sumoWrestlingModal.classList.remove('active')
   closeModal()
}


// Generate object for chosen activity
function generateObjectForChosenActivity(imageURL)
{
   let activities = [{ imageURL: 'Images\Activities\gokart.jpg', hourPrice: 30.0, name: "Gocart", minAge: 12, description: "DescTEST" }, { imageURL: 'Images\Activities\minigolf.jpg', hourPrice: 20.0, name: "Minigolf", minAge: 12, description: "DescTEST" }, { imageURL: 'Images\Activities\paintball.jpg', hourPrice: 20.0, name: "Paintball", minAge: 12, description: "DescTEST" }, { imageURL: 'Images\Activities\sumowrestling.jpg', hourPrice: 20.0, name: "Sumowrestling", minAge: 12, description: "DescTEST" }]
   let found = activities.find((activity) => activity.imageURL === imageURL)

   console.log(imageURL)
}

