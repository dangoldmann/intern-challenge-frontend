import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex px-6 min-[470px]:px-10 lg:px-20 py-3 md:py-5 border-b justify-end min-[470px]:justify-between items-center w-full">
      <Link
        href="/"
        className="text-theme text-3xl font-bold hidden min-[470px]:block"
      >
        oneseven.
      </Link>
      <Link
        href="/write"
        className="flex bg-theme text-white items-center space-x-2 font-medium rounded-lg px-3 py-2 hover:brightness-95"
      >
        <PlusIcon className="h-4 w-4 min-[470px]:h-5 min-[470px]:w-5" />
        <span className="font-semibold text-sm min-[470px]:text-base">
          Create new blog
        </span>
      </Link>
    </header>
  );
}
