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
      postForm('http://localhost:8080/api/v1/booking/add', createBookingDataObject(miniGolfActivityObject))
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

// Activity types
let miniGolfActivityObject =
{
   activity: {

      hourPrice: 20.0,

      name: "Gocart",

      minAge: 12,

      description: "DescTEST"

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


   /*
   NodeList(7) [ input#full-name-input.input.full-name-input, input#email-input.input.email-input, input#phone-input.input.phone-input, input#time-input.input.time-input, input#number-of-hours-input.input.number-of-hours-input, input#date-input.input.date-input, textarea#additional-info-box.input.additional-info-input ]
   ​
   0: <input id="full-name-input" class="input full-name-input" type="text" placeholder="Enter Full Name">
   ​
   1: <input id="email-input" class="input email-input" type="email" placeholder="Enter Your E-mail">
   ​
   2: <input id="phone-input" class="input phone-input" type="phone" placeholder="Enter Your Phone Number">
   ​
   3: <input id="time-input" class="input time-input" type="time">
   ​
   4: <input id="number-of-hours-input" class="input number-of-hours-input" type="number">
   ​
   5: <input id="date-input" class="input date-input" type="date">
   ​
   6: <textarea id="additional-info-box" class="input additional-info-input" placeholder="Additional Comments">
   ​
   length: 7
   ​
   <prototype>: NodeListPrototype { item: item(), keys: keys(), values: values(), … }
   
   
    
   */
   console.log(bookingDataObject)
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