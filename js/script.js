document.addEventListener("DOMContentLoaded", (e) => {
  const urlParams = new URLSearchParams(window.location.search);
  const magnetURI = `${urlParams.get("muri")}&tr=${urlParams.get("tr")}`;
  console.log(magnetURI);

  var client = new WebTorrent();
  console.log(client);

  client.add(magnetURI, function (torrent) {
    console.log("Client is downloading:", torrent.infoHash);

    torrent.files.forEach(function (file) {
      console.log(file.path);
    });
  });
});
