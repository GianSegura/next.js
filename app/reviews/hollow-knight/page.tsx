import Heading from "@/components/Heading";

export default function HollowKnightPage() {
    console.log('No Carga el SRC');
  return (
    <>
      <Heading>HollowKnight Page</Heading>
      <img
        src="/images/hollow-knight.jpg"
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />
    </>
  );
}
