const button = document.querySelector("#button");
const data = document.querySelector('#data');
button.addEventListener("click", async () => {
    data.replaceChildren();
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const json = await response.json();
    json.forEach((user) => {
        const userData = document.createElement("p");
        userData.innerText = user.name;
        data.appendChild(userData);
    });
})