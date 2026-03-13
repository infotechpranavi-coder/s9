# Add Node.js to PATH for this session (if installed in default location)
$nodePaths = @(
    "C:\Program Files\nodejs",
    "$env:ProgramFiles\nodejs",
    "${env:ProgramFiles(x86)}\nodejs",
    "$env:APPDATA\npm"
)
$added = $false
foreach ($p in $nodePaths) {
    if (Test-Path $p) {
        $env:Path = "$p;$env:Path"
        $added = $true
        Write-Host "Added to PATH: $p" -ForegroundColor Green
    }
}
if ($added) {
    Write-Host "`nTry now: node --version" -ForegroundColor Cyan
    & node --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Node is working. Run: npm run dev" -ForegroundColor Green
    }
} else {
    Write-Host "Node.js not found in common locations. Install from https://nodejs.org" -ForegroundColor Yellow
}
