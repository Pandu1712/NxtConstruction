import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/916303130025"  // your number
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6
        bg-green-600 hover:bg-green-700 
        text-white p-4 rounded-full shadow-xl 
        flex items-center justify-center
        transition-all duration-300
        z-50
      "
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
