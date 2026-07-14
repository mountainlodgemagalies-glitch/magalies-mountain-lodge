"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 ring-2 ring-white/20"
        aria-label="Open live chat"
      >
        {isOpen ? (
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        ) : (
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-[320px] sm:w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-white p-4">
            <h3 className="font-semibold text-lg">Chat with Us</h3>
            <p className="text-white/80 text-sm">We typically reply within minutes</p>
          </div>

          {/* Messages Area */}
          <div className="h-64 p-4 overflow-y-auto bg-stone-50">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 bg-white ring-1 ring-border">
                  <Image
                    src="/images/magalies-logo-vector.svg"
                    alt="Magalies Mountain Lodge"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain p-0.5"
                  />
                </div>
                <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm border border-border">
                  <p className="text-sm text-foreground">
                    Welcome to Magalies Mountain Lodge! How can we help you today?
                  </p>
                  <span className="text-xs text-muted-foreground mt-1 block">Just now</span>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (message.trim()) {
                  setMessage("");
                }
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="rounded-full bg-primary hover:bg-primary/90 text-white w-10 h-10"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
