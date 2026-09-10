# Dreamproy_Mc

Website multi-page sederhana untuk berbagi **Minecraft Bedrock Addons, Maps, dan Shaders**. Project ini hanya menggunakan HTML5, CSS3, dan JavaScript Vanilla sehingga cocok untuk pemula.

## 1. Fungsi setiap file

- `index.html` — halaman Home dan konten terbaru.
- `addons.html` — daftar khusus Addons dengan fitur pencarian.
- `maps.html` — daftar khusus Maps dengan fitur pencarian.
- `shaders.html` — daftar khusus Shaders dengan fitur pencarian.
- `about.html` — halaman terpisah tentang Dreamproy_Mc.
- `detail.html` — halaman detail yang dipakai bersama oleh semua konten.
- `style.css` — seluruh gaya, warna, layout, responsive design, dan animasi ringan.
- `script.js` — navbar mobile, kartu konten, pencarian, dan pembacaan ID dari URL.
- `data.js` — tempat semua data Addon, Map, dan Shader.
- `README.md` — panduan penggunaan project ini.

## 2. Fungsi folder

- `images/addons/` — simpan thumbnail untuk Addon.
- `images/maps/` — simpan thumbnail untuk Map.
- `images/shaders/` — simpan thumbnail untuk Shader.
- `images/skins/` — tempat yang disiapkan untuk skin lokal jika nanti ingin menggunakannya.

Contoh struktur thumbnail:

```text
images/
├── addons/
│   └── dragon.jpg
├── maps/
│   └── skyblock.jpg
└── shaders/
    └── soft-light.jpg
```

Contoh data akan tetap menampilkan placeholder sederhana jika thumbnail belum dimasukkan.

## 3. Cara menjalankan

1. Extract `Dreamproy_Mc.zip`.
2. Buka folder `Dreamproy_Mc`.
3. Klik dua kali `index.html` untuk membukanya di browser.
4. Klik menu Home, Addons, Maps, Shaders, dan About untuk berpindah halaman.

Website ini tidak membutuhkan database, backend, instalasi package, atau koneksi server. Untuk pengalaman yang lebih mirip hosting, folder ini juga bisa dibuka dengan extension Live Server di VS Code.

## 4. Cara menambah Addon

Buka `data.js`, lalu tambahkan object baru ke dalam array `contents`. Pastikan object sebelumnya diakhiri koma.

```javascript
{
  id: "nama-addon",
  name: "Nama Addon",
  category: "Addon",
  version: "1.21+",
  thumbnail: "images/addons/nama-addon.jpg",
  description: "Deskripsi singkat addon.",
  features: ["Fitur pertama", "Fitur kedua"],
  download: "https://contoh.com/download-addon"
}
```

Gunakan nilai `category: "Addon"` agar konten muncul di halaman Addons.

## 5. Cara menambah Map

Tambahkan object baru dengan format yang sama, tetapi gunakan `category: "Map"` dan folder thumbnail `images/maps/`.

```javascript
{
  id: "nama-map",
  name: "Nama Map",
  category: "Map",
  version: "1.21+",
  thumbnail: "images/maps/nama-map.jpg",
  description: "Deskripsi singkat map.",
  features: ["Area luas", "Cocok untuk multiplayer"],
  download: "https://contoh.com/download-map"
}
```

## 6. Cara menambah Shader

Gunakan `category: "Shader"` dan simpan thumbnail di folder `images/shaders/`.

```javascript
{
  id: "nama-shader",
  name: "Nama Shader",
  category: "Shader",
  version: "1.21+",
  thumbnail: "images/shaders/nama-shader.jpg",
  description: "Deskripsi singkat shader.",
  features: ["Pencahayaan lembut", "Performa ringan"],
  download: "https://contoh.com/download-shader"
}
```

## 7. Cara memasukkan thumbnail

1. Siapkan gambar JPG, PNG, atau WebP dengan ukuran wajar, misalnya 1200 x 675 piksel.
2. Masukkan gambar ke folder kategori yang sesuai.
3. Tulis alamat relatifnya di `data.js`, contohnya:
   - `images/addons/dragon.jpg`
   - `images/maps/skyblock.jpg`
   - `images/shaders/soft-light.jpg`
4. Nama file dan penulisan huruf besar-kecil harus sama persis.

Gambar di kartu menggunakan `loading="lazy"` agar halaman tetap ringan. Jika file belum ada, placeholder akan muncul otomatis.

## 8. Cara mengganti nama, deskripsi, atau versi

Edit bagian berikut pada object di `data.js`:

```javascript
name: "Nama Baru",
version: "1.21+",
description: "Deskripsi baru untuk konten ini.",
```

`features` berisi daftar fitur. Kamu boleh menambah, menghapus, atau mengosongkannya:

```javascript
features: ["Fitur A", "Fitur B"]
```

## 9. Cara mengganti link download

Ganti nilai `download` dengan link file atau halaman download yang sebenarnya:

```javascript
download: "https://contoh.com/file-addon.mcaddon"
```

Jika `download` dikosongkan seperti `download: ""`, halaman detail akan menampilkan:

> Link download belum tersedia.

## 10. Cara mengganti link TikTok dan Saluran

Di semua file HTML, cari:

```html
href="LINK_SALURAN"
href="LINK_TIKTOK"
```

Ganti menjadi link sebenarnya, contohnya:

```html
href="https://whatsapp.com/channel/contoh"
href="https://www.tiktok.com/@namaakun"
```

## 11. Cara mengganti skin

Skin pada Home dan About saat ini memakai URL gambar online. Untuk menggantinya, buka file HTML yang sesuai dan ubah nilai `src` pada tag `<img>`.

Contoh skin lokal:

```html
src="images/skins/skin-kamu.png"
```

Kamu juga bisa mengganti URL skin online dengan URL gambar lain yang bisa diakses publik.

## 12. Cara upload ke GitHub Pages

1. Buat repository baru di GitHub.
2. Upload semua isi folder `Dreamproy_Mc` ke repository. Upload file HTML, CSS, JS, README, dan folder `images`.
3. Buka **Settings → Pages**.
4. Pada bagian source, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
6. Tunggu beberapa saat sampai GitHub memberikan alamat website.

Pastikan `index.html` berada di root repository, bukan di dalam folder tambahan.

## 13. Cara upload ke Vercel

### Cara melalui website Vercel

1. Buka Vercel dan login.
2. Klik **Add New → Project**.
3. Import repository GitHub yang berisi project ini.
4. Karena project ini website statis, biarkan pengaturan framework kosong atau pilih **Other**.
5. Klik **Deploy**.

### Cara melalui Vercel CLI

Jika sudah memasang Node.js dan Vercel CLI, masuk ke folder project lalu jalankan:

```bash
vercel
```

Ikuti pertanyaan yang muncul. Tidak ada build command khusus yang diperlukan.

## Catatan penting

- Jangan menghapus `id` atau membuat dua konten dengan `id` yang sama.
- ID hanya boleh sederhana, misalnya `dragon-addon` atau `modern-city`.
- Untuk berpindah halaman, navbar menggunakan file HTML biasa.
- Detail konten menggunakan pola URL `detail.html?id=ID_KONTEN`.