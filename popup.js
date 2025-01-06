
document.addEventListener("DOMContentLoaded", () => {
  
  const elements = document.querySelectorAll(".element"); 

  elements.forEach((element) => {
    element.addEventListener("click", () => {
      
      const elementSymbol = element.getAttribute("data-symbol");
      const popup = document.getElementById(`popup-${elementSymbol}`); 

      if (popup) {
        const elementColor = window.getComputedStyle(element).backgroundColor;

        const popupContent = popup.querySelector(".popup-content");

        if (popupContent) {
          popupContent.style.backgroundColor = elementColor;
        }
        popup.style.display = "block";
      }
    });
  });

  const closeButtons = document.querySelectorAll(".close-btn");

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const popup = btn.closest(".popup"); 
      if (popup) {
        popup.style.display = "none"; 
      }
    });
  });

  const popups = document.querySelectorAll(".popup");

  popups.forEach((popup) => {
    popup.addEventListener("click", (event) => {
      if (event.target === popup) {
        popup.style.display = "none"; 
      }
    });
  });
});



// document.addEventListener("DOMContentLoaded", () => {
//   const searchBar = document.getElementById("search-bar"); 
//   const elements = document.querySelectorAll(".element"); 

//   searchBar.addEventListener("input", () => {
//     const searchQuery = searchBar.value.toLowerCase(); 

//     elements.forEach((element) => {
//       const name = element.getAttribute("data-name").toLowerCase();
//       const symbol = element.getAttribute("data-symbol").toLowerCase();
//       const number = element.getAttribute("data-number");

//       if (name.includes(searchQuery) || symbol.includes(searchQuery) || number.includes(searchQuery)) {
//         element.style.display = "block"; 
//       } else {
//         element.style.display = "none"; 
//       }
//     });
//   });
// });



// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("search-bar"); // Search input field
  const elements = document.querySelectorAll(".element"); // All element boxes

  // Add event listener to the search bar
  searchBar.addEventListener("input", () => {
    const searchQuery = searchBar.value.toLowerCase().trim(); // Get the search query and normalize it

    // Check if the search query is empty
    if (searchQuery === "") {
      // Reset all elements to visible
      elements.forEach((element) => {
        element.style.display = "block";
      });
      return; // Exit early since there's no need to filter
    }

    // Loop through all elements to filter
    elements.forEach((element) => {
      // Get element data attributes for name, symbol, and number
      const name = element.getAttribute("data-name").toLowerCase();
      const symbol = element.getAttribute("data-symbol").toLowerCase();
      const number = element.getAttribute("data-number");

      // Check if the search query matches name, symbol, or number
      if (name.includes(searchQuery) || symbol.includes(searchQuery) || number.includes(searchQuery)) {
        element.style.display = "block"; // Show matching element
      } else {
        element.style.display = "none"; // Hide non-matching element
      }
    });
  });
});
