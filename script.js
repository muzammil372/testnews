// Fetch and display news
fetch("news.json")
  .then((res) => res.json())
  .then((data) => {
    // =======================
    // Main Headline (first news)
    // =======================
    const main = document.getElementById("main-news");
    if (main && data.length > 0) {
      const mainNews = data[0];
      main.innerHTML = `
        <div class="main-news">
          <img src="${mainNews.image}" alt="${mainNews.title}" />
          <a href="news-pages/news-${index + 1}.html">
          <h1>${mainNews.title}</h1>
          <p>${mainNews.summary}</p>
          <small>${mainNews.date}</small>
<a href="news-pages/${mainNews.slug}.html">مزید پڑھیں</a>

    </div>
      `;
    }

    // =======================
    // Other News (small cards)
    // =======================
// =======================
// Other News (small cards) - For index.html grid
// =======================
const grid = document.getElementById("news-grid");
if (grid) {
  // Agar main news alag se display ho rahi hai, toh i=1 se start karein, warna i=0
  let startIndex = 0;
  const main = document.getElementById("main-news");
  if (main && data.length > 0) {
    startIndex = 1; // Pehli news main headline mein gayi, toh grid mein 1 se start
  }
  
  for (let i = startIndex; i < data.length; i++) {
    const news = data[i];
    grid.innerHTML += `
      <div class="news-card small">
        <div class="image-wrapper">
          <img src="${news.image}" alt="${news.title}" loading="lazy" />
          <!-- YEHI SHARE ICONS KA CODE ADD KAREIN - YAHAN INSERT HOGA -->
          <div class="share-icons">
              <a href="https://wa.me/?text=${encodeURIComponent(news.title + '/n/n' + (news.summary || 'تازہ ترین خبر - تفصیلات کے لیے لنک پر کلک کریں') + '/n/n' + window.location.origin + '/news.html?slug=' + news.slug)}" target="_blank" title="Share on WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339-13.4 204.3-31.9 115.4 44.5 41.3 106.4 23.3 214.4 68.7 298.1l-20.4 74.6c-3.3 12 8.2 22.6 19.8 17.9l72.8-30.5c65.2 35.1 146.2 24.7 199.6-30.4 77.5-82.8 59.8-228.2-35.6-278.6z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/?url=${encodeURIComponent(window.location.origin + '/news.html?slug=' + news.slug)}" target="_blank" title="Share on Instagram" aria-label="Share on Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-115.1 51.5-115.1 115.1S160.5 371.2 224.1 371.2 339.2 319.7 339.2 256.1 287.7 141 224.1 141zm0 190.5c-41.7 0-75.5-33.8-75.5-75.5s33.8-75.5 75.5-75.5 75.5 33.8 75.5 75.5-33.8 75.5-75.5 75.5zm146.4-194.3c0 14.9-12.1 27-27 27-14.9 0-27-12.1-27-27s12.1-27 27-27c14.9 0 27 12.1 27 27zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-93-26.3-26.3-57.7-34.5-93-36.2-36.7-2.1-146.7-2.1-183.4 0-35.3 1.7-66.7 9.9-93 36.2-26.3 26.3-34.5 57.7-36.2 93-2.1 36.7-2.1 146.7 0-183.4 1.7 35.3 9.9 66.7 36.2 93 26.3 26.3 57.7 34.5 93 36.2 36.7 2.1 146.7 2.1 183.4 0 35.3-1.7 66.7-9.9 93-36.2 26.3-26.3 34.5-57.7 36.2-93 2.1-36.7 2.1-146.7 0-183.4z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + '/news.html?slug=' + news.slug)}" target="_blank" title="Share on Facebook" aria-label="Share on Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000ff" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91V127.39c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S293.3 0 266.76 0c-73.1 0-121.18 44.38-121.18 124.72V195.3H86.41V288h59.17v224h91.55V288z"/>
              </svg>
            </a>
          </div>
          <!-- SHARE ICONS END -->
        </div>
        <div class="news-content">
          <h2>${news.title}</h2>
          <p>${news.summary}</p>
          <small>${news.date}</small>
          <a href="news.html?slug=${news.slug}" class="read-more">مزید پڑھیں</a>
        </div>
      </div>
    `;
  }
}
      

    // =======================
    // Single News Page (news.html)
    // =======================
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    if (slug) {
      const news = data.find((item) => item.slug === slug);
      const detail = document.getElementById("news-detail");
      if (detail && news) {
        detail.innerHTML = `
          <h1>${news.title}</h1>
          <img src="${news.image}" alt="${news.title}" />
          <small>${news.date}</small>
          <p>${news.content}</p>
        `;
        if (detail && news) {
  detail.innerHTML = `
    <h1>${news.title}</h1>
    <img src="${news.image}" alt="${news.title}" />
    <small>${news.date}</small>
    <p>${news.content}</p>
  `;

  // Update OG meta tags dynamically
  document.querySelector('meta[property="og:title"]').setAttribute("content", news.title);
  document.querySelector('meta[property="og:description"]').setAttribute("content", news.summary);
  document.querySelector('meta[property="og:image"]').setAttribute("content", news.image);
  document.querySelector('meta[property="og:url"]').setAttribute("content", window.location.href);


     // Single News Page Logic (for news.html) - Updated with OG Tags
   const urlParams = new URLSearchParams(window.location.search);
   const slug = urlParams.get('slug');
   if (slug && window.location.pathname.includes('news.html')) {
     const newsItem = data.find(item => item.slug === slug);
     if (newsItem) {
       const titleEl = document.getElementById('news-title');
       const contentEl = document.getElementById('news-content');
       const dateEl = document.getElementById('news-date');
       const imageEl = document.getElementById('news-image');
       
       // Existing updates
       if (titleEl) titleEl.textContent = newsItem.title;
       if (contentEl) contentEl.innerHTML = newsItem.content.replace(/\n/g, '<br>');
       if (dateEl) dateEl.textContent = newsItem.date;
       if (imageEl) imageEl.src = newsItem.image;
       
       // NEW: Dynamic OG Meta Tags Set Karein - Yeh Preview Enable Karega
       const metaTitle = document.querySelector('title');
       const metaDesc = document.querySelector('meta[name="description"]');
       const ogTitle = document.querySelector('meta[property="og:title"]');
       const ogDesc = document.querySelector('meta[property="og:description"]');
       const ogImage = document.querySelector('meta[property="og:image"]');
       const ogUrl = document.querySelector('meta[property="og:url"]');
       const twitterTitle = document.querySelector('meta[name="twitter:title"]');
       const twitterDesc = document.querySelector('meta[name="twitter:description"]');
       const twitterImage = document.querySelector('meta[name="twitter:image"]');

       if (metaTitle) metaTitle.textContent = newsItem.title;
       if (metaDesc) metaDesc.setAttribute('content', newsItem.summary || newsItem.title);
       if (ogTitle) ogTitle.setAttribute('content', newsItem.title);
       if (ogDesc) ogDesc.setAttribute('content', newsItem.summary || newsItem.title + ' - تازہ ترین خبریں');
       if (ogImage) ogImage.setAttribute('content', newsItem.image.startsWith('http') ? newsItem.image : window.location.origin + '/' + newsItem.image);  // Absolute URL for image
       if (ogUrl) ogUrl.setAttribute('content', window.location.href);
       if (twitterTitle) twitterTitle.setAttribute('content', newsItem.title);
       if (twitterDesc) twitterDesc.setAttribute('content', newsItem.summary || newsItem.title);
       if (twitterImage) twitterImage.setAttribute('content', newsItem.image.startsWith('http') ? newsItem.image : window.location.origin + '/' + newsItem.image);

       // Optional: Single page par bhi share icons add karein (top-right mein)
       const header = document.querySelector('header');
       if (header && !document.getElementById('single-share')) {
         const singleShare = document.createElement('div');
         singleShare.id = 'single-share';
         singleShare.innerHTML = `
           
         `;
         header.appendChild(singleShare);
       }
     } else {
       // Fallback if news not found
       document.body.innerHTML = '<h1>خبریں نہیں ملی</h1>';
     }
   }
   
}

      }
    }
  })
  .catch((err) => console.error("Error loading news:", err));


function loadNewsByCategory(category) {
  fetch("news.json")
    .then(response => response.json())
    .then(data => {
      const newsContainer = document.getElementById("news-container");
      newsContainer.innerHTML = "";

      const filteredNews = data.filter(item => item.category === category);

      filteredNews.forEach(item => {
        const newsCard = document.createElement("div");
newsCard.classList.add("news-card", "small");

   newsCard.innerHTML = `
  <div class="image-wrapper"> 
    <img src="${item.image}" alt="${item.title}">
<div class="share-icons">
  <a href="https://wa.me/?text=${encodeURIComponent(item.title)}%20${encodeURIComponent('https://muzammil372.github.io/news.com/news.html?slug=' + item.slug)}" target="_blank" title="Share on WhatsApp">
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 448 512">
      <path d="M380.9 97.1C339-13.4 204.3-31.9 115.4 44.5 41.3 106.4 23.3 214.4 68.7 298.1l-20.4 74.6c-3.3 12 8.2 22.6 19.8 17.9l72.8-30.5c65.2 35.1 146.2 24.7 199.6-30.4 77.5-82.8 59.8-228.2-35.6-278.6z"/>
    </svg>
  </a>
  <a href="https://www.instagram.com/?url=${encodeURIComponent('https://yourdomain.com/news.html?slug=' + item.slug)}" target="_blank" title="Share on Instagram">
    <!-- Instagram SVG -->
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#E4405F" viewBox="0 0 448 512">
      <path d="M224.1 141c-63.6 0-115.1 51.5-115.1 115.1S160.5 371.2 224.1 371.2 339.2 319.7 339.2 256.1 287.7 141 224.1 141zm0 190.5c-41.7 0-75.5-33.8-75.5-75.5s33.8-75.5 75.5-75.5 75.5 33.8 75.5 75.5-33.8 75.5-75.5 75.5zm146.4-194.3c0 14.9-12.1 27-27 27-14.9 0-27-12.1-27-27s12.1-27 27-27c14.9 0 27 12.1 27 27zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-93-26.3-26.3-57.7-34.5-93-36.2-36.7-2.1-146.7-2.1-183.4 0-35.3 1.7-66.7 9.9-93 36.2-26.3 26.3-34.5 57.7-36.2 93-2.1 36.7-2.1 146.7 0 183.4 1.7 35.3 9.9 66.7 36.2 93 26.3 26.3 57.7 34.5 93 36.2 36.7 2.1 146.7 2.1 183.4 0 35.3-1.7 66.7-9.9 93-36.2 26.3-26.3 34.5-57.7 36.2-93 2.1-36.7 2.1-146.7 0-183.4z"/>
    </svg>
  </a>
  <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://yourdomain.com/news.html?slug=' + item.slug)}" target="_blank" title="Share on Facebook">
    <!-- Facebook SVG -->
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1877F2" viewBox="0 0 320 512">
      <path d="M279.14 288l14.22-92.66h-88.91V127.39c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S293.3 0 266.76 0c-73.1 0-121.18 44.38-121.18 124.72V195.3H86.41V288h59.17v224h91.55V288z"/>
    </svg>
  </a>
</div>


  </div>
  <div class="news-content">
    <h2>${item.title}</h2>
    <p>${item.summary}</p>
    <a href="news.html?slug=${item.slug}" class="read-more">مزید پڑھیں</a>
  </div>
`;
        newsContainer.appendChild(newsCard);
      });
    })
    .catch(error => console.error("Error loading news:", error));
}

// =======================
// Mobile Sidebar Toggle
// =======================
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".geo-sidebar");
const overlay = document.querySelector(".sidebar-overlay");

if (menuBtn && sidebar && overlay) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("visible");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("visible");
  });
}
