// Select all buttons with id 'product-btn1'
let buttons = document.querySelectorAll("button#product-btn1");

// Loop through each button and add click event listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Find the details-container associated with the clicked button
        let detailsContainer = button.parentElement.nextElementSibling;
        detailsContainer.style.display = 'block';
    });
});

