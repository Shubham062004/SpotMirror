import os
import requests
import pandas as pd
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

API_KEY = os.getenv("LASTFM_API_KEY")
if not API_KEY:
    raise RuntimeError("LASTFM_API_KEY not found in environment variables")

BASE_URL = "https://ws.audioscrobbler.com/2.0/"
MOODS = ["happy", "sad", "calm", "energetic"]

rows = []

for mood in MOODS:
    params = {
        "method": "track.search",
        "track": mood,
        "api_key": API_KEY,
        "format": "json",
        "limit": 25
    }

    response = requests.get(BASE_URL, params=params, timeout=10)
    response.raise_for_status()
    data = response.json()

    if "results" not in data:
        print(f"[WARN] No results for mood '{mood}': {data}")
        continue

    tracks = data["results"]["trackmatches"]["track"]

    for t in tracks:
        rows.append({
            "track": t.get("name"),
            "artist": t.get("artist"),
            "mood": mood,
            "listeners": int(t.get("listeners", 0) or 0)
        })

df = pd.DataFrame(rows)

if df.empty:
    raise RuntimeError("Dataset empty — API returned no valid data")

output_path = "music_app/data/music_data.csv"
df.to_csv(output_path, index=False)

print(f"Dataset created successfully → {output_path}")
