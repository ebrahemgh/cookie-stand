
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let total = 0;
// let coustemrs = [];
let stores =[];


function Salamon(location, min, max, AvgCookie) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.AvgCookie = AvgCookie;
    this.hourlySales = [];
    this.dailySales = 0;
    this.coockies = [];
    this.coustemrs = [];
    this.total = 0;
    this.taotalOfCoust = 0;
    this.addnum = [];
    stores.push(this);
    
}
// console.log(stores);
var addnum = 0;
// total = 0;
let coockies = [];

Salamon.prototype.getCoustemrs = function ()   // GET THE RANDOM number of customers 
{
    
    for (let i = 0; i < hours.length; i++) {
        // console.log(randomNumber(this.min, this.max));
        this.coustemrs.push(randomNumber(this.min, this.max));
        let addnum = this.coustemrs[i];
        // console.log(this.coustemrs);
       
    }
    // return coustemrs;

}
Salamon.prototype.calcCockies = function ()         // GET THE AVARAGE OF CUSTOMERS PER HOURE
{
    
    for (let i = 0; i < hours.length; i++) {
        let anything = Math.round((this.coustemrs[i]) * this.AvgCookie);
        // console.log(anything);
        this.coockies.push(anything);
        // console.log(this.coockies[i]);
        // console.log(hours.length[i]);
        this.total += this.coockies[i];
    }
    // console.log(this.total);
}



const seattle = new Salamon('seattle', 23, 65, 6.3);
// console.log(seattle);
const tokyo = new Salamon('tokyo', 3, 24, 1.2);
const dubai = new Salamon('dubai', 11, 38, 3.7);
const paris = new Salamon('paris', 20, 38, 2.3);
const lima = new Salamon('lima', 3, 24, 1.2);

for (let i = 0; i < stores.length; i++) {
    console.log(stores.length);
}

// paris.getCoustemrs();
// console.log(paris.coustemrs);
// tokyo.getCoustemrs();
// tokyo.calcCockies();
// console.log(tokyo.coockies);




seattle.getCoustemrs();
console.log(seattle.coustemrs);
seattle.calcCockies()
console.log(seattle.coockies);




// making the global table
let parent = document.getElementById('parent');
//create table in globel
let bigtable = document.createElement('table');
//appeand
parent.appendChild(bigtable);




// bigtable.style.borderColor = "red";
function Header() {
    
    // making the elemnts
    let theFirstRow = document.createElement('tr'); //bigger that row1
    let row1 = document.createElement('th');

    // appending childs
    bigtable.appendChild(theFirstRow);

    theFirstRow.appendChild(row1);
    // row1.textContent = 'name';
        for (let i = 0; i < hours.length; i++){
         hoursRows = document.createElement('th');
        theFirstRow.appendChild(hoursRows);
        hoursRows.textContent=hours[i];
    }
    let finalTh = document.createElement('th');
    theFirstRow.appendChild(finalTh);
    finalTh.textContent = "daily location total";

}




// finished the header of table 
console.log(Header());
total = 0;

//////// making the main table 

Salamon.prototype.render = function () {
    
    let storeRow = document.createElement('tr');
    bigtable.appendChild(storeRow);

    let nameCoulomn = document.createElement('td');
    storeRow.appendChild(nameCoulomn);
    nameCoulomn.textContent = this.location;
    let totalOs = 0;
    for (let x = 0; x < hours.length; x++){
        // PRINT DATA ON TABLE
        let mainElemnts = document.createElement('td');
        storeRow.appendChild(mainElemnts);        
        /***stop***/
        
        let elementOs = Math.round(this.coustemrs[x] * this.AvgCookie);
        mainElemnts.textContent = elementOs;
        totalOs += elementOs;
        
    }

    let totalTd = document.createElement('td');
    storeRow.appendChild(totalTd);
    this.total = totalOs;
    totalTd.textContent = this.total;
    // this.total = 0;

}

// making footer
// let totalForPerHour = 0;

// PLAN : CALCULATE THE TOTAL OF COOKCKIES PER HOURE FOR EACH RESTURANT
// 1- HOURS : CONST
// 2- STORS : SALAMON
// 3- COOCKIES : STORES





footer = function () {
    let footerRow = document.createElement('tr');
    footerRow.id = "rowfooter";
    bigtable.appendChild(footerRow);
    let footerRowName = document.createElement('th');
    footerRow.appendChild(footerRowName);
    footerRow.textContent = "total";

    for (i = 0; i < hours.length; i++) {
        let totalForPerHour = 0;
        // console.log((stores[i]));
        for (let j = 0; j < stores.length; j++) {
            totalForPerHour += stores[j].coockies[i];
            console.log(totalForPerHour);        
        }
        // totalForPerHour
        let lastTh = document.createElement('th');
        footerRow.appendChild(lastTh);
        lastTh.textContent = totalForPerHour;
    }
}




/// making the form
let bigform = document.getElementById('theform');
console.log(theform);

bigform.addEventListener('submit', newstore);
function newstore(event) {
    event.preventDefault();

    let location = event.target.name.value;
  let min = event.target.min.value;
  let max = event.target.max.value;
    let AvgCookie = event.target.avg.value;
    
    newstore = new Salamon(location, min, max, AvgCookie);
    newstore.getCoustemrs();
    newstore.calcCockies();
    newstore.render();
    document.getElementById('rowfooter').remove();
    footer();


}







parent.style.borderStyle = "dotted solid double dashed";//styling the border
// parent.style.columns = "1000px 3";
bigtable.style.borderStyl="dotted solid double dashed";

seattle.getCoustemrs();
seattle.calcCockies();
seattle.render();
// seattle.footer()

tokyo.getCoustemrs();
tokyo.calcCockies();
tokyo.render();
// tokyo.footer();


dubai.getCoustemrs();
dubai.calcCockies();
dubai.render();
// dubai.footer();

paris.getCoustemrs();
paris.calcCockies();
paris.render();
// paris.footer();

lima.getCoustemrs();
lima.calcCockies();
lima.render();
// lima.footer();

footer();









// document.getElementById("parent").style.border = "thick solid #0000FF";
// // paris.calcCockies();
// // paris.getCoustemrs();
// // console.log(paris.calcCockies);

// // console.log('salamons', Salamon);
// // for (let i = 0; i < Salamon.length; i++) {
// //     Salamon[i].getCoustemrs();

// // }

// ///////////////////////////////////////////////// making the table 
// let parent = document.getElementById('parent');
// let table = document.createElement('table');
// parent.appendChild(table);

// let Header = function () {
   
//     let trElemnt = document.createElement('tr');
//     table.appendChild(trElemnt);
    
//     let firstTh = document.createElement('th');
//     trElemnt.appendChild(firstTh);
//     trElemnt.textContent='name';

//     for (let i = 0; i < hours.length; i++){
//         // create the first row
//         let hoursth = document.createElement('th');
//         trElemnt.appendChild(hoursth);
//         hoursth.textContent=hours[i];


//     }
//     let finalTh = document.createElement('th');
//     trElemnt.appendChild(finalTh);
//     finalTh.textContent = 'daily locations table';

// }

// Salamon.prototype.render = function () {
    

//     let storeRow = document.createElement('tr');
//     table.appendChild(storeRow);

//     // first elemnt 
//     let nameTd = document.createElement('td');
//     storeRow.appendChild(nameTd);
//     nameTd.textContent = this.name;

//     for (let i = 0; hours < hours.length;i++){
//         let coockiesTd = document.createElement('td');

//         storeRow.appendChild(coockiesTd);

//         coockiesTd.textContent = this.coustemrs[i];
//     }
//     let totaltd = document.createElement('td');
//     storeRow.appendChild(totaltd);
//     totaltd.textContent = this.total;

    
// }

// function makingFooter() {
    
//     let footerRow = document.createElement('tr');
//     table.appendChild(footerRow);

//     let firstTh = document.createElement('th');
//     footerRow.appendChild(firstTh);
//     firstTh.textContent = 'tatal';

//     let totalForEachHour;
//     let mostTotal = 0;

//     for (let i = 0; i < hours.length; i++){
//         totalForEachHour = 0;
//         for (let x = 0; x < stores.length; x++){
//             totalForEachHour += stores[x].coustemrs[i];
//             mostTotal += stores[x].coustemrs[x];
//         }
//         console.log(totalForEachHour);
//         let footerTh = document.createElement('th');
//         footerRow.appendChild(footerTh);
//         footerTh.textContent = totalForEachHour;
//     }


// }


// makingFooter();





// Header();
// for (let i = 0; i < stores.length; i++){
//     stores[i].getCoustemrs();
//     stores[i].render();
// }











// render: function() {
//     let parent = document.createElement('parent');// make parent

//     let table = document.createElement('table');// make table

//     parent.appendChild(table);
// }




// tokyo.getCoustemrs(coustemrs);
// console.log(tokyo.coustemrs);
// console.log(coustemrs);
// lima.getCoustemrs(coustemrs);
// console.log(lima.coustemrs);


// let Seattle = {
//     // locationName: 'seatle',
//     // min: 23,       // MINIMUM CUSTOMERS PER HOURE
//     // max: 65,       // MAXIMUM CUSTOMERS PER HOURE
//     getCoustemrs: function ()   // GET THE RANDOM number of customers 
//     {
//         for (let i = 0; i < hours.length; i++) {
//             this.coustemrs.push(randomNumber(this.min, this.max));
//         }
//         return this.coustemrs;
//     },
//     calcCockies: function ()         // GET THE AVARAGE OF CUSTOMERS PER HOURE
//     {
//         for (let i = 0; i < hours.length; i++) {
//             this.coockies.push(parseInt((this.coustemrs[i]) * this.avg));
//             this.total += this.coockies[i];
//         }
//         // return this.coockies;
//     },
//     render: function () {
//         //make the parent
//         let parent = document.getElementById('parent');
//         console.log(parent);
//         // console.log(locatinElemnt);
// // add child to the patent
//         let locatinElemnt = document.createElement('h3');
//         parent.appendChild(locatinElemnt);
//        // add content to the child
//         locatinElemnt.textContent = this.locationName;
//         // creating unorder list 
//         let ulElemnt = document.createElement('ul');
//         parent.appendChild(ulElemnt);
//         for (let i = 0; i < hours.length; i++){
//             // create 16 li
//             let liElemnt = document.createElement('li');
//             // add it to ul
//             ulElemnt.appendChild(liElemnt);
//             //given text elemnt content
//              liElemnt.textContent=`${hours[i]}: ${this.coockies[i]} coockies`
//         }
//         let totalLi = document.createElement(`li`);
//         ulElemnt.appendChild(totalLi);
//         totalLi.textContent=`total: ${this.total}`
//     }
//     }
// avg: 6.3,       // AVARAGE COOCKIES SALE
// coustemrs: [],       // CUSTOMER DETAILS    
// coockies: [],       // COOCKIES PER HOURE
// total :0,         // total numbers

// Seattle.getCoustemrs();
// console.log(Seattle.coustemrs);

// Seattle.calcCockies();
// console.log(Seattle.coockies);
// Seattle.render();
// console.log(Seattle);


////// tokyo

// let tokyo = {
//     locationName: 'tokyo',
//     min: 3,       // MINIMUM CUSTOMERS PER HOURE
//     max: 24,       // MAXIMUM CUSTOMERS PER HOURE
//     avg: 1.2,       // AVARAGE COOCKIES SALE
//     coustemrs: [],       // CUSTOMER DETAILS    
//     coockies: [],       // COOCKIES PER HOURE
//     total: 0,         // total numbers
//     getCoustemrs: function ()   // GET THE RANDOM number of customers 
//     {
//         for (let i = 0; i < hours.length; i++) {
//             this.coustemrs.push(randomNumber(this.min, this.max));
//         }
//         return this.coustemrs;
//     },
//     calcCockies: function ()         // GET THE AVARAGE OF CUSTOMERS PER HOURE
//     {
//         for (let i = 0; i < hours.length; i++) {
//             this.coockies.push(parseInt((this.coustemrs[i]) * this.avg));
//             this.total += this.coockies[i];
//         }
//         // return this.coockies;
//     },
//     render: function () {
//         //make the parent
//         let parent = document.getElementById('parent');
//         console.log(parent);
//         // console.log(locatinElemnt);
//         // add child to the patent
//         let locatinElemnt = document.createElement('h3');
//         parent.appendChild(locatinElemnt);
//         // add content to the child
//         locatinElemnt.textContent = this.locationName;
//         // creating unorder list 
//         let ulElemnt = document.createElement('ul');
//         parent.appendChild(ulElemnt);
//         for (let i = 0; i < hours.length; i++) {
//             // create 16 li
//             let liElemnt = document.createElement('li');
//             // add it to ul
//             ulElemnt.appendChild(liElemnt);
//             //given text elemnt content
//             liElemnt.textContent = `${hours[i]}: ${this.coockies[i]} coockies`
//         }
//         let totalLi = document.createElement(`li`);
//         ulElemnt.appendChild(totalLi);
//         totalLi.textContent = `total: ${this.total}`
//     }
// }
// // tokyo.getCoustemrs();
// // console.log(tokyo.coustemrs);

// // tokyo.calcCockies();
// // console.log(tokyo.coockies);
// // tokyo.render();
// // console.log(tokyo);


// /// dubai 
// let dubai = {
//     locationName: 'dubai',
//     min: 11,       // MINIMUM CUSTOMERS PER HOURE
//     max: 38,       // MAXIMUM CUSTOMERS PER HOURE
//     avg: 3.7,       // AVARAGE COOCKIES SALE
//     coustemrs: [],       // CUSTOMER DETAILS    
//     coockies: [],       // COOCKIES PER HOURE
//     total: 0,         // total numbers
//     getCoustemrs: function ()   // GET THE RANDOM number of customers 
//     {
//         for (let i = 0; i < hours.length; i++) {
//             this.coustemrs.push(randomNumber(this.min, this.max));
//         }
//         return this.coustemrs;
//     },
//     calcCockies: function ()         // GET THE AVARAGE OF CUSTOMERS PER HOURE
//     {
//         for (let i = 0; i < hours.length; i++) {
//             this.coockies.push(parseInt((this.coustemrs[i]) * this.avg));
//             this.total += this.coockies[i];
//         }
//         // return this.coockies;
//     },
//     render: function () {
//         //make the parent
//         let parent = document.getElementById('parent');
//         console.log(parent);
//         // console.log(locatinElemnt);
//         // add child to the patent
//         let locatinElemnt = document.createElement('h3');
//         parent.appendChild(locatinElemnt);
//         // add content to the child
//         locatinElemnt.textContent = this.locationName;
//         // creating unorder list 
//         let ulElemnt = document.createElement('ul');
//         parent.appendChild(ulElemnt);
//         for (let i = 0; i < hours.length; i++) {
//             // create 16 li
//             let liElemnt = document.createElement('li');
//             // add it to ul
//             ulElemnt.appendChild(liElemnt);
//             //given text elemnt content
//             liElemnt.textContent = `${hours[i]}: ${this.coockies[i]} coockies`
//         }
//         let totalLi = document.createElement(`li`);
//         ulElemnt.appendChild(totalLi);
//         totalLi.textContent = `total: ${this.total}`
//     }
// }
// // dubai.getCoustemrs();
// // console.log(dubai.coustemrs);

// // dubai.calcCockies();
// // console.log(dubai.coockies);
// // dubai.render();
// // console.log(dubai);


// /// paris 
// let paris = {
//     locationName: 'paris',
//     min: 20,       // MINIMUM CUSTOMERS PER HOURE
//     max: 38,       // MAXIMUM CUSTOMERS PER HOURE
//     avg: 2.3,       // AVARAGE COOCKIES SALE
//     coustemrs: [],       // CUSTOMER DETAILS    
//     coockies: [],       // COOCKIES PER HOURE
//     total: 0,         // total numbers
//     getCoustemrs: function ()   // GET THE RANDOM number of customers 
//     {
//         for (let i = 0; i < hours.length; i++) {
//             this.coustemrs.push(randomNumber(this.min, this.max));
//         }
//         return this.coustemrs;
//     },
//     calcCockies: function ()         // GET THE AVARAGE OF CUSTOMERS PER HOURE
//     {
//         for (let i = 0; i < hours.length; i++) {
//             this.coockies.push(parseInt((this.coustemrs[i]) * this.avg));
//             this.total += this.coockies[i];
//         }
//         // return this.coockies;
//     },
//     render: function () {
//         //make the parent
//         let parent = document.getElementById('parent');
//         console.log(parent);
//         // console.log(locatinElemnt);
//         // add child to the patent
//         let locatinElemnt = document.createElement('h3');
//         parent.appendChild(locatinElemnt);
//         // add content to the child
//         locatinElemnt.textContent = this.locationName;
//         // creating unorder list 
//         let ulElemnt = document.createElement('ul');
//         parent.appendChild(ulElemnt);
//         for (let i = 0; i < hours.length; i++) {
//             // create 16 li
//             let liElemnt = document.createElement('li');
//             // add it to ul
//             ulElemnt.appendChild(liElemnt);
//             //given text elemnt content
//             liElemnt.textContent = `${hours[i]}: ${this.coockies[i]} coockies`
//         }
//         let totalLi = document.createElement(`li`);
//         ulElemnt.appendChild(totalLi);
//         totalLi.textContent = `total: ${this.total}`
//     }
// }
// // paris.getCoustemrs();
// // console.log(paris.coustemrs);

// // paris.calcCockies();
// // console.log(paris.coockies);
// // paris.render();
// // console.log(paris);




// //// lima
// let lima = {
//     locationName: 'lima',
//     min: 3,       // MINIMUM CUSTOMERS PER HOURE
//     max: 24,       // MAXIMUM CUSTOMERS PER HOURE
//     avg: 1.2,       // AVARAGE COOCKIES SALE
//     coustemrs: [],       // CUSTOMER DETAILS    
//     coockies: [],       // COOCKIES PER HOURE
//     total: 0,         // total numbers
//     getCoustemrs: function ()   // GET THE RANDOM number of customers 
//     {
//         for (let i = 0; i < hours.length; i++) {
//             this.coustemrs.push(randomNumber(this.min, this.max));
//         }
//         return this.coustemrs;
//     },
//     calcCockies: function ()         // GET THE AVARAGE OF CUSTOMERS PER HOURE
//     {
//         for (let i = 0; i < hours.length; i++) {
//             this.coockies.push(parseInt((this.coustemrs[i]) * this.avg));
//             this.total += this.coockies[i];
//         }
//         // return this.coockies;
//     },
//     render: function () {
//         //make the parent
//         let parent = document.getElementById('parent');
//         console.log(parent);
//         // console.log(locatinElemnt);
//         // add child to the patent
//         let locatinElemnt = document.createElement('h3');
//         parent.appendChild(locatinElemnt);
//         // add content to the child
//         locatinElemnt.textContent = this.locationName;
//         // creating unorder list 
//         let ulElemnt = document.createElement('ul');
//         parent.appendChild(ulElemnt);
//         for (let i = 0; i < hours.length; i++) {
//             // create 16 li
//             let liElemnt = document.createElement('li');
//             // add it to ul
//             ulElemnt.appendChild(liElemnt);
//             //given text elemnt content
//             liElemnt.textContent = `${hours[i]}: ${this.coockies[i]} coockies`
//         }
//         let totalLi = document.createElement(`li`);
//         ulElemnt.appendChild(totalLi);
//         totalLi.textContent = `total: ${this.total}`
//     }
// }
// // lima.getCoustemrs();
// // console.log(lima.coustemrs);

// // lima.calcCockies();
// // console.log(lima.coockies);
// // lima.render();
// // console.log(lima);
