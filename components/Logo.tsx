import { Heart } from "lucide-react";

export default function Logo() {
  return (
    <span className="inline-flex items-center gap-2 font-serif text-2xl tracking-[0.2em] text-primary">
      HAVEN
      <Heart className="h-3.5 w-3.5 fill-blush text-blush" aria-hidden />
    </span>
  );
}
