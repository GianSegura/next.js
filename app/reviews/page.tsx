import Link from "next/link";
import Heading from "@/components/Heading";

export default function ReviewsPage() {
  return (
    <>
      <Heading>Reviews Page</Heading>
      <nav>
        <ul>
          <li>
            <Link href="/reviews/hollow-knight">Hollow-knight</Link>
          </li>
          <li>
            <Link href="/reviews/stardew-valley">
              Stardew-valley
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
