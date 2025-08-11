@'
Write-Host "=== Project Auto-Diagnostics & Serve ===" -ForegroundColor Cyan

Write-Host "`n[1] Node version:" -ForegroundColor Yellow
node -v

Write-Host "`n[2] NPM version:" -ForegroundColor Yellow
npm -v

Write-Host "`n[3] Current directory:" -ForegroundColor Yellow
(Get-Location).Path

# Check package.json
Write-Host "`n[4] Checking for package.json..." -ForegroundColor Yellow
if (-Not (Test-Path "package.json")) {
  Write-Host "❌ package.json missing. Exiting." -ForegroundColor Red
  exit 1
} else { Write-Host "✅ package.json found" -ForegroundColor Green }

# Install dependencies if needed
Write-Host "`n[5] Checking node_modules..." -ForegroundColor Yellow
if (-Not (Test-Path "node_modules")) {
  Write-Host "Missing node_modules. Installing..." -ForegroundColor Yellow
  npm install
  if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ npm install failed. Exiting." -ForegroundColor Red
    exit 1
  }
  Write-Host "✅ Dependencies installed" -ForegroundColor Green
} else { Write-Host "✅ node_modules present" -ForegroundColor Green }

# Build project if needed
Write-Host "`n[6] Checking dist folder..." -ForegroundColor Yellow
if (-Not (Test-Path "dist")) {
  Write-Host "dist not found. Building project..." -ForegroundColor Yellow
  npm run build
  if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed. Exiting." -ForegroundColor Red
    exit 1
  }
  Write-Host "✅ Build succeeded" -ForegroundColor Green
} else { Write-Host "✅ dist exists" -ForegroundColor Green }

# Serve the site and open browser
Write-Host "`n[7] Serving site..." -ForegroundColor Yellow
npm install serve --no-save > $null  # ensure serve is available
$serve = Start-Process npx -ArgumentList "serve dist -p 3000" -PassThru
Start-Sleep -Seconds 2
Start-Process "http://localhost:3000"

# Clean exit
Write-Host "`nAll done. If site didn't show, check Console errors or reach out."
'@ > diagnostics_and_serve.ps1
