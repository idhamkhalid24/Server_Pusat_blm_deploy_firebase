CARA UPLOAD KE GITHUB PAGES

1. Extract ZIP ini.
2. Buka folder hasil extract.
3. Upload SEMUA file di dalam folder ini langsung ke root repository GitHub kamu.

Struktur yang benar:

index.html
style.css
script.js
firebase-messaging-sw.js
.nojekyll
README_UPLOAD.txt

Jangan upload file ZIP-nya langsung sebagai isi website.
Jangan masukkan file ke subfolder seperti rockyhijab_github_ready/index.html, kecuali GitHub Pages kamu memang diarahkan ke folder itu.

Setting GitHub Pages:
Repository > Settings > Pages > Source: Deploy from a branch > Branch: main > Folder: /root > Save.

Kalau masih blank, buka langsung:
https://USERNAME.github.io/NAMA-REPO/script.js

Kalau script.js 404, berarti file belum berada di root repository.
