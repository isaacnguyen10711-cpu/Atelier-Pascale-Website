#!/bin/bash
# Runs on the EC2 server to pull the latest code and restart the site
set -e

cd ~/Atelier-Pascale-Website
git pull
npm ci
npm run build
pm2 restart atelier-pascale
