import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 md:text-lg -mt-5 hover:underline"
    >
      <ArrowLeftIcon className="h-4 w-4 md:h-5 md:w-5" />
      Go back home
    </Link>
  );
}
