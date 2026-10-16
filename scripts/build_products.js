const fs = require('fs');
const path = require('path');

// Read the template from index.html
const indexHtml = fs.readFileSync(path.join(__dirname, '../public/index.html'), 'utf8');

// Extract the header part
const headerRegex = /([\s\S]*?)<section class="post slider hidden visible animated fadeInDown">/;
const headerMatch = indexHtml.match(headerRegex);
let headerStr = headerMatch ? headerMatch[1] : '';
headerStr = headerStr.replace(/class="active"/g, ''); // Clear active states
headerStr = headerStr.replace(/href="\/products\/index.html"/, 'href="/products/index.html" class="active"'); // Products is active for detail pages

// Extract the footer part
const footerRegex = /(<footer class="post hidden">[\s\S]*)/;
const footerMatch = indexHtml.match(footerRegex);
let footerStr = footerMatch ? footerMatch[1] : '';

const products = {
  "10-carrot": "products/carrot/10-carrot.html",
  "14-orange": "products/oranges/14-orange.html",
  "11-apples": "products/apples/11-apples.html"
};

const replaceUrls = (html) => {
  let processed = html
    .replace(/https:\/\/store\.alfafa\.co\/en\/home/g, '/index.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/about-us/g, '/about-us/index.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/products/g, '/products/index.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/vegetables/g, '/products/vegetables.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/fruits/g, '/products/fruits.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/services/g, '/services/index.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/contact-us/g, '/contact/index.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/mission-and-vision/g, '/mission-vision/index.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/quality-policy/g, '/quality-policy/index.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/catalogues/g, '/catalogues/index.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/latest-news/g, '/latest-news/index.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/photo-gallery/g, '/photo-gallery/index.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/privacy-policy/g, '/privacy-policy/index.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/terms-and-conditions/g, '/terms/index.html')

    .replace(/href="\/en\/about-us"/g, 'href="/about-us/index.html"')
    .replace(/href="\/en\/products"/g, 'href="/products/index.html"')
    .replace(/href="\/en\/vegetables"/g, 'href="/products/vegetables.html"')
    .replace(/href="\/en\/fruits"/g, 'href="/products/fruits.html"')
    .replace(/href="\/en\/services"/g, 'href="/services/index.html"')
    .replace(/href="\/en\/contact-us"/g, 'href="/contact/index.html"')
    .replace(/href="\/en\/mission-and-vision"/g, 'href="/mission-vision/index.html"')
    .replace(/href="\/en\/quality-policy"/g, 'href="/quality-policy/index.html"')
    .replace(/href="\/en\/catalogues"/g, 'href="/catalogues/index.html"')
    .replace(/href="\/en\/latest-news"/g, 'href="/latest-news/index.html"')
    .replace(/href="\/en\/photo-gallery"/g, 'href="/photo-gallery/index.html"')
    .replace(/href="\/en\/privacy-policy"/g, 'href="/privacy-policy/index.html"')
    .replace(/href="\/en\/terms-and-conditions"/g, 'href="/terms/index.html"')
    .replace(/href="https:\/\/store\.alfafa\.co\/"/g, 'href="/index.html"')
    
    // Breadcrumb updates
    .replace(/href="\/en\/carrot"/g, 'href="/products/vegetables.html"')
    .replace(/href="\/en\/apples"/g, 'href="/products/fruits.html"')
    .replace(/href="\/en\/oranges"/g, 'href="/products/fruits.html"')

    // Assets
    .replace(/https:\/\/store\.alfafa\.co\/im\/catalog\//g, '/assets/')
    .replace(/https:\/\/store\.alfafa\.co\/im\//g, '/assets/im/')
    .replace(/url\('\/im\//g, 'url(\'/assets/im/')
    .replace(/https:\/\/store\.alfafa\.co\/files\//g, '/assets/files/')
    .replace(/https:\/\/store\.alfafa\.co\/js\//g, '/assets/')
    
    // Product links
    .replace(/https:\/\/store\.alfafa\.co\/en\/carrot\/10-carrot/g, '/products/carrot/10-carrot.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/oranges\/14-orange/g, '/products/oranges/14-orange.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/apples\/11-apples/g, '/products/apples/11-apples.html');

  return processed;
};

for (const [key, outPath] of Object.entries(products)) {
  const livePath = path.join(__dirname, '../sources/live_pages', `${key}.html`);
  if (!fs.existsSync(livePath)) {
    console.log(`File not found: ${livePath}`);
    continue;
  }
  
  const html = fs.readFileSync(livePath, 'utf8');
  
  // Extract <article> tag
  const articleRegex = /(<article[\s\S]*?<\/article>)/i;
  const articleMatch = html.match(articleRegex);
  
  if (articleMatch) {
    let articleContent = articleMatch[1];
    articleContent = replaceUrls(articleContent);
    
    const fullPage = headerStr + '\n' + articleContent + '\n' + footerStr;
    
    const fullOutPath = path.join(__dirname, '../public', outPath);
    const outDir = path.dirname(fullOutPath);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    
    fs.writeFileSync(fullOutPath, fullPage);
    console.log(`Generated ${outPath}`);
  } else {
    console.log(`No <article> found in ${livePath}`);
  }
}
