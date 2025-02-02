const artists = [
  { id: 1, name: "Foo Fighters", genre: "Rock", urlImg: "https://i.scdn.co/image/ab67616100005174c884df599abc793c116cdf15" },
  { id: 2, name: "Michael Jackson", genre: "Pop", urlImg: "https://i.scdn.co/image/ab676161000051740e08ea2c4d6789fbf5cbe0aa" },
  { id: 3, name: "Emicida", genre: "Hip Hop", urlImg: "https://i.scdn.co/image/ab67616100005174908b4b4bc90e1518b68b4068" },
  { id: 4, name: "Chitãozinho e Xororó", genre: "Sertanejo", urlImg: "https://i.scdn.co/image/ab676161000051744606c59411c57f7b49588be4" },
  { id: 5, name: "Mc Coringa", genre: "Funk", urlImg: "https://i.scdn.co/image/ab67616d00001e02fe8f6dd361ad0f12b88c7f56" },
  { id: 6, name: "Arlindo Cruz", genre: "Samba", urlImg: "https://i.scdn.co/image/ab67616100005174181873f93056642d7b340839" },
  { id: 7, name: "Caetano Veloso", genre: "MPB", urlImg: "https://i.scdn.co/image/ab67616100005174e98de50f36cf1aa4bf047757" },
  { id: 8, name: "Queen", genre: "Glam Rock", urlImg: "https://i.scdn.co/image/b040846ceba13c3e9c125d68389491094e7f2982", audioUrl: "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d" },
  { id: 9, name: "The Beatles", genre: "British Invasion, Merseybeat, Psychedelic Rock", urlImg: "https://i.scdn.co/image/6b2a709752ef9c7aaf0d270344157f6cd2e0f1a7", audioUrl: "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2" },
  { id: 10, name: "Twenty One Pilots", genre: "Modern Rock", urlImg: "https://i.scdn.co/image/19e8f3bc875b7a4b9cf0041a5ee696c4be5478aa", audioUrl: "https://open.spotify.com/artist/3YQKmKGau1PzlVlkL1iodx" },
  { id: 11, name: "Maroon 5", genre: "Pop, Pop Rock", urlImg: "https://i.scdn.co/image/608c7b23420c9556a7eabd9097f7e171a91d3871", audioUrl: "https://open.spotify.com/artist/04gDigrS5kc9YWfZHwBETP" },
  { id: 12, name: "Imagine Dragons", genre: "Modern Rock", urlImg: "https://i.scdn.co/image/01b36ca0f45f2f15117022a2754287a6ca1acdcc", audioUrl: "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q" },
  { id: 13, name: "The Kooks", genre: "Indie Rock", urlImg: "https://i.scdn.co/image/0a3dfed5bce0e6d14703011ec52a42ae719c0d4b", audioUrl: "https://open.spotify.com/artist/1GLtl8uqKmnyCWxHmw9tL4" },
  { id: 14, name: "Alex Turner", genre: "Indie Rock", urlImg: "https://i.scdn.co/image/ab67616d0000b273672951d44a35cb08092f2c1f", audioUrl: "https://open.spotify.com/artist/1ctkBmvz80MGyi72Ix055S" },
  { id: 15, name: "The Last Shadow Puppets", genre: "Indie Rock", urlImg: "https://i.scdn.co/image/1e721c9502da1663fe9dd0b9f8a90519546f0a9f", audioUrl: "https://open.spotify.com/artist/2Z7UcsdweVlRbAk5wH5fsf" },
  { id: 16, name: "Blossoms", genre: "Indie Pop", urlImg: "https://i.scdn.co/image/b0722b13be43495b793d3911ef90403d62eb5d7b", audioUrl: "https://open.spotify.com/artist/22RISwgVJyZu9lpqAcv1F5" },
  { id: 17, name: "Kasabian", genre: "Alternative Rock", urlImg: "https://i.scdn.co/image/8ef02a528dfa5496a410aa80e8b0316574ca95b7", audioUrl: "https://open.spotify.com/artist/11wRdbnoYqRddKBrpHt4Ue" }
];


const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");

let currentAudio = null;

function requestApi(searchTerm) {
  const filteredArtists = artists.filter(artist =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  displayResults(filteredArtists);
}

function displayResults(results) {
  hidePlaylists();
  resultArtist.innerHTML = "";

  if (results.length === 0) {
    resultArtist.innerHTML = "<p>Nenhum artista encontrado.</p>";
    resultArtist.classList.remove("hidden");
    return;
  }

  results.forEach((element) => {
    const artistCard = document.createElement("div");
    artistCard.classList.add("artist-card");

    artistCard.innerHTML = `
      <div class="card-img">
        <div class="img-wrapper">
          <img src="${element.urlImg}" alt="${element.name}" class="artist-img">
        </div>
        <div class="play" data-id="${element.id}">
          <span class="fa fa-solid fa-play"></span>
        </div>
      </div>
      <div class="card-text">
        <span class="artist-name">${element.name}</span>
        <span class="artist-categorie">Artista</span>
      </div>
    `;

    resultArtist.appendChild(artistCard);
  });

  resultArtist.classList.remove("hidden");

  document.querySelectorAll('.play').forEach(playButton => {
    playButton.addEventListener('click', function() {
      const artistId = this.getAttribute('data-id');
      const artist = artists.find(a => a.id == artistId);
      if (artist.audioUrl) {
        playMusic(artist.audioUrl);
      } else {
        alert('Música não disponível');
      }
    });
  });
}

function hidePlaylists() {
  if (playlistContainer) {
    playlistContainer.classList.add("hidden");
  }
}

function playMusic(audioUrl) {
  const musicPlayerContainer = document.getElementById("music-player-container");
  musicPlayerContainer.innerHTML = ""; // Limpa conteúdo anterior

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Verifica se é um link do YouTube e extrai o ID do vídeo corretamente
  let videoId = null;
  if (audioUrl.includes("youtube.com")) {
    const urlObj = new URL(audioUrl);
    videoId = urlObj.searchParams.get("v");
  } else if (audioUrl.includes("youtu.be")) {
    videoId = audioUrl.split("/").pop().split("?")[0];
  }

  if (videoId) {
    const audioEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&iv_load_policy=3&loop=0&rel=0`;

    musicPlayerContainer.innerHTML = `
      <iframe width="300" height="150" src="${audioEmbedUrl}" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
    `;
  } else {
    currentAudio = new Audio(audioUrl);
    currentAudio.play();
  }

  musicPlayerContainer.classList.remove("hidden");
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.trim();
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
    if (playlistContainer) {
      playlistContainer.classList.remove("hidden");
    }
    return;
  }
  requestApi(searchTerm);
});
