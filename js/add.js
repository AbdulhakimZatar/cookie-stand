'use_strict';

function generateRandomCustomers(maxCustomers, minCustomers){
    var generatedCustomers = Math.floor((Math.random()*(maxCustomers-minCustomers+1))+minCustomers);
    
    return generatedCustomers;
}

var Seattle = {
    name: 'Seattle',
    avgCustomers: 0,
    hourSales: 0,
    avgSales: 6.3,
    minCustomersHR: 23,
    maxCustomersHR: 65,
    //Store open for 14hrs
    hoursOpen: ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
    totalCustomers: 0,
    totalSales: 0,
    salesArray: [],

    // setHourSales: function(){
    //     for(var i=0; i < this.hoursOpen.length; i++){
            // this.hourSales = Math.floor(this.avgSales * generateRandomCustomers(Seattle.maxCustomersHR,Seattle.minCustomersHR));
        
    //         // console.log(Seattle.hourSales);
    //         this.totalCustomers += generateRandomCustomers(Seattle.maxCustomersHR,Seattle.minCustomersHR);
    //         // console.log(this.totalCustomers);
    //         this.totalSales += this.hourSales;
    //         // console.log(this.totalSales);
    //         // this.salesArray.push(this.hourSales);
    //         // console.log(this.salesArray);
    //         // console.log(this.salesArray[i]);
    //     }
       
    // },
    
    
    render: function(){
        var parentElement = document.getElementById('seattle');
        var article = document.createElement('article');
        parentElement.appendChild(article);

        var locationName = document.createElement('h3');
        locationName.textContent = Seattle.name;
        article.appendChild(locationName);

        var ulElement = document.createElement("ul");
        article.appendChild(ulElement);

        for(var i=0; i < Seattle.hoursOpen.length; i++){
            Seattle.hourSales = Math.floor(Seattle.avgSales * generateRandomCustomers(Seattle.maxCustomersHR,Seattle.minCustomersHR));
            Seattle.totalSales += Seattle.hourSales;
            var hour = Seattle.hoursOpen;

            var liElement = document.createElement("li");
            ulElement.appendChild(liElement);
            liElement.textContent = hour[i]+": "+Seattle.hourSales+" cookies";

            this.salesArray.push(this.hourSales);
        }
        // console.log(this.salesArray);
        var Totalcusomers1 = document.createElement("p");
        article.appendChild(Totalcusomers1);
        Totalcusomers1.textContent = "Total: "+Seattle.totalSales+" cookies";
        
    }
    
};

var Tokyo = {
    name: 'Tokyo',
    avgCustomers: 0,
    hourSales: 0,
    avgSales: 1.2,
    minCustomersHR: 3,
    maxCustomersHR: 24,
    //Store open for 14hrs
    hoursOpen: ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
    totalCustomers: 0,
    totalSales: 0,
    salesArray: [],
    render: function(){
        var parentElement = document.getElementById('tokyo');
        var article = document.createElement('article');
        parentElement.appendChild(article);

        var locationName = document.createElement('h3');
        locationName.textContent = Tokyo.name;
        article.appendChild(locationName);

        var ulElement = document.createElement("ul");
        article.appendChild(ulElement);

        for(var i=0; i < Tokyo.hoursOpen.length; i++){
            Tokyo.hourSales = Math.floor(Tokyo.avgSales * generateRandomCustomers(Tokyo.maxCustomersHR,Tokyo.minCustomersHR));
            Tokyo.totalSales += Tokyo.hourSales;
            var hour = Tokyo.hoursOpen;

            var liElement = document.createElement("li");
            ulElement.appendChild(liElement);
            liElement.textContent = hour[i]+": "+Tokyo.hourSales+" cookies";

            this.salesArray.push(this.hourSales);
        }
        var Totalcusomers1 = document.createElement("p");
        article.appendChild(Totalcusomers1);
        Totalcusomers1.textContent = "Total: "+Tokyo.totalSales+" cookies";
        
    }
};

var Dubai = {
    name: 'Dubai',
    avgCustomers: 0,
    hourSales: 0,
    avgSales: 3.7,
    minCustomersHR: 11,
    maxCustomersHR: 38,
    //Store open for 14hrs
    hoursOpen: ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
    totalCustomers: 0,
    totalSales: 0,
    salesArray: [],
    render: function(){
        var parentElement = document.getElementById('dubai');
        var article = document.createElement('article');
        parentElement.appendChild(article);

        var locationName = document.createElement('h3');
        locationName.textContent = Dubai.name;
        article.appendChild(locationName);

        var ulElement = document.createElement("ul");
        article.appendChild(ulElement);

        for(var i=0; i < Dubai.hoursOpen.length; i++){
            Dubai.hourSales = Math.floor(Dubai.avgSales * generateRandomCustomers(Dubai.maxCustomersHR,Dubai.minCustomersHR));
            Dubai.totalSales += Dubai.hourSales;
            var hour = Dubai.hoursOpen;

            var liElement = document.createElement("li");
            ulElement.appendChild(liElement);
            liElement.textContent = hour[i]+": "+Dubai.hourSales+" cookies";

            this.salesArray.push(this.hourSales);
        }
        var Totalcusomers1 = document.createElement("p");
        article.appendChild(Totalcusomers1);
        Totalcusomers1.textContent = "Total: "+Dubai.totalSales+" cookies";
        
    }
};

var Paris = {
    name: 'Paris',
    avgCustomers: 0,
    hourSales: 0,
    avgSales: 2.3,
    minCustomersHR: 20,
    maxCustomersHR: 38,
    //Store open for 14hrs
    hoursOpen: ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
    totalCustomers: 0,
    totalSales: 0,
    salesArray: [],
    render: function(){
        var parentElement = document.getElementById('paris');
        var article = document.createElement('article');
        parentElement.appendChild(article);

        var locationName = document.createElement('h3');
        locationName.textContent = Paris.name;
        article.appendChild(locationName);

        var ulElement = document.createElement("ul");
        article.appendChild(ulElement);

        for(var i=0; i < Paris.hoursOpen.length; i++){
            Paris.hourSales = Math.floor(Paris.avgSales * generateRandomCustomers(Paris.maxCustomersHR,Paris.minCustomersHR));
            Paris.totalSales += Paris.hourSales;
            var hour = Paris.hoursOpen;

            var liElement = document.createElement("li");
            ulElement.appendChild(liElement);
            liElement.textContent = hour[i]+": "+Paris.hourSales+" cookies";

            this.salesArray.push(this.hourSales);
        }
        var Totalcusomers1 = document.createElement("p");
        article.appendChild(Totalcusomers1);
        Totalcusomers1.textContent = "Total: "+Paris.totalSales+" cookies";
        
    }
};

var Lima = {
    name: 'Lima',
    avgCustomers: 0,
    hourSales: 0,
    avgSales: 4.6,
    minCustomersHR: 2,
    maxCustomersHR: 16,
    //Store open for 14hrs
    hoursOpen: ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
    totalCustomers: 0,
    totalSales: 0,
    salesArray: [],
    render: function(){
        var parentElement = document.getElementById('lima');
        var article = document.createElement('article');
        parentElement.appendChild(article);

        var locationName = document.createElement('h3');
        locationName.textContent = Lima.name;
        article.appendChild(locationName);

        var ulElement = document.createElement("ul");
        article.appendChild(ulElement);

        for(var i=0; i < Lima.hoursOpen.length; i++){
            Lima.hourSales = Math.floor(Lima.avgSales * generateRandomCustomers(Lima.maxCustomersHR,Lima.minCustomersHR));
            Lima.totalSales += Lima.hourSales;
            var hour = Lima.hoursOpen;

            var liElement = document.createElement("li");
            ulElement.appendChild(liElement);
            liElement.textContent = hour[i]+": "+Lima.hourSales+" cookies";

            this.salesArray.push(this.hourSales);
        }
        var Totalcusomers1 = document.createElement("p");
        article.appendChild(Totalcusomers1);
        Totalcusomers1.textContent = "Total: "+Lima.totalSales+" cookies";
        
    }
};

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
// Seattle.setHourSales()
