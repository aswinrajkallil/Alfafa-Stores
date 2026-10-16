$urls = @{
  "10-carrot" = "https://store.alfafa.co/en/carrot/10-carrot"
  "14-orange" = "https://store.alfafa.co/en/oranges/14-orange"
  "11-apples" = "https://store.alfafa.co/en/apples/11-apples"
}

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
