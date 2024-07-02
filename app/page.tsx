import Image from "next/image";

export default function Home() {
  return (
    <div className="main">
      <blockquote className="m-5 mt-20">
        <p className="p-4 bg-gray-600 text-3xl rounded-md before:content-['\201C'] after:content-['\201D']">
          aloalomac.com(alo alo mac) is coming soon...
        </p>
        <footer className="mt-2">—Aloha Mac, <cite><a href="https://www.facebook.com/bohsiang111" target="_blank">FB: <span className="underline">Aloha Ln</span></a></cite></footer>
      </blockquote>

    </div>
  );
}
