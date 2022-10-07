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
      }
   })

   if (!document.body.contains('input[type="checkbox"]'))
   {
      alert(123)
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