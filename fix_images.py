import urllib.request

urls = [
    ('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80', 'public/gallery/ig/post_1.jpg'),
    ('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80', 'public/gallery/ig/post_2.jpg'),
    ('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80', 'public/gallery/ig/post_3.jpg'),
    ('https://images.unsplash.com/photo-1621644026364-7cbf9b101188?w=800&q=80', 'public/gallery/ig/post_4.jpg')
]

for url, target in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        response = urllib.request.urlopen(req)
        with open(target, 'wb') as f:
            f.write(response.read())
        print(f"Downloaded {target}")
    except Exception as e:
        print(f"Failed to download {url}: {e}")
