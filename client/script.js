const localUrl = "http://localhost:3000/users";

fetch(localUrl) 
.then((response) => response.json())
.then((users) =>{
  console.log(users);
  users.forEach((user) => {
      const html = `<ul class="user_card" style="background-color: ${user.color};">
      <li> ${user.id}</li>
      <li>${user.firstName}</li>
      <li>${user.lastName}</li>
      <li> ${user.color}</li>
      <li>${user.username}</li>
    </ul>`;
      document.body.insertAdjacentHTML("beforeend", html);
      
  })
} );