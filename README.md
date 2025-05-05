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



