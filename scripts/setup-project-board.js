#!/usr/bin/env node

// Script to help coaches set up the project board
// Run with: node scripts/setup-project-board.js

const { Octokit } = require("@octokit/rest");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Check if Octokit is installed
try {
  require.resolve("@octokit/rest");
} catch (e) {
  console.error("Please install Octokit first: npm install @octokit/rest");
  process.exit(1);
}

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function setupProjectBoard() {
  console.log("🎯 Student Progress Tracker Setup\n");

  // Get repository details
  const owner = await question("GitHub username/organization: ");
  const repo = await question("Repository name: ");

  try {
    console.log("\n🚀 Creating project board...");

    // Create project
    const project = await octokit.rest.projects.createForRepo({
      owner,
      repo,
      name: "Student Progress Tracker",
      body: "Track student progress through the 12-week curriculum",
    });

    console.log(`✅ Created project: ${project.data.html_url}`);

    // Create columns
    const columns = [
      "Not Started",
      "In Progress",
      "Review Needed",
      "Completed",
      "Blocked",
    ];

    for (const columnName of columns) {
      const column = await octokit.rest.projects.createColumn({
        project_id: project.data.id,
        name: columnName,
      });
      console.log(`✅ Created column: ${columnName}`);
    }

    console.log("\n🎉 Project board setup complete!");
    console.log("\nNext steps:");
    console.log("1. Add the GITHUB_TOKEN to your repository secrets");
    console.log("2. The automation workflows will handle the rest");
  } catch (error) {
    console.error("❌ Error setting up project board:", error.message);
    if (error.status === 404) {
      console.log("Please check your repository name and permissions.");
    }
  }

  readline.close();
}

function question(query) {
  return new Promise((resolve) => {
    readline.question(query, resolve);
  });
}

// Run if called directly
if (require.main === module) {
  if (!process.env.GITHUB_TOKEN) {
    console.error("❌ Please set GITHUB_TOKEN environment variable");
    console.log("How to create a token: https://github.com/settings/tokens");
    console.log("Required scopes: repo, project");
    process.exit(1);
  }

  setupProjectBoard();
}

module.exports = { setupProjectBoard };
