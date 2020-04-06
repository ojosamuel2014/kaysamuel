/**
 * First create an array of objects called data, Inititalize the data array with the given values
 * Individual object should have principal and time as keys
*/
const data = [
    {"principal": 2500, "time": 1.8},
    {"principal": 1000, "time": 5},
    {"principal": 3000, "time": 1},
    {"principal": 2000, "time": 3},
]


//Write a function called interestCalculator, It will takes an array as a single arguement, and return the applicable rate
function interestCalculator (array) {

    // Declare the return array
    let interestData = []

    // Iterate the given array argument
    array.map(value => {

        //Declare and initialize rate to be 0
        let rate = 0

        //Apply the given conditions

        /**
         * Condition 1
         * pprincipal >= 2500 and
         * 3 < time > 1 then
         * rate = 3
        */
        if(value.principal >= 2500 && (value.time > 1 && value.time < 3)) {
            rate = 3
        }

        /**
         * Condition 2
         * principal >= 2500 and
         * time >= 3 then
         * rate = 4
        */
        else if(value.principal >= 2500 && value.time >= 3) {
            rate = 4
        }

        /**
         * Condition 3
         * principal < 2500 or
         * time <= 1 then
         * rate = 2 
        */
        else if(value.principal < 2500 || value.time <= 1) {
            rate = 2
        }
        
        /**
         * Default Condition
         * rate = 1
         */
        else rate = 1

        /**
         * Interest Calculation
         * interest = (principal * rate * time) / 100
        */
        let interest = (value.principal * rate * value.time) / 100
        
        // Add a new key rate and its corresponding value to the current object
        value.rate = rate

        // Add a new key interest and its corresponding value to the current object
        value.interest = interest

        // Push the current object to the return array
        interestData.push(value)
    })

    // Log the interestData array to console
    console.log(interestData)

    // return the interestData
    return interestData
}

// Call/execute the function and pass the created data array
interestCalculator(data)