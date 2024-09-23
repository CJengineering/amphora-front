"use client";
import { getLocalStorage, setLocalStorage } from "@/app/lib/functions/storageHelper";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  // Add 'undecided' as the initial state, so the banner shows if no decision has been made
  const [cookieConsent, setCookieConsent] = useState<"undecided" | boolean>("undecided");

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", "undecided");
    
    // Ensure the stored value is 'true', 'false', or 'undecided'
    if (storedCookieConsent === "true") {
      setCookieConsent(true);
    } else if (storedCookieConsent === "false") {
      setCookieConsent(false);
    } else {
      setCookieConsent("undecided"); // if no stored consent, set to 'undecided'
    }
  }, []);

  useEffect(() => {
    if (cookieConsent !== "undecided") {
      const newValue = cookieConsent ? "granted" : "denied";

      // Update Google Analytics consent
      window.gtag("consent", "update", {
        analytics_storage: newValue,
      });

      // Store the user's cookie consent choice in localStorage
      setLocalStorage("cookie_consent", cookieConsent.toString());
    }
  }, [cookieConsent]);

  // If user hasn't made a decision yet, show the banner
  if (cookieConsent === "undecided") {
    return (
      <div
        className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                  fixed bottom-0 left-0 right-0 md:left-auto md:right-12
                  flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                  bg-gray-700 z-50
                  `}
      >
        <div className="text-center text-white">
          <Link href="/info/cookies">
            <p className="text-sm">
              We use <span className="font-bold text-sky-400 text-sm">cookies</span> on
              our site.
            </p>
          </Link>
        </div>

        <div className="flex gap-2">
          <button
            className="px-5 py-2 text-gray-300 border-gray-900 text-sm"
            onClick={() => setCookieConsent(false)}
          >
            Decline
          </button>
          <button
            className="bg-gray-900 px-5 py-2 text-white-200 text-white text-sm"
            onClick={() => setCookieConsent(true)}
          >
            Allow Cookies
          </button>
        </div>
      </div>
    );
  }

  // If the user has made a decision (either accepted or declined), don't show the banner
  return null;
}
