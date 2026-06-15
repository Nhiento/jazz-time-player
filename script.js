const eras = {
  "1940s": {
    image: "images/1940s_new2.png",
    title: "1940s",
    description:
      "Bebop, swing, smoky clubs, and the sound of jazz becoming a modern art form.",
    artists: "Ella Fitzgerald · Charlie Parker · Dizzy Gillespie",
    accent:      "#C9A84C",
    accentLight: "#E8C97A",
    accentDim:   "rgba(201,168,76,0.4)",
    tracks: [
  { title: "The Ballroom",  src: "1940s_jazz_tracks/1940s_track1.mp3" },  // big band
  { title: "Hot Club",      src: "1940s_jazz_tracks/1940s_track2.mp3" },  // gypsy
  { title: "After Hours",   src: "1940s_jazz_tracks/1940s_track3.mp3" }   // noir
],
    overlay: {
      vinylSrc:   "images/vinyl_1940s_new.png",
      tonearmSrc: "images/tonearm_1940s_new.png",
      /* % of image — measure these in Photoshop:
         (pixel position ÷ image width or height) × 100 */
      vinyl:   { x: 50.18, y: 50.77, width: 22.10 },
      tonearm: { x: 62.31, y: 37.0, width: 3.50 },
      /* rotation limits in degrees */
      minAngle: -12.78,
      maxAngle: 25,
      /* ms delay before vinyl starts spinning */
      spinDelay: 750
    }
  },
  "1950s": {
    image: "images/1950s_new2.png",
    title: "1950s",
    description:
      "Cool jazz, hard bop, and mid-century sophistication shaped a new sound.",
    artists: "Miles Davis · Dave Brubeck · Chet Baker",
    accent:      "#9EB87A",
    accentLight: "#BDD49A",
    accentDim:   "rgba(158,184,122,0.4)",
    tracks: [
    { title: "Bird's Flight", src: "1950s_jazz_tracks/1950s_track1.mp3" },  // bebop
    { title: "Blue Hour",     src: "1950s_jazz_tracks/1950s_track2.mp3" },  // cool jazz
    { title: "Last Dance",    src: "1950s_jazz_tracks/1950s_track3.mp3" }  // slow/romantic
  ],
    overlay: {
      vinylSrc:   "images/vinyl_1950s_new.png",
      tonearmSrc: "images/tonearm_1950s_new.png",
      /* % of image — measure these in Photoshop:
         (pixel position ÷ image width or height) × 100 */
      vinyl:   { x: 53.50, y: 52.23, width: 26.10 },
      tonearm: { x: 69.10, y: 35.36, width: 3.50 },
      /* rotation limits in degrees */
      minAngle: -12.78,
      maxAngle: 35,
      /* ms delay before vinyl starts spinning */
      spinDelay: 750
    }
    
  },
  "1960s": {
    image: "images/1960s_new2.png",
    title: "1960s",
    description:
      "Modal ideas, free expression, and bold modernist energy pushed jazz forward.",
    artists: "John Coltrane · Bill Evans · Ornette Coleman",
    accent:      "#7A9EC0",
    accentLight: "#A0BED8",
    accentDim:   "rgba(122,158,192,0.4)",
    tracks: [
      { title: "Bossa Noite",   src: "1960s_jazz_tracks/1960s_track1_bossanova.mp3" },
      { title: "Almost Blue",   src: "1960s_jazz_tracks/1960s_track2_chetbaker.mp3" },
      { title: "Night Keys",    src: "1960s_jazz_tracks/1960s_track3_billevans.mp3" }
    ],
    overlay: {
      vinylSrc:   "images/vinyl_1960s.png",
      tonearmSrc: "images/tonearm_1960s_new.png",
      /* % of image — measure these in Photoshop:
         (pixel position ÷ image width or height) × 100 */
      vinyl:   { x: 49.01, y: 48.67, width: 22.80 },
      tonearm: { x: 61.92, y: 31.50, width: 3.50 },
      /* rotation limits in degrees */
      minAngle: -12.78,
      maxAngle: 30,
      /* ms delay before vinyl starts spinning */
      spinDelay: 750
    }
  },
  "1970s": {
    image: "images/1970s_new2.png",
    title: "1970s",
    description:
      "Fusion, funk rhythms, electric instruments, and analog studio culture transformed jazz.",
       tracks: [
      { title: "Edge Groove",   src: "1970s_jazz_tracks/1970s_track1.mp3" },
      { title: "Soul String",   src: "1970s_jazz_tracks/1970s_track2.mp3" },
      { title: "Night Rhodes",  src: "1970s_jazz_tracks/1970s_track3.mp3" }
    ],
    overlay: {
      vinylSrc:   "images/vinyl_1970s_new2.png",
      tonearmSrc: "images/tonearm_1970s_new.png",
      /* % of image — measure these in Photoshop:
         (pixel position ÷ image width or height) × 100 */
      vinyl:   { x: 48.79, y: 47.67, width: 22.84 },
      tonearm: { x: 62.65, y: 29.50, width: 3.96 },
      /* rotation limits in degrees */
      minAngle: -11.78,
      maxAngle: 30,
      /* ms delay before vinyl starts spinning */
      spinDelay: 750
    }
  },
  "1980s-1990s": {
    image: "images/1980s-1990s_new2.png",
    title: "1990s",
    description:
      "Neo-bop revival, smooth textures, and late-night urban jazz.",
      tracks: [
  { title: "Acid City",  src: "1980s-1990s_jazz_tracks/80s-90s_track1.mp3" },
  { title: "Own It", src: "1980s-1990s_jazz_tracks/80s-90s_track2.mp3" },
  { title: "Slow Burn",  src: "1980s-1990s_jazz_tracks/80s-90s_track3.mp3" }
],
    overlay: { 
      vinylSrc:   "images/vinyl_1980-90s.png",
      tonearmSrc: "images/tonearm_1980s_new.png",
      /* % of image — measure these in Photoshop:
         (pixel position ÷ image width or height) × 100 */
      vinyl:   { x: 46.74, y: 49.73, width: 26.84 },
      tonearm: { x: 63.30, y: 26.58, width: 6.90 },
      /* rotation limits in degrees */
      minAngle: -11.78,
      maxAngle: 32,
      /* ms delay before vinyl starts spinning */
      spinDelay: 750
    }
  },
  "2000s-2020s": {
    image: "images/00s-20s_new2.png",
    title: "2020s",
    description:
      "Vinyl revival meets streaming culture in today's contemporary jazz renaissance.",
      tracks: [
      { title: "Rise",        src: "2000s-2020s_jazz_tracks/00s-20s_track1.mp3" },
      { title: "Still Life",  src: "2000s-2020s_jazz_tracks/00s-20s_track2.mp3" },
      { title: "Street Jazz", src: "2000s-2020s_jazz_tracks/00s-20s_track3.mp3" }
    ],
    overlay: {
      vinylSrc:   "images/vinyl_00s-2020s.png",
      tonearmSrc: "images/tonearm_00s-20s_new.png",
      /* % of image — measure these in Photoshop:
         (pixel position ÷ image width or height) × 100 */
      vinyl:   { x: 49.15, y: 50.28, width: 28.84 },
      tonearm: { x: 66.61, y: 26.59, width: 6.30 },
      /* rotation limits in degrees */
      minAngle: -11.78,
      maxAngle: 32,
      /* ms delay before vinyl starts spinning */
      spinDelay: 750
    }
  }
};

/* ═══════════════════════════════════════════════════
   ELEMENTS
═══════════════════════════════════════════════════ */
const heroImage      = document.getElementById("heroImage");
const bigEraText     = document.getElementById("bigEraText");
const eraDescription = document.getElementById("eraDescription");
const buttons        = document.querySelectorAll(".era-toggle button");
const sliderEl       = document.querySelector(".era-slider");
const vinylOverlay   = document.getElementById("vinylOverlay");
const stageEl        = document.getElementById("vinylStage");
const tonearmEl      = document.querySelector(".tonearm-img");
const vinylEl        = document.querySelector(".vinyl-spin");

/* ═══════ AUDIO ═══════ */
const needleDrop = new Audio("audio/needle_drop.mp3");
const crackle    = new Audio("audio/crackle.mp3");
crackle.loop = true;

/* per-era crackle volume — older = more worn */
const crackleVolume = {
  "1940s": 0.6,
  "1950s": 0.45,
  "1960s": 0.35,
  "1970s": 0.25,
  "1980s-1990s": 0.15,
  "2000s-2020s": 0.05
};

/* ═══════ MUSIC + TRACK PICKER ═══════ */
const music = new Audio();
music.preload = "auto";
music.loop = true;
let currentTrackIndex = 0;

/* ═══════ WEB AUDIO FILTER ═══════ */
const eraFilters = {
  "1940s":       { lowpass: 1800 },
  "1950s":       { lowpass: 3200 },
  "1960s":       { lowpass: 5500 },
  "1970s":       { lowpass: 8500 },
  "1980s-1990s": { lowpass: 13500 },
  "2000s-2020s": { lowpass: 20000 }
};

const audioCtx    = new (window.AudioContext || window.webkitAudioContext)();
const musicSource = audioCtx.createMediaElementSource(music);
const lowpassNode = audioCtx.createBiquadFilter();
lowpassNode.type  = "lowpass";

function applyEraFilter(eraKey) {
  const f = eraFilters[eraKey] ?? eraFilters["2000s-2020s"];
  lowpassNode.frequency.setTargetAtTime(f.lowpass, audioCtx.currentTime, 0.1);
}

/* chain: music → lowpass → speakers */
musicSource.connect(lowpassNode);
lowpassNode.connect(audioCtx.destination);

document.addEventListener("mousedown", () => {
  if (audioCtx.state === "suspended") audioCtx.resume();
}, { once: true });
document.addEventListener("touchstart", () => {
  if (audioCtx.state === "suspended") audioCtx.resume();
}, { once: true });

/* ═══════════════════════════════════════════════════
   SESSION TRACKING  (listening-time based + localStorage)
═══════════════════════════════════════════════════ */
const sessionId = crypto.randomUUID();

/* ═══════ SUPABASE (cloud analytics) ═══════ */
const SUPABASE_URL = "https://vvluxmlvobxnikgwojjx.supabase.co";
const SUPABASE_KEY = "sb_publishable_M2f4PmroMm4l7rqqWZF6KA_PT0yGLlg";
let db = null;
try {
  if (window.supabase) db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
} catch (e) {
  console.warn("Supabase init skipped:", e);
}

const defaultStats = {
  eraTime:    { "1940s": 0, "1950s": 0, "1960s": 0, "1970s": 0, "1980s-1990s": 0, "2000s-2020s": 0 },
  trackPlays: {}
};

let sessionStats;
try {
  sessionStats = JSON.parse(localStorage.getItem("jazzStats")) || structuredClone(defaultStats);
} catch {
  sessionStats = structuredClone(defaultStats);
}

function saveStats() {
  try { localStorage.setItem("jazzStats", JSON.stringify(sessionStats)); } catch {}
}

/* Listening-time timer: only accrues while music is actually playing.
   Starts on music play, stops on pause/ended, attributes to current era. */
let listenStart = null;

function beginListening() {
  if (listenStart === null) listenStart = Date.now();
}

function flushListening() {
  if (listenStart === null) return;
  const seconds = Math.round((Date.now() - listenStart) / 1000);
  if (seconds > 0) {
    sessionStats.eraTime[currentEra] = (sessionStats.eraTime[currentEra] || 0) + seconds;
    saveStats();
    if (db) {
      db.from("era_visits")
        .insert({ era: currentEra, seconds, session_id: sessionId })
        .then(({ error }) => { if (error) console.warn("era_visits insert:", error.message); });
    }
  }
  listenStart = null;
}

/* hook into the audio element's real playback state */
music.addEventListener("playing", beginListening);
music.addEventListener("pause",   flushListening);
music.addEventListener("ended",   flushListening);
/* also flush if the tab is hidden or closed mid-listen */
document.addEventListener("visibilitychange", () => {
  if (document.hidden) flushListening();
});
window.addEventListener("beforeunload", flushListening);

function logTrackPlay(eraKey, trackTitle) {
  const key = `${trackTitle} (${eraKey})`;
  sessionStats.trackPlays[key] = (sessionStats.trackPlays[key] || 0) + 1;
  saveStats();
  if (db) {
    db.from("track_plays")
      .insert({ era: eraKey, track_title: trackTitle, session_id: sessionId })
      .then(({ error }) => { if (error) console.warn("track_plays insert:", error.message); });
  }
}

function formatTime(s) {
  if (s < 60) return `${s}s`;
  return `${Math.floor(s / 60)}m ${s % 60}s`;
}

function renderStatsPanel() {
  const eraTimes = Object.entries(sessionStats.eraTime).filter(([, v]) => v > 0);
  const content  = document.getElementById("statsContent");

  if (eraTimes.length === 0) {
    content.innerHTML =
      `<p style="color:rgba(255,255,255,0.45);font-size:0.8rem;text-align:center;padding:1rem 0">
        Drop the needle and listen to start tracking your session.
      </p>
      <button class="stats-reset" onclick="resetStats()">Reset my stats</button>`;
    return;
  }

  eraTimes.sort((a, b) => b[1] - a[1]);
  const mostEra  = eraTimes[0];
  const leastEra = eraTimes[eraTimes.length - 1];
  const trackEntries = Object.entries(sessionStats.trackPlays).sort((a, b) => b[1] - a[1]);
  const mostTrack = trackEntries[0];

  let html = `<div class="stats-section"><div class="stats-label">ERA YOU LISTENED TO MOST</div><div class="stats-value">${mostEra[0]} <span class="stats-time">${formatTime(mostEra[1])}</span></div></div>`;

  if (leastEra && leastEra[0] !== mostEra[0]) {
    html += `<div class="stats-section"><div class="stats-label">ERA YOU LISTENED TO LEAST</div><div class="stats-value">${leastEra[0]} <span class="stats-time">${formatTime(leastEra[1])}</span></div></div>`;
  }

  if (mostTrack) {
    html += `<div class="stats-section"><div class="stats-label">MOST PLAYED TRACK</div><div class="stats-value">${mostTrack[0]} <span class="stats-time">×${mostTrack[1]}</span></div></div>`;
  }

  if (eraTimes.length > 1) {
    const total = eraTimes.reduce((a, [, v]) => a + v, 0);
    html += `<div class="stats-section"><div class="stats-label">ALL ERAS</div>`;
    eraTimes.forEach(([era, secs]) => {
      const pct = Math.round((secs / total) * 100);
      html += `<div class="stats-bar-row"><span class="stats-bar-label">${era}</span><div class="stats-bar-track"><div class="stats-bar-fill" style="width:${pct}%"></div></div><span class="stats-bar-time">${formatTime(secs)}</span></div>`;
    });
    html += `</div>`;
  }

  html += `<button class="stats-reset" onclick="resetStats()">Reset my stats</button>`;
  content.innerHTML = html;
}

const trackListEl = document.getElementById("trackList");

function renderTracks(era) {
  trackListEl.innerHTML = "";
  if (!era.tracks) { trackListEl.style.display = "none"; return; }
  trackListEl.style.display = "flex";

  era.tracks.forEach((t, i) => {
    const btn = document.createElement("button");
    btn.textContent = t.title;
    btn.classList.toggle("active", i === currentTrackIndex);
    btn.addEventListener("click", () => {
      currentTrackIndex = i;
      music.src = t.src;
      logTrackPlay(currentEra, t.title);
      renderTracks(era);
      if (vinylEl.classList.contains("spinning")) music.play();
    });
    trackListEl.appendChild(btn);
  });

  music.src = era.tracks[currentTrackIndex].src;
}

let crackleTimeout = null;
let musicTimeout = null;

let currentEra = "1940s";

function layoutStage() {
  /* natural size of the loaded era image */
  const imgW = heroImage.naturalWidth  || 1456;
  const imgH = heroImage.naturalHeight || 816;

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  /* object-fit: cover scale = the larger of the two ratios */
  const scale = Math.max(vw / imgW, vh / imgH);

  const renderedW = imgW * scale;
  const renderedH = imgH * scale;

  /* image is centered, so it may overflow equally on both sides */
  stageEl.style.width  = renderedW + "px";
  stageEl.style.height = renderedH + "px";
  stageEl.style.left   = (vw - renderedW) / 2 + "px";
  stageEl.style.top    = (vh - renderedH) / 2 + "px";
}

/* apply an era's overlay config to the DOM */
function applyOverlayConfig(era) {
  if (!era.overlay) {
    vinylOverlay.classList.remove("visible");
    return;
  }

  const o = era.overlay;

  vinylEl.src   = o.vinylSrc;
  tonearmEl.src = o.tonearmSrc;

  vinylEl.style.left  = o.vinyl.x + "%";
  vinylEl.style.top   = o.vinyl.y + "%";
  vinylEl.style.width = o.vinyl.width + "%";

  tonearmEl.style.left  = o.tonearm.x + "%";
  tonearmEl.style.top   = o.tonearm.y + "%";
  tonearmEl.style.width = o.tonearm.width + "%";

  /* reset arm to rest position on era switch */
  stopSpinNow();
  tonearmRotation = 0;
  tonearmEl.style.transform = `translate(-50%, -4%) rotate(0deg)`;

  vinylOverlay.classList.add("visible");
  layoutStage();
}

/* ═══════════════════════════════════════════════════
   ERA SWITCHING
═══════════════════════════════════════════════════ */
function updateSlider(activeBtn) {
  if (!sliderEl || !activeBtn) return;
  const toggleEl   = document.querySelector(".era-toggle");
  const toggleRect = toggleEl.getBoundingClientRect();
  const btnRect    = activeBtn.getBoundingClientRect();

  if (window.matchMedia("(max-width: 768px) and (orientation: landscape)").matches) {
    sliderEl.style.top = (btnRect.top + btnRect.height / 2 - toggleRect.top) + "px";
  } else if (window.matchMedia("(max-width: 768px)").matches) {
    sliderEl.style.left = (btnRect.left + btnRect.width / 2 - toggleRect.left) + "px";
  }
}

function syncSlider() {
  updateSlider(document.querySelector(".era-toggle button.active"));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const eraKey = button.dataset.era;
    window.location.hash = eraKey;
    const era    = eras[eraKey];
    flushListening();
    currentEra   = eraKey;
    applyEraFilter(eraKey); 

    heroImage.style.opacity = 0;

    setTimeout(() => {
      heroImage.src = era.image;
      bigEraText.textContent     = era.title;
      eraDescription.textContent = era.description;
      heroImage.style.opacity    = 1;

      /* wait for the new image to load so naturalWidth is correct */
      heroImage.onload = () => {
        applyOverlayConfig(era);
        currentTrackIndex = 0;
        renderTracks(era);
      };
    }, 250);

    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    updateSlider(button);
  });
});

/* ═══════════════════════════════════════════════════
   TONEARM DRAG — uses live rects so it's always accurate
═══════════════════════════════════════════════════ */
let tonearmRotation = 0;
let isDragging      = false;
let dragStartAngle  = 0;
let pivot           = { x: 0, y: 0 };
let spinTimeout     = null;

function getPivotPoint() {
  const rect = tonearmEl.getBoundingClientRect();
  return {
    x: rect.left + rect.width  * 0.50,
    y: rect.top  + rect.height * 0.04
  };
}

function getAngleFromPivot(clientX, clientY) {
  return Math.atan2(clientY - pivot.y, clientX - pivot.x) * (180 / Math.PI);
}

function isNeedleOnVinyl() {
  /* compare actual rendered rects — screen-size independent */
  const tRect = tonearmEl.getBoundingClientRect();
  const vRect = vinylEl.getBoundingClientRect();

  /* needle tip ≈ bottom-center of the rotated tonearm rect */
  const nx = tRect.left + tRect.width  / 2;
  const ny = tRect.top  + tRect.height * 0.96;

  const vcx = vRect.left + vRect.width  / 2;
  const vcy = vRect.top  + vRect.height / 2;
  const vr  = vRect.width / 2;

  return Math.hypot(nx - vcx, ny - vcy) <= vr * 1.05;
}

function startSpinDelayed() {
  const era = eras[currentEra];
  const delay = era.overlay ? era.overlay.spinDelay : 750;

  if (!spinTimeout) {
    /* needle drop plays immediately on contact */
    needleDrop.currentTime = 1.3;
    needleDrop.play();

    /* vinyl starts spinning after the delay */
    spinTimeout = setTimeout(() => {
      vinylEl.classList.add("spinning");
    }, delay);

    /* crackle fades in after the drop */
    crackleTimeout = setTimeout(() => {
      crackle.volume = crackleVolume[currentEra] ?? 0.3;
      crackle.currentTime = 0;
      crackle.play();

      /* music begins after a moment of pure crackle */
      musicTimeout = setTimeout(() => {
        music.currentTime = 0;
        music.play();
        const era = eras[currentEra];
        if (era.tracks && era.tracks[currentTrackIndex]) {
          logTrackPlay(currentEra, era.tracks[currentTrackIndex].title);
        }
      }, 2200);

    }, 200);
  }
}

function stopSpinNow() {
  clearTimeout(spinTimeout);
  spinTimeout = null;
  clearTimeout(crackleTimeout);
  crackleTimeout = null;
  clearTimeout(musicTimeout);   
  musicTimeout = null;          

  vinylEl.classList.remove("spinning");
  crackle.pause();
  music.pause();
  needleDrop.pause();
  needleDrop.currentTime = 0;
}

function applyTonearmRotation(deg) {
  const era = eras[currentEra];
  if (!era.overlay) return;

  deg = Math.max(era.overlay.minAngle, Math.min(era.overlay.maxAngle, deg));
  tonearmRotation = deg;
  tonearmEl.style.transform = `translate(-50%, -4%) rotate(${deg}deg)`;

  if (isNeedleOnVinyl()) {
    startSpinDelayed();
  } else {
    stopSpinNow();
  }
}

/* mouse */
tonearmEl.addEventListener("mousedown", (e) => {
  e.preventDefault();
  isDragging = true;
  pivot = getPivotPoint();
  dragStartAngle = getAngleFromPivot(e.clientX, e.clientY) - tonearmRotation;
  tonearmEl.classList.add("dragging");
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  applyTonearmRotation(getAngleFromPivot(e.clientX, e.clientY) - dragStartAngle);
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  tonearmEl.classList.remove("dragging");
});

/* touch */
tonearmEl.addEventListener("touchstart", (e) => {
  e.preventDefault();
  isDragging = true;
  pivot = getPivotPoint();
  const t = e.touches[0];
  dragStartAngle = getAngleFromPivot(t.clientX, t.clientY) - tonearmRotation;
  tonearmEl.classList.add("dragging");
}, { passive: false });

document.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const t = e.touches[0];
  applyTonearmRotation(getAngleFromPivot(t.clientX, t.clientY) - dragStartAngle);
}, { passive: false });

document.addEventListener("touchend", () => {
  isDragging = false;
  tonearmEl.classList.remove("dragging");
});

/* ═══════════════════════════════════════════════════
   INIT + RESIZE
═══════════════════════════════════════════════════ */
window.addEventListener("resize", () => {
  layoutStage();
  syncSlider();
});

/* first load — restore era from URL hash if present */
const hashEra = window.location.hash.replace("#", "");
if (hashEra && eras[hashEra]) {
  const targetBtn = document.querySelector(`[data-era="${hashEra}"]`);
  if (targetBtn) targetBtn.click();
} else {
  if (heroImage.complete) {
    applyOverlayConfig(eras[currentEra]);
  } else {
    heroImage.onload = () => applyOverlayConfig(eras[currentEra]);
  }
}
applyEraFilter(currentEra);
renderTracks(eras[currentEra]);
syncSlider();

/* ═══════ STATS PANEL ═══════ */
window.openStats = function() {
  flushListening();           // capture any in-progress listening time
  if (!music.paused) beginListening();  // resume counting if still playing
  renderStatsPanel();
  document.getElementById("statsOverlay").classList.add("open");
};

window.closeStats = function(e) {
  if (e && e.target !== document.getElementById("statsOverlay")) return;
  document.getElementById("statsOverlay").classList.remove("open");
};

window.resetStats = function() {
  sessionStats = structuredClone(defaultStats);
  saveStats();
  renderStatsPanel();
};