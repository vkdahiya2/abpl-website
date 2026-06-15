#!/bin/bash
# ABPL - Deploy to Vercel (Mac)
# Double-click this file to publish your website live

clear
cd "$(dirname "$0")"

echo ""
echo "====================================================="
echo "   ABPL - Deploy Website to Vercel (Go Live!)"
echo "====================================================="
echo ""
echo "This will publish your website to the internet."
echo "It takes about 2-3 minutes."
echo ""
read -p "Press Enter to start deployment..."

echo ""
echo "[1/2] Connecting to Vercel..."
echo "A browser window will open — sign in with Google or GitHub."
echo ""
npx vercel --yes

echo ""
echo "====================================================="
echo "  DONE! Your website is now LIVE!"
echo "  Check the URL printed above — that is your website!"
echo ""
echo "  To connect aashnabuildwell.com:"
echo "  Go to vercel.com/dashboard → Domains → Add Domain"
echo "====================================================="
echo ""
read -p "Press Enter to close..."
