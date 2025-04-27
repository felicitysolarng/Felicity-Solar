
import type { Metadata } from 'next'
//import Link from "next/link";


export const metadata: Metadata = {
  title: 'Home - Felicity Solar',
  description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
}

export default function Home() {
  return (
    <div className="w-[90%] mx-auto font-[family-name:var(--font-inter)]">
      <h1>Homepage</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi saepe totam, qui id a cupiditate temporibus officiis sit illo non magnam quos voluptate voluptatem, iure quam laborum soluta quod molestias. Blanditiis iste error dolore nemo, commodi veritatis officia totam fugiat mollitia, quam ad, ratione non earum facilis magni repellendus impedit!</p>
    </div>
  );
}
