import Link from "next/link";
import { volumes } from "../lib/data";
export default function NextBook(slug) {
  const current = volumes.findIndex((x) => x.slug === slug.slug.slug);
  if (current === volumes.length - 1) {
    return null;
  } else {
    return <span>{<Link href={volumes[current + 1].slug}>NEXT</Link>}</span>;
  }
}
