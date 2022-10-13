
fetch('http://localhost:8080/api/v1/activity')

   .then((response) => response.json())

   .then((activity) =>
   {



      let html = ""

      activity.forEach((activity) =>
      {

         html += `

         <tbody>
           <tr>
             <td>${activity.name}</td>
             <td>${activity.hourPrice}</td>
             <td>${activity.minAge} </td>
             <td>${activity.description} </td>
          </tr>
        </tbody>`

      })

      document.querySelector('.activityData').innerHTML = html

   })




fetch('http://localhost:8080/api/v1/customer')

   .then((response) => response.json())

   .then((customer) =>
   {



      let html = ""

      customer.forEach((customer) =>
      {

         custmerPhone = customer.phoneNumber;

         html += `
  

          <tbody>

          <tr>

            <td>${customer.firstName} </td>

            <td>${customer.lastName}</td>

            <td>${customer.email} </td>

            
            <td>${custmerPhone} </td>

                    </tr>
                    
                    </tbody>`

      })

      document.querySelector('.customerData').innerHTML = html

   })

var custmerPhone;


fetch('http://localhost:8080/api/v1/booking')

   .then((response) => response.json())

   .then((booking) =>
   {



      let html = ""

      booking.forEach((booking) =>
      {

         html += `
  

          <tbody>

          <tr>

            <td>${booking.localDate} </td>

            <td>${booking.timeStart}</td>

            <td>${booking.timeEnd} </td>

            <td>${booking.customerDto.phoneNumber} </td>
            <td>${booking.activityDto.name} </td>


                    </tr>
                    
                    </tbody>`

      })

      document.querySelector('.bookingData').innerHTML = html

   })