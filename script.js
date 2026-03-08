function addClaim(){

var claim=document.getElementById("claim").value;

if(claim==""){
alert("Please enter claim");
return;
}

var list=document.getElementById("claimList");

var li=document.createElement("li");

li.innerHTML = claim + " <button onclick='deleteClaim(this)'>Delete</button>";

list.appendChild(li);

document.getElementById("claim").value="";

}

function deleteClaim(btn){

btn.parentElement.remove();

}
