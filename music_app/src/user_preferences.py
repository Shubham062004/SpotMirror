import json
from pathlib import Path

PREF_FILE = Path("music_app/data/user_preferences.json")

class UserPreferenceStore:
    def __init__(self):
        if PREF_FILE.exists():
            with open(PREF_FILE, "r") as f:
                self.preferences = json.load(f)
        else:
            self.preferences = {}

    def update_preference(self, user_id: str, mood: str, weight: float = 1.0):
        if user_id not in self.preferences:
            self.preferences[user_id] = {}

        self.preferences[user_id][mood] = (
            self.preferences[user_id].get(mood, 0) + weight
        )

        self._save()

    def get_preferences(self, user_id: str):
        return self.preferences.get(user_id, {})

    def _save(self):
        PREF_FILE.parent.mkdir(parents=True, exist_ok=True)
        with open(PREF_FILE, "w") as f:
            json.dump(self.preferences, f, indent=2)


if __name__ == "__main__":
    store = UserPreferenceStore()
    store.update_preference("user_1", "happy")
    store.update_preference("user_1", "energetic", weight=2)

    print(store.get_preferences("user_1"))
