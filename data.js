// Semua konten website disimpan di array ini.
// Tambahkan object baru untuk menambah konten. Tidak perlu membuat file HTML baru.
const contents = [
  {
    id: "actual-guns-addon",
    name: "Actual Guns Addon",
    category: "Addon",
    version: "26.60+",
    thumbnail: "images/addons/dragon.jpg",
    description: "Hadirkan naga bersahabat dan naga liar ke dalam dunia survival Bedrock-mu.",
    features: ["Beberapa jenis naga", "Bisa dijinakkan", "Cocok untuk survival"],
    download: "LINK_DOWNLOAD_DRAGON"
  },
  {
    id: "backpack-addon",
    name: "Simple Backpack",
    category: "Addon",
    version: "1.20 - 1.21",
    thumbnail: "images/addons/backpack.jpg",
    description: "Addon backpack ringan untuk menambah ruang penyimpanan saat berpetualang.",
    features: ["Resep crafting sederhana", "Beberapa ukuran backpack", "Mudah digunakan"],
    download: "LINK_DOWNLOAD_BACKPACK"
  },
  {
    id: "friendly-mobs-addon",
    name: "Friendly Mobs",
    category: "Addon",
    version: "1.21+",
    thumbnail: "images/addons/friendly-mobs.jpg",
    description: "Ubah suasana dunia menjadi lebih santai dengan perilaku mob yang bersahabat.",
    features: ["Perilaku mob baru", "Aman untuk dunia keluarga", "File ringan"],
    download: "LINK_DOWNLOAD_FRIENDLY_MOBS"
  },
  {
    id: "skyblock-island",
    name: "Skyblock Island",
    category: "Map",
    version: "1.21+",
    thumbnail: "images/maps/skyblock.jpg",
    description: "Mulai petualangan survival dari pulau kecil di atas langit.",
    features: ["Pulau awal siap dimainkan", "Tantangan bertahap", "Cocok untuk solo atau teman"],
    download: "LINK_DOWNLOAD_SKYBLOCK"
  },
  {
    id: "modern-city",
    name: "Modern City",
    category: "Map",
    version: "1.20+",
    thumbnail: "images/maps/modern-city.jpg",
    description: "Jelajahi kota modern dengan jalan, gedung, dan area untuk dikembangkan.",
    features: ["Area kota luas", "Bangunan detail", "Cocok untuk roleplay"],
    download: "LINK_DOWNLOAD_MODERN_CITY"
  },
  {
    id: "parkour-temple",
    name: "Parkour Temple",
    category: "Map",
    version: "1.21+",
    thumbnail: "images/maps/parkour-temple.jpg",
    description: "Uji ketangkasanmu melewati rintangan parkour di kuil kuno.",
    features: ["Level parkour menantang", "Checkpoint", "Papan skor sederhana"],
    download: "LINK_DOWNLOAD_PARKOUR"
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
