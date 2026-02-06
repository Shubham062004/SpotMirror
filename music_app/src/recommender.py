import pandas as pd
import math

DATA_PATH = "music_app/data/music_data.csv"

def popularity_score(listeners: int) -> float:
    """
    Log-scaled popularity score to reduce skew.
    """
    return 0 if listeners <= 0 else math.log(listeners)


def recommend_songs(mood: str, top_n: int = 5):
    df = pd.read_csv(DATA_PATH)

    if mood not in df["mood"].unique():
        raise ValueError(f"Invalid mood: {mood}")

    filtered = df[df["mood"] == mood].copy()

    # Score computation
    filtered["score"] = filtered["listeners"].apply(popularity_score)

    recommendations = filtered.sort_values(
        by="score", ascending=False
    ).head(top_n)

    return recommendations[["track", "artist", "listeners", "score"]]


if __name__ == "__main__":
    mood = "happy"
    recs = recommend_songs(mood)

    print(f"\nTop recommendations for mood: {mood}\n")
    for _, row in recs.iterrows():
        print(
            f"{row['track']} - {row['artist']} | "
            f"listeners={row['listeners']} | score={row['score']:.2f}"
        )
