
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let total = 0;
let Seattle = {
    locationName: 'seatle',
    min: 23,       // MINIMUM CUSTOMERS PER HOURE
    max: 65,       // MAXIMUM CUSTOMERS PER HOURE
    avg: 6.3,       // AVARAGE COOCKIES SALE
    coustemrs: [],       // CUSTOMER DETAILS    
    coockies: [],       // COOCKIES PER HOURE
    total :0,         // total numbers
    getCoustemrs: function ()   // GET THE RANDOM number of customers 
    {
        for (let i = 0; i < hours.length; i++) {
            this.coustemrs.push(randomNumber(this.min, this.max));
        }
        return this.coustemrs;
    },
    calcCockies: function ()         // GET THE AVARAGE OF CUSTOMERS PER HOURE
    {
        for (let i = 0; i < hours.length; i++) {
            this.coockies.push(parseInt((this.coustemrs[i]) * this.avg));
            this.total += this.coockies[i];
        }
        // return this.coockies;
    },
    render: function () {
        //make the parent
        let parent = document.getElementById('parent');
        console.log(parent);
        // console.log(locatinElemnt);
// add child to the patent
        let locatinElemnt = document.createElement('h3');
        parent.appendChild(locatinElemnt);
       // add content to the child
        locatinElemnt.textContent = this.locationName;
        // creating unorder list 
        let ulElemnt = document.createElement('ul');
        parent.appendChild(ulElemnt);
        for (let i = 0; i < hours.length; i++){
            // create 16 li
            let liElemnt = document.createElement('li');
            // add it to ul
            ulElemnt.appendChild(liElemnt);
            //given text elemnt content
             liElemnt.textContent=`${hours[i]}: ${this.coockies[i]} coockies`
        }
        let totalLi = document.createElement(`li`);
        ulElemnt.appendChild(totalLi);
        totalLi.textContent=`total: ${this.total}`
    }
}
Seattle.getCoustemrs();
console.log(Seattle.coustemrs);

Seattle.calcCockies();
console.log(Seattle.coockies);
Seattle.render(); 
console.log(Seattle);


////// tokyo

let tokyo = {
    locationName: 'tokyo',
    min: 3,       // MINIMUM CUSTOMERS PER HOURE
    max: 24,       // MAXIMUM CUSTOMERS PER HOURE
    avg: 1.2,       // AVARAGE COOCKIES SALE
    coustemrs: [],       // CUSTOMER DETAILS    
    coockies: [],       // COOCKIES PER HOURE
    total :0,         // total numbers
    getCoustemrs: function ()   // GET THE RANDOM number of customers 
    {
        for (let i = 0; i < hours.length; i++) {
            this.coustemrs.push(randomNumber(this.min, this.max));
        }
        return this.coustemrs;
    },
    calcCockies: function ()         // GET THE AVARAGE OF CUSTOMERS PER HOURE
    {
        for (let i = 0; i < hours.length; i++) {
            this.coockies.push(parseInt((this.coustemrs[i]) * this.avg));
            this.total += this.coockies[i];
        }
        // return this.coockies;
    },
    render: function () {
        //make the parent
        let parent = document.getElementById('parent');
        console.log(parent);
        // console.log(locatinElemnt);
// add child to the patent
        let locatinElemnt = document.createElement('h3');
        parent.appendChild(locatinElemnt);
       // add content to the child
        locatinElemnt.textContent = this.locationName;
        // creating unorder list 
        let ulElemnt = document.createElement('ul');
        parent.appendChild(ulElemnt);
        for (let i = 0; i < hours.length; i++){
            // create 16 li
            let liElemnt = document.createElement('li');
            // add it to ul
            ulElemnt.appendChild(liElemnt);
            //given text elemnt content
             liElemnt.textContent=`${hours[i]}: ${this.coockies[i]} coockies`
        }
        let totalLi = document.createElement(`li`);
        ulElemnt.appendChild(totalLi);
        totalLi.textContent=`total: ${this.total}`
    }
}
tokyo.getCoustemrs();
console.log(tokyo.coustemrs);

tokyo.calcCockies();
console.log(tokyo.coockies);
tokyo.render(); 
console.log(tokyo);


/// dubai 
let dubai = {
    locationName: 'dubai',
    min: 11,       // MINIMUM CUSTOMERS PER HOURE
    max: 38,       // MAXIMUM CUSTOMERS PER HOURE
    avg: 3.7,       // AVARAGE COOCKIES SALE
    coustemrs: [],       // CUSTOMER DETAILS    
    coockies: [],       // COOCKIES PER HOURE
    total :0,         // total numbers
    getCoustemrs: function ()   // GET THE RANDOM number of customers 
    {
        for (let i = 0; i < hours.length; i++) {
            this.coustemrs.push(randomNumber(this.min, this.max));
        }
        return this.coustemrs;
    },
    calcCockies: function ()         // GET THE AVARAGE OF CUSTOMERS PER HOURE
    {
        for (let i = 0; i < hours.length; i++) {
            this.coockies.push(parseInt((this.coustemrs[i]) * this.avg));
            this.total += this.coockies[i];
        }
        // return this.coockies;
    },
    render: function () {
        //make the parent
        let parent = document.getElementById('parent');
        console.log(parent);
        // console.log(locatinElemnt);
// add child to the patent
        let locatinElemnt = document.createElement('h3');
        parent.appendChild(locatinElemnt);
       // add content to the child
        locatinElemnt.textContent = this.locationName;
        // creating unorder list 
        let ulElemnt = document.createElement('ul');
        parent.appendChild(ulElemnt);
        for (let i = 0; i < hours.length; i++){
            // create 16 li
            let liElemnt = document.createElement('li');
            // add it to ul
            ulElemnt.appendChild(liElemnt);
            //given text elemnt content
             liElemnt.textContent=`${hours[i]}: ${this.coockies[i]} coockies`
        }
        let totalLi = document.createElement(`li`);
        ulElemnt.appendChild(totalLi);
        totalLi.textContent=`total: ${this.total}`
    }
}
dubai.getCoustemrs();
console.log(dubai.coustemrs);

dubai.calcCockies();
console.log(dubai.coockies);
dubai.render(); 
console.log(dubai);


/// paris 
let paris = {
    locationName: 'paris',
    min: 20,       // MINIMUM CUSTOMERS PER HOURE
    max: 38,       // MAXIMUM CUSTOMERS PER HOURE
    avg: 2.3,       // AVARAGE COOCKIES SALE
    coustemrs: [],       // CUSTOMER DETAILS    
    coockies: [],       // COOCKIES PER HOURE
    total :0,         // total numbers
    getCoustemrs: function ()   // GET THE RANDOM number of customers 
    {
        for (let i = 0; i < hours.length; i++) {
            this.coustemrs.push(randomNumber(this.min, this.max));
        }
        return this.coustemrs;
    },
    calcCockies: function ()         // GET THE AVARAGE OF CUSTOMERS PER HOURE
    {
        for (let i = 0; i < hours.length; i++) {
            this.coockies.push(parseInt((this.coustemrs[i]) * this.avg));
            this.total += this.coockies[i];
        }
        // return this.coockies;
    },
    render: function () {
        //make the parent
        let parent = document.getElementById('parent');
        console.log(parent);
        // console.log(locatinElemnt);
// add child to the patent
        let locatinElemnt = document.createElement('h3');
        parent.appendChild(locatinElemnt);
       // add content to the child
        locatinElemnt.textContent = this.locationName;
        // creating unorder list 
        let ulElemnt = document.createElement('ul');
        parent.appendChild(ulElemnt);
        for (let i = 0; i < hours.length; i++){
            // create 16 li
            let liElemnt = document.createElement('li');
            // add it to ul
            ulElemnt.appendChild(liElemnt);
            //given text elemnt content
             liElemnt.textContent=`${hours[i]}: ${this.coockies[i]} coockies`
        }
        let totalLi = document.createElement(`li`);
        ulElemnt.appendChild(totalLi);
        totalLi.textContent=`total: ${this.total}`
    }
}
paris.getCoustemrs();
console.log(paris.coustemrs);

paris.calcCockies();
console.log(paris.coockies);
paris.render(); 
console.log(paris);




//// lima
let lima = {
    locationName: 'lima',
    min: 3,       // MINIMUM CUSTOMERS PER HOURE
    max: 24,       // MAXIMUM CUSTOMERS PER HOURE
    avg: 1.2,       // AVARAGE COOCKIES SALE
    coustemrs: [],       // CUSTOMER DETAILS    
    coockies: [],       // COOCKIES PER HOURE
    total :0,         // total numbers
    getCoustemrs: function ()   // GET THE RANDOM number of customers 
    {
        for (let i = 0; i < hours.length; i++) {
            this.coustemrs.push(randomNumber(this.min, this.max));
        }
        return this.coustemrs;
    },
    calcCockies: function ()         // GET THE AVARAGE OF CUSTOMERS PER HOURE
    {
        for (let i = 0; i < hours.length; i++) {
            this.coockies.push(parseInt((this.coustemrs[i]) * this.avg));
            this.total += this.coockies[i];
        }
        // return this.coockies;
    },
    render: function () {
        //make the parent
        let parent = document.getElementById('parent');
        console.log(parent);
        // console.log(locatinElemnt);
// add child to the patent
        let locatinElemnt = document.createElement('h3');
        parent.appendChild(locatinElemnt);
       // add content to the child
        locatinElemnt.textContent = this.locationName;
        // creating unorder list 
        let ulElemnt = document.createElement('ul');
        parent.appendChild(ulElemnt);
        for (let i = 0; i < hours.length; i++){
            // create 16 li
            let liElemnt = document.createElement('li');
            // add it to ul
            ulElemnt.appendChild(liElemnt);
            //given text elemnt content
             liElemnt.textContent=`${hours[i]}: ${this.coockies[i]} coockies`
        }
        let totalLi = document.createElement(`li`);
        ulElemnt.appendChild(totalLi);
        totalLi.textContent=`total: ${this.total}`
    }
}
lima.getCoustemrs();
console.log(lima.coustemrs);

lima.calcCockies();
console.log(lima.coockies);
lima.render(); 
console.log(lima);