document.addEventListener("DOMContentLoaded", (e) => {
  const urlParams = new URLSearchParams(window.location.search);
  let magnetURI = `${urlParams.get("muri")}&dn=${urlParams.get(
    "dn"
  )}&tr=${urlParams.getAll("tr").join("&tr=")}&xs=${urlParams.get("xs")}`;

  var client = new WebTorrent();

  client.on("error", function (err) {
    console.error("ERROR: " + err.message);
  });

  //nyaaLink
  //magnetURI = "magnet:?xt=urn:btih:ad78364d14f0f300b6b479ce1857ef414108f40d&dn=%5BOhys-Raws%5D%20Hige%20o%20Soru.%20Soshite%20Joshikousei%20o%20Hirou.%20-%2003%20%28AT-X%201280x720%20x264%20AAC%20JP%29.mp4&tr=http%3A%2F%2Fnyaa.tracker.wf%3A7777%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&xs=https://nyaa.si/download/1374595.torrent"
  
  //sintelLink
  //magnetURI = "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent"
  client.add(magnetURI, function (torrent) {
    console.log(magnetURI);
    console.log("Client is downloading:", torrent.infoHash);

    torrent.on("download", function (bytes) {
      console.log("just downloaded: " + bytes);
      console.log("total downloaded: " + torrent.downloaded);
      console.log("download speed: " + torrent.downloadSpeed);
      console.log("progress: " + torrent.progress);
    });

    torrent.files.forEach(function (file) {
      console.log(file.path);
      file.appendTo("body");
    });
  });
});
