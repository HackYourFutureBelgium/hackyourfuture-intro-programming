# hackyourfuture-intro-programming

A beginner-friendly repository for students to learn the fundamentals of programming. Includes exercises, assignments, projects, and resources to practice problem-solving, algorithms, and coding basics.

## Intro to Programming Course

A 12-week curriculum covering programming fundamentals, data structures, and web development basics.

## Course Structure

| Week | Topic | Lead Coach | 
|------|-------|------------|
| 1 | Version Control | Galal |
| 2 | Collecting and Formatting Data | |
| 3 | Querying Data, Considering Presentation | |
| 4 | Programming Fundamentals | Bora |
| 5 | Comparisons, Assertions, and Breaking Down Problems | Bora |
| 6 | Test Cases with Jest | Bora |
| 7 | Grouping Data: Arrays and Loops | Bora |
| 8 | Grouping Data: Objects | |
| 9 | The DOM | |
| 10 | UI Components | |
| 11 | States and Rendering | |
| 12 | Fetch and Asynchrony | |

## Project Board for Progress Tracking

We use a GitHub Project Board to track student progress:

1. **View the board**: Go to the [Projects tab](https://github.com/orgs/HackYourFutureBelgium/projects/14/views/1)

2. **Student workflow**:

   - Create a weekly issue using the template
   - Your issue will automatically appear on the board
   - Use labels to update your status
3. **Coach access**: Coaches can move cards between columns and add feedback

See the [Project Board Guide](docs/project-board-guide.md) for detailed instructions.

## Getting Started

1. Fork this repository
2. Clone your forked repository to your local machine
3. Each week:
   - Complete the exercises in the corresponding week folder
   - Create a new issue using the week's template
   - Check off completed exercises and answer the questions
   - Assign the issue to the lead coach for that week

## Repository Structure

```sh
hackyourfuture-intro-programming/
│
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── week1-version-control.md
│   │   ├── week2-data-collection.md
│   │   └── ... (all weekly templates)
│   └── workflows/
│       ├── add-to-project.yml
│       └── move-project-cards.yml
│
├── scripts/
│   ├── setup-project-board.js
│   └── README.md
│
├── week1-version-control/
│   ├── README.md
│   ├── exercises/
│   └── solutions/
│
├── week2-data-collection/
│   ├── README.md
│   ├── exercises/
│   └── solutions/
│
├── ... (other weekly folders)
│
├── docs/
│   ├── project-board-guide.md
│   └── onboarding.md
│
├── .gitignore
└── README.md
```

## Setup Instructions for Coaches

### Recommended: Simplified Setup Script

[setup-project-board.sh](./scripts/setup-project-board.sh)

***Navigate to project directory and run the following command***

```sh
chmod +x scripts/setup-project-board.sh
```

## OR

## 1. Install Dependencies

```sh
cd scripts
npm install
```

## 2. Create GitHub Token

- Go to GitHub Settings → Developer settings → Personal access tokens
- Generate a new token with these permissions:

```sh
- repo (all)
- project (all)
- workflow
```

## 3. Set Environment Variable

```js
export GITHUB_TOKEN=your_token_here
```

## 4. Run the Setup Scrip

```js
node setup-project-board.js
```

## 5. Or use npm script (if you want to use package.json )

```js
npm run setup-project
```

## Resources

- [JavaScript MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Git Documentation](https://git-scm.com/doc)
- [HTML & CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML)
