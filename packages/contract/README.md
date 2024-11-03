# @abc/contracts

A shared contracts library for both frontend and backend within the monorepo. This package contains interfaces and types to ensure data consistency across the application.

## Installation

This package is designed to be used within a monorepo with Yarn Workspaces and Turborepo.

Install it in the applications that need it (e.g., `frontend` and `backend`):

```bash
yarn workspace web add @abc/contracts
yarn workspace api add @abc/contracts
```

## Package Structure

The package has the following structure:

```**bash
contracts
├── src
│   └── common.ts         # Shared types, enums, constants and interface definitions
├── dist                  # Compiled output
├── tsconfig.json         # TypeScript configuration
└── package.json          # Package configuration
```

## Usage Example

```ts
import { User } from '@abc/contracts';

const user: User = {
    id: '1',
    name: 'Andy',
    email: 'andy@example.com',
};
```

## Scripts

-   `yarn build`: Compiles the library and generates type declaration files in the `dist` folder.

## Contribution

To add or update types and interfaces:

-   Modify files in `src/`.
-   Make sure to compile your changes by running `yarn build`.
-   Verify that no conflicts arise in the services using this library.

## License

This project is licensed under the `MIT License`.

```css
This `README.md` provides a clear overview of the library’s purpose, installation steps, usage examples, and contribution guidelines, making it easy for other developers to integrate and extend.
```
