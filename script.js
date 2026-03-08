function addClaim(){

var claim=document.getElementById("claim").value;

if(claim==""){
alert("Enter claim");
return;
}

var list=document.getElementById("claimList");

var li=document.createElement("li");

li.innerHTML=claim+" <button onclick='deleteClaim(this)'>Delete</button>";

list.appendChild(li);

document.getElementById("claim").value="";

updateTotal();

}

function deleteClaim(btn){

btn.parentElement.remove();

updateTotal();

}

function updateTotal(){

var total=document.getElementById("claimList").children.length;

document.getElementById("total").innerText=total;

}
