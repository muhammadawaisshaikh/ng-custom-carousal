@echo off
REM ng-custom-carousel Publish Script for Windows
REM This script helps publish the library to npm

echo 🚀 Starting ng-custom-carousel publish process...

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: Please run this script from the project root directory
    pause
    exit /b 1
)

REM Check if user is logged into npm
npm whoami >nul 2>&1
if errorlevel 1 (
    echo ❌ Error: Please login to npm first with 'npm login'
    pause
    exit /b 1
)

REM Build the library
echo 📦 Building library...
npm run build:lib

if errorlevel 1 (
    echo ❌ Build failed. Please fix the errors and try again.
    pause
    exit /b 1
)

echo ✅ Library built successfully!

REM Check if dist directory exists
if not exist "dist\custom-carousel" (
    echo ❌ Error: dist\custom-carousel directory not found. Build may have failed.
    pause
    exit /b 1
)

REM Navigate to dist directory
cd dist\custom-carousel

REM Show what will be published
echo 📁 Files to be published:
dir

REM Confirm publish
set /p confirm="Ready to publish to npm? (y/n): "
if /i "%confirm%"=="y" (
    echo 🚀 Publishing to npm...
    npm publish
    
    if errorlevel 1 (
        echo ❌ Publish failed. Please check the error messages above.
        pause
        exit /b 1
    ) else (
        echo ✅ Successfully published ng-custom-carousel to npm!
        echo 🔗 Package URL: https://www.npmjs.com/package/ng-custom-carousel
    )
) else (
    echo ❌ Publish cancelled.
)

REM Return to project root
cd ..\..

echo 🎉 Publish process completed!
pause 