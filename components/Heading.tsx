import { raleway } from "@/app/fonts";

export default function Heading({ children }) {
  return <h1 className={`font-bold pb-3 text-2xl ${raleway.className}`}>{children}</h1>;
}
