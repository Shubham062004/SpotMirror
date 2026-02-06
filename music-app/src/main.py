import argparse
from recommender import recommend_songs


def parse_args():
    parser = argparse.ArgumentParser(
        description="SpotMirror - Mood Based Music Recommendation System"
    )
    parser.add_argument(
        "--mood",
        type=str,
        required=True,
        help="Mood for recommendation (happy, sad, calm, energetic)",
    )
    parser.add_argument(
        "--top",
        type=int,
        default=5,
        help="Number of songs to recommend",
    )
    return parser.parse_args()


def main():
    args = parse_args()
    recommendations = recommend_songs(args.mood, args.top)

    print(f"\n🎵 Recommendations for mood: {args.mood}\n")
    for _, row in recommendations.iterrows():
        print(
            f"{row['track']} - {row['artist']} | "
            f"listeners={row['listeners']} | score={row['score']:.2f}"
        )


if __name__ == "__main__":
    main()
