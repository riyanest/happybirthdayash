import React from 'react';
import { Heart, Users } from 'lucide-react';
import { MessageItem } from './types';
import HeroBanner from './components/HeroBanner';
import IntermissionDivider from './components/IntermissionDivider';
import MessageSection from './components/MessageSection';
import TextMarquee from './components/TextMarquee'; // Import your new carousel

export default function BirthdayProject() {
  const familyMessages: MessageItem[] = [
    { name: "Mummy", relation: "The Directors of Life", msg: "Mera beta meri hothon ki hansi hai ❤️.", img: "/mummy.jpeg" },
    { name: "Daddy", relation: "The Directors of Life", msg: "Mera beta mere dil ki dhadkan hai.", img: "/Daddy.jpeg" },
    { name: "Usha", relation: "Co-Writer since Day 1", msg: "Having my brother in my life means having a constant source of support, understanding, laughter, and unconditional love shown through gifting rather than words.", img: "/usha.jpeg" },
    { name: "Sony pinni", relation: "The Joey to my Chandler", msg: "He is my Bodybulider 💪" },
    { name: "Upendra babay", relation: "The Joey to my Chandler", msg: "You will always be like my own child, and my love and prayers are always with you."},
    { name: "⁠Raju babay", relation: "The Joey to my Chandler", msg: "Seeing you happy brings happiness to my heart, and I always pray for your success."},
    { name: "⁠Shridhar babay", relation: "The Joey to my Chandler", msg: "No matter how old you grow, you will always have my love, care, and blessings."},
    { name: "Shekhar babay", relation: "The Joey to my Chandler", msg: "No matter how old you grow, you will always have my love, care, and blessings."},
    { name: "Sangeeta pinni", relation: "The Joey to my Chandler", msg: "Your love, kindness, and support make our family stronger every single day."},
    { name: "Hema pinni", relation: "The Joey to my Chandler", msg: "You always take care of everyone, and we are lucky to have you."},
    { name: "Aruna pinni", relation: "The Cinephile Crew", msg: "You are the biggest support of our family." },
  ];

  const friendMessages: MessageItem[] = [

    { name: "Nitish", relation: "The Co-Actor In Life", msg: "Having Punna in my life is like having a Joey to my Chandler because I can always count on him 🥰 and also because he is the dumb one", img: "/friend1.jpeg" },
    { name: "Viraj", relation: "The Co-Actor in Life", msg: "Aata ha motha houn surya honar ka?? A personal cure for depression. Whenever I feel low/depressed, I call him. For a moment I just let go of my worries, listen to his stories and enter the magical world of Punna. He's not my friend, he's my brother♥️", img: "/viraj.jpeg" },
    { name: "Mane", relation: "The Co-Actor in Life", msg: "    We never really had serious conversations, but saying goodbye to you at airport was one of the hardest conversations I had with myself.", img: "/mane.jpeg" },
   { name: "Riya", relation: "The Co-Actor in Life", msg: "To the person who feels like home & adventure all at the same time. Cheers to the incredible man that you are!! May this year bring you everything your heart desires, because no one deserves it more than you.", img: "/riya.jpeg" },
    { name: "Rahul", relation: "The Co-Actor in Life", msg: "Happy Birthday, Yash! (Mashked)🎉 Wishing you an amazing day filled with happiness, laughter, and great memories. You’re not just a friend, you’re like family always there, always supportive, and always bringing good vibes. I’m really lucky to have you as my best friend. May this year bring you success, good health, and everything you’ve been working for. Let’s keep making more unforgettable moments together. 🚗✨", img: "/rahul.jpeg" },
    { name: "Deepak", relation: "The Co-Actor in Life", msg: "    Having Yash in my life 🤔 It feels pretty good 😌 having him in my life bcs i know whenever life gives me a kick 🦵he will be there next to me 👬 It feels pretty good 😌 to have him in my life bcs i know whenever i need money 💰 he would lend me a hand 🫲 It feels pretty good 😌 having him in my life bcs i know whenever i need to talk to someone 🗣️, he will be there to listen👂 It feels pretty good 😌 having him in my life bcs i know whenever i need to drink 🍺and have fun 😎, u will be beside me with a bottle in ur hand 🍻 Happy Birthday ra Yash 🎉🎂🎁" },
    { name: "Kartik", relation: "The Co-Actor in Life", msg: "Happy birthday, you magnificent silly fellow!", img: "/kartik.jpeg" },
    { name: "Ravi", relation: "The Cinephile Crew", msg: "Thanks for coming into my life man, because of you I again started drinking alcohol sulliga and from there my progress is lost. It’s fine we made lot of good memories together and hope we make some more memories in the future. Stop thinking a lot and start speaking out. I can’t say much in my text. I can only express my feelings in the text for my girlfriend. So this is what  I got in my mind for you. Happy birthday ganduu hope you achieve everything in the life you wanted tooo ❤️🫂", img: "/ravi.jpeg" },
    { name: "Akash(Sky)", relation: "The Cinephile Crew", msg: "Some memories from the “Shanti Kaksh” are secrets that only Yash and I share.", },
    { name: "Ananya", relation: "The Cinephile Crew", msg: "Happy Birthday! May your 27th year have the scale of a Tollywood blockbuster and the heart of a classic.", img: "/api/placeholder/800/500" },
    { name: "Sakshi", relation: "The Co-Actor in Life", msg: "I’d say uyi amma!! But trust me having you was like getting the older brother I never had,annoying at times but somehow always there at the right time 🫶 strain Happy Birthday yassshhh!!", img: "/sakshi.jpeg" },
    { name: "Payal", relation: "The Co-Actor in Life", msg: "Yash somehow manages to be annoying and dependable at the same time.", img: "/payal.jpeg" },
    { name: "Shamita", relation: "The Co-Actor in Life", msg: "Having yash in my life is like behind the scene cameras that catches me at my embarrassing moments🤣", img: "/shamita.jpeg" },
    { name: "AAshka", relation: "The Co-Actor in Life", msg: "Having Yash in my life is basically like having an older brother that you just keep fighting with and bantering with. Always making fun of each other and playfully fighting but deep down we also know that we can always rely on each other 🥰🫶🏻", img: "/aashka.jpeg" },
    { name: "Sneha", relation: "The Co-Actor in Life", msg: "", img: "/sneha.mp4" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F5F5F7] font-sans selection:bg-[#E5A93C] selection:text-black overflow-x-hidden">
      
      <HeroBanner />

      <MessageSection 
        title="The One Called Home"
        subtitle="// The foundation, the anchor, the core cast"
        actLabel="ACT I"
        Icon={Heart}
        messages={familyMessages}
      />

      <IntermissionDivider />

      <MessageSection 
        title="The One Where Ordinary Days Became Stories"
        subtitle="// Co-stars, plot twists, and late-night edits"
        actLabel="ACT II"
        Icon={Heart}
        messages={friendMessages}
      />



      <footer className="border-t border-zinc-900 bg-black py-12 text-center text-xs text-zinc-600 font-mono tracking-widest">
        <p>© 2026 YASH PRODUCTION. ALL RIGHTS RESERVED.</p>
        <p className="mt-2 text-[#E5A93C]/60 text-[10px]">DIRECTED WITH LOVE BY FAMILY & FRIENDS</p>
      </footer>

    </div>
  );
}