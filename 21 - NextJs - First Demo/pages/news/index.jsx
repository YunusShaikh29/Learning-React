import React from "react";
import Link from 'next/link'

const news = () => {
  return (
    <>
      <h1>This is the news page</h1>
      <ul>
        <li><Link href='/news/news1'>Next js is a great framework</Link></li>
        <li><Link href='/news/news2'>Something different</Link></li>
      </ul>
    </>
  );
};

export default news;
