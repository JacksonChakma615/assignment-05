 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
How do you create and insert a new element into the DOM?
What is Event Bubbling and how does it work?
What is Event Delegation in JavaScript? Why is it useful?
What is the difference between preventDefault() and stopPropagation() methods?
 

1.Q.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans: getElementById → এটি একটি নির্দিষ্ট আইডি (ID) অনুযায়ী একটি মাত্র এলিমেন্ট খুঁজে বের করে।

getElementsByClassName → এটি একই ক্লাস নাম থাকা একাধিক এলিমেন্ট খুঁজে বের করে এবং একটি তালিকার মতো রিটার্ন করে।

querySelector → এটি CSS সিলেক্টর ব্যবহার করে প্রথম যে এলিমেন্টটি পাওয়া যায় সেটি রিটার্ন করে।

querySelectorAll → এটি CSS সিলেক্টর ব্যবহার করে সব মিলিয়ে যেসব এলিমেন্ট পাওয়া যায়, সেগুলোর একটি তালিকা রিটার্ন করে।



2.Q.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans: প্রথমে একটি নতুন element তৈরি করতে হয়, তারপর সেটির ভেতরে লেখা বা অ্যাট্রিবিউট দেওয়া যায়। এরপর সেটিকে যেকোনো parent element-এর মধ্যে যুক্ত করা যায়। 


3.Q.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans: Event Bubbling হলো এমন একটি প্রক্রিয়া যেখানে কোনো চাইল্ড এলিমেন্টে ইভেন্ট ঘটলে সেটা ধাপে ধাপে তার parent, grandparent হয়ে ডকুমেন্ট পর্যন্ত চলে যায়। 


4.Q.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans: Event Delegation হলো একটি কৌশল যেখানে একাধিক চাইল্ড এলিমেন্টে আলাদা ইভেন্ট বসানোর বদলে একটি parent এলিমেন্টে ইভেন্ট বসানো হয়। তারপর কোন চাইল্ডে ক্লিক হয়েছে বা ইভেন্ট ঘটেছে সেটা parent থেকেই বোঝা যায়।
এটি উপকারী কারণ এতে কম কোড লাগে, মেমোরি কম খরচ হয় এবং পরে নতুন এলিমেন্ট যুক্ত হলেও আলাদা করে ইভেন্ট বসাতে হয় না।


5.Q.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans: preventDefault() → কোনো এলিমেন্টের ডিফল্ট কাজ বন্ধ করে দেয়। যেমন, লিঙ্কে ক্লিক করলে সেটি যাতে অন্য পেজে না যায়।

stopPropagation() → ইভেন্ট যাতে বাবল হয়ে parent বা তার উপরের এলিমেন্টে না পৌঁছায়, সেটা থামিয়ে দেয়।
