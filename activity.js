const modals = document.querySelectorAll('.modal')

// Get activities
async function getActivities(url, ourCallback)
{
   let response = await fetch(url,
      {
         method: 'GET',
         headers:
         {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
         }
      })

   let data = await response.json()
   ourCallback(data)
}

window.addEventListener('load', () =>
{
   getActivities('http://localhost:8080/api/v1/activity', ourCallback)
})


function ourCallback(data)
{

   for (activity of data)
   {

      generateActivityCard(activity)

   }

}

// Activity Images
const imageAcitivitiesMap = new Map([
   [1, 'Images/Activities/gokart.jpg'],
   [2, 'Images/Activities/minigolf.jpg'],
   [3, 'Images/Activities/paintball.jpg'],
   [4, 'Images/Activities/sumowrestling.png']
])

// Open Activity Modals
const activityModalsOpen = new Map([
   [1, document.getElementById('gokart-modal')],
   [2, document.getElementById('minigolf-modal')],
   [3, document.getElementById('paintball-modal')],
   [4, document.getElementById('sumowrestling-modal')]
])

// Close Activity Modals
const activityModalsClose = new Map([
   [1, document.getElementById('close-gokart-modal-btn')],
   [2, document.getElementById('close-minigolf-modal-btn')],
   [3, document.getElementById('close-paintball-modal-btn')],
   [4, document.getElementById('close-sumowrestling-modal-btn')]
])

function generateActivityCard(activity)
{

   // Card
   const activityCard = document.createElement('div')
   activityCard.classList.add('card', 'activity-card')
   activityCard.setAttribute('id', `activity-${activity.id}`)

   // Card Image
   const activityCardImage = document.createElement('img')
   activityCardImage.src = imageAcitivitiesMap.get(activity.id)

   // Card Text
   const activityCardText = document.createElement('h4')
   activityCardText.textContent = activity.name

   // Overlay
   const overlay = document.createElement('div')
   overlay.classList.add('overlay')


   const activityCardsContainer = document.getElementById('activity-cards-container')
   activityCard.append(activityCardImage, activityCardText, overlay)

   // Open Activity Modal
   activityCard.addEventListener('click', () =>
   {
      console.log(activity.id)
      activityModalsOpen.get(activity.id).classList.add('active')
   })

   // Close Actvity Modal
   activityModalsClose.get(activity.id).addEventListener('click', () =>
   {
      activityModalsOpen.get(activity.id).classList.remove('active')
   })


   activityCardsContainer.append(activityCard)

}

