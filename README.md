# 🎵 SpotMirror

SpotMirror is a scalable, AI-powered music recommendation system that provides personalized song suggestions using multiple recommendation strategies including mood-based filtering, content similarity, collaborative filtering, and user preference learning.

The system is built with a production-style backend architecture and is designed to support seamless API provider switching.

---

## ⚠️ API PROVIDER NOTE (IMPORTANT)

At the time of development, **Spotify Web API access for new developer applications is under limited availability / maintenance**.

👉 Therefore, **Last.fm API** is currently used as the primary source of music metadata.

The backend is **API-agnostic by design**, and once Spotify API access is available, the system can be migrated to Spotify with **minimal code changes**.

---

## 🚀 Features

### Recommendation Engines
- Mood-based music recommendations
- Content-based filtering using TF-IDF and cosine similarity
- User-based collaborative filtering
- Popularity-based ranking with log-scaled scoring
- Persistent user preference learning

### Backend
- FastAPI-powered REST API
- Clean Python package structure
- Robust error handling and path-safe file access
- Auto-generated Swagger/OpenAPI documentation

### Frontend (Planned)
- React-based user interface
- Mood selection and recommendation display
- Backend API integration
- Minimal, clean UI for real-time interaction

---

## 🧠 Tech Stack

### Backend
- Python
- FastAPI
- Pandas
- Scikit-learn
- python-dotenv
- Last.fm API

### Frontend (Planned)
- React
- Fetch API / Axios
- CSS

---


## 🔑 Environment Setup

Create a `.env` file inside `music_app/`:

```

LASTFM_API_KEY=your_lastfm_api_key_here

````

---

## ▶️ Running the Backend

### Install dependencies
```bash
pip install -r music_app/requirements.txt
````

### Generate dataset

```bash
python music_app/src/collect_data.py
```

### Train the model

```bash
python music_app/src/train_model.py
```

### Start FastAPI server

```bash
uvicorn music_app.src.api:app --reload
```

Open Swagger API documentation:

```
http://127.0.0.1:8000/docs
```

---

## 🧠 Machine Learning Approach

* Music metadata is mapped to mood labels
* Feature engineering includes log-scaled popularity metrics
* Baseline classification models validate pipeline correctness
* Content similarity uses TF-IDF vectorization
* Collaborative filtering is based on cosine similarity
* User preferences are stored and updated persistently

---

## 🔄 Future Enhancements

* Migration from Last.fm API to Spotify Web API
* Hybrid recommendation model
* Full React frontend implementation
* User authentication and profiles
* Deployment of backend and frontend
* Performance optimization and caching

---

## 👤 Author

**Shubham Kumar Chaurasia**

<!-- hello -->