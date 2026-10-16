$urls = @(
  "https://store.alfafa.co/fonts/Montserrat-Regular.woff",
  "https://store.alfafa.co/fonts/Montserrat-Bold.woff",
  "https://store.alfafa.co/fonts/slick.woff",
  "https://store.alfafa.co/fonts/Montserrat-Regular.ttf",
  "https://store.alfafa.co/fonts/Montserrat-Bold.ttf",
  "https://store.alfafa.co/fonts/slick.ttf",
  "https://store.alfafa.co/im/footer-logo.png",
  "https://store.alfafa.co/im/vegetables.png",
  "https://store.alfafa.co/files/shadow.jpg",
  "https://store.alfafa.co/files/new-files.png",
  "https://store.alfafa.co/files/best.png",
  "https://store.alfafa.co/files/pixel.gif",
  "https://store.alfafa.co/favicon.png"
)

New-Item -ItemType Directory -Force -Path "assets/fonts"
New-Item -ItemType Directory -Force -Path "assets/im"
New-Item -ItemType Directory -Force -Path "assets/files"

foreach ($url in $urls) {
  $file = $url -replace "https://store.alfafa.co/", "assets/"
  if ($url -match "favicon.png") { $file = "favicon.png" }
  Write-Host "Downloading $url to $file"
  try {
    Invoke-WebRequest -Uri $url -OutFile $file
  } catch {
    Write-Host "Failed: $url"
  }
}
