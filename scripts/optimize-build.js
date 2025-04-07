#!/usr/bin/env node

/**
 * Next.js Build Optimizer for uk.topfinanzas.com
 * 
 * This script:
 * 1. Increases Node.js memory allocation for faster builds
 * 2. Enables build caching for improved performance
 * 3. Disables unnecessary telemetry and verbose output
 * 4. Sets production environment optimizations
 * 5. Verifies local fonts are available before building
 * 
 * Usage:
 * node scripts/optimize-build.js
 */

const fs = require('fs');
const path = require('path');
const { spawn, execSync } = require('child_process');
const os = require('os');

// Configuration
const fontsDir = path.join(process.cwd(), 'public', 'fonts');
const requiredFonts = [
  'poppins-regular.woff2',
  'poppins-medium.woff2',
  'poppins-semibold.woff2'
];

// Calculate optimal memory allocation based on system
const systemMemoryGB = os.totalmem() / 1024 / 1024 / 1024;
const allocatedMemoryGB = Math.min(Math.max(Math.floor(systemMemoryGB * 0.75), 4), 8);

// Environment variables for optimization
const buildEnv = {
  ...process.env,
  NODE_ENV: 'production',
  NEXT_TELEMETRY_DISABLED: '1',
  // Increase memory allocation for Node
  NODE_OPTIONS: `--max-old-space-size=${allocatedMemoryGB * 1024} --no-warnings --dns-result-order=ipv4first`,
  // Enable build cache
  NEXT_CACHE: '1'
};

/**
 * Check if required font files exist
 */
function checkFontFiles() {
  console.log('Checking for required font files...');
  const missingFonts = requiredFonts.filter(font => 
    !fs.existsSync(path.join(fontsDir, font))
  );
  
  if (missingFonts.length > 0) {
    console.error('Error: Missing required font files:');
    missingFonts.forEach(font => console.error(`- ${font}`));
    console.log('\nPlease run: node scripts/download-fonts.js');
    return false;
  }
  
  console.log('✓ All required font files are present');
  return true;
}

/**
 * Clean previous build artifacts
 */
function cleanBuild() {
  console.log('Cleaning previous build artifacts...');
  try {
    // Remove .next directory
    execSync('rm -rf .next', { stdio: 'inherit' });
    // Also clear Next.js cache (use with caution)
    // execSync('rm -rf node_modules/.cache/next', { stdio: 'inherit' });
    console.log('✓ Build directories cleaned');
  } catch (error) {
    console.warn('Warning: Could not fully clean build directories', error.message);
  }
}

/**
 * Run Next.js build with optimizations
 */
function runOptimizedBuild() {
  console.log(`\nStarting optimized build with ${allocatedMemoryGB}GB memory allocation...`);
  console.log('--------------------------------------------------');
  
  return new Promise((resolve, reject) => {
    // Use spawn to run next build with optimized env vars
    const buildProcess = spawn('npx', ['next', 'build'], {
      env: buildEnv,
      stdio: 'inherit',
      shell: true
    });
    
    buildProcess.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Build process exited with code ${code}`));
      }
    });
    
    buildProcess.on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Main execution function
 */
async function main() {
  console.log('Next.js Build Optimizer');
  console.log('=======================');
  console.log(`System memory: ${systemMemoryGB.toFixed(1)}GB`);
  console.log(`Allocating: ${allocatedMemoryGB}GB for the build process`);
  console.log('');
  
  // Verify font files exist before building
  if (!checkFontFiles()) {
    process.exit(1);
  }
  
  try {
    // Clean previous build
    cleanBuild();
    
    // Run the optimized build
    const startTime = new Date();
    await runOptimizedBuild();
    const endTime = new Date();
    const buildTime = (endTime - startTime) / 1000;
    
    console.log('\n--------------------------------------------------');
    console.log(`✅ Build completed successfully in ${buildTime.toFixed(1)} seconds`);
    console.log('--------------------------------------------------');
  } catch (error) {
    console.error('\n❌ Build failed:', error.message);
    process.exit(1);
  }
}

// Run the main function
main();
