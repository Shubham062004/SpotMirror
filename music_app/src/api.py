from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from music_app.src.recommender import recommend_songs
from music_app.src.content_recommender import ContentBasedRecommender
from music_app.src.collaborative_recommender import (
    CollaborativeRecommender,
    USER_DATA,
)
from music_app.src.user_preferences import UserPreferenceStore

app = FastAPI(title="SpotMirror API")

content_recommender = ContentBasedRecommender()
collab_recommender = CollaborativeRecommender(USER_DATA)
preference_store = UserPreferenceStore()


@app.get("/")
def health_check():
    return {"status": "SpotMirror API running"}


@app.get("/recommend/mood")
def mood_recommendation(mood: str, top: int = 5):
    try:
        data = recommend_songs(mood, top)
        return data.to_dict(orient="records")
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.get("/recommend/content")
def content_recommendation(song: str, top: int = 5):
    try:
        data = content_recommender.recommend(song, top)
        return data.to_dict(orient="records")
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.get("/recommend/collaborative")
def collaborative_recommendation(user_id: str, top: int = 5):
    try:
        data = collab_recommender.recommend(user_id, top)
        return data.to_dict()
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.post("/user/preference")
def update_preference(user_id: str, mood: str, weight: float = 1.0):
    preference_store.update_preference(user_id, mood, weight)
    return {"message": "Preference updated"}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
