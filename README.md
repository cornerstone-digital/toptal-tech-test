# Toptal Tech Test

TypeScript/Node.js setup for live coding interview.

## Setup

```bash
pnpm install
```

## Commands

| Command | Description |
|---------|-------------|
| `pnpm test` | Run tests once |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm start` | Run solution and print to console |
| `pnpm dev` | Run with auto-restart on file changes |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm lint` | Check for linting errors |
| `pnpm lint:fix` | Auto-fix linting errors |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check code formatting |
| `pnpm qg:all` | Run all quality gates (typecheck, lint, format, test) |

## Project Structure

```
src/
├── solution.ts      # Your solution (TypeScript, no external dependencies)
├── solution.test.ts # Your tests
└── index.ts         # Entry point for console output
```

## Workflow

1. Implement solution in `src/solution.ts`
2. Add test cases in `src/solution.test.ts`
3. Run `pnpm dev` or `pnpm test:watch` for rapid feedback
4. Use `pnpm start` to demonstrate console output
