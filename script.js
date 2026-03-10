let revenueChart;
let profitChart;
let productChart;

function createCharts(){

profitChart = new Chart(document.getElementById("profitChart"),{

type:"pie",

data:{
labels:["Samsung","Vivo"],
datasets:[{
data:[15,8],
backgroundColor:["#caa400","#4b4bff"]
}]
}

});


revenueChart = new Chart(document.getElementById("revenueChart"),{

type:"doughnut",

data:{
labels:["Samsung","Vivo"],
datasets:[{
data:[55,30],
backgroundColor:["#caa400","#4b4bff"]
}]
}

});


productChart = new Chart(document.getElementById("productChart"),{

type:"bar",

data:{
labels:["Vivo X","Vivo T","Galaxy S","Galaxy Fold","Vivo Y","Galaxy M"],
datasets:[{
label:"Units Sold",
data:[85,80,78,75,70,68],
backgroundColor:"#4b4bff"
}]
}

});

}

createCharts();


function updateDashboard(){

let company = document.getElementById("companyFilter").value;

if(company=="Samsung"){

document.getElementById("revenueKPI").innerText="55B";
document.getElementById("profitKPI").innerText="15B";
document.getElementById("unitsKPI").innerText="280";
document.getElementById("ratingKPI").innerText="4.2";

}

else if(company=="Vivo"){

document.getElementById("revenueKPI").innerText="30B";
document.getElementById("profitKPI").innerText="8B";
document.getElementById("unitsKPI").innerText="240";
document.getElementById("ratingKPI").innerText="4.4";

}

else{

document.getElementById("revenueKPI").innerText="85B";
document.getElementById("profitKPI").innerText="23B";
document.getElementById("unitsKPI").innerText="520";
document.getElementById("ratingKPI").innerText="4.3";

}

}
