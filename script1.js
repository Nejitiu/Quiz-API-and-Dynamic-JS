const container = document.getElementById("card-container");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <p><strong>${user.name} @${user.username}<br>
        City: ${user.address.city}<br>
        Website: <a href="http://${user.website}" target="_blank">${user.website}</a><br>
        ${user.company.name}<br>
        <em>${user.company.catchPhrase}<strong></em></p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    container.innerHTML = "<p>Failed to load users. Please try again later.</p>";
    console.error("Error fetching users:", error);
  });
