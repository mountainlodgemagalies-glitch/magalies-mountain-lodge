"use client";

import { useEffect } from "react";

interface NightsBridgeWidgetProps {
  bbid?: string;
}

export function NightsBridgeWidget({ bbid = "YOUR_BBID_HERE" }: NightsBridgeWidgetProps) {
  useEffect(() => {
    // This is a placeholder for the NightsBridge script injection
    // In a real scenario, you'd inject their provided script tag here
    // e.g., <script src="https://www.nightsbridge.co.za/bridge/book?bbid=..."></script>
    console.log(`NightsBridge widget initialized for BBID: ${bbid}`);
  }, [bbid]);

  return (
    <div className="w-full bg-white p-6 border border-border rounded-none shadow-sm flex flex-col items-center justify-center min-h-[400px]">
      {/* Fallback or loading state while widget loads */}
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Secure Online Booking</h3>
        <p className="text-muted-foreground mb-6">Powered by NightsBridge</p>
        <div className="animate-pulse bg-muted w-[300px] h-[50px] rounded-none mb-4" />
        <div className="animate-pulse bg-muted w-[300px] h-[200px] rounded-none" />
      </div>
    </div>
  );
}
