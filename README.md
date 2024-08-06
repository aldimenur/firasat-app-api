Tentu! Berikut adalah README yang telah diperbarui dengan daftar dependensi yang baru.

---

# NodeJs API - Belajar API

Ini adalah repository contoh untuk belajar membuat API menggunakan Node.js. Repository ini mencakup contoh sederhana dari CRUD (Create, Read, Update, Delete) operasi dengan menggunakan Express.js dan MongoDB sebagai database.

## Daftar Isi
- [Persyaratan](#persyaratan)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [Struktur Proyek](#struktur-proyek)
- [Endpoint API](#endpoint-api)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

## Persyaratan

Pastikan Anda memiliki perangkat lunak berikut terpasang di komputer Anda:
- [Node.js](https://nodejs.org/) (versi 14 atau lebih baru)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Instalasi

1. Clone repository ini:
   ```bash
   git clone https://github.com/aldimenur/firasat-app-api.git
   cd firasat-app-api
   ```

2. Instal dependensi:
   ```bash
   npm install
   ```

3. Buat file `.env` di root directory dan tambahkan konfigurasi berikut:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/belajarapi
   ```

4. Jalankan MongoDB server Anda.

## Penggunaan

Untuk memulai server, jalankan perintah berikut:
```bash
npm start
```

API akan berjalan di `http://localhost:3000`.

## Struktur Proyek

Berikut adalah struktur dasar dari proyek ini:
```
firasat-app-api/
│
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

- **controllers/**: Menyimpan logika untuk setiap endpoint.
- **models/**: Menyimpan definisi skema untuk MongoDB.
- **routes/**: Menyimpan definisi rute API.
- **app.js**: Menginisialisasi aplikasi Express.
- **server.js**: Menyediakan entry point untuk menjalankan server.

## Endpoint API

Berikut adalah daftar endpoint yang tersedia di API ini:

### Users
- `GET /users` - Mendapatkan daftar semua pengguna.
- `GET /users/:id` - Mendapatkan data pengguna berdasarkan ID.
- `POST /users` - Menambahkan pengguna baru.
- `PUT /users/:id` - Memperbarui data pengguna berdasarkan ID.
- `DELETE /users/:id` - Menghapus pengguna berdasarkan ID.

## Kontribusi

Kontribusi sangat diterima! Silakan fork repository ini dan buat pull request untuk fitur atau perbaikan bug yang ingin Anda tambahkan.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## Dependensi

Proyek ini menggunakan beberapa dependensi sebagai berikut:
```json
{
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "mongoose": "^7.3.1",
    "mongose": "^0.0.2-security",
    "mysql": "^2.18.1"
  }
}
```

---

Semoga bermanfaat! Jika ada yang perlu ditambahkan atau diperbaiki, jangan ragu untuk menghubungi saya.
