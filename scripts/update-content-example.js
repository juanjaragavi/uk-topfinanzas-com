/**
 * Example script demonstrating how n8n workflow agents can update content
 *
 * This shows the process of:
 * 1. Reading existing content
 * 2. Modifying it with new AI-generated content
 * 3. Validating it against the expected structure
 * 4. Updating it via the API endpoint
 * 5. Triggering a rebuild of the Next.js application
 */

// Import required libraries (in n8n, these would be handled through nodes)
const fetch = require("node-fetch");
const { exec } = require("child_process");
const util = require("util");
const execPromise = util.promisify(exec);

// Configuration
const CONFIG = {
  API_URL: "http://localhost:3000/api/content/pages",
  CONTENT_PATH: "lib/pages/credit-cards/content/recommendation.content.json",
};

/**
 * Main function demonstrating the workflow process
 */
async function updateContentWorkflow() {
  try {
    console.log("Starting content update workflow...");

    // Step 1: Fetch the current content
    console.log(`Fetching current content from ${CONFIG.CONTENT_PATH}...`);
    const currentContent = await fetchCurrentContent();
    console.log("Successfully retrieved current content");

    // Step 2: Generate new content (in n8n, this would be done with an AI node)
    console.log("Generating new content with AI...");
    const updatedContent = generateNewContent(currentContent);
    console.log("Successfully generated new content");

    // Step 3: Validate the content structure
    console.log("Validating content structure...");
    validateContentStructure(updatedContent);
    console.log("Content structure is valid");

    // Step 4: Update the content via API
    console.log("Updating content via API...");
    await updateContent(updatedContent);
    console.log("Content successfully updated");

    // Step 5: Trigger rebuild of the Next.js application
    console.log("Triggering rebuild of Next.js application...");
    await rebuildNextjsApp();
    console.log("Rebuild process completed");

    console.log("Content update workflow completed successfully!");
  } catch (error) {
    console.error("Error in content update workflow:", error);
  }
}

/**
 * Fetch the current content from the API
 */
async function fetchCurrentContent() {
  const response = await fetch(`${CONFIG.API_URL}?path=${CONFIG.CONTENT_PATH}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Failed to fetch content: ${errorData.error}`);
  }

  return await response.json();
}

/**
 * Generate new content based on the current content
 * This simulates what an AI Agent would do in n8n
 */
function generateNewContent(currentContent) {
  // In reality, this would be handled by an AI node in n8n
  // For this example, we'll just update a few fields

  const updatedContent = {
    ...currentContent,
    // Update hero section
    hero: {
      ...currentContent.hero,
      title: "Your Personalized Credit Card Recommendation",
      description:
        "Based on your financial profile, we've selected the perfect card that matches your spending habits and goals.",
    },
    // Update CTA section
    callToAction: {
      ...currentContent.callToAction,
      title: "Ready to start earning rewards?",
      description:
        "Apply for the Citi Double Cash Credit Card today and join thousands of satisfied customers earning cash back on every purchase.",
    },
  };

  return updatedContent;
}

/**
 * Validate that the content structure matches the expected interface
 * This is a simplified validation for demo purposes
 */
function validateContentStructure(content) {
  // Required sections to check
  const requiredSections = [
    "metadata",
    "hero",
    "recommendedCard",
    "cashBackExplanation",
    "callToAction",
  ];

  // Check that all required sections exist
  for (const section of requiredSections) {
    if (!content[section]) {
      throw new Error(`Missing required section: ${section}`);
    }
  }

  // Check specific required fields (this would be more extensive in production)
  if (!content.metadata.title || !content.metadata.description) {
    throw new Error("Missing required metadata fields");
  }

  if (!content.hero.title || !content.hero.description) {
    throw new Error("Missing required hero fields");
  }

  // Additional validation could be added here
}

/**
 * Update the content via the API
 */
async function updateContent(content) {
  const response = await fetch(CONFIG.API_URL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      path: CONFIG.CONTENT_PATH,
      content: content,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Failed to update content: ${errorData.error}`);
  }

  return await response.json();
}

/**
 * Trigger a rebuild of the Next.js application
 * In production, this would use the appropriate command for your deployment environment
 */
async function rebuildNextjsApp() {
  // Example rebuild command - adjust based on your actual deployment setup
  try {
    // Execute the rebuild script
    const { stdout, stderr } = await execPromise("npm run build");

    if (stderr) {
      console.warn("Warnings during rebuild:", stderr);
    }

    return stdout;
  } catch (error) {
    throw new Error(`Failed to rebuild Next.js app: ${error.message}`);
  }
}

// If this script is executed directly, run the workflow
if (require.main === module) {
  updateContentWorkflow().catch(console.error);
}

module.exports = {
  updateContentWorkflow,
};
