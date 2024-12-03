import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row justify-between w-60">
      <Link href="/dashboard" className="bg-blue-500 py-2 px-4">Dashboard</Link>
      <Link href="/dashboard2" className="bg-blue-500 py-2 px-4">Dashboard 2</Link>
      <Link href="/dashboard3?id=33" className="bg-blue-500 py-2 px-4">Dashboard 3</Link>
    </div>
  );
}
