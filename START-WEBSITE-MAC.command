#!/bin/bash
# ABPL Website Launcher for Mac
# Double-click this file to start your website

clear
echo ""
echo "====================================================="
echo "   ABPL - Aashna Buildwell Pvt. Ltd."
echo "   Website Launcher"
echo "====================================================="
echo ""

# Go to the folder where this script is
cd "$(dirname "$0")"

# ── Check Node.js ─────────────────────────────────────
echo "[1/3] Checking if Node.js is installed..."
if ! command -v node &> /dev/null; then
    echo ""
    echo "[ERROR] Node.js is NOT installed on your Mac."
    echo ""
    echo "Opening the Node.js download page..."
    echo "Please download and install the LTS version."
    echo "After installing, double-click this file again."
    echo ""
    open "https://nodejs.org/en/download"
    read -p "Press Enter to close..."
    exit 1
fi

NODE_VER=$(node --version)
echo "[OK] Node.js is installed: $NODE_VER"

# ── Install packages ──────────────────────────────────
echo ""
echo "[2/3] Installing packages for your Mac..."
echo "Removing old packages (built for a different system)..."
rm -rf node_modules .next
echo "Installing fresh packages (2-3 minutes, please wait)..."
npm install
echo "[OK] Packages installed!"

# ── Start website ─────────────────────────────────────
echo ""
echo "[3/3] Starting your website..."
echo ""
echo "====================================================="
echo "  Website opens at: http://localhost:3000"
echo "  Keep this window open while using the website."
echo "  Press CTRL+C to stop."
echo "====================================================="
echo ""

# Open browser after 4 seconds
sleep 4 && open "http://localhost:3000" &

npm run dev
