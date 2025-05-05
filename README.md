# Basic-Type-of-TypeScript
This repository contains a comprehensive guide to the core concepts of TypeScript, designed to help both beginners and those looking to refresh their knowledge. It covers essential topics such as data types, functions, destructuring, operators, and advanced types, all explained with practical examples for better understanding. I am currently learning and practicing TypeScript, and this repository serves as a personal learning resource while also offering helpful reference material for others exploring the language.

---

## 🛠 TypeScript Project Setup

### 1. Initialize TypeScript
```bash
tsc --init
```

### 2. Update `tsconfig.json`
```json
{
  "compilerOptions": {
    "rootDir": "./Module1/source/",
    "outDir": "./Module1/dist",
    "target": "ES2016",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### 3. Install ts-node-dev
```bash
npm install -g ts-node-dev
```

### 4. Run the project
```bash
ts-node-dev --respawn --transpile-only src/index.ts
```

---

## TypeScript Essentials Overview

This guide walks you through the core of TypeScript, starting with primitive and non‑primitive data types, then showing how to destructure arrays and objects. You’ll see how to write functions with default parameters, arrow syntax, and object methods, and learn about special types like `nullable`, `unknown`, and `never`. Moving on, it covers object modeling with type aliases, `readonly` and optional properties, demonstrates spread/rest operators, and introduces safe control‑flow operators (`ternary`, `nullish coalescing`, `optional chaining`). Finally, it shows how to compose more powerful types using unions and intersections.



