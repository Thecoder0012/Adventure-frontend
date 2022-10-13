
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  
  input = document.getElementById("myInput");

  filter = input.value.toUpperCase();

  table = document.getElementById("MainDiv2");

  tr = table.getElementsByTagName("tr");


  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    td2 = tr[i].getElementsByTagName("td")[4];

    if (td ) {
      txtValue = td.textContent || td.innerText;
     

      if (txtValue.toUpperCase().indexOf(filter)  > -1) {
        tr[i].style.display = "";
        

      } else {
        tr[i].style.display = "none";
      }
    }       
  }
  document.querySelector('.bookingData').innerHTML = html
  
}

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

<<<<<<< HEAD
      document.querySelector('.activityData').innerHTML = html
=======
    document.querySelector('.activityData').innerHTML = html
  
>>>>>>> ca8ad77caa6e1f6f4752161f715c45450d99f06b

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

<<<<<<< HEAD
   })
=======
})

fetch('http://localhost:8080/api/v1/booking')

  .then((response) => response.json())

  .then((booking) => {



    let html = ""

    booking.forEach((booking) => {

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

    document.querySelector('.bookingSearch').innerHTML = html

})


>>>>>>> ca8ad77caa6e1f6f4752161f715c45450d99f06b
