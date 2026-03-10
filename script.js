// Purchase Reason Chart
new Chart(document.getElementById("reasonChart"),{
type:"bar",
data:{
labels:["Gaming","Camera","Premium Design","Battery","Value"],
datasets:[
{
label:"Samsung",
data:[40,35,30,25,20],
backgroundColor:"gold"
},
{
label:"Vivo",
data:[50,45,40,35,30],
backgroundColor:"blue"
}
]
}
});

// Profit Pie Chart
new Chart(document.getElementById("profitChart"),{
type:"pie",
data:{
labels:["Samsung","Vivo"],
datasets:[{
data:[15,8],
backgroundColor:["gold","blue"]
}]
}
});

// Rating Chart
new Chart(document.getElementById("ratingChart"),{
type:"bar",
data:{
labels:["Vivo X","Vivo T","Galaxy S","Galaxy Fold","Vivo Y"],
datasets:[{
label:"Customer Rating",
data:[85,80,78,76,70],
backgroundColor:"purple"
}]
}
});

// Revenue Donut Chart
new Chart(document.getElementById("revenueChart"),{
type:"doughnut",
data:{
labels:["Samsung","Vivo"],
datasets:[{
data:[55,30],
backgroundColor:["gold","blue"]
}]
}
});

// Product Sales Chart
new Chart(document.getElementById("productChart"),{
type:"bar",
data:{
labels:["Vivo X","Vivo T","Galaxy S","Galaxy Fold","Vivo Y","Galaxy M"],
datasets:[{
label:"Units Sold",
data:[85,80,78,75,70,68],
backgroundColor:"blue"
}]
}
});
