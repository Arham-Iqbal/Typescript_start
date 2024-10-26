
# TypeScript Basics

This project provides an overview of basic TypeScript types, functions, interfaces, and object structures. 

## Table of Contents
1. [Installation](#installation)
2. [Basic Types](#basic-types)
3. [Functions](#functions)
4. [Interfaces](#interfaces)

---

### Installation
To start using TypeScript, install it globally on your machine:
```bash
npm install -g typescript
```

Compile TypeScript files with the following command:
```bash
tsc filename.ts
```

---

### Basic Types

TypeScript offers various data types to enforce type safety. Here’s a list of basic types and examples.

1. **Primitive Types**
   ```typescript
   let x: number;
   let y: string;
   let z: boolean;
   ```

2. **The `any` Type**  
   The `any` type allows variables to hold any kind of data, bypassing TypeScript’s type-checking.  
   ⚠️ *Using `any` is discouraged, as it removes type safety.*
   ```typescript
   let xy: any;
   ```

3. **The `unknown` Type**  
   Safer than `any`, `unknown` ensures that values are type-checked before usage.
   ```typescript
   let yz: unknown;
   ```

4. **Null and Undefined**  
   - `null`: Used to indicate a deliberate absence of value.
   - `undefined`: Indicates an uninitialized variable.
   ```typescript
   let xz: null;
   let zy: undefined;
   ```

5. **Array Types**  
   Arrays can be defined to hold specific types.
   ```typescript
   let numbers: number[];
   let nme: string[];
   let a: number[] = [1, 2, 3];
   ```

6. **Tuples**  
   Tuples allow you to create arrays with fixed types and lengths for each position.
   ```typescript
   let t: [number, number];
   t = [1, 2];

   let t2: [string, string];
   t2 = ["h", "o"];
   ```

---

### Functions

TypeScript enables us to define types for function parameters and return values.

```typescript
function print(): number {
    return 0;
}

function sum(x: number, y: number): number {
    return x + y;
}
```

---

### Interfaces

Interfaces allow you to define the structure of an object, ensuring consistency and type safety.

#### Example: Using Objects Directly
You can create an object without an interface, but it’s recommended to define the structure with an interface.

```typescript
let user = {
    name: "Ar",
    age: 15,
};
```

#### Using an Interface
Interfaces are a better approach for creating structured and reusable objects.

```typescript
interface Student {
    name: string;
    class: number;
    rollno: number;
    phoneno?: number;  // Optional property
}

let student1: Student = { name: "ar", class: 10, rollno: 15 };
let student2: Student = { name: "dvd", class: 10, rollno: 99 };
```

---

### To Do
- Implement and explore `enum` for defining named constants.

---

### Running the Code

Compile the TypeScript code to JavaScript using:
```bash
tsc <filename>.ts
```

Run the compiled JavaScript code:
```bash
node <filename>.js
```

---

Feel free to add or modify these examples as you continue exploring TypeScript!