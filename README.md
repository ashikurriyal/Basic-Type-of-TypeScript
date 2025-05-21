# Basic-Types-of-TypeScript
This repository contains a comprehensive guide to the core-concepts of TypeScript, designed to help both beginners and those looking to refresh their knowledge. It covers essential topics such as data types, functions, destructuring, operators, and advanced types, all explained with practical examples for better understanding. I am currently learning and practicing TypeScript, and this repository serves as a personal learning resource while also offering helpful reference material for others exploring the language.

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

### Generic Arrays

A common use of generics is to define arrays that can hold any type of data, while ensuring type safety.

```ts
type GenericArray<T> = Array<T>;
```
**Why Use Generic Arrays?**

- Reusability: Define once, use with many types.
- Type Safety: Prevents accidental type mismatches.
- Clean Syntax: Improves readability for complex data structures.

---

### Generic Tuples

Tuples are fixed-length arrays where each position can hold a different type. We can also make them generic!

```ts
type GenericTuple<X, Y> = [X, Y];
```

**Why Use Generic Tuples?**

- Strong typing for structured pairs.
- Useful for key-value pairs, ID-object relationships, and more.
- Great for returning multiple values from a function.

---

### When to Use Generics

| Use Case                             | Why Use Generics?                      |
| ------------------------------------ | -------------------------------------- |
| Reusable Array/Collection Structures | Type-safe and flexible                 |
| Functions That Accept Many Types     | Enforce input/output types dynamically |
| Utility Libraries                    | Generic utilities work for all types   |
| API Response Wrappers                | Flexible return data models            |

---

### Summary

- Generics make your code **reusable, scalable, and type-safe**.
- Use generic arrays like `GenericArray<T>` for consistent handling of different types.
- Use generic tuples to strongly type fixed-length, mixed-type values.
- TypeScript generics help you write better, cleaner, and safer code.

---

## Generics with Interfaces in TypeScript

In TypeScript, interfaces can be combined with **generics** to build flexible, reusable, and strongly-typed data structures. This is especially useful when the shape of certain properties (like devices or tools a user uses) may vary.

---

### Why Use Generics with Interfaces?

| Benefit      | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| Reusability  | Define once, use with multiple types.                          |
| Flexibility  | Swap out smartwatch or bike types easily using generics.       |
| Type Safety  | Prevent incorrect data structure at compile time.              |
| Cleaner Code | Avoids redundant interfaces and promotes consistent structure. |

---

### Summary

- Generics + Interfaces allow for flexible, strongly-typed models.
- Useful for designing reusable blueprints where some parts vary.
- Helps reduce duplication and ensures correctness across use cases.

---

## Functions with Generics

Generics in functions allow you to write **reusable and type-safe code** that works with multiple data types. This is extremely useful when you want to create flexible utilities that maintain type consistency.

---

### Why Use Generics?

- Reusability: Define a single function for multiple types.
- Type Safety: Maintains proper type relationships across parameters and return values.
- Improved Developer Experience: Offers better autocompletion and compile-time checks.
- Scalable Design: Ideal for library and API development.

---


## Constraints in TypeScript

When using **generics** in TypeScript, you may want to ensure that the generic type has a specific shape or structure. This is where **constraints** come into play. You can use `extends` to restrict what kinds of values are allowed as type arguments.

---

### Example: Enforcing Structure with Constraints

Let's consider a scenario where we want to add a course to a student object. We need to ensure that the student object contains at least `id`, `name`, and `email`.

```ts
const addCourseToStudent = <
  T extends { id: number; name: string; email: string }
>(
  student: T
) => {
  const course = "Next Level Web Development";
  return {
    ...student,
    course,
  };
};
```

### How It Works:

- `T extends { id: number; name: string; email: string }>` ensures the object passed **must include at least** these three properties.
- This keeps the function flexible (it can take extra properties too) but **type-safe**.

---

### Why Use Constraints?

- ✅ Enforce minimum required structure on generic types.
- ✅ Maintain type safety with flexibility for additional properties.
- ✅ Ideal for utility functions, form validators, API responses, etc.

---

## Constraint Using `keyof`

In TypeScript, the `keyof` operator is a powerful tool that allows you to create types based on the keys of an object. It is especially useful when working with **generic functions** where you want to ensure a parameter corresponds to a valid property name of a given object.

---

## Constraint Using `keyof`

In TypeScript, the `keyof` operator is a powerful tool that allows you to create types based on the keys of an object. It is especially useful when working with **generic functions** where you want to ensure a parameter corresponds to a valid property name of a given object.

---

### Why Use `keyof` With Constraints?

- ✅ Ensures the provided key actually exists on the object.
- ✅ Enables fully type-safe access to object properties.
- ✅ Makes generic utility functions more robust and reusable.

---

This pattern is particularly useful in form handling, dynamic property lookups, building libraries, or anywhere dynamic object access is required with type safety.

---

## Asynchronous TypeScript

Asynchronous programming is crucial in modern web development, especially when dealing with tasks like API calls, file reading, or timers. TypeScript fully supports asynchronous operations using `Promises` and `async/await` syntax — allowing you to write clean, readable, and type-safe asynchronous code.

---

### 1. **Basic Promise Example with `boolean`**

```ts
const createPromise1 = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("Failed to load data");
    }
  });
};

const showData1 = async (): Promise<boolean> => {
  const data: boolean = await createPromise1();
  console.log("Boolean Promise Result:", data);
  return data;
};

showData1();
```

> ✅ We define a promise that resolves a boolean and consume it using `async/await`.

---

### 2. **Promise with a Custom Object Type**

```ts
type TSomething = {
  something: string;
};

const createPromise2 = (): Promise<TSomething> => {
  return new Promise<TSomething>((resolve, reject) => {
    const data: TSomething = { something: "This is something" };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to load object data");
    }
  });
};

const showData2 = async (): Promise<TSomething> => {
  const data: TSomething = await createPromise2();
  console.log("Object Promise Result:", data);
  return data;
};

showData2();
```

> ✅ Promises can return objects by defining a custom type (`TSomething`) and using `Promise<TSomething>`.

---

### 3. **Fetching Data from an API using `fetch`**

```ts
type TTodo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const getTodo = async (): Promise<TTodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data: TTodo = await response.json();
  console.log("Fetched Todo:", data);
  return data;
};

getTodo();
```

> ✅ You can define the expected response from an API using interfaces or types like `TTodo` to ensure type safety and clarity.

---

### Why Use Async with TypeScript?

- **Type safety**: You always know what data you're dealing with.
- **Cleaner syntax**: `async/await` avoids the pyramid of doom caused by chained `.then()` calls.
- **Easy debugging**: Using tools like `console.log` with strongly-typed data makes debugging predictable.

---

## Conditional Types in TypeScript

Conditional types in TypeScript allow you to define types that depend on a condition. This makes TypeScript more flexible and powerful when dealing with types that vary based on some condition.

The syntax for a conditional type looks like this:

```ts
T extends U ? X : Y
```

Where:

- `T` is a type that will be checked.
- `U` is a type that `T` is being compared to.
- `X` is the type returned if `T` extends `U`.
- `Y` is the type returned if `T` does not extend `U`.

### Key Benefits

- **Type safety:** Conditional types allow for more granular control over type resolution.
- **Dynamic typing:** They enable more dynamic behavior based on types.
- **Code clarity:** Makes complex type logic easier to understand and manage.

## Summary

Conditional types are a powerful feature in TypeScript that allows you to define types that depend on certain conditions, improving the flexibility and safety of your code. By using `extends` and conditional logic, you can create complex type relationships that react dynamically based on the type in question.

### Key Takeaways:

- Conditional types let you create types that change depending on other types.
- They are useful for more complex type transformations.
- Using `keyof`, you can dynamically check for keys in an object and resolve types accordingly.

For further reading, you can check out the official TypeScript documentation on [Conditional Types](https://www.typescriptlang.org/docs/).

### Notes:

1. **Conditional Types:** This feature allows TypeScript to choose between different types based on a condition.
2. **`keyof` Operator:** The `keyof` operator is useful for checking if a type is one of the keys of an object.
3. **Practical Uses:** You can use conditional types for a variety of tasks like validating keys in an object, transforming types, or making decisions in generic functions.

---

## Mapped Types in TypeScript

Mapped types are a powerful feature in TypeScript that allows you to transform the properties of an existing type into new ones. This can be helpful for scenarios where you need to create types based on the properties of another type or modify the properties of an existing object. In this section, we'll explore how mapped types work, and how to use them with arrays and objects.

---

### 1. **Basic Example of Mapped Types with Arrays**

---

First, let’s look at an example with arrays where we convert elements from one type to another:

```typescript
const arrOfNumer: number[] = [2, 4, 7];
const arrOfString1: string[] = ["2", "4", "7"];

// Mapping number array to string array using `map()`
const arrOfString2: string[] = arrOfNumer.map((number) => number.toString());
console.log("Array of numbers:", arrOfNumer);
console.log("Array of strings (initial):", arrOfString1);
console.log("Array of strings (mapped from numbers):", arrOfString2);
```

In this example, we start with an array of numbers (`arrOfNumer`) and an array of strings (`arrOfString1`). By using the `map()` function, we create a new array (`arrOfString2`) where each number is converted into a string. This demonstrates how mapped types can help transform an array's elements.

---

### 2. **Mapped Types with Object Types**

---

Mapped types are commonly used with object types as well. Let’s consider the following example where we create a mapped type to convert object properties:

```typescript
type TAreaNumber = {
  height: number;
  width: number;
};

type TAreaString1 = {
  height: string;
  width: string;
};

// Using a mapped type to convert the properties of TAreaNumber to strings
type TAreaString2 = {
  [key in "height" | "width"]: string;
};

// Using a mapped type with `keyof` operator to make the properties of TAreaNumber into strings
type TAreaString3 = {
  [key in keyof TAreaNumber]: string;
};
```

In this example:

- `TAreaNumber` is a type with numeric properties `height` and `width`.
- `TAreaString1` is another type where both properties are strings.
- `TAreaString2` and `TAreaString3` are mapped types that dynamically map over the keys of `TAreaNumber` and set the property types to `string`.

---

### 3. **Extracting Types with `keyof`**

---

You can also use the `keyof` operator with mapped types to extract specific property types. In the example below:

```typescript
type THeight = TAreaNumber["height"];
console.log("Type of height in TAreaNumber:", THeight);
```

The type `THeight` will be `number`, because it's extracting the type of the `height` property from `TAreaNumber`.

---

### 4. **Mapped Types with Generics**

---

Mapped types can also work with generics to create more flexible types:

```typescript
type TAreaStringGeneric<T> = {
  [key in keyof T]: T[key];
};

const area1: TAreaStringGeneric<{ height: string; width: number }> = {
  height: "100",
  width: 500,
};

console.log("Mapped type area with string height and number width:", area1);
```

Here, we define a generic mapped type `TAreaStringGeneric`, which takes an object type `T` and maps over its properties, preserving the original types. This provides a flexible way to create types based on any object you pass in.

### Summary

- **Mapped Types**: Enable transformation of types by iterating over keys and modifying their values.
- **`keyof` Operator**: Can be used to extract specific property types from an object.
- **Generics**: Allow you to create mapped types that work with any type, providing flexibility and reusability.

Mapped types are incredibly powerful and can be used to manipulate and derive new types based on the properties of other types. By understanding and utilizing mapped types, you can write more dynamic and reusable TypeScript code.

---

# TypeScript Utility Types

TypeScript provides built-in **utility types** that help you transform existing types easily and concisely. Below is an explanation of commonly used utility types along with examples.

---

## 🔹 1. `Pick<Type, Keys>`

Creates a new type by picking a subset of properties from another type.

```ts
type TPerson = {
  name: string;
  age: number;
  contactNo: string;
};

type TName = Pick<TPerson, "name">; // { name: string }
type TNameAge = Pick<TPerson, "name" | "age">; // { name: string; age: number }

const nameOnly: TName = { name: "Riyal" };
```

---

## 🔹 2. `Omit<Type, Keys>`

Creates a new type by **excluding** certain keys from an existing type.

```ts
type TContactInfo = Omit<TPerson, "name" | "age">; // { contactNo: string }

const contactInfo: TContactInfo = {
  contactNo: "1234567890",
};
```

---

## 🔹 3. `Required<Type>`

Converts all optional properties of a type to **required**.

```ts
type TPerson = {
  name: string;
  age: number;
  email?: string;
  contactNo: string;
};

type TRequiredPerson = Required<TPerson>;

const person: TRequiredPerson = {
  name: "Riyal",
  age: 25,
  email: "riyal@gmail.com",
  contactNo: "1234567890",
};
```

---

## 🔹 4. `Partial<Type>`

Makes all properties **optional**.

```ts
type TPartialPerson = Partial<TPerson>;

const partialPerson: TPartialPerson = {
  name: "Riyal",
};
```

---

## 🔹 5. `Readonly<Type>`

Makes all properties **immutable** (read-only).

```ts
type TReadonlyPerson = Readonly<TPerson>;

const readonlyPerson: TReadonlyPerson = {
  name: "Riyal",
  age: 25,
  email: "riyal@example.com",
  contactNo: "1234567890",
};

// readonlyPerson.name = "Test"; ❌ Error: Cannot assign to 'name' because it is a read-only property
```

---

## 🔹 6. `Record<Keys, Type>`

Creates an object type with specified keys and value types.

```ts
type TMyObj = Record<string, string>;

const myObj: TMyObj = {
  a: "aa",
  b: "bb",
  c: "cc",
};

const anyObj: Record<string, unknown> = {
  name: "Riyal",
  age: 23,
  isAdmin: true,
};
```

---

## ✅ Summary Table

| Utility Type   | Description                                               |
| -------------- | --------------------------------------------------------- |
| `Pick<T, K>`   | Picks specific properties from a type.                    |
| `Omit<T, K>`   | Removes specific properties from a type.                  |
| `Required<T>`  | Makes all properties required.                            |
| `Partial<T>`   | Makes all properties optional.                            |
| `Readonly<T>`  | Makes all properties read-only.                           |
| `Record<K, T>` | Creates an object type with keys of `K` and values of `T` |

---

## Object-Oriented-Typescript Overview

### Class and Object

Classes serve as blueprints for creating objects, which are instances that encapsulate both state and behavior. You'll learn how to define classes with properties and methods, create objects from them, and understand why this pattern is crucial for building scalable and maintainable applications.

### Inheritance in OOP

Continuing our exploration of OOP, we’ll talk about inheritance, one of the most powerful tools for code reuse. Inheritance allows a class to inherit properties and methods from another class, creating a parent-child relationship.

### Type Guard using `typeof` & `in`

When working with dynamic types, it's crucial to ensure you're dealing with the expected type. TypeScript offers type guards to help with this. You'll explore how to use the `typeof` operator and the `in` keyword to safely implement conditional logic based on variable types.

### Type Guard using `instanceof`

Building on your knowledge of type guards, you'll explore the `instanceof` operator — a powerful tool for checking whether an object is an instance of a specific class, especially useful in class hierarchies.

### Access Modifiers

Access modifiers are key to controlling the visibility of class members. You’ll learn about `public`, `private`, and `protected` in TypeScript, and how they help enforce encapsulation.

### Getter and Setter

Take control of how your class properties are accessed and modified! You'll learn how to define getters and setters in TypeScript and explore their practical benefits.

### Static Members in OOP

Static properties and methods belong to the class itself, not to instances. We'll show you how to declare and use `static` members in TypeScript effectively.

### Polymorphism

Polymorphism allows different classes to be treated as if they are the same through a shared interface or base class. You’ll implement polymorphism and understand its importance in flexible application design.

### Abstraction in OOP

Abstraction hides implementation details and exposes only essential features. You'll learn to create abstract classes and interfaces to define clear and robust contracts in your code.

### Encapsulation in OOP

Encapsulation ensures that internal class details are hidden and protected. We’ll demonstrate how to implement encapsulation using private properties and access modifiers.

---

## Class and Object in TypeScript

In Object-Oriented Programming (OOP), **classes** are blueprints for creating **objects**. Each object created from a class can have its own data (**properties**) and functionality (**methods**).

### Why Use Classes?

- Reuse code by creating multiple instances (objects).
- Group related data and behaviors.
- Helps with large-scale, maintainable application design.

---

### Class vs Object Summary

| Feature    | Class                         | Object                                   |
| ---------- | ----------------------------- | ---------------------------------------- |
| Definition | A blueprint or template       | An instance of a class                   |
| Use        | Define structure and behavior | Access or manipulate specific data       |
| Keyword    | `class`                       | `new ClassName(...)` to create an object |

---


## Inheritance in TypeScript

**Inheritance** is a core principle of Object-Oriented Programming (OOP) that allows one class to inherit the properties and methods of another. This promotes **code reuse**, **organization**, and **scalability**.

---

### Why Use Inheritance?

- Avoid duplicate code.
- Express logical relationships (e.g., a Teacher **is a** Person).
- Make future extensions easier (e.g., add more subclasses like `Admin`, `Guardian`, etc.).
- Encourage consistency across components.

---
## Type Guards in TypeScript – `typeof` & `in` Operators

Type guards are a powerful feature in TypeScript that help you **safely handle union types** by checking the **actual type** of a variable at runtime.

This allows you to write safer, more predictable logic and avoid runtime errors.

---
### Using `typeof` for Primitive Types

The `typeof` operator is used to check the type of **primitive values** like `string`, `number`, `boolean`, etc.

#### Example: Add two values (numbers or strings)

```ts
type TAlphaNumeric = string | number;

const add = (param1: TAlphaNumeric, param2: TAlphaNumeric): TAlphaNumeric => {
  // Check if both are numbers
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2; // Arithmetic addition
  } else {
    return param1.toString() + param2.toString(); // String concatenation
  }
};
```

#### Testing the Function

```ts
console.log(add(10, 20)); // ➜ 30
console.log(add("10", "20")); // ➜ "1020"
console.log(add(10, "20")); // ➜ "1020"
console.log(add("Code", 123)); // ➜ "Code123"
```

#### What’s Happening?

| Input          | Type Check                | Output      |
| -------------- | ------------------------- | ----------- |
| `10 + 20`      | number + number           | `30`        |
| `"10" + "20"`  | string + string           | `"1020"`    |
| `10 + "20"`    | number + string ➜ convert | `"1020"`    |
| `"Code" + 123` | string + number ➜ convert | `"Code123"` |

---

### Using `in` for Object Type Guards

The `in` operator is used to check if a **property exists** in an object, making it very useful for narrowing **union types of object shapes**.

#### Example: Distinguishing Between Normal and Admin Users

```ts
type TNormalUser = {
  name: string;
};

type TAdminUser = {
  name: string;
  role: "admin";
};

const getUser = (user: TNormalUser | TAdminUser) => {
  if ("role" in user) {
    console.log(`My name is ${user.name} and my role is ${user.role}`);
  } else {
    console.log(`My name is ${user.name}`);
  }
};
```

#### Testing the Function

```ts
const normalUser: TNormalUser = { name: "Riyal" };
getUser(normalUser);
// ➜ Output: My name is Riyal

const adminUser: TAdminUser = { name: "Riyal", role: "admin" };
getUser(adminUser);
// ➜ Output: My name is Riyal and my role is admin
```

---

### Summary Table

| Operator | Use Case                                | Checks For               |
| -------- | --------------------------------------- | ------------------------ |
| `typeof` | Primitive types like `number`, `string` | `typeof value === "..."` |
| `in`     | Object shapes / keys                    | `"key" in object`        |

---
### Why Use Type Guards?

- Helps safely handle complex types.
- Avoids unnecessary type casting.
- Prevents runtime errors.
- Improves code clarity and readability.

---

## Type Guards in TypeScript – `instanceof`

When working with **class-based object types**, TypeScript allows us to use the `instanceof` operator to narrow down types at runtime. This is especially useful in **object-oriented programming**, where instances might come from a class hierarchy.

---

### What is `instanceof`?

The `instanceof` operator checks whether an object is an **instance of a specific class** (or one of its subclasses).
It is used to apply logic based on the **actual class** of the object at runtime.

---

### Example: Detecting Class Instances

Let’s define a base class `Animal` and two subclasses: `Dog` and `Cat`.

```ts
class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log(`${this.name} is making a generic animal sound`);
  }
}

class Dog extends Animal {
  makeBark() {
    console.log(`${this.name} is barking: "Woof! Woof!"`);
  }
}

class Cat extends Animal {
  makeMeaw() {
    console.log(`${this.name} is meowing: "Meow~"`);
  }
}
```

---

### Creating Objects

```ts
const dog = new Dog("Dog Vai", "Dog");
const cat = new Cat("Cat Vai", "Cat");
const rabbit = new Animal("Rabbit Vai", "Rabbit");
```

---

### Using `instanceof` Directly

```ts
const getAnimal1 = (animal: Animal) => {
  if (animal instanceof Dog) {
    console.log(" It's a Dog!");
    animal.makeBark();
  } else if (animal instanceof Cat) {
    console.log(" It's a Cat!");
    animal.makeMeaw();
  } else {
    console.log(" Unknown Animal Type");
    animal.makeSound();
  }
};

getAnimal1(dog); // Dog Vai is barking: "Woof! Woof!"
getAnimal1(cat); // Cat Vai is meowing: "Meow~"
getAnimal1(rabbit); // Rabbit Vai is making a generic animal sound
```

---

### Cleaner: Type Guard Functions (Predicates)

To improve readability and reusability, you can define **custom type guard functions**.

```ts
const isDog = (animal: Animal): animal is Dog => {
  return animal instanceof Dog;
};

const isCat = (animal: Animal): animal is Cat => {
  return animal instanceof Cat;
};
```

Now use them in logic:

```ts
const getAnimal2 = (animal: Animal) => {
  if (isDog(animal)) {
    console.log(" Detected a Dog using predicate.");
    animal.makeBark();
  } else if (isCat(animal)) {
    console.log(" Detected a Cat using predicate.");
    animal.makeMeaw();
  } else {
    console.log(" Detected unknown animal. Using fallback.");
    animal.makeSound();
  }
};

getAnimal2(dog);
getAnimal2(cat);
getAnimal2(rabbit);
```

---

### Benefits of `instanceof`

| Advantage                    | Description                                  |
| ---------------------------- | -------------------------------------------- |
| Runtime type detection       | Safe checks for real class type at runtime   |
| OOP-friendly                 | Works naturally with class inheritance       |
| Cleaner code with predicates | Improves separation of logic and reusability |

---

### Summary

- Use `instanceof` when working with **class-based types**.
- It helps determine the **actual class** of an object from a union of base types.
- Combine `instanceof` with **custom type guards** (`animal is Dog`) for clean and type-safe code.

---

## Access Modifiers in TypeScript

Access modifiers are used in TypeScript to control the **visibility** of class members (properties and methods). This helps achieve **encapsulation**, a fundamental principle of Object-Oriented Programming (OOP).

---

### Available Access Modifiers

| Modifier    | Accessibility                                  |
| ----------- | ---------------------------------------------- |
| `public`    | Accessible from anywhere (default)             |
| `private`   | Accessible **only inside the class**           |
| `protected` | Accessible **inside the class and subclasses** |
| `readonly`  | Can be read publicly but **not reassigned**    |

---

### Summary

- Use `public` for properties/methods that should be open to the outside world.
- Use `private` to **hide internal details** and avoid unwanted access.
- Use `protected` when subclasses need internal access.
- Use `readonly` to make a value constant after initialization.

---

## Getters and Setters in TypeScript

In TypeScript, **getters** and **setters** are special methods used to access and modify the properties of a class. They provide a clean way to **encapsulate** logic and control how the properties are retrieved and updated.

---

### What are Getters and Setters?

- **Getter**: A getter allows you to retrieve the value of a property. It's defined using the `get` keyword and provides a **read-only** way to access private or protected class properties.

- **Setter**: A setter allows you to modify the value of a property. It's defined using the `set` keyword and provides a **controlled** way to update private or protected class properties.

---
### Benefits of Using Getters and Setters:

1. **Encapsulation**: You can control how the internal properties of the class are accessed and modified, keeping them hidden from direct manipulation.
2. **Validation**: With setters, you can ensure that only valid data is being set (e.g., validating deposit amounts).
3. **Read-only Access**: Using getters, you can give users read-only access to internal data, like a balance, without allowing them to modify it.
4. **Custom Logic**: You can add logic to getters and setters, such as triggering events when a value changes, or performing calculations when retrieving a value.

---

### Summary

- **Getters** provide a way to access private/protected properties with custom logic and without allowing direct manipulation of those properties.
- **Setters** enable controlled modification of private/protected properties, allowing you to enforce rules (like validation) before updating a value.
- They are an essential feature of **encapsulation** in object-oriented programming, helping you maintain **data integrity** and provide cleaner, more maintainable code.

---

## Static Members in Object-Oriented Programming (OOP)

In TypeScript, **static properties** and **static methods** are associated with the **class itself** rather than with individual instances of the class. Static members can be used to store data or behavior that should be shared across all instances of the class. This is useful when you need to track shared state, or when certain functionality does not require instance-specific data.

### Key Concepts:

- **Static Properties**: Shared across all instances of the class. They are accessed using the class name, not via an instance.
- **Static Methods**: Methods that belong to the class itself, and not to any individual instance. They are invoked directly on the class.

#### Why Use Static Members?

- Static properties are useful for **shared data** or **state** that is not tied to a particular instance.
- Static methods can implement **utility functions** or **helper functions** that don’t require an instance to be useful (e.g., logging, configuration, or calculation methods).

---

### Conclusion

Static members are a powerful feature in object-oriented programming in TypeScript. They allow you to share data or behavior across all instances of a class without needing to instantiate the class multiple times. Whether you're dealing with a shared counter, utility methods, or configurations, static members provide a clean and efficient way to handle common functionality.

---

## Polymorphism in TypeScript

Polymorphism is a powerful concept in Object-Oriented Programming (OOP) that allows objects of different types to be treated as instances of the same base type. In TypeScript, this is commonly achieved through class inheritance and method overriding.

### Why Use Polymorphism?

- Promotes **code reusability** and **flexibility**.
- Allows **dynamic behavior** at runtime.
- Makes code **easier to maintain** and **extend**.

---

## Abstraction in Object-Oriented TypeScript

Abstraction is one of the core pillars of Object-Oriented Programming (OOP). It allows us to **hide the complex implementation details** and expose only the **necessary parts of an object**. TypeScript supports abstraction through two main constructs:

- **Interfaces**
- **Abstract Classes**

Both of these allow developers to define a contract or blueprint for classes, ensuring consistency while promoting flexibility and maintainability.

---

### Key Differences: Interface vs Abstract Class

| Feature                   | Interface                  | Abstract Class                 |
| ------------------------- | -------------------------- | ------------------------------ |
| Can have implementations? | ❌ No                      | ✅ Yes                         |
| Multiple inheritance      | ✅ Yes                     | ❌ No                          |
| Flexibility               | More flexible              | More structured                |
| Usage purpose             | Define capability/contract | Provide partial implementation |

---

### Use Abstraction When:

- You want to enforce a **consistent structure** across different classes.
- You want to **separate concerns** — consumers should not care about implementation.
- You want to **minimize code duplication** via base class logic.

---

## Encapsulation in TypeScript (OOP)

Encapsulation is one of the fundamental principles of Object-Oriented Programming (OOP). It is the process of bundling data (properties) and methods (functions) that operate on the data into a single unit (class), and **restricting direct access** to some of the object's components. This helps in protecting the internal state of an object from unintended or harmful changes.

---
### Benefits of Encapsulation

| Benefit             | Explanation                                                  |
| ------------------- | ------------------------------------------------------------ |
| **Security**        | Private/protected properties can't be modified from outside. |
| **Control**         | Changes to internal state go through controlled methods.     |
| **Abstraction**     | Hide unnecessary details from outside the class.             |
| **Maintainability** | Makes it easier to update and debug.                         |

---

### Recap

- `private` ⇒ only accessible within the same class
- `protected` ⇒ accessible within the class and its subclasses
- `public` ⇒ accessible from anywhere
- `readonly` ⇒ can be set once during construction, then becomes immutable

---
