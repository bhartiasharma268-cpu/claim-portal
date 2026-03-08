function addClaim(){

var claim=document.getElementById("claim").value;

if(claim==""){
alert("Enter claim name");
return;
}

var list=document.getElementById("claimList");

var li=document.createElement("li");

li.innerHTML=claim;

list.appendChild(li);

document.getElementById("claim").value="";

updateTotal();

}

function updateTotal(){

var total=document.getElementById("claimList").children.length;

document.getElementById("total").innerText=total;

}
