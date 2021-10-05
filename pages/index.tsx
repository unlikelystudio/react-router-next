import React from "react";
import NextLink from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <NextLink href="/">Home</NextLink>
        </li>
        <li>
          <NextLink href="/spa/about">About</NextLink>
        </li>
        <li>
          <NextLink href="/spa/topics">Topics</NextLink>
        </li>
        <li>
          <NextLink href="/settings">Settings (SSR)</NextLink>
        </li>
      </ul>
      Home
    </div>
  );
}
