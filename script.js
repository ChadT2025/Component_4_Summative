//  Starter Array - Do Not Edit this, only manipulate by adding more visitors

// "" makes the variables and functions modules. Do not remove it.
//  does not change how variables and functions work. 

let customers = [];

// =======================================
// QUESTION 1
// =======================================

//Fetch The DOM Elements
 const customerInput = document.getElementById("customerInput");
 const addBtn = document.getElementById("addBtn")
 const customerList = document.getElementById("customerList")
 let counter = document.getElementById("counter")
 


// Complete this function

 function addCustomer(){
    // Retrieve the customer's name
    let value = customerInput.value;
    console.log(value);

    // Add customer to array
    customers.push(value);
    console.log(customers);
    return customers


    // Clear the textbox
    customerInput.value = ""; 


    // Call displayCustomers()
    displayCustomers();
}

// =======================================
// QUESTION 2
// Complete this function
// =======================================

 function displayCustomers(){

    // Clear the list
    customerList.innerHTML = ""; 


    // Loop through the array 
     for(let i = 0; i < customers.length; i++){

         // Create a list item
        const li = document.createElement("li");

        // Display customer
         customerList.innerHTML += "<li>" + customers[i] + "</li>";

         // Add list item to UL
         li.textContent = customers[i];

         //Appends the <"li"> to the <ul> element
        customerList.appendChild(li);

     }
     
    // Update customer counter 
    counter = customers.length;
    console.log(counter);
    counter.textContent = customers.length;


 }
// ================================
//  DO NOT EDIT LINE 78 AND LINE 81
// =================================

// Do not remove this line 
displayCustomers();

// Event Listener
addBtn.addEventListener("click", addCustomer);