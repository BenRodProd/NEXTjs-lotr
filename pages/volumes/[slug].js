import { volumes } from "../../lib/data";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import NextBook from "../../components/nextBook";
import PrevBook from "../../components/prevBook";
import Head from "next/head";
export default function Volume1() {
  const router = useRouter();
  const extSlug = router.query;

  const volumeData = volumes.find(({ slug }) => slug === extSlug.slug);
  if (!volumeData) {
    return null;
  }
  return (
    <>
      <Head>
        <title>{volumeData.title}</title>
      </Head>
      <h1>{volumeData.title}</h1>
      <p>{volumeData.description}</p>
      <ul>
        {volumeData.books.map((book, index) => (
          <li key={index}>
            {book.ordinal} {book.title}
          </li>
        ))}
      </ul>
      <Image src={volumeData.cover} alt="Cover" width="140" height="230" />
      <div>
        <Link href="../volumes">Back to All Volumes</Link>
        <div className="nextPrev">
          <PrevBook slug={extSlug} /> <NextBook slug={extSlug} />
        </div>
      </div>
    </>
  );
}
