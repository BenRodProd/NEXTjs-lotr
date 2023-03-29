import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";
export default function Volume1() {
  const volume1Data = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  console.log(volume1Data);
  return (
    <>
      <h1>{volume1Data.title}</h1>
      <p>{volume1Data.description}</p>
      <ul>
        {volume1Data.books.map((book, index) => (
          <li key={index}>
            {console.log(book.ordinal, book.title)}
            {book.ordinal} {book.title}
          </li>
        ))}
      </ul>
      <Image src={volume1Data.cover} alt="Cover" width="140" height="230" />
      <div>
        <Link href="../volumes">Back to All Volumes</Link>
        <p>
          <Link href="./the-two-towers">PREV</Link>
        </p>
      </div>
    </>
  );
}
