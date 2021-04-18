document.addEventListener("DOMContentLoaded", (event) => {
  const urlParams = new URLSearchParams(window.location.search);
  const magnetUri = urlParams.get("muri");
  console.log(magnetUri);
});
