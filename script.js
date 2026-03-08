function addClaim(){

var claim=document.getElementById("claim").value;

var list=document.getElementById("claimList");

var li=document.createElement("li");

li.innerHTML=claim;

list.appendChild(li);

}
