"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-destructive mb-4">!</h1>
          <h2 className="text-2xl font-bold text-foreground mb-4">Something went wrong</h2>
          <p className="text-muted-foreground mb-8">
            We apologize for the inconvenience. Please try again or contact us if the problem persists.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={reset}
              className="bg-primary hover:bg-primary/90 text-white rounded-none tracking-widest px-8"
            >
              TRY AGAIN
            </Button>
            <Link href="/">
              <Button variant="outline" className="border-primary text-primary rounded-none tracking-widest px-8">
                GO HOME
              </Button>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
