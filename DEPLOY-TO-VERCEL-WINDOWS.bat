@echo off
title ABPL - Deploy to Vercel
color 2F
cls

echo.
echo  =====================================================
echo    ABPL - Deploy Website to Vercel (Live on Internet)
echo  =====================================================
echo.
echo  This will publish your website to the internet.
echo  It only takes about 2-3 minutes.
echo.
pause

cd /d "%~dp0"

REM ── Check Node.js ──────────────────────────────────
node --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js not found. Please run START-WEBSITE-WINDOWS.bat first.
    pause
    exit
)

REM ── Run Vercel deploy ─────────────────────────────
echo.
echo  [1/2] Connecting to Vercel...
echo  A browser window will open - sign in with Google or GitHub.
echo.
npx vercel --yes

echo.
echo  =====================================================
echo    DONE! Your website is now LIVE on the internet.
echo    Check the URL printed above - that is your website!
echo.
echo    To connect aashnabuildwell.com, go to:
echo    vercel.com/dashboard - then Domains - Add Domain
echo  =====================================================
echo.
pause
