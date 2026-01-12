#!/bin/bash

# Run the npm build command
npm run build

# Create the nested directory structure
mkdir -p .next/standalone/.next/static

# Copy the static folder and its contents recursively
cp -R .next/static .next/standalone/.next/

echo "Static files copied successfully to .next/standalone/.next/static"
