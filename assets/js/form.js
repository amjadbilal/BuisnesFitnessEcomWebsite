document.addEventListener("DOMContentLoaded", function () {
    const reserveButton = document.getElementById("reserve");
    const reserveFormPopover = document.getElementById("reserveFormPopover");
    const reserveForm = document.getElementById("reserve-form");
    const successMessage = document.getElementById("successMessage");
    // const closeSuccessMessageButton = successMessage.querySelector(".close-button");

    // Check if elements are correctly selected
    console.log(reserveFormPopover);
    console.log(reserveForm);
    console.log(successMessage);
    // console.log(closeSuccessMessageButton);

    if (reserveButton && reserveFormPopover && reserveForm && successMessage && closeSuccessMessageButton) {
        reserveButton.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent event from bubbling up

            // Calculate position for the popover
            const rect = reserveButton.getBoundingClientRect();
            const left = rect.left + window.pageXOffset;
            const top = rect.bottom + window.pageYOffset;

            // Show the popover
            reserveFormPopover.style.display = "block";
            reserveFormPopover.style.left = left + "px";
            reserveFormPopover.style.top = top + "px";
        });

        reserveForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission behavior

            // Simulate form submission (replace this with actual submission logic)
            setTimeout(function () {
                // Hide the popover and show the success message
                reserveFormPopover.style.display = "none";
                successMessage.style.display = "flex";

                // Reset form fields if needed
                reserveForm.reset();
            }, 1000); // Change 1000 to the desired delay in milliseconds
        });

        // Hide the popover when clicking outside of it
        document.addEventListener("click", function (event) {
            if (!reserveFormPopover.contains(event.target) && !reserveButton.contains(event.target)) {
                reserveFormPopover.style.display = "none";
            }
        });

        // Close success message
        closeSuccessMessageButton.addEventListener("click", function () {
            successMessage.style.display = "none";
        });
    } else {
        console.error("One or more elements could not be found in the DOM.");
    }
});
