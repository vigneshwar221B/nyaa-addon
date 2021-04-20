document.addEventListener("DOMContentLoaded", (e) => {
  const urlParams = new URLSearchParams(window.location.search);
  const magnetURI = `${urlParams.get("muri")}&tr=${urlParams.get(
    "tr"
  )}&xs=${urlParams.get("xs")}`;

  var client = new WebTorrent();

  client.on("error", function (err) {
    console.error("ERROR: " + err.message);
  });

  //link: magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent
  client.add(
    magnetURI,
    function (torrent) {
      console.log("Client is downloading:", torrent.infoHash);
      torrent.files.forEach(function (file) {
        console.log(file.path);
        file.appendTo("body");
      });
    }
  );
});
