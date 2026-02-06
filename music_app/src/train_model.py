import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from features import build_features

DATA_PATH = "music_app/data/music_data.csv"

df = build_features(DATA_PATH)

X = df[["log_listeners"]]
y = df["mood_label"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LogisticRegression()
model.fit(X_train, y_train)

preds = model.predict(X_test)
accuracy = accuracy_score(y_test, preds)

print(f"Model accuracy: {accuracy:.2f}")
