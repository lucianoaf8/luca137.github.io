# clean-install.ps1

# Description:
# This script removes the node_modules directory and package-lock.json file,
# then reinstalls npm dependencies.

# Set error handling to stop on any error
$ErrorActionPreference = "Stop"

# Function to remove node_modules
function Remove-NodeModules {
    if (Test-Path -Path "node_modules") {
        Write-Output "Removing node_modules directory..."
        Remove-Item -Recurse -Force "node_modules"
        Write-Output "node_modules removed successfully."
    } else {
        Write-Output "node_modules directory does not exist. Skipping..."
    }
}

# Function to remove package-lock.json
function Remove-PackageLock {
    if (Test-Path -Path "package-lock.json") {
        Write-Output "Removing package-lock.json file..."
        Remove-Item -Force "package-lock.json"
        Write-Output "package-lock.json removed successfully."
    } else {
        Write-Output "package-lock.json does not exist. Skipping..."
    }
}

# Function to reinstall npm dependencies
function Install-NpmDependencies {
    Write-Output "Reinstalling npm dependencies..."
    npm install
    Write-Output "npm dependencies installed successfully."
}

# Execute the functions in sequence
try {
    Remove-NodeModules
    Remove-PackageLock
    Install-NpmDependencies
    Write-Output "Clean install process completed successfully."
} catch {
    Write-Error "An error occurred during the clean install process: $_"
}
