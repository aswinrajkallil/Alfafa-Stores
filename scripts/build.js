const fs = require('fs');
const path = require('path');

// Read the template from public/index.html
const indexHtml = fs.readFileSync(path.join(__dirname, '../public/index.html'), 'utf8');

// Extract the header part (up to <section class="post slider"> or <article>)
const headerRegex = /([\s\S]*?)<section class="post slider hidden visible animated fadeInDown">/;
const headerMatch = indexHtml.match(headerRegex);
let headerStr = headerMatch ? headerMatch[1] : '';

// Extract the footer part (from <footer class="post hidden"> onwards)
const footerRegex = /(<footer class="post hidden">[\s\S]*)/;
const footerMatch = indexHtml.match(footerRegex);
let footerStr = footerMatch ? footerMatch[1] : '';

// Mapping from live URL keys to local paths
const routes = {
  "about-us": "about-us/index.html",
  "products": "products/index.html",
  "vegetables": "products/vegetables.html", // Or vegetables/index.html? Prompt said products/vegetables.html
  "fruits": "products/fruits.html",
  "services": "services/index.html",
  "contact-us": "contact/index.html",
  "mission-and-vision": "mission-vision/index.html",
  "quality-policy": "quality-policy/index.html",
  "catalogues": "catalogues/index.html",
  "latest-news": "latest-news/index.html",
  "photo-gallery": "photo-gallery/index.html",
  "privacy-policy": "privacy-policy/index.html",
  "terms-and-conditions": "terms/index.html"
};

// URL replacements
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
    
    // Breadcrumbs
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

    // Assets
    .replace(/https:\/\/store\.alfafa\.co\/im\/catalog\//g, '/assets/')
    .replace(/https:\/\/store\.alfafa\.co\/im\//g, '/assets/im/')
    .replace(/https:\/\/store\.alfafa\.co\/files\//g, '/assets/files/')
    .replace(/https:\/\/store\.alfafa\.co\/js\//g, '/assets/')
    
    // Product links
    .replace(/https:\/\/store\.alfafa\.co\/en\/carrot\/10-carrot/g, '/products/carrot/10-carrot.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/oranges\/14-orange/g, '/products/oranges/14-orange.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/apples\/11-apples/g, '/products/apples/11-apples.html')
    
    // Category links in sidebars
    .replace(/https:\/\/store\.alfafa\.co\/en\/potato/g, '/products/vegetables.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/carrot/g, '/products/vegetables.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/beet/g, '/products/vegetables.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/cabbage/g, '/products/vegetables.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/radish/g, '/products/vegetables.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/tomatoes/g, '/products/vegetables.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/cucumbers/g, '/products/vegetables.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/onion/g, '/products/vegetables.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/kale/g, '/products/vegetables.html')
    
    .replace(/https:\/\/store\.alfafa\.co\/en\/strawberry/g, '/products/fruits.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/apples/g, '/products/fruits.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/grapes/g, '/products/fruits.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/peaches/g, '/products/fruits.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/apricots/g, '/products/fruits.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/oranges/g, '/products/fruits.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/raspberries/g, '/products/fruits.html')
    .replace(/https:\/\/store\.alfafa\.co\/en\/cherry/g, '/products/fruits.html')

    // JS
    .replace(/<script src="https:\/\/store\.alfafa\.co\/js\/1\/sign\.js"><\/script>/g, '') // remove contact form JS
    .replace(/<form method="post" action="https:\/\/store\.alfafa\.co\/en\/contact-us">/g, '<form id="contactForm" method="post" action="#">');

  return processed;
};

// Also we need to fix the active state in the header based on the page
const setActiveMenu = (headerStr, pageKey) => {
  let h = headerStr.replace(/class="active"/g, '');
  if (pageKey === 'about-us') {
    h = h.replace(/href="\/about-us\/index.html"/, 'href="/about-us/index.html" class="active"');
  } else if (pageKey === 'products' || pageKey === 'vegetables' || pageKey === 'fruits') {
    h = h.replace(/href="\/products\/index.html"/, 'href="/products/index.html" class="active"');
  } else if (pageKey === 'services') {
    h = h.replace(/href="\/services\/index.html"/, 'href="/services/index.html" class="active"');
  } else if (pageKey === 'contact-us') {
    h = h.replace(/href="\/contact\/index.html"/, 'href="/contact/index.html" class="active"');
  }
  return h;
};

for (const [key, outPath] of Object.entries(routes)) {
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
    
    let pageHeader = setActiveMenu(headerStr, key);
    let pageFooter = footerStr;

    // Contact form vanilla JS injection
    if (key === 'contact-us') {
      const script = `
<script>
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting us! This is a frontend-only simulation.');
  this.reset();
});
</script>
`;
      pageFooter = pageFooter.replace('</body>', script + '\n</body>');
    }

    const fullPage = pageHeader + '\n' + articleContent + '\n' + pageFooter;
    
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
