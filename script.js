let ctx = document.getElementById("salesChart")

new Chart(ctx,{

type:"bar",

data:{

labels:["Samsung","Vivo"],

datasets:[{

label:"Revenue",

data:[55,30],

backgroundColor:["gold","blue"]

}]

}

})


function darkMode(){

document.body.classList.toggle("dark")

}
