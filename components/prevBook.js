import Link from "next/link";
import { volumes } from "../lib/data";
export default function PrevBook(slug) {
  const current = volumes.findIndex((x) => x.slug === slug.slug.slug);
  if (current === 0) {
    return null;
  } else {
    return <span>{<Link href={volumes[current - 1].slug}>PREV</Link>}</span>;
  }
}
