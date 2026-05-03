import instaloader
import os
import shutil
import glob

print("Starting scraper...")
L = instaloader.Instaloader(
    download_pictures=True, 
    download_video_thumbnails=False, 
    download_videos=False, 
    download_geotags=False, 
    download_comments=False, 
    save_metadata=False,
    post_metadata_txt_pattern=""
)

try:
    profile = instaloader.Profile.from_username(L.context, "rafah_barberstudio")
    print(f"Found profile! Followers: {profile.followers}")
except Exception as e:
    print(f"Error accessing profile: {e}")
    exit(1)

count = 0
for post in profile.get_posts():
    if not post.is_video:
        print(f"Downloading post {post.shortcode}")
        L.download_post(post, target="temp_ig")
        count += 1
    if count >= 6:
        break

print("Download complete. Moving files...")
os.makedirs("public/gallery/ig", exist_ok=True)
for file in glob.glob("temp_ig/*.jpg"):
    base = os.path.basename(file)
    shutil.move(file, os.path.join("public/gallery/ig", base))

print("Done!")
