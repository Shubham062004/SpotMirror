import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

# Mock user interaction data
USER_DATA = {
    "user_1": {"Song A": 1, "Song B": 1, "Song C": 0},
    "user_2": {"Song A": 1, "Song B": 0, "Song C": 1},
    "user_3": {"Song A": 0, "Song B": 1, "Song C": 1},
}

class CollaborativeRecommender:
    def __init__(self, user_data: dict):
        # Users x Items matrix
        self.df = pd.DataFrame(user_data).fillna(0).T

    def recommend(self, user_id: str, top_n: int = 2):
        if user_id not in self.df.index:
            raise ValueError("User not found")

        # User similarity matrix
        similarity_matrix = cosine_similarity(self.df)
        similarity_df = pd.DataFrame(
            similarity_matrix,
            index=self.df.index,
            columns=self.df.index,
        )

        # Similar users (excluding self)
        similar_users = (
            similarity_df.loc[user_id]
            .drop(user_id)
            .sort_values(ascending=False)
        )

        # Align matrices explicitly
        similar_users = similar_users.loc[self.df.index.drop(user_id)]

        # Weighted sum of interactions
        weighted_scores = (
            self.df.loc[similar_users.index].T
            .dot(similar_users)
            / similar_users.sum()
        )

        # Remove already interacted items
        already_interacted = self.df.loc[user_id]
        weighted_scores = weighted_scores[already_interacted == 0]

        return weighted_scores.sort_values(ascending=False).head(top_n)


if __name__ == "__main__":
    recommender = CollaborativeRecommender(USER_DATA)
    print(recommender.recommend("user_1"))
