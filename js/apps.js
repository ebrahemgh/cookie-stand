function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let total = 0;
// let coustemrs = [];


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
    
}

let stores = [];
// total = 0;


Salamon.prototype.getCoustemrs = function ()   // GET THE RANDOM number of customers 
{
    
    for (let i = 0; i < hours.length; i++) {
        // console.log(randomNumber(this.min, this.max));
        this.coustemrs.push(randomNumber(this.min, this.max));
        let addnum = this.coustemrs[i];
       
    }
    // return coustemrs;

}
Salamon.prototype.calcCockies = function ()         // GET THE AVARAGE OF CUSTOMERS PER HOURE
{
    
    for (let i = 0; i < hours.length; i++) {    
        this.coockies.push(Math.round((this.coustemrs[i])*this.AvgCookie));
        this.total += this.coockies[i];
    }
    // console.log(this.total);
}



const seattle = new Salamon('seattle', 23, 65, 6.3);
const tokyo = new Salamon('tokyo', 3, 24, 1.2);
const dubai = new Salamon('dubai', 11, 38, 3.7);
const paris = new Salamon('paris', 20, 38, 2.3);
const lima = new Salamon('lima', 3, 24, 1.2);




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

footer = function () {
    let footerRow = document.createElement('tr');
    parent.appendChild(footerRow);
    footerRow.textContent = "total";
    for (i = 0; i < addnum.length; i++) {
        // getCoustemrs();
        // console.log("from coustomers");
        let footerElemnt = document.createElement('th');
        this.taotalOfCoust = this.taotalOfCoust + this.addnum[i];
        
        // bigtable.appendChild(footerElemnt);
        footerElemnt.textContent = taotalOfCoust;
    }}
footer();


// Salamon.prototype.footer = function () {
   
//     let taotalOfCoust = 0;

//     for (i = 0; i < this.coustemrs.length; i++){
//         // getCoustemrs();
//         // console.log("from coustomers");
//         let footerElemnt = document.createElement('th');
//         this.taotalOfCoust = this.taotalOfCoust + this.coustemrs[i];
        
//         // bigtable.appendChild(footerElemnt);
//         footerElemnt.textContent = taotalOfCoust;
//         // totals = totals+ this.stores.coustemrs[i];
//         // console.log(totals);
//         // footerElemnt.textContent=totals
        
//     }
// }
// footer();














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
