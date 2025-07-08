   
// ✅ 2. ACCORDION TOGGLE
document.querySelectorAll(".accordion-header").forEach(button => {
    button.addEventListener("click", function () {
        const content = this.nextElementSibling;

        // Hide all other contents
        document.querySelectorAll(".accordion-content").forEach(item => {
            if (item !== content) {
                item.style.display = "none";
            }
        });

        // Toggle this one
        content.style.display = (content.style.display === "block") ? "none" : "block";
    });
});



