var username=localStorage.getItem('USERNAME')
console.log(username);
user1.innerHTML=`Welcome ${username}`
function logout()
{
    localStorage.clear()
    window.location='./index.html'
}
function addemp(){
var emid=document.getElementById('empid').value
console.log(emid);
var emname=document.getElementById('empname').value
console.log(emname);
var emadd=document.getElementById('empad').value
console.log(emadd);
var emd=document.getElementById('empdes').value
console.log(emd);
var emexp=document.getElementById('empexp').value
console.log(emexp);
var emid=document.getElementById('empid').value
console.log(emid);
var emsal=document.getElementById('empsal').value
console.log(emsal);
localStorage.setItem('ID',emid);
localStorage.setItem('NAME',emname);
localStorage.setItem('ADDRESS',emadd);
localStorage.setItem('DESIGNATION',emd);
localStorage.setItem('EXPERIENCE',emexp);
localStorage.setItem('SALARY',emsal);
alert("Action Successfull")
}
function searchid()
{
    let reslt=document.getElementById("res")
    console.log(reslt);
    let duplicate=document.getElementById('ans').value
    console.log(duplicate);
    let search=localStorage.getItem('ID')
    console.log(search);
    if(duplicate===search)
    {
        document.getElementById('res').innerHTML=
        `<div class="card " style="width: 18rem;">
        <div class="card-header">
          Employee details
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">EMPLOYEE ID ${localStorage.getItem(
            "ID"
          )}</li>
          <li class="list-group-item">EMPLOYEE NAME ${localStorage.getItem(
            "NAME"
          )}</li>
          <li class="list-group-item">EMPLOYEE ADRESS ${localStorage.getItem(
            "ADDRESS"
          )}</li>
          <li class="list-group-item">EMPLOYEE DESIGNATION ${localStorage.getItem(
            "DESIGNATION"
          )}</li>
          <li class="list-group-item">EMPLOYEE EXPERIENCE ${localStorage.getItem(
            "EXPERIENCE"
          )}</li>
          <li class="list-group-item">EMPLOYEE SALARY ${localStorage.getItem(
            "SALARY"
          )}</li>
          
        </ul>
      </div>`;

    }
    else
    {
        alert("Invalid Action,Try again")
    }
}
