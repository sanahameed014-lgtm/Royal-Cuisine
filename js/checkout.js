// Checkout button on menu page
const checkoutBtn = document.getElementById("checkout-btn");

if (checkoutBtn){
    checkoutBtn.addEventListener("click", function(){
        window.location.href = "checkout.html";
    });
}

// checkout form
const checkoutForm = document.getElementById("checkoutForm");

if(checkoutForm){
    checkoutForm.addEventListener("submit", function(e){
        e.preventDefault();
        alert("✅ Your Order has been placed successfully!");

        window.location.href = "order-success.html";
    });
}
