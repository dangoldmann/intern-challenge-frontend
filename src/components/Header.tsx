import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex px-20 py-5 border-b justify-between items-center w-full">
      <Link href="/" className="text-theme text-3xl font-bold">
        oneseven.
      </Link>
      <Link
        href="/write"
        className="flex bg-theme text-white items-center space-x-2 font-medium rounded-lg px-3 py-2 hover:brightness-95"
      >
        <PlusIcon className="h-5 w-5" />
        <span className="font-semibold">Creat new blog</span>
      </Link>
    </header>
  );
}
