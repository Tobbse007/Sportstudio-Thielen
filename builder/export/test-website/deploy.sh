#!/bin/bash

# ============================================
# DEPLOYMENT SCRIPT
# ============================================

echo "🚀 Deploying website..."

# FTP Upload (anpassen!)
# lftp -u username,password ftp.your-server.com << END
# mirror -R --delete --verbose ./ /public_html/
# bye
# END

# Oder rsync für SSH
# rsync -avz --delete ./ user@server:/var/www/html/

echo "✅ Deployment complete!"
