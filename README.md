
# 🎵 SpotMirror

SpotMirror is an AI-powered music recommendation system that suggests songs based on user mood.  
It integrates real-world music metadata with machine learning to deliver personalized, explainable recommendations.

---

## 🚀 Features
- Mood-based music recommendations (happy, sad, calm, energetic)
- Real-time data collection using Last.fm API
- Machine learning pipeline for mood classification
- Log-scaled popularity scoring for stable ranking
- Command-line interface (CLI) for easy interaction
- Clean, modular, production-style project structure

---

## 🧠 Tech Stack
- **Language:** Python
- **ML:** Scikit-learn
- **Data Processing:** Pandas
- **API:** Last.fm API
- **CLI:** argparse
- **Config Management:** python-dotenv

---

## 📂 Project Structure
```

SpotMirror/
└── music-app/
├── src/
│   ├── main.py
│   ├── collect_data.py
│   ├── features.py
│   ├── train_model.py
│   └── recommender.py
│
├── data/
│   └── music_data.csv
│
├── tests/
├── .env
├── .gitignore
└── requirements.txt

````

---

## ▶️ How to Run

### 1️⃣ Install dependencies
```bash
pip install -r music-app/requirements.txt
````

### 2️⃣ Add API key

Create `.env` inside `music-app/`:

```
LASTFM_API_KEY=your_api_key_here
```

### 3️⃣ Generate dataset

```bash
python music-app/src/collect_data.py
```

### 4️⃣ Train model

```bash
python music-app/src/train_model.py
```

### 5️⃣ Get recommendations

```bash
python music-app/src/main.py --mood happy --top 5
```

---

## 📈 Future Improvements

* Content-based and collaborative filtering
* REST API using FastAPI
* React frontend
* User preference learning
* Model performance tuning

---

## 👤 Author

Shubham Kumar Chaurasia
