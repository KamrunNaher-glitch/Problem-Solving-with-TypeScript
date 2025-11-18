টাইপস্ক্রিপ্ট লেখার সময়, আপনি প্রায়শই দুটি জিনিস দেখতে পাবেন: ইন্টারফেস এবং টাইপ। উভয়ই ডেটার আকৃতি বা কাঠামো নির্ধারণ করতে ব্যবহৃত হয়, কিন্তু তারা ঠিক একই নয়। এখানে মূল পার্থক্য রয়েছে:

Iইন্টারফেসএকটি ইন্টারফেস একটি বস্তুর জন্য একটি ব্লুপ্রিন্টের মতো৷ এটি টাইপস্ক্রিপ্টকে বলে একটি বস্তুর কী কী বৈশিষ্ট্য থাকতে হবে এবং তাদের প্রকারগুলি কী হবে৷
 উদাহরণ
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
ভবিষ্যতে স্ট্রাকচার বাড়াতে চাইলে 

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

