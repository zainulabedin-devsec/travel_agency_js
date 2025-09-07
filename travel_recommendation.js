// Load JSON data
let travelData = [];

fetch("travel_recommendation.json")
  .then(response => response.json())
  .then(data => {
    travelData = data.countries;
  })
  .catch(err => console.error("Error loading JSON:", err));

// Function to display results
function displayResults(items) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (items.length === 0) {
    resultsDiv.style.display = "block"; 
    resultsDiv.innerHTML = "<p>No results found.</p>";
    return;
  }

  items.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("result-box");

    div.innerHTML = `
  <h3 style="text-align:center; font-size:22px; font-weight:bold; margin-bottom:10px;">${item.name}</h3>
  <img src="${item.imageUrl}" 
       alt="${item.name}" 
       style="display:block; margin:10px auto; width:80%; max-width:400px; border-radius:8px;">
  <p>${item.description}</p>
`;

    resultsDiv.appendChild(div);
  });

  resultsDiv.style.display = "block";
}

// Search Button
document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("search").value.toLowerCase();
  let results = [];

  travelData.forEach(country => {
    // If country name matches → show all its cities
    if (country.name.toLowerCase().includes(query)) {
      country.cities.forEach(city => results.push(city));
    }

    // If a city name matches → show just that city
    country.cities.forEach(city => {
      if (city.name.toLowerCase().includes(query)) {
        results.push(city);
      }
    });
  });

  // Pass only city objects to displayResults
  displayResults(results);
});

// Reset Button
document.getElementById("resetBtn").addEventListener("click", () => {
  document.getElementById("search").value = "";
  document.getElementById("results").style.display = "none"; // hide results
  document.getElementById("results").innerHTML = "";
});

// BOOK NOW button → redirect
document.querySelector(".btn").addEventListener("click", () => {
  window.location.href = "contact.html";
});
