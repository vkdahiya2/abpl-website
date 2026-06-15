@echo off
title ABPL Website Launcher
color 1F
cls

echo.
echo  =====================================================
echo    ABPL - Aashna Buildwell Pvt. Ltd.
echo    Website Launcher
echo  =====================================================
echo.

REM ── Check if Node.js is installed ───────────────────
echo  [1/3] Checking if Node.js is installed...
node --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo  [ERROR] Node.js is NOT installed on your computer.
    echo.
    echo  Opening the Node.js download page now...
    echo  Please download and install the LTS version.
    echo  After installing, double-click this file again.
    echo.
    start https://nodejs.org/en/download
    pause
    exit
)

FOR /F "tokens=*" %%v IN ('node --version') DO SET NODE_VER=%%v
echo  [OK] Node.js is installed: %NODE_VER%

REM ── Install packages if needed ───────────────────────
echo.
echo  [2/3] Checking project packages...
IF NOT EXIST "node_modules\" (
    echo  Installing packages for the first time (this may take 2-3 minutes)...
    npm install
    echo  [OK] Packages installed!
) ELSE (
    echo  [OK] Packages already installed.
)

REM ── Start the website ────────────────────────────────
echo.
echo  [3/3] Starting your website...
echo.
echo  =====================================================
echo    Your website will open at: http://localhost:3000
echo    Keep this window open while using the website.
echo    Press CTRL+C to stop the website.
echo  =====================================================
echo.

REM Open browser after 4 seconds
start /b cmd /c "timeout /t 4 /nobreak >nul && start http://localhost:3000"

npm run dev
pause
