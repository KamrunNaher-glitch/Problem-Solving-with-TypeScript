TypeScript লিখতে গেলে প্রায়ই দুইটা জিনিস দেখবেন: interface আর type। দুটোর কাজই হলো ডেটার স্ট্রাকচার বা টাইপ ঠিক করা। কিন্তু এগুলোর মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

Interface হলো একটি অবজেক্টের নকশা (blueprint)—যেখানে আমরা বলে দিই কোন কোন প্রপার্টি থাকবে এবং তাদের টাইপ কী হবে।
interface User {
  name: string;
  age: number;
}

const person: User = {
  name: "Rahim",
  age: 25
};
 ব্যবহার :
অবজেক্ট/ক্লাসের স্ট্রাকচার নির্ধারণ করতে
ভবিষ্যতে স্ট্রাকচার বাড়াতে চাইলে (declaration merging)

Type alias হলো একটি টাইপের জন্য নতুন নাম। এটি primitive, union, tuple, object—সবকিছুই represent করতে পারে।
type Status = "active" | "inactive";
let currentStatus: Status = "active";
ব্যবহার 
union টাইপ তৈরিতে
tuple বা জটিল টাইপে
primitive + object একসাথে টাইপ করতে


The keyof keyword TypeScript-এ ব্যবহার করা হয় কোনো object type-এর সবগুলো key কে একটি union type হিসেবে বের করে আনতে।

এটা মূলত বলে:
 “এই টাইপের মধ্যে যে প্রপার্টিগুলো আছে, সেগুলোর নামগুলোই টাইপ হবে।

  ব্যবহার:
Object-এর key টাইপ হিসেবে লাগলে
Object-ভিত্তিক validation করতে
Generic function-এ key সীমাবদ্ধ করতে

interface User {
  name: string;
  age: number;
  isActive: boolean;
}

type UserKeys = keyof User;

এখন UserKeys এর মান হবে:
// "name" | "age" | "isActive"
ব্যবহারিক উদাহরণ
function getValue<T>(obj: T, key: keyof T) {
  return obj[key];
}

const user = {
  name: "Rony",
  age: 22
};

const result = getValue(user, "name"); // valid
// const result2 = getValue(user, "email"); ❌ error: not a key of user
এখানে কী হলো
key: keyof T — মানে key অবশ্যই obj-এর একটার নাম হতে হবে
তাই ভুল key দিলে TypeScript error দেখাবে
keyof = "এই object-এর property নামগুলোর union type"
সহজ, কিন্তু শক্তিশালী!