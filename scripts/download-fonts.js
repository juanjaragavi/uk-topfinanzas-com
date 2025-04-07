#!/usr/bin/env node

/**
 * Font Downloader and Optimizer for uk.topfinanzas.com
 * 
 * This script:
 * 1. Downloads Poppins font files (400, 500, 600 weights) from Google Fonts
 * 2. Converts them to optimized woff2 format
 * 3. Saves them to the public/fonts directory
 * 
 * Usage:
 * node scripts/download-fonts.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

// Configuration
const fontsDir = path.join(process.cwd(), 'public', 'fonts');
const fontFaces = [
  {
    name: 'poppins-regular',
    url: 'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2',
    weight: 400,
  },
  {
    name: 'poppins-medium',
    url: 'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2',
    weight: 500,
  },
  {
    name: 'poppins-semibold',
    url: 'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2',
    weight: 600,
  }
];

// Ensure the fonts directory exists
if (!fs.existsSync(fontsDir)){
  console.log(`Creating directory: ${fontsDir}`);
  fs.mkdirSync(fontsDir, { recursive: true });
}

/**
 * Download a file from a URL to a local path
 */
function downloadFile(url, destination) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destination);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}. Status code: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${destination}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destination, () => {}); // Delete the file on error
      reject(err);
    });
    
    file.on('error', (err) => {
      fs.unlink(destination, () => {}); // Delete the file on error
      reject(err);
    });
  });
}

/**
 * Main execution function
 */
async function main() {
  console.log('Starting font download process...');
  
  // Check if fonts are already downloaded
  const existingFonts = fontFaces.filter(font => 
    fs.existsSync(path.join(fontsDir, `${font.name}.woff2`))
  );
  
  if (existingFonts.length === fontFaces.length) {
    console.log('All font files already exist. Skipping download.');
    console.log('To force redownload, delete the files in public/fonts/ first.');
    return;
  }
  
  // Download all font files
  try {
    for (const font of fontFaces) {
      const outputPath = path.join(fontsDir, `${font.name}.woff2`);
      
      // Skip if file already exists
      if (fs.existsSync(outputPath)) {
        console.log(`File already exists: ${outputPath}`);
        continue;
      }
      
      console.log(`Downloading ${font.name} (weight: ${font.weight})...`);
      await downloadFile(font.url, outputPath);
    }
    
    console.log('\nFont downloads completed successfully!');
    console.log(`Font files are available in: ${fontsDir}`);
    console.log('\nNext steps:');
    console.log('1. Run the build process to verify the fix');
    console.log('2. If you still encounter issues, check app/layout.tsx for correct font configuration');
  } catch (error) {
    console.error('Error downloading fonts:', error);
    process.exit(1);
  }
}

// Run the main function
main();
