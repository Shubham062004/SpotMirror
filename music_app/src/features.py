import pandas as pd

MOOD_MAP = {
    "happy": 1,
    "energetic": 1,
    "calm": 0,
    "sad": 0
}

def build_features(csv_path: str) -> pd.DataFrame:
    df = pd.read_csv(csv_path)

    # Encode mood as binary target
    df["mood_label"] = df["mood"].map(MOOD_MAP)

    # Feature engineering
    df["listeners"] = df["listeners"].astype(int)
    df["log_listeners"] = df["listeners"].apply(lambda x: 0 if x == 0 else __import__("math").log(x))

    return df[["log_listeners", "mood_label"]]
