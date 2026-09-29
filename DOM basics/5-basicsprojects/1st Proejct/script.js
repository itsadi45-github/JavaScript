let istatus = document.querySelector("h5");

let addFriend_btn = document.querySelector("#addbtn");
// let removeFrnd = document.querySelector("#remove")

let flag = 0;

addFriend_btn.addEventListener("click", function () {
  if (flag == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    addFriend_btn.innerHTML = "Remove Friend"
    flag = 1;
  } else {
    istatus.innerHTML = "Strangers";
    istatus.style.color = "Red";
    addFriend_btn.innerHTML = "Add Friend"
    flag = 0;
  }
});

// removeFrnd.addEventListener("click",function(){
//     istatus.innerHTML = "Strangers";
//     istatus.style.color = "red";
// })
