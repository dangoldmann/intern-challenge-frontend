import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 text-lg -mt-8 hover:underline"
    >
      <ArrowLeftIcon className="h-5 w-5" />
      Go back home
    </Link>
  );
}
