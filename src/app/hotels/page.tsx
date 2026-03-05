import { Suspense } from "react";
import HotelsContent from "./HotelsContent";

export default function HotelsPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading hotels...</div>}>
      <HotelsContent />
    </Suspense>
  );
}






