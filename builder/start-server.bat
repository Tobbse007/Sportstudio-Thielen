@echo off
REM Sportstudio Thielen - Builder Server Starter (Windows)
REM Startet den HTTP Server fuer den Website Builder

echo.
echo ========================================
echo    Sportstudio Thielen - Builder
echo ========================================
echo.
echo Starte Builder Server...
echo.

cd /d "%~dp0"

echo Server startet auf http://localhost:8080
echo.
echo Oeffne im Browser: http://localhost:8080
echo.
echo Druecke Strg+C zum Beenden
echo.
echo ========================================
echo.

python -m http.server 8080

pause
