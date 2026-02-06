import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

DATA_PATH = "music_app/data/music_data.csv"

class ContentBasedRecommender:
    def __init__(self):
        self.df = pd.read_csv(DATA_PATH)
        self.df["text"] = self.df["track"] + " " + self.df["artist"]

        self.vectorizer = TfidfVectorizer(stop_words="english")
        self.tfidf_matrix = self.vectorizer.fit_transform(self.df["text"])

    def recommend(self, song_name: str, top_n: int = 5):
        if song_name not in self.df["track"].values:
            raise ValueError("Song not found in dataset")

        idx = self.df[self.df["track"] == song_name].index[0]
        similarities = cosine_similarity(
            self.tfidf_matrix[idx], self.tfidf_matrix
        ).flatten()

        similar_indices = similarities.argsort()[::-1][1 : top_n + 1]

        return self.df.iloc[similar_indices][
            ["track", "artist", "listeners"]
        ]


if __name__ == "__main__":
    recommender = ContentBasedRecommender()
    results = recommender.recommend("Happy", top_n=5)

    for _, row in results.iterrows():
        print(f"{row['track']} - {row['artist']}")
