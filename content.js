const addButtons = (rows) => {
  const newLink = `<a href="#"><i class="fa fa-fw fa-play"></i></a>`;

  rows.forEach((row) => {
    const selectedRows = document.querySelectorAll(`tr.${row}`);
    selectedRows.forEach((element) => {
      element.cells[2].innerHTML = element.cells[2].innerHTML + newLink;
    });
  });

  console.log("added new buttons");
};

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("nyaa addon");
  addButtons(["default", "danger", "success"]);
});
