import { useState } from "react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "workwithvikrant0111@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
      onClick={copyToClipboard}
    >
      {copied ? (
        <p className="flex items-center justify-center gap-2">
          <img src="assets/copy-done.svg" alt="copy done" className="w-5" />
          Email has copied
        </p>
      ) : (
        <p className="flex items-center justify-center gap-2">
          <img src="assets/copy.svg" alt="copy icon" className="w-5" />
          Copy Email Address
        </p>
      )}
    </button>
  );
};

export default CopyEmailButton;
