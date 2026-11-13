// ===== Music Player – "Next Track" using the free Deezer API (no API key needed) =====
// Deezer's API doesn't allow normal fetch() calls from a browser (CORS error),
// so we use JSONP: we add a <script> tag and Deezer calls our function with the data.
// Note: Deezer only gives free 30-second previews, not full songs.

// Elements from index.html
const img = document.querySelector("#img-container img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const audio = document.querySelector("#music-audio audio");
const nextBtn = document.getElementById("next_track");

// Searches to pick songs from – change these to whatever you like
const searchTerms = [
  "Shankar Ehsaan Loy",
  "Arijit Singh",
  "A R Rahman",
  "Pritam",
  "Shreya Ghoshal",
  "Vishal Shekhar",
];

let playlist = [];   // tracks we've loaded but not played yet
let callbackId = 0;  // makes each JSONP callback name unique

// ---- JSONP helper: works like fetch(), but avoids the CORS error ----
function jsonp(url) {
  return new Promise((resolve, reject) => {
    const callbackName = "deezerCallback" + callbackId++;
    const script = document.createElement("script");

    // Deezer will run window[callbackName](data) when the script loads
    window[callbackName] = (data) => {
      resolve(data);
      delete window[callbackName];
      script.remove();
    };

    script.onerror = () => {
      reject(new Error("Could not reach Deezer"));
      delete window[callbackName];
      script.remove();
    };

    script.src = `${url}&output=jsonp&callback=${callbackName}`;
    document.body.appendChild(script);
  });
}

// ---- Load a batch of tracks from a random search term ----
async function loadTracks() {
  const term = searchTerms[Math.floor(Math.random() * searchTerms.length)];
  const url = `https://api.deezer.com/search?q=${encodeURIComponent(term)}&limit=25`;
  const result = await jsonp(url);

  if (result.error) throw new Error(result.error.message);

  // Keep only tracks that actually have a preview, then shuffle them
  playlist = result.data
    .filter((track) => track.preview)
    .sort(() => Math.random() - 0.5);
}

// ---- Show a track in the player ----
function showTrack(track) {
  img.src = track.album.cover_big;            // 500x500 album art
  img.alt = track.title;
  title.textContent = track.title;
  artist.textContent = track.artist.name;
  audio.src = track.preview;                  // 30-second MP3
  audio.play();
}

// ---- Next Track button ----
async function nextTrack() {
  nextBtn.disabled = true;
  nextBtn.textContent = "Loading...";

  try {
    if (playlist.length === 0) {
      await loadTracks();
    }
    const track = playlist.pop();
    if (track) {
      showTrack(track);
    } else {
      title.textContent = "No tracks found, try again";
    }
  } catch (err) {
    console.error(err);
    title.textContent = "Couldn't load a track";
    artist.textContent = "Check your internet connection";
  }

  nextBtn.disabled = false;
  nextBtn.textContent = "Next Track (Using API)";
}

nextBtn.addEventListener("click", nextTrack);

// Optional: automatically play the next track when the current one ends
audio.addEventListener("ended", nextTrack);