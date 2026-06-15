# The Jazz Time Player

An interactive web experience that travels through six eras of jazz history (1940s–2020s), each with its own visual aesthetic, era-specific audio, and a draggable vinyl record player. Drop the needle and listen as the sound itself shifts from warm, muffled mid-century recordings to crisp modern production.

**Live site:** https://nhiento.github.io/jazz-time-player/

---

## What it does

Each era is its own world — a custom background, an accurate vinyl-and-tonearm setup you physically drag to drop the needle, era-appropriate crackle, and three hand-picked tracks that capture the sound of the decade. As you move from the 1940s to the 2020s, an audio filter gradually opens up the frequency range, so older eras genuinely sound older.

Behind the experience is a lightweight analytics layer that tracks how visitors engage with each era and feeds it into a cloud database for analysis.

## The six eras

Each era is built around a feeling — a genre and a mood rather than a list of famous songs. The three tracks per era are chosen to capture the range of that decade's sound.

- **1940s — Bebop & Big Band**
Smoky clubs and the birth of modern jazz. Fast, virtuosic, and alive — the sound of jazz becoming an art form. Warm, slightly muffled, like hearing it through an old radio.

- **1950s — Cool Jazz & Hard Bop**
Mid-century sophistication. Smoother and more relaxed than bebop — confident, clean, and effortlessly stylish.

- **1960s — Modal & Late-Night Jazz**
Sparse, introspective, and emotional. Space between the notes, breathy saxophone, intimate piano — the sound of 2am and being okay with it.

- **1970s — Fusion & Soul Jazz**
Electric instruments, funk rhythms, and analog warmth. Ranges from driving electric fusion to mellow late-night Rhodes — groovy, expressive, and a little wild.

- **1980s–1990s — Acid Jazz & Late-Night R&B**
Neon lights and dim-lit clubs. Noir saxophone, funky Hammond organ and wah guitar, and slow, sensual after-hours grooves. A whole night out in three tracks.

- **2000s–2020s — Nu Jazz & Contemporary**
Jazz with no rules. Hip-hop-influenced grooves, lo-fi chill, and ambitious experimental sounds — the genre stretching in every direction at once.

## Features

- **Six fully designed eras** spanning 1940s bebop through 2020s contemporary jazz, each with distinct artwork and curated audio
- **Interactive turntable** with a spring-loaded draggable tonearm, needle-drop sound, and vinyl spin tied to needle contact
- **Era-based audio filtering** using the Web Audio API — a low-pass filter widens as the decades progress, so each era has its own tonal character
- **Listening-time engagement tracking** that measures genuine listening (only while audio is playing) rather than passive page time
- **Personal session stats panel** showing the visitor their most-listened era, least-listened era, and most-played track, persisted across visits with `localStorage`
- **Cloud analytics backend** writing every listening session and track play to a PostgreSQL database for aggregate analysis
- **Fully responsive** — adapts to desktop and mobile from a single deployment

## Tech stack

- **Frontend:** HTML, CSS, JavaScript (no framework)
- **Audio:** Web Audio API for real-time, per-era filtering
- **Persistence:** `localStorage` for per-visitor session stats
- **Backend:** Supabase (PostgreSQL) for cloud event tracking
- **Hosting:** GitHub Pages

## How the analytics work

The project captures two kinds of events:

- **Era visits** — how long a visitor actually *listens* within each era, measured off the audio element's real playback state so idle tabs don't inflate the numbers
- **Track plays** — every time a track is selected and played, logged with its era and a per-session ID

Each visitor is assigned an anonymous session ID, making it possible to distinguish individual visitors and analyze patterns across eras and tracks. Aggregate questions — most engaging era, most replayed track, average listening time, unique visitor count — are answered with SQL queries against the collected data.

## Design notes

The project treats *sound* as the core storytelling device. Rather than relying on recognizable songs, each era is built around a feeling — the warmth of a 1940s recording, the late-night intimacy of 1960s modal jazz, the funk of the 1970s, the neon glow of the 1980s–90s. The audio filtering reinforces this: the same system that makes the 1940s feel like an old radio lets the 2020s sound fully modern, so visitors *feel* the passage of time without being told.

## Credits

Music sourced from royalty-free libraries (Pixabay, YouTube Audio Library) under their respective free-use licenses. Concept, design, and development by Ai Nhien To.
