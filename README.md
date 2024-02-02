# Wishop Monorepo

Wishop is an innovative e-commerce platform that redefines the shopping experience. This monorepo structure includes backend and frontend applications developed with [NestJS](https://nestjs.com) and [Next.JS](https://nextjs.org), shared libraries for common utilities and database configurations, and uses [MongoDB](https://www.mongodb.com) with [Mongoose ODM](https://mongoosejs.com). [TypeScript](https://www.typescriptlang.org) is the primary language, and [Tailwind CSS](https://tailwindui.com) is utilized for styling.

## Table of Contents

- [Wishop Monorepo](#wishop-monorepo)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Development Setup](#development-setup)
  - [Project Structure](#project-structure)
  - [Backend (NestJS)](#backend-nestjs)
    - [Shared Libraries](#shared-libraries)
    - [Testing](#testing)
  - [Frontend (Next.js)](#frontend-nextjs)
    - [Tailwind CSS](#tailwind-css)
    - [Testing](#testing-1)
  - [Shared Libraries](#shared-libraries-1)
    - [Common Package](#common-package)
    - [Database Package](#database-package)
  - [Scripts](#scripts)
  - [CI/CD with GitHub Actions](#cicd-with-github-actions)
  - [Contributing](#contributing)
  - [Security](#security)
  - [License](#license)
    - [_Happy coding! We code to change our lives' experience for the better._](#happy-coding-we-code-to-change-our-lives-experience-for-the-better)

## Getting Started

### Prerequisites

Make sure you have the following tools installed:

- Node.js
- pnpm

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Kttle-Inc/Wishop.git
   &&
   cd Wishop
   ```

2. **Install dependencies:**

   ```bash
   pnpm install --filter=<package>
   ```

   Where <package> is either `web` for frontend or `api` for the backend.

### Development Setup

To run both the backend and frontend during development, use the following commands:

1. **Backend:**

   ```bash
   pnpm run dev:backend
   ```

2. **Frontend:**

   ```bash
   pnpm run dev:frontend
   ```

## Project Structure

```bash
wishop/
|-- packages/
|   |-- api/
|   |   |-- __tests__/
|   |   |-- controllers/
|   |   |-- services/
|   |   |-- tsconfig.json
|   |   |-- package.json
|
|   |-- web/
|   |   |-- __tests__/
|   |   |-- pages/
|   |   |-- components/
|   |   |-- styles/
|   |   |-- public/
|   |   |-- next.config.js
|   |   |-- package.json
|
|-- shared/
|   |-- models/
|   |-- utilities/
|   |-- constants/
|   |-- ...
|
|-- database/
|   |-- ...
|
|-- tsconfig.base.json
|-- package.json
|-- nest-cli.json
|-- .gitignore
|-- .prettierrc
|-- .eslintrc
```

## Backend (NestJS)

### Shared Libraries

1. **Common Package:**
   - Shared utilities, constants, and models.
2. **Database Package:**
   - Database-related configurations, MongoDB models, and connections.

### Testing

To run tests for the backend, use:

```bash
pnpm run test:backend
```

## Frontend (Next.js)

### Tailwind CSS

1. **Tailwind Styles:**

   - Tailwind CSS styles are defined in the styles package.

2. **Configuring Tailwind:**
   - Tailwind CSS is configured in next.config.js.

### Testing

To run tests for the frontend, use:

```bash
pnpm run test:frontend
```

## Shared Libraries

### Common Package

1. **Shared Utilities:**
   - Utilities and constants used across the project.

### Database Package

1. **MongoDB Configuration:**
   - Database configurations, models, and connections.

## Scripts

Various scripts are available to streamline development tasks. For a complete list, refer to [package.json](package.json) file.

## CI/CD with GitHub Actions

GitHub Actions are used for continuous integration and deployment. Workflows are defined in the [.github/workflows](.github/workflows) directory.

- **Build and Test:**

  - Automatically triggered on push and pull request.
  - Backend and frontend are built and tests are executed.

- **Deployment:**
  - Automatically triggered on the main branch.
  - Deploys the backend and frontend components.

## Contributing

Contributions are welcome! Please follow our contribution guidelines.

## Security

Please review our [Security Guidelines](SECURITY.md) to understand how to report security vulnerabilities and our approach to keeping Wishop secure.

## License

This project is licensed under the MIT License - see the [License](LICENSE) file for details.

---

### _Happy coding! We code to change our lives' experience for the better._
