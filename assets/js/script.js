const form = document.querySelector("[data-form-submit]");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email");
  const phone = formData.get("phone");

  const fullname = formData.get("fullname");
  const address = formData.get("address");
  const city = formData.get("city");
  const country = formData.get("country");

  const postalCode = formData.get("postal-code");

  const errors = [];

  if (!email) {
    errors.push("Email should not be empty");
  }
  if (!phone) {
    errors.push("Phone No should not be empty");
  }
  if (!fullname) {
    errors.push("Fullname should not be empty");
  }
  if (!address) {
    errors.push("Address should not be empty");
  }
  if (!city) {
    errors.push("Email should not be empty");
  }
  if (!country) {
    errors.push("Country should not be empty");
  }
  if (!postalCode) {
    errors.push("Email should not be empty");
  }

  if (errors.length > 0) {
    Swal.fire({
      icon: "error",
      title: "Validation error",
      html:`<ul >${errors.map((error) =>`<li>${error}</li>`).join('')}</ul>`
    });
  } else {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Successfully Submitted",
      showConfirmButton: false,
      timer: 2000,
    });
   
    form.reset();
  }
});
