const baseUrl = "https://jsonplaceholder.typicode.com/users";
const userList = document.getElementById("userList");
const userList2 = document.getElementById("userList2");
const userDetailsDiv = document.getElementById("userDetails");
const searchInput = document.getElementById("searchInput");
let users = [];

userList.classList.add("userList");
userList2.classList.add("userList2");

async function fetchUsersOriginal() {
  try {
    const response = await fetch(baseUrl);
    users = await response.json();

    users.forEach((user) => {
      const li = document.createElement("li");
      li.innerText = user.name;
      userList.append(li);
    });

    return users;

  } catch (error) {
    console.log("Error fetching users: ", error);
  }
}

fetchUsersOriginal();

async function fetchUsers() {
  try {
    const response = await fetch(baseUrl);
    users = await response.json();
    let filteredUsers = users;
    displayUsers(filteredUsers);

    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm)
      );
      displayUsers(filteredUsers);
    });
    return users;
  } catch (error) {
    console.log("Error fetching users: ", error);
  }
}

fetchUsers();

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
  userDetailsDiv.classList.add("userDetailsDiv");
}
