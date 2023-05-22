const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((res) => res.json())
  .then((users) => {
    const userList = document.getElementById("userList");
    users.forEach((user) => {
      const li = document.createElement("li");
      li.innerText = user.name;
      userList.append(li);
    });
  })
  .catch((err) => console.log(err));

const userList = document.getElementById("userList");
const userList2 = document.getElementById("userList2");
const userDetailsDiv = document.getElementById("userDetails");
const searchInput = document.getElementById("searchInput");
let users = [];
userList.classList.add('userList');
userList2.classList.add('userList2');


fetch(url)
  .then((res) => res.json())
  .then((data) => {
    users = data;
    displayUsers(users);

    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm)
      );
      displayUsers(filteredUsers);
    });
  })
  .catch((error) => {
    console.log("Error fetching user", error);
  });

function displayUsers(users) {
  userList2.innerHTML = "";

  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = user.name;
    li.style.cursor = "pointer"; 
    li.addEventListener("click", () => displayUserDetails(user));
    userList2.append(li);
  });
}

function displayUserDetails(user) {
  userDetailsDiv.innerHTML = "";

  const nameHeading = document.createElement("h2");
  nameHeading.innerHTML = user.name;

  const nickName = document.createElement("p");
  nickName.innerHTML = `<strong>Username: </strong> ${user.username}`;

  const email = document.createElement("p");
  email.innerHTML = `<strong>Email: </strong> ${user.email}`;

  const phone = document.createElement("p");
  phone.innerHTML = `<strong>Phone: </strong> ${user.phone}`;

  const website = document.createElement("p");
  website.innerHTML = `<strong>Website: </strong> ${user.website}`;

  userDetailsDiv.append(nameHeading, nickName, email, phone, website);
  userDetailsDiv.classList.add('userDetailsDiv');
}
"Hello world".includes("llo"); // true, ищет в строке совпадения на подстроку
