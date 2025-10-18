# Next.js 15 Backend Project

## 🚀 Project Overview

Ini adalah backend express yang menggunakan Bun 1.1.43 sebagai package manager dan runtime.

## 🛠️ Instalasi

Pastikan telah menginstal **Bun** sebelum menjalankan proyek ini.

1. Clone repositori:
   ```sh
   git clone https://github.com/rianabd01/be-taxidashboard.git
   cd be-taxidashboard
   ```
2. Instal dependensi:
   ```sh
   bun install
   ```
3. Konfigurasi Environment:
   Buat file `.env` dan isi dengan konfigurasi berikut:

   ```env
   SOCRATA_API_URL=https://data.cityofnewyork.us/resource/gkne-dk5s.json
   PORT=5000

   ```

4. Jalankan server pengembangan:
   ```sh
   bun run dev
   ```
