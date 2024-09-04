// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection
// Given a variable that holds a user's preferred type of Monster Energy drink, 
// print whether the user prefers a "Regular" or "Sugar-free" variety. If the preference is not set, default to "Regular".

//--- MY CODE ----
let userPreference ="Sugar-free";  // Possible values: 'Regular', 'Sugar-free', or undefined
let userChoice = userPreference === "Sugar-free" ? "Sugar-free" : "Regular"
console.log(userChoice);



// #### Challenge 2: Stock Check
// You have a variable that tracks the number of Monster Energy cans left in the fridge. 
// Use a ternary operator to print "Time to restock!" if the number is less than 5, or "We're stocked!" if the number is 5 or more.

//--- MY CODE---
let cansLeft = 4; // Any number of cans
let stockTake = cansLeft >= 5 ? "We're stocked!" : "Time to restock!"
console.log(stockTake);


// #### Challenge 3: Workout Intensity
// Based on the current heart rate, determine if the user should drink a Monster Energy drink to boost their workout. 
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, print "Energy levels are high!".

//--- MY CODE ---
let heartRate = 99; // Current heart rate in bpm
let monitorMessage = heartRate < 100 ? "Boost needed!" : "Energy levels are high!"
console.log(monitorMessage);


// #### Challenge 4: Temperature Suitability
// Monster Energy drinks are best served cold. Given the current temperature, use a ternary to print "Chilled to perfection!" 
// if the temperature is below or equal to 5°C, or "Needs a cooler!" if above 5°C.

//--- MY CODE ---
let currentTemp = 9; // Current temperature in °C
let tempAlert = currentTemp <= 5 ? "Chilled to perfection!" : "Needs a cooler!"
console.log(tempAlert);


// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format
//let currentHour = 22; 

//--- MY CODE ---
function convertTo24Hour(timeString) {                    //function convertTo24Hour uses the method .toLocalTimeString to convert to 24 hour time
    let date = new Date(`04/09/2024 ${timeString}`);      //calls the new date data type, passing the parameter 'dataString' ('04/09/2024' + timeString ), this time String we define in our variable currentHour
    let formattedTime = date.toLocaleTimeString('en-US',
        { hour12: false });                               //date object, inbuilt data-type that measures the exact date, hour, minutes, seconds etc. within 100 million days before or after 1/1/1970.
    return formattedTime;
}

let currentHour = '01:00 AM';
let formattedTime = convertTo24Hour(currentHour); //calling convert to 24 hour function
console.log(formattedTime);

// Write your code below this line to determine if it's a good idea to have a Monster Energy drink based on the current hour
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!"
// Otherwise, print "Better stick to water."

let timeAlert = formattedTime <= '00:00:00' || formattedTime >= '07:00:00' ? "Unleash the beast!" : "Better stick to water."
console.log(timeAlert);





// In each of these challenges, the ternary operator is used to decide between two options based on a condition, 
// demonstrating its utility for concise conditional logic. Remember that while ternaries can make the code more succinct, 
// they should be used judiciously to maintain readability, especially for more complex conditions.