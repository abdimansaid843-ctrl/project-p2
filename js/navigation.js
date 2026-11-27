
// LOAD NAVIGATION COMPONENT

const navigationContainer = document.getElementById("navigation");

fetch("components/index.html")

    .then(response => {

        if (!response.ok) {
            throw new Error("Navigation file not found");
        }

        return response.text();

    })

    .then(html => {

        // Insert navigation into the page
        navigationContainer.innerHTML = html;


        // GET SEARCH ELEMENTS
        const searchForm = document.getElementById("gameSearchForm");

        const searchInput = document.getElementById("gameSearchInput");


        // SEARCH FUNCTION
        searchForm.addEventListener("submit", function(event) {

            // Prevent page reload
            event.preventDefault();

            // Get search text
            const searchText = searchInput.value.trim();

            // Check empty search
            if (searchText === "") {

                alert("Please enter a game name.");

                return;
            }

            // Display search
            alert("You searched for: " + searchText);

            console.log("Search query:", searchText);

        });

    })

    .catch(error => {

        console.error("Navigation error:", error);

    });
