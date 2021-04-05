
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

// let Seattle = {
//     min         : 23    ,       // MINIMUM CUSTOMERS PER HOURE
//     max         : 65    ,       // MAXIMUM CUSTOMERS PER HOURE
//     avgCoockies : 6.3   ,       // AVARAGE COOCKIES SALE
//     coustemrs   : []    ,       // CUSTOMER DETAILS    
//     coockies    : []    ,       // COOCKIES PER HOURE
//     getCoustemrs: function ()   // GET THE RANDOM CUSTOMERS PER HOURE
//     {
//         for (let i = 0; i < hours.length; i++){
//             this.coustemrs.push(randomNumber(this.min, this.max));
//         }
//         return this.coustemrs;
//     },
//     getAvg: function ()         // GET THE AVARAGE OF CUSTOMERS PER HOURE
//     {
//         if (this.customers)
//         {
//             let sum = 0;
//             this.customers.forEach(function (element) {
//                 sum += element;
//             });
//             return "Avarage of customers per hour : \n" + parseInt(sum / this.customers.length);            
//         }
//         else
//         {
//             return "THERE ARE NO CUSTOMERS";
//         }        
//     },
//     getCoockies: function () {
//         if (this.coustemrs.length > 0)
//         {
//             let sum = 0;
            
//             this.customers.forEach(function (element, index) {
//                 let flag = hours[index];
//                 let coockie = parseInt(element * Seattle.avgCoockies);                
//                 Seattle.coockies[flag] = coockie;
//                 sum += element;
//             });

//             console.log("Avarage coockies sold per day : \n" + parseInt(sum * this.avgCoockies) + "\n");
//             console.log(this.coockies);
//         }
//         else
//         {
//             return "THERE ARE NO CUSTOMERS";
//         }        
//     }
//     // getData: function () {
//     //     // GET CUTSOMERS
//     //     this.customers  = [];
//     //     this.customers = this.getCoustemrs();
//     //     // GET CUSOMETS ARRAY LENGTH
//     //     let length = this.customers.length;
//     //     // GET AVG
//     //     let avg = this.getAvg();
//     //     return {
//     //         'customers' : this.customers,
//     //         'length'    : length,
//     //         'avarage'   : parseInt(avg),
//     //     };
//     // },
// }

// Seattle.customers = Seattle.getCoustemrs();
// // console.log("Cusomers : \n" + Seattle.customers);
// // console.log(" : \n" + parseInt(Seattle.getAvg()));
// Seattle.getCoockies();


// let Tokyo={
//      min : null,
//      max : null,
//      avg : null,
// }


// let Dubai	 = {
//     min :null,
//     max : null,
//     avg : null,
// }

// let Paris = {
//     min : null,
//     max : null,
//     avg : null,

// }
// let Lima = {

//     min : null,
//     max : null,
//     avg : null,

// }