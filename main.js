const myForm = document.querySelector("#my-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector(".msg");
const usersList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e){
 e.preventDefault();
 const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

if(name.value === "" || email.value === ""){
  msg.classList.add('error');
  msg.innerHTML = "Please enter all fields*"
  setTimeout(() => msg.remove(), 4000);
} 
else if(!emailPattern.test(email.value)){
  msg.classList.add('error');
  msg.innerHTML = 'Please enter a valid email address';
  setTimeout(() => msg.remove(), 4000);

}
 else {
  const li = document.createElement('li');
  li.textContent = `${name.value}: ${email.value}`;
  usersList.append(li);
  name.value = '';
  email.value = '';

}


};