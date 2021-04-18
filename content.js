const addButtons = (rows) => {
  let baseUrl = chrome.extension.getURL("html/index.html");
  rows.forEach((row) => {
    const selectedRows = document.querySelectorAll(`tr.${row}`);

    selectedRows.forEach((element) => {
      const magnetUri = element.cells[2].children[1].href;
      const newLink = `<a target="_blank" href="${baseUrl}?muri=${magnetUri}"><i class="fa fa-fw fa-play"></i></a>`;
      element.cells[2].innerHTML = element.cells[2].innerHTML + newLink;
    });
  });

  console.log("added new buttons");
};

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("nyaa addon");
  addButtons(["default", "danger", "success"]);
  console.log(chrome.extension.getURL("html/index.html"));
});
