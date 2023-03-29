import Link from "next/link";

import { introduction } from "../lib/data";
export default function Volumes() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="./volumes/the-fellowship-of-the-rings">
            The Fellowship of the Rings
          </Link>
        </li>
        <li>
          <Link href="./volumes/the-two-towers">The two Towers</Link>
        </li>
        <li>
          <Link href="./volumes/the-return-of-the-kings">
            The Return of the King
          </Link>
        </li>
      </ul>
    </>
  );
}
