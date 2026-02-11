# SMIT_BATCH_18_CLASS_36_PROTOTYPE_INHERITENCE_-_OBJECT_SEAL_AND_FREEZE

Great 👍 Abdullah — yeh raha 350 character GitHub description aur uske baad complete detailed README.md file jo aap direct copy karke use kar sakte ho.

✅ 350 Character GitHub Description

This project demonstrates JavaScript Prototype Inheritance along with Object.seal() and Object.freeze(). It explains how objects inherit properties and methods using prototypes and how to control object modification for better data security. Includes practical examples for clear understanding and hands-on learning.

(≈ 347–355 characters depending on spacing)

✅ Complete README.md File
# SMIT Batch 18 - Class 36  
## Prototype Inheritance & Object.seal() and Object.freeze()

This project demonstrates important JavaScript concepts including **Prototype Inheritance**, **Object.seal()**, and **Object.freeze()**.  
It helps in understanding how objects inherit properties and how to control object modification for secure and predictable code behavior.

---

## 📌 Project Objective

The objective of this project is to:

- Understand how JavaScript Prototype Inheritance works
- Learn how objects share properties and methods
- Explore Object.seal() behavior
- Explore Object.freeze() behavior
- Compare normal objects, sealed objects, and frozen objects
- Practice real-world JavaScript logic

---

## 🧠 Concepts Covered

### 1️⃣ Prototype Inheritance

JavaScript uses prototype-based inheritance.

- Every object has a hidden internal property called `[[Prototype]]`
- Objects can inherit properties and methods from another object
- Functions have a `.prototype` property
- Helps in memory optimization (methods are shared)

#### Example:
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello " + this.name);
};

const user1 = new Person("Abdullah");
user1.greet();

2️⃣ Object.seal()

Object.seal() prevents:

❌ Adding new properties

❌ Deleting existing properties

But allows:

✅ Updating existing properties

Example:
const user = {
  name: "Ali",
  age: 20
};

Object.seal(user);

user.age = 21;      // ✅ Allowed
user.city = "Lahore"; // ❌ Not Allowed
delete user.name;     // ❌ Not Allowed

3️⃣ Object.freeze()

Object.freeze() prevents:

❌ Adding new properties

❌ Deleting properties

❌ Updating existing properties

Object becomes completely immutable.

Example:
const admin = {
  name: "Ahmed",
  role: "Admin"
};

Object.freeze(admin);

admin.role = "User"; // ❌ Not Allowed
admin.city = "Karachi"; // ❌ Not Allowed
delete admin.name; // ❌ Not Allowed

🔍 Difference Between seal() and freeze()
Feature	Normal Object	Object.seal()	Object.freeze()
Add Property	✅ Yes	❌ No	❌ No
Delete Property	✅ Yes	❌ No	❌ No
Update Property	✅ Yes	✅ Yes	❌ No
💻 Technologies Used

HTML (Optional for structure)

JavaScript (Core Logic)

Browser Console for testing

🚀 How to Run

Download or clone this repository

Open the project folder

Open index.html in browser

Open browser console (F12 → Console)

Test the examples

📂 Project Structure
SMIT_BATCH_18_CLASS_36_PROTOTYPE_INHERITENCE_&_OBJECT_SEAL_AND_FREEZE
│
├── index.html
├── script.js
└── README.md

🎯 Learning Outcome

After completing this project, you will:

Understand prototype chain

Know how inheritance works internally

Be able to control object behavior

Improve JavaScript OOP understanding

Write safer and optimized code

📚 Why This Is Important?

Used in real-world applications

Improves object security

Prevents accidental data modification

Essential for advanced JavaScript development

👨‍💻 Author

M. Abdullah Anwar
SMIT Batch 18

⭐ If you found this helpful

Give this repository a ⭐ star and share with your classmates.
