const customerDetail = document.getElementById("customerDetail");
const paymentForm = document.getElementById("paymentForm");

const detailHandler = (e) => {
  e.preventDefault();
  paymentForm.classList.remove("hidden");
  customerDetail.classList.add("hidden");
};

const payWithPaystack = (e) => {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: "pk_live_866c805918628ba828bc4c262244193647d49d98", // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: document.getElementById("amount").value * 100,
    onClose: function () {
      alert("Window closed.");
    },
    callback: function (response) {
      let message = "Payment complete! Reference: " + response.reference;
      alert(message);
    },
  });

  handler.openIframe();
};

customerDetail.addEventListener("submit", detailHandler);
paymentForm.addEventListener("submit", payWithPaystack, false);
