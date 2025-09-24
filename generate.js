// const fs = require("fs");
// const path = require("path");

// // Load news.json file
// const newsData = JSON.parse(fs.readFileSync("news.json", "utf8"));

// // Output folder
// const outputDir = path.join(__dirname, "news-pages");

// // Agar folder exist nahi karta to banao
// if (!fs.existsSync(outputDir)) {
//   fs.mkdirSync(outputDir);
// }

// // HTML template function
// function generateHTML(news) {
//   return `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>${news.title}</title>
//   <meta name="description" content="${news.summary}">

//   <!-- Open Graph -->
//   <meta property="og:title" content="${news.title}">
//   <meta property="og:description" content="${news.summary}">
//   <meta property="og:image" content="https://muzammil372.github.io/news.com/${news.image}">
//   <meta property="og:url" content="https://muzammil372.github.io/news.com/news-pages/news-${news.id}.html">
//   <meta property="og:type" content="article">

//   <!-- Twitter -->
//   <meta name="twitter:card" content="summary_large_image">
//   <meta name="twitter:title" content="${news.title}">
//   <meta name="twitter:description" content="${news.summary}">
//   <meta name="twitter:image" content="https://muzammil372.github.io/news.com/${news.image}">
// </head>
// <body>
//   <header>
//     <a href="../index.html">← Back to News</a>
//   </header>
//   <main>
//     <h1>${news.title}</h1>
//     <img src="../${news.image}" alt="${news.title}" style="max-width:600px;display:block;margin-bottom:20px;">
//     <p>${news.content}</p>
//     <small>${news.date}</small>
//   </main>
// </body>
// </html>`;
// }

// // Har news ke liye ek HTML file generate karo
// newsData.forEach(news => {
//   const fileName = path.join(outputDir, `news-${news.id}.html`);
//   fs.writeFileSync(fileName, generateHTML(news));
//   console.log(`✅ Generated ${fileName}`);
// });


const fs = require("fs");

// Load news.json
const newsData = JSON.parse(fs.readFileSync("news.json", "utf8"));

// Template for each news page
function generateHTML(news, index) {
  return `<!DOCTYPE html>
<html lang="ur">
<head>
  <meta charset="UTF-8">
  <title>${news.title}</title>
  <meta name="description" content="${news.summary}">

  <!-- Open Graph -->
  <meta property="og:title" content="${news.title}">
  <meta property="og:description" content="${news.summary}">
  <meta property="og:image" content="https://muzammil372.github.io/news.com/${news.image}">
  <meta property="og:url" content="https://muzammil372.github.io/news.com/news-pages/news-${index + 1}.html">
  <meta property="og:type" content="article">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${news.title}">
  <meta name="twitter:description" content="${news.summary}">
  <meta name="twitter:image" content="https://muzammil372.github.io/news.com/${news.image}">
</head>
<body>
  <header>
    <a href="index.html">← واپس جائیں</a>
  </header>
  <main>
    <h1>${news.title}</h1>
    <img src="${news.image}" alt="${news.title}">
    <p>${news.content}</p>
    <small>${news.date}</small>
  </main>
</body>
</html>`;
}

// Generate file for each news
newsData.forEach((news, index) => {
  const fileName = `news-pages/news-${index + 1}.html`;
  fs.writeFileSync(fileName, generateHTML(news, index));
  console.log(`✅ Generated ${fileName}`);
});
