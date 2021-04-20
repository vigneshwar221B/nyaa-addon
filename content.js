const createStreamLink = (magnetUri, torrentLink, linkText) => {
  let baseUrl = chrome.extension.getURL("html/index.html");
  //create an anchor element
  const stream = document.createElement("a");
  stream.setAttribute("href", `${baseUrl}?muri=${magnetUri}&xs=${torrentLink}`);
  stream.setAttribute("target", "_blank");

  //create an icon
  const icon = document.createElement("i");
  icon.setAttribute("class", "fa fa-fw fa-play");
  icon.innerText = linkText || "";

  //set icon
  stream.appendChild(icon);

  return stream;
};

const addButtons = (rows) => {
  let baseUrl = chrome.extension.getURL("html/index.html");
  rows.forEach((row) => {
    const selectedRows = document.querySelectorAll(`tr.${row}`);

    selectedRows?.forEach((element) => {
      const magnetUri = element.cells[2].children[1].href;
      const torrentLink = element.cells[2].children[0].href;

      const newLink = `<a target="_blank" href="${baseUrl}?muri=${magnetUri}&xs=${torrentLink}"><i class="fa fa-fw fa-play"></i></a>`;
      element.cells[2].innerHTML += newLink;

      // const streamLink = createStreamLink(magnetUri, torrentLink);
      // element.cells[2].children[1].parentNode.insertBefore(
      //   streamLink,
      //   element.cells[2].children[1].nextSibling
      // );
    });
  });

  console.log("added new buttons");
};

const addButton = () => {
  let baseUrl = chrome.extension.getURL("html/index.html");
  const links = document.querySelector("div.panel-footer.clearfix");

  if(!links) return;

  const torrentLink = links.children[0].href;
  const magnetUri = links.children[1].href;

  const newLink = `<a target="_blank" href="${baseUrl}?muri=${magnetUri}&xs=${torrentLink}" class="card-footer-item"><i class="fa fa-fw fa-play">Stream</i></a>`;
  links.innerHTML += " or "+newLink;

  // const streamButton = createStreamLink(magnetUri, torrentLink, "stream");

  // links.children[1].parentNode.insertBefore(
  //   streamButton,
  //   links.children[1].nextSibling
  // );
};

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("nyaa addon");
  addButtons(["default", "danger", "success"]);
  addButton();
  console.log(chrome.extension.getURL("html/index.html"));
});
