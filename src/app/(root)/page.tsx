import Image from "next/image";
import Greet from "../components/Greet";

export default function Home() {
  console.log("hello");

  return (
    <>
      <h1 className="text-3xl">welcome</h1>
      <Greet />
    </>
  );
}
