import urllib.request
import os
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls = [
    "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3561788067191806621",
    "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3491219070249172028",
    "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3196034001428865918",
    "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3866929385538625073",
    "https://d3uxkpn8v3i9eu.cloudfront.net/responsive-images/large/699d6a1092b309a8eea2a0b8.jpg",
    "https://d3uxkpn8v3i9eu.cloudfront.net/responsive-images/large/67973d9f940b6f0013dca9e9.jpg"
]

os.makedirs("public/gallery/ig", exist_ok=True)
for i, url in enumerate(urls):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req, context=ctx)
        with open(f"public/gallery/ig/post_{i+1}.jpg", "wb") as f:
            f.write(response.read())
        print(f"Downloaded post_{i+1}.jpg")
    except Exception as e:
        print(f"Error downloading post {i+1}: {e}")
