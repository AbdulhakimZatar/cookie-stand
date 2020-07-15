'use_strict';

var hoursOpen = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"];

function generateRandomCustomers(maxCustomers, minCustomers){
    var generatedCustomers = Math.floor((Math.random()*(maxCustomers-minCustomers+1))+minCustomers);
    return generatedCustomers;
}

function store(name, hourSales, avgSales, minCustomersHR, maxCustomersHR, totalSales, salesArray){
    this.name = name;
    this.hourSales = hourSales;
    this.avgSales = avgSales;
    this.minCustomersHR = minCustomersHR;
    this.maxCustomersHR = maxCustomersHR; 
    this.totalSales = totalSales;
    this.salesArray = salesArray[""];
}

var Seattle = new store('Seattle', 0, 6.3, 23, 65, 0, [""]);
var Tokyo = new store('Tokyo', 0, 1.2, 3, 24, 0, [""]);
var Dubai = new store('Dubai', 0, 3.7, 11, 38, 0, [""]);
var Paris = new store('Paris', 0, 2.3, 20, 38, 0, [""]);
var Lima = new store('Lima', 0, 4.6, 2, 16, 0, [""]);

var renderHeader = function(){
    var parentElement = document.getElementById('data');
    var article = document.createElement('article');
    parentElement.appendChild(article);

    table = document.createElement('table');
    table.setAttribute('border', '1');

    var tr1 = document.createElement('tr');

    var th1 = document.createElement('th');
    th1.textContent = "Location\\Time";
    tr1.append(th1);

    for(var i = 0; i < hoursOpen.length; i++){
        var th2 = document.createElement('th');
        th2.textContent = hoursOpen[i];
        tr1.append(th2);
    }

    var th2 = document.createElement('th');
    th2.textContent = "Total";
    tr1.append(th2);

    table.appendChild(tr1);
    article.appendChild(table);
}

var totalHourArrayFinal = [];
var tTotalSales = 0;
store.prototype.render = function(){
    var tr2 = document.createElement('tr');

    var td1 = document.createElement('td');
        td1.textContent = this.name;
        tr2.append(td1);
    
    var totalCookiesInThisDay = 0;
    var totalHourArray = [];
    
    for(i = 0; i <  hoursOpen.length; i++){
        
        this.hourSales = Math.floor(this.avgSales * generateRandomCustomers(this.maxCustomersHR, this.minCustomersHR));
        this.totalSales += this.hourSales;      

        totalHourArray.push(this.hourSales);

        var td2 = document.createElement('td');
        td2.textContent = this.hourSales;
        tr2.append(td2);
        
    }
    
   

    

    var td3 = document.createElement('td');
        td3.textContent = this.totalSales;
        tr2.append(td3);
        
        tTotalSales += this.totalSales;

        totalHourArrayFinal.push(totalHourArray)
    table.appendChild(tr2);
}

var renderFooter = function(){

    var tr3 = document.createElement('tr');
    var td4 = document.createElement('td');
    td4.textContent = "Totals";
    tr3.append(td4);

    for(i = 0; i <  hoursOpen.length; i++){
    var finalTotal = 0;
    for(var y = 0; y < 5; y++){
    finalTotal = finalTotal + totalHourArrayFinal[y][i]
    }


    var td5 = document.createElement('td');
    td5.textContent = finalTotal;
    tr3.append(td5);


    
    }
    var td6 = document.createElement('td');
    td6.textContent = tTotalSales;
    tr3.append(td6);

    table.appendChild(tr3);
}



renderHeader();
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
renderFooter();
