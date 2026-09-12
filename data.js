// Semua konten website disimpan di array ini.
// Tambahkan object baru untuk menambah konten. Tidak perlu membuat file HTML baru.
const contents = [
  {
    id: "actual-guns-addon",
    name: "Actual Guns Addon",
    category: "Addon",
    version: "1.26+",
    thumbnail: "https://cdn.phototourl.com/free/2026-09-11-17f25f8e-7522-4e2b-b667-9312c672ec91.jpg",
    description: "Actual Guns Addon adalah addon Minecraft Bedrock yang menambahkan berbagai elemen bertema senjata modern ke dalam permainan. Addon ini dirancang untuk memberikan variasi baru dalam gameplay dan membuat dunia Minecraft terasa berbeda dari survival vanilla.",
    features: ["Menambahkan berbagai jenis senjata bertema modern", "Cocok untuk world bertema modern, adventure, atau roleplay.", "Memiliki model dan tampilan yang dibuat khusus untuk Minecraft Bedrock", "Menambahkan pengalaman gameplay yang berbeda dari Minecraft vanilla.", "Dapat digunakan sebagai bagian dari konsep world atau server bertema khusus."],
    download: "https://www.curseforge.com/minecraft-bedrock/addons/actual-guns-addon/download/8146357"
  },
  {
    id: "deathcoords-addon",
    name: "DeathCoords",
    category: "Addon",
    version: "1.26+",
    thumbnail: "https://cdn.phototourl.com/free/2026-09-11-cf150926-cf30-4f87-8761-6fd879648db3.jpg",
    description: "Death Coords adalah resource pack Minecraft Bedrock yang membantu pemain menemukan kembali lokasi mereka setelah mati. Pack ini menampilkan koordinat tepat lokasi kematian serta perkiraan jarak dari posisi pemain saat ini.",
    features: ["Menampilkan jarak menuju lokasi kematian.", "Penanda lokasi otomatis menghilang setelah pemain mencapai lokasi tersebut.", "Cocok untuk Survival, Server, dan Realm", "Kompatibel dengan berbagai resource pack lainnya."],
    download: "https://www.curseforge.com/minecraft-bedrock/texture-packs/death-coords/download/7652063"
  },
  {
    id: "dynamicsurroundings-addon",
    name: "DynamicSurroundings",
    category: "Addon",
    version: "1.26+",
    thumbnail: "https://cdn.phototourl.com/free/2026-09-11-33ff4fb7-66ae-434e-92df-2fcedccefede.jpg",
    description: "DynamicSurroundings Sounds Bedrock adalah resource pack yang memperkaya audio Minecraft dengan suara lingkungan yang lebih hidup dan imersif. Pack ini menambahkan serta memperbaiki berbagai suara seperti langkah kaki, lingkungan, air, angin, mob, dan suasana biome.",

    features: ["Suara lingkungan lebih realistis.", "Audio langkah kaki yang lebih beragam.", "Suara air dan aktivitas berenang yang diperbaiki.", "Suara lingkungan/biome yang lebih atmosferik.", "Berbagai suara mob diperbaiki."],
    download: "https://www.curseforge.com/minecraft-bedrock/texture-packs/dynamicsurroundings-sounds-bedrock/download/8738262"
  },
  {
    id: "dynamic-boat-trails",
    name: "Dynamic Boat Trails",
    category: "Addon",
    version: "1.26+",
    thumbnail: "https://cdn.phototourl.com/free/2026-09-11-1eeeed9e-6fa8-4bf3-93d1-434854ddbf5c.jpg",
    description: "Dynamic Boat Trails adalah resource pack Minecraft Bedrock yang menambahkan efek jejak air yang lebih realistis ketika menggunakan perahu atau rakit. Pack ini dibuat ringan sehingga tidak terlalu membebani perangkat.",
    features: ["Efek jejak air (wake trail) di belakang perahu.", "Efek busa, riak air, dan percikan.", "Efek partikel saat perahu bergerak maupun diam.", "Efek visual yang tetap terlihat dalam kondisi malam dan bawah air.", "Ringan dan ramah performa.", "Resolusi 16x"],
    download: "https://www.curseforge.com/minecraft-bedrock/texture-packs/dynamic-boat-trails/download/8551936"
  },
  {
    id: "raiyons-java-saturation",
    name: "Raiyons Java Saturation",
    category: "Addon",
    version: "1.20+",
    thumbnail: "https://cdn.phototourl.com/free/2026-09-11-88467350-2e1c-4b48-8568-dae190b22ddc.jpg",
    description: "Raiyon's Java Saturation & Regeneration adalah addon yang membuat sistem saturation dan regenerasi darah Minecraft Bedrock lebih mirip Minecraft Java Edition. Addon ini juga menampilkan jumlah saturation di atas hunger bar.",
    features: ["Regenerasi kesehatan berbasis saturation seperti Java.", "Menampilkan jumlah saturation pada HUD.", "Regenerasi darah menjadi lebih cepat sesuai tingkat saturation.", "Nilai saturation makanan menjadi lebih berpengaruh.", "Tersedia versi dengan UI dan No UI.", "Tidak menonaktifkan achievements."],
    download: "https://www.curseforge.com/minecraft-bedrock/addons/raiyons-java-saturation-regeneration/download/8059192"
  },
  {
    id: "world-builder",
    name: "World Builder",
    category: "Addon",
    version: "1.26+",
    thumbnail: "https://cdn.phototourl.com/free/2026-09-11-10c7d9b8-beae-4514-b2dd-fc2f85ab8ddc.jpg",
    description: "World Builder nyediakan berbagai alat untuk mempercepat pembangunan, seperti memilih area, mengisi area dengan blok, menyalin struktur, serta membuat bentuk geometris. Cocok untuk membuat bangunan besar, terrain, atau map tanpa harus menempatkan blok satu per satu.",
    features: ["Selection Tool.", "Copy & Paste.", "Undo & Redo.", "Fill Selection.", "Membuat bentuk seperti cube, sphere, dan triangle.", "Mempermudah pembangunan struktur besar."],
    download: "https://www.mediafire.com/file/9o7lkgfgnmlnpji/World+Builder+Add-On+(addon)+(MDF).mcaddon/file"
  },
  {
    id: "soft-light-shader",
    name: "Soft Light Shader",
    category: "Shader",
    version: "1.21+",
    thumbnail: "images/shaders/soft-light.jpg",
    description: "Shader ringan dengan pencahayaan lembut untuk Bedrock dengan perangkat sederhana.",
    features: ["Pencahayaan lebih hangat", "Performa ringan", "Langit yang lebih lembut"],
    download: "LINK_DOWNLOAD_SOFT_LIGHT"
  },
  {
    id: "clear-water-shader",
    name: "Clear Water Shader",
    category: "Shader",
    version: "1.20 - 1.21",
    thumbnail: "images/shaders/clear-water.jpg",
    description: "Buat air terlihat lebih jernih tanpa mengubah tampilan dunia secara berlebihan.",
    features: ["Air lebih jernih", "Warna natural", "Cocok untuk survival"],
    download: "LINK_DOWNLOAD_CLEAR_WATER"
  },
  {
    id: "vanilla-plus-shader",
    name: "Vanilla Plus Shader",
    category: "Shader",
    version: "1.21+",
    thumbnail: "images/shaders/vanilla-plus.jpg",
    description: "Sentuhan visual natural yang tetap mempertahankan karakter vanilla Minecraft.",
    features: ["Bayangan halus", "Matahari dan bulan lebih hidup", "Tampilan tetap natural"],
    download: "LINK_DOWNLOAD_VANILLA_PLUS"
  }
];
