$urls = @{
  "about-us" = "https://store.alfafa.co/en/about-us"
  "products" = "https://store.alfafa.co/en/products"
  "vegetables" = "https://store.alfafa.co/en/vegetables"
  "fruits" = "https://store.alfafa.co/en/fruits"
  "services" = "https://store.alfafa.co/en/services"
  "contact-us" = "https://store.alfafa.co/en/contact-us"
  "mission-and-vision" = "https://store.alfafa.co/en/mission-and-vision"
  "quality-policy" = "https://store.alfafa.co/en/quality-policy"
  "catalogues" = "https://store.alfafa.co/en/catalogues"
  "latest-news" = "https://store.alfafa.co/en/latest-news"
  "photo-gallery" = "https://store.alfafa.co/en/photo-gallery"
  "privacy-policy" = "https://store.alfafa.co/en/privacy-policy"
  "terms-and-conditions" = "https://store.alfafa.co/en/terms-and-conditions"
}

New-Item -ItemType Directory -Force -Path "live_pages"

foreach ($key in $urls.Keys) {
  $url = $urls[$key]
  $file = "live_pages/$key.html"
  Write-Host "Downloading $url to $file"
  try {
    Invoke-WebRequest -Uri $url -OutFile $file
  } catch {
    Write-Host "Failed: $url"
  }
}
