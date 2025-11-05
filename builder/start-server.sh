#!/bin/bash

# Sportstudio Thielen - Builder Server Starter
# Startet den HTTP Server für den Website Builder

echo "🚀 Starte Builder Server..."
echo ""

# Wechsle ins Builder-Verzeichnis
cd "$(dirname "$0")"

# Prüfe ob Port 8080 bereits belegt ist
if lsof -Pi :8080 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo "⚠️  Port 8080 ist bereits belegt!"
    echo "Stoppe bestehenden Server..."
    pkill -f "http.server 8080"
    sleep 1
fi

# Starte Python HTTP Server
echo "✅ Server startet auf http://localhost:8080"
echo ""
echo "📂 Builder-Verzeichnis: $(pwd)"
echo ""
echo "🌐 Öffne im Browser: http://localhost:8080"
echo ""
echo "⚡ Drücke Strg+C zum Beenden"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Server starten
python3 -m http.server 8080
