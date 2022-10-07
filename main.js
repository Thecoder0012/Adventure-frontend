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

// document.body.classList.remove('body-overlay')

// Modals
<<<<<<< HEAD
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


=======
const openModalBtn = document.getElementsByClassName('open-modal-btn')
const closeModalBtn = document.getElementById('close-modal-btn')
const modal = document.querySelector('.modal')


closeModalBtn.addEventListener('click', (e) => closeModal(e))
>>>>>>> b903f122cf0fa77d5dafc3fd88ae5a27683d72ef


// Modal pops up when clicking the activities
for (let i = 0; i < openModalBtn.length; i++) {
   openModalBtn[i].addEventListener('click', openModal)
}

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


// Window Events //
window.addEventListener('scroll', () => {
   // Adding and removing the 'shrink' class based on the scroll position on the y-axis
   if (window.scrollY < 600) {
      navBar.classList.remove('shrink')
   } else {
      navBar.classList.add('shrink')
   }

   if (window.scrollY > 600) {
      scrollToTopBtn.classList.add('active')
   } else {
      scrollToTopBtn.classList.remove('active')
   }
})

window.addEventListener('load', () => {
   navBarLinks[0].classList.add('active')
   scrollToTopOfWindow()
})

scrollToTopBtn.addEventListener('click', scrollToTopOfWindow)



// FUNCTIONS //

// Scroll To Top of Window
function scrollToTopOfWindow() {
   navBarLinks.forEach((navBarLink) => navBarLink.classList.remove('active'))
   navBarLinks[0].classList.add('active')
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   })
}

// Update active link
navBarLinks.forEach((navBarLink) => {
   navBarLink.addEventListener('click', () => {
      navBarLinks.forEach((navBarLink) => navBarLink.classList.remove('active'))
      navBarLink.classList.add('active')
   })
})

// Slider //
// Next Slide
const nextSlide = () => {
   // Get current class
   const current = document.querySelector('.current')
   // Remove current class
   current.classList.remove('current')
   // Check for next slide
   if (current.nextElementSibling) {
      // Add current to next sibling
      current.nextElementSibling.classList.add('current')
   } else {
      // Add current to start
      slides[0].classList.add('current')
   }

   setTimeout(() => current.classList.remove('current'))
}

// Previous Slide
const previousSlide = () => {
   // Get current class
   const current = document.querySelector('.current')

   // Remove current class
   current.classList.remove('current')

   // Check for prev slide
   if (current.previousElementSibling) {
      // Add current to prev sibling
      current.previousElementSibling.classList.add('current')
   } else {
      // Add current to last
      slides[slides.length - 1].classList.add('current')
   }

   setTimeout(() => current.classList.remove('current'))
}

// Auto Slide
if (isAutoSliding) {
   slideInterval = setInterval(nextSlide, autoSlideIntervalTime)
}


// Open Modal
<<<<<<< HEAD
function openModal()
{


   if (goKartModal.classList.contains('active') || miniGolfModal.classList.contains('active') || paintBallModal.classList.contains('active') || sumoWrestlingModal.classList.contains('active'))
   {
=======
function openModal() {
   modal.classList.add('active')

   if (modal.classList.contains('active')) {
>>>>>>> b903f122cf0fa77d5dafc3fd88ae5a27683d72ef
      document.body.classList.add('overlay')
      overlay.classList.remove('hidden');
      document.body.style.pointerEvents = 'none'
   }
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
<<<<<<< HEAD
function closeModal(e)
{

   if (!goKartModal.classList.contains('active') || !miniGolfModal.classList.contains('active') || !paintBallModal.classList.contains('active') || !sumoWrestlingModal.classList.contains('active'))
   {
=======
function closeModal(e) {
   modal.classList.remove('active')

   if (!modal.classList.contains('active')) {
>>>>>>> b903f122cf0fa77d5dafc3fd88ae5a27683d72ef
      document.body.classList.remove('overlay')
      document.body.classList.remove('body-overlay')
      overlay.classList.add('hidden');
      document.body.style.pointerEvents = 'all'
   }
}

<<<<<<< HEAD
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

=======

const formValidation = () => {
   let name = document.forms["contact"]["fullname"].value;
   let email = document.forms["contact"]["email"].value;
   let message = document.forms["contact"]["message"].value;

   if (name === "" && email === "" && message === "") {
      alert("Fill in the blanks!");
   } else if (name !== "" && email.includes("@gmail.com") && message !== "") {
      alert("Your message is sent to us! You will receive a response as soon as possible!")
   } else if (name === "" && email === "" && message !== "") {
      alert("You need to type in your fullname and email")
   } else if (name === "" && email !== "" && message !== "") {
      alert("Type in your fullname")
   } else if (name !== "" && email === "" && message !== "") {
      alert("Type in your mail")
   } else if (name !== "" && email !== "" && message === "") {
      alert("Type in your message!")
   }
}

const sendMessage = () => {
   document.querySelector('input[type="submit"]').addEventListener("click", formValidation)
}


sendMessage();
>>>>>>> b903f122cf0fa77d5dafc3fd88ae5a27683d72ef
