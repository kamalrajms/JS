const apiUrl = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
  try {
    const response = await fetch(apiUrl);
    // if (!response.ok) {
    //   throw new Error(`HTTP error ! Status:${response.status}`);
    // }
    const data = await response.json();
    console.log("users :", data);

    // show name
    const userlist = document.getElementById("users");
    data.forEach((user) => {
      const li = document.createElement("li");

      li.textContent = `${user.email}`;
      userlist.appendChild(li);
    });
  } catch (error) {
    console.log("error", error);
  }
}
fetchUsers();
