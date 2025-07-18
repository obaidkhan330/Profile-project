   
// ✅ 2. ACCORDION TOGGLE
document.querySelectorAll(".accordion-header").forEach(button => {
    button.addEventListener("click", function () {
        const content = this.nextElementSibling;

        // Hide all other contents
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    
     navigation: {
       nextEl: ".next",
       prevEl: ".prev",
     },
     breakpoints:{
        
        
         '100':{
             slidesPerView: 1,
         },
         '576':{
             slidesPerView: 2,
         },
         '992':{
             slidesPerView: 3,
         },
     }
   });
   
   
   document.querySelectorAll(".accordion-header").forEach(button => {
    button.addEventListener("click", function() {
        const content = this.nextElementSibling;
        
     
        document.querySelectorAll(".accordion-content").forEach(item => {
            if (item !== content) {
                item.style.display = "none";
            }
        });

        // Toggle this one
        content.style.display = (content.style.display === "block") ? "none" : "block";
    });
});



     
        content.style.display = (content.style.display === "block") ? "none" : "block";
    });
});
