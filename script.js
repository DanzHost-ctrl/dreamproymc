document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setActiveNavigation();
  setupTypingTitle();

  const page = document.body.dataset.page;
  if (page === "home") renderLatest();
  if (page === "category") setupCategoryPage();
  if (page === "detail") renderDetail();
});

function setupTypingTitle() {
  const title = document.querySelector("[data-typing-text]");
  if (!title) return;
  const text = title.dataset.typingText;
  let index = 0;
  let deleting = false;

  const animate = () => {
    title.textContent = text.slice(0, index);
    if (!deleting && index < text.length) {
      index += 1;
      window.setTimeout(animate, 115);
      return;
    }
    if (!deleting) {
      deleting = true;
      window.setTimeout(animate, 1600);
      return;
    }
    if (index > 0) {
      index -= 1;
      window.setTimeout(animate, 72);
      return;
    }
    deleting = false;
    window.setTimeout(animate, 450);
  };
  animate();
}

function setupNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
  });
}

function setActiveNavigation() {
  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const linkFile = link.getAttribute("href");
    if (linkFile === currentFile) link.classList.add("active");
  });
}

function renderLatest() {
  const grid = document.querySelector("#latest-grid");
  if (!grid) return;
  // Tampilkan enam konten pertama agar Home tetap ringkas.
  grid.innerHTML = contents.slice(0, 6).map(createCard).join("");
  setupImageFallbacks();
}

function setupCategoryPage() {
  const category = document.body.dataset.category;
  const search = document.querySelector("#content-search");
  const render = () => {
    const keyword = (search.value || "").trim().toLowerCase();
    const filtered = contents.filter((item) => {
      const sameCategory = item.category === category;
      const matchesSearch = `${item.name} ${item.description}`.toLowerCase().includes(keyword);
      return sameCategory && matchesSearch;
    });
    const grid = document.querySelector("#category-grid");
    const count = document.querySelector("#result-count");
    grid.innerHTML = filtered.length ? filtered.map((item) => createCard(item, true)).join("") : `<div class="empty-state">Konten tidak ditemukan. Coba kata kunci lain.</div>`;
    count.textContent = `${filtered.length} konten`;
    setupImageFallbacks();
  };
  search.addEventListener("input", render);
  render();
}

function createCard(item, categoryCard = false) {
  return `
    <article class="content-card ${categoryCard ? "category-card" : ""}">
      <a class="card-image" href="detail.html?id=${encodeURIComponent(item.id)}">
        <img src="${item.thumbnail}" alt="${escapeHtml(item.name)}" loading="lazy">
        <span class="image-placeholder">Thumbnail belum tersedia</span>
      </a>
      <div class="card-body">
        <div class="card-topline"><span class="tag">${escapeHtml(item.category)}</span><span class="version">${escapeHtml(item.version)}</span></div>
        <h3><a href="detail.html?id=${encodeURIComponent(item.id)}">${escapeHtml(item.name)}</a></h3>
        <p>${escapeHtml(item.description)}</p>
        <a class="card-link" href="detail.html?id=${encodeURIComponent(item.id)}">Lihat Detail <span aria-hidden="true">→</span></a>
      </div>
    </article>
  `;
}

function renderDetail() {
  const wrapper = document.querySelector("#detail-content");
  const id = new URLSearchParams(window.location.search).get("id");
  const item = contents.find((content) => content.id === id);
  if (!item) {
    document.title = "Konten Tidak Ditemukan | Dreamproy_Mc";
    wrapper.innerHTML = `<div class="not-found"><p class="eyebrow">404</p><h1>Konten tidak ditemukan</h1><p class="download-note">ID konten tidak tersedia atau link-nya belum benar.</p><a class="button button-primary" href="index.html">Kembali ke Home</a></div>`;
    return;
  }

  document.title = `${item.name} | Dreamproy_Mc`;
  const features = Array.isArray(item.features) && item.features.length
    ? `<h3>Fitur</h3><ul class="feature-list">${item.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")}</ul>`
    : "";
  const download = item.download
    ? `<a class="button button-primary" href="${escapeAttribute(item.download)}" target="_blank" rel="noopener">Download <span aria-hidden="true">↓</span></a>`
    : `<p class="download-note">Link download belum tersedia.</p>`;

  wrapper.innerHTML = `
    <div class="detail-image">
      <img src="${item.thumbnail}" alt="${escapeHtml(item.name)}" loading="lazy">
      <span class="image-placeholder">Thumbnail belum tersedia</span>
    </div>
    <div class="detail-copy">
      <span class="tag">${escapeHtml(item.category)}</span>
      <h1>${escapeHtml(item.name)}</h1>
      <div class="detail-meta"><span>Versi Minecraft</span><strong>${escapeHtml(item.version)}</strong></div>
      <p class="detail-description">${escapeHtml(item.description)}</p>
      ${features}
      ${download}
    </div>
  `;
  setupImageFallbacks();
}

function setupImageFallbacks() {
  document.querySelectorAll(".card-image, .detail-image").forEach((wrapper) => {
    const image = wrapper.querySelector("img");
    if (!image) return;
    image.addEventListener("error", () => wrapper.classList.add("image-failed"), { once: true });
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[character]));
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}
