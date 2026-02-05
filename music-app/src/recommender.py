import pandas as pd

DATA_PATH = "music-app/data/music_data.csv"

def recommend_songs(mood: str, top_n: int = 5):
    df = pd.read_csv(DATA_PATH)

    if mood not in df["mood"].unique():
        raise ValueError(f"Invalid mood: {mood}")

    # Sort by popularity
    filtered = df[df["mood"] == mood]
    recommendations = filtered.sort_values(
        by="listeners", ascending=False
    ).head(top_n)

    return recommendations[["track", "artist", "listeners"]]


if __name__ == "__main__":
    mood = "happy"
    recs = recommend_songs(mood)

    print(f"\nTop recommendations for mood: {mood}\n")
    for _, row in recs.iterrows():
        print(f"{row['track']} - {row['artist']} ({row['listeners']} listeners)")
