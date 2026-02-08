from pathlib import Path
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

BASE_DIR = Path(__file__).resolve().parents[1]
DATA_PATH = BASE_DIR / "data" / "music_data.csv"


class ContentBasedRecommender:
    def __init__(self):
        self.df = pd.read_csv(DATA_PATH)

        self.vectorizer = TfidfVectorizer(stop_words="english")
        self.tfidf_matrix = self.vectorizer.fit_transform(
            self.df["track"] + " " + self.df["artist"]
        )

    def recommend(self, track_name, top_n=5):
        idx = self.df[self.df["track"] == track_name].index
        if idx.empty:
            return self.df.sample(top_n)

        similarity_scores = cosine_similarity(
            self.tfidf_matrix[idx[0]], self.tfidf_matrix
        ).flatten()

        similar_indices = similarity_scores.argsort()[-top_n - 1 : -1][::-1]
        return self.df.iloc[similar_indices]
