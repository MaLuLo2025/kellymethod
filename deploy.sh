#!/bin/bash
# Usage: ./deploy.sh "commit message"

if [ -z "$1" ]; then
  echo "Usage: ./deploy.sh \"commit message\""
  exit 1
fi

git add -A
git commit -m "$1"
git push origin main

echo ""
echo "Pushed to GitHub. Vercel will auto-deploy."
echo "Check: https://vercel.com/malulo2025s-projects"
echo "Site: https://kellymethod.com"
