import Link from "next/link";
import Head from "next/head";
import { introduction } from "../lib/data";
export default function Volumes() {
  return (
    <>
      <Head>
        <title>LORD OF THE RINGS</title>
      </Head>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <p>_________________________________</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="./volumes/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="./volumes/the-two-towers">The two Towers</Link>
        </li>
        <li>
          <Link href="./volumes/the-return-of-the-king">
            The Return of the King
          </Link>
        </li>
      </ul>
    </>
  );
}
