Write-Host "=== Project Diagnostics and Local Serve ===" -ForegroundColor Cyan

Write-Host "`nNode version:"
node -v

Write-Host "`nNPM version:"
npm -v

Write-Host "`nCurrent directory:"
Get-Location

Write-Host "`nChecking package.json exists..."
if (Test-Path package.json) {
    Write-Host "✅ Found package.json" -ForegroundColor Green
} else {
    Write-Host "❌ Missing package.json" -ForegroundColor Red
}

Write-Host "`nChecking node_modules folder..."
if (Test-Path node_modules) {
    Write-Host "✅ node_modules exists" -ForegroundColor Green
} else {
    Write-Host "⚠ node_modules missing, installing..."
    npm install
}

Write-Host "`n=== Starting Local Server ==="
npm run dev
