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

## Basic-Types-of-TypeScript Overview

This guide walks you through the core of TypeScript, starting with primitive and non‑primitive data types, then showing how to destructure arrays and objects. You’ll see how to write functions with default parameters, arrow syntax, and object methods, and learn about special types like `nullable`, `unknown`, and `never`. Moving on, it covers object modeling with type aliases, `readonly` and optional properties, demonstrates spread/rest operators, and introduces safe control‑flow operators (`ternary`, `nullish coalescing`, `optional chaining`). Finally, it shows how to compose more powerful types using unions and intersections.

## Summary

In this guide you’ll discover how to:
- Differentiate between primitive and composite data types  
- Unpack values via array and object destructuring  
- Declare functions with defaults, arrow syntax, and methods  
- Handle uncertain values using `nullable`, `unknown`, and `never`  
- Model objects robustly with type aliases, `readonly`, and optional fields  
- Use spread and rest operators for merging data and parameters  
- Apply concise control‑flow operators (`?:`, `??`, `?.`)  
- Create reusable function and object type aliases  
- Combine types flexibly through union and intersection constructs


## Advanced-Types-of-TypeScript-Overview

Take your TypeScript skills to the next level with advanced type techniques:

1. **Type Assertion & Type Narrowing**
   Guide TypeScript when it's unsure about a variable’s type. Use type assertions and refine types for safety and accuracy.

2. **Interfaces: `type` vs `interface`**
   Understand the difference and best use cases for `type` aliases and `interface` structures.

3. **Introduction to Generics**
   Create reusable code components that work across different types with TypeScript generics.

4. **Generics with Interfaces**
   Use generics inside interfaces to make strongly typed, reusable components and APIs.

5. **Functions with Generics**
   Write flexible, type-safe functions that can accept multiple types with ease.

6. **Constraints in Generics**
   Limit which types a generic can accept, ensuring more predictable and robust code.

7. **Constraints Using `keyof`**
   Leverage `keyof` to restrict generics to known object properties.

8. **Asynchronous TypeScript**
   Use TypeScript's type system to safely handle asynchronous code and promises.

9. **Conditional Types**
   Build dynamic types that adapt based on input conditions.

10. **Mapped Types**
    Transform existing types into new ones by iterating over keys with mapped types.

11. **Utility Types**
    Simplify code with TypeScript’s built-in utility types like `Partial`, `Pick`, `Record`, `Required`, and more.

---


## Type Assertion & Type Narrowing in TypeScript

TypeScript sometimes cannot determine the exact type of a variable, especially when using `any` or union types like `string | number`. In such cases, **type assertion** and **type narrowing** help guide TypeScript's type system for safer, more accurate code.

---


### Summary

- **Type Assertion** (`as`) tells TypeScript what type a variable should be treated as.
- **Type Narrowing** uses conditions like `typeof` to let TypeScript infer more specific types.
- These techniques help make TypeScript code more type-safe and error-resistant, especially when dealing with flexible or uncertain input values.

---

## Interface vs Type in TypeScript

TypeScript gives you two powerful tools to define custom types: `type` aliases and `interface`. While they may appear similar, each has unique strengths.

This section explores the differences, similarities, and best use cases—with practical examples.

---


### Summary: Type vs Interface

| Feature                 | `type`                           | `interface`                   |
| ----------------------- | -------------------------------- | ----------------------------- |
| Object type definition  | ✅ Yes                           | ✅ Yes                        |
| Extend another type     | ✅ Via intersection (`&`)        | ✅ Via `extends`              |
| Implements (with class) | ✅ Yes                           | ✅ Yes                        |
| Use for primitives      | ✅ Yes                           | ❌ No                         |
| Declaration merging     | ❌ No                            | ✅ Yes                        |
| Preferred for objects   | ✔ When using unions & primitives | ✔ When defining API contracts |

---

📌 **Rule of Thumb**

- Use `interface` for defining object shapes, especially when working with classes or APIs.
- Use `type` for primitives, union types, intersections, or when you need more flexibility.

---

## Introduction to Generics in TypeScript

Generics are a powerful feature in TypeScript that allow you to create reusable components or functions that work with any data type, while still maintaining type safety.

They are especially useful when building libraries, utility functions, or working with collections of data.

---



