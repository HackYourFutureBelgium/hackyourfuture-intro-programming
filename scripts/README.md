# Scripts Directory

This directory contains utility scripts for repository management.

## Available Scripts

### setup-project-board.js

Helps coaches set up the student progress tracking project board.

**Prerequisites:**

- Node.js installed
- GitHub personal access token with repo and project permissions

**Setup:**

1. Install dependencies: `npm install @octokit/rest`
2. Set environment variable: `export GITHUB_TOKEN=your_token_here`
3. Run the script: `node scripts/setup-project-board.js`

**Permissions needed:**

- repo:status
- repo_deployment
- public_repo
- project

## Creating a GitHub Token

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token with the required permissions
3. Copy the token and use it as GITHUB_TOKEN

## Usage for Coaches

1. Clone the repository
2. Navigate to the scripts directory: `cd scripts`
3. Follow the prompts to set up the project board

