// Booking Form
const form = document.getElementById('form')
const inputs = document.querySelectorAll('.input')

const numberOfHoursInput = document.getElementById('number-of-hours-input')
const totalPriceOutput = document.getElementById('total-price-output')

const additionalInfoBox = document.getElementById('additional-info-box')
const minimumAgeCheckBox = document.getElementById('minimum-age-check')
const submitBtn = document.getElementById('submit-btn')

let hourlyRatePrice = 150

// Form
form.addEventListener('submit', (e) => validateBookingForm(e))
minimumAgeCheckBox.addEventListener('change', toggleSubmitBtnAbility)
numberOfHoursInput.addEventListener('input', calculateTotalPrice)

window.addEventListener('load', calculateTotalPrice)


// Form Validation //
function validateBookingForm(e)
{

   let isFilledOutCorrectly = true


   e.preventDefault()

   inputs.forEach((input) =>
   {
      if (input.value === '' || input.value === ' ')
      {
         input.classList.add('empty')
         setTimeout(() =>
         {
            input.classList.remove('empty')
         }, 2000)

         isFilledOutCorrectly = false
      }

   })

   if (isFilledOutCorrectly)
   {
      postForm('http://localhost:8080/api/v1/booking/add', createBookingDataObject(activities[i]))
   }


}

function toggleSubmitBtnAbility()
{
   if (minimumAgeCheckBox.checked)
   {
      submitBtn.classList.remove('disabled')
   }
   else
   {
      submitBtn.classList.add('disabled')
   }
}


function calculateTotalPrice()
{
   totalPriceOutput.innerText = numberOfHoursInput.valueAsNumber * hourlyRatePrice

   if (numberOfHoursInput.value === '' || numberOfHoursInput.value === ' ')
   {
      totalPriceOutput.innerText = 0
   }

   if (numberOfHoursInput.valueAsNumber > 24)
   {
      totalPriceOutput.innerText = hourlyRatePrice * 24
   }
}


// Create booking data object
function createBookingDataObject(activity)
{
   let nameArray = checkNameCredentials()

   // Convert seconds to hours and minutes
   let timeStart = inputs[3].valueAsNumber
   let timeEnd = timeStart + inputs[4].valueAsNumber


   const bookingDataObject =
   {
      localDate: inputs[5].value,
      timeStart: timeStart,
      timeEnd: timeEnd,
      activity: activity,

      customer:
      {
         firstName: nameArray[0],
         lastName: nameArray[1],
         phoneNumber: inputs[2].value,
         email: inputs[1].value,
      }
   }

}


function checkNameCredentials()
{
   let firstName
   let lastName


   let fullName = inputs[0].value.split(' ')
   firstName = fullName[0]

   lastName = fullName.splice(1, fullName.length - 1).join(' ')

   return [firstName, lastName]
}


// Post form
function postForm(url, formObject)
{
   fetch(url, {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObject)
   })
}


