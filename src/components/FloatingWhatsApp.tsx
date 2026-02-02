const WHATSAPP_URL = 'https://wa.me/917338969903?text=Hello%21%20I%20would%20like%20to%20inquire%20about%20Krishna%20Aqua%20Distilled%20Water';

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    className="w-8 h-8 text-white"
  >
    <path d="M16.004 0C7.164 0 0 7.163 0 16c0 2.824.736 5.575 2.136 8.003L0 32l8.239-2.098A15.93 15.93 0 0 0 16.004 32C24.844 32 32 24.837 32 16S24.844 0 16.004 0zm0 29.396a13.36 13.36 0 0 1-6.806-1.859l-.488-.29-5.06 1.326 1.35-4.929-.318-.506a13.33 13.33 0 0 1-2.046-7.138c0-7.389 6.014-13.403 13.403-13.403S29.44 8.611 29.44 16c0 7.389-6.049 13.396-13.436 13.396zm7.344-10.033c-.402-.201-2.379-1.174-2.748-1.308-.369-.134-.637-.201-.906.201-.268.402-1.04 1.308-1.275 1.577-.235.268-.47.302-.872.101-.402-.201-1.697-.625-3.232-1.993-1.195-1.065-2.002-2.38-2.236-2.782-.235-.402-.025-.619.176-.82.181-.18.402-.47.604-.705.201-.235.268-.402.402-.67.134-.268.067-.503-.034-.705-.1-.201-.905-2.18-1.24-2.984-.327-.784-.659-.678-.906-.69l-.772-.014a1.48 1.48 0 0 0-1.073.503c-.369.402-1.408 1.376-1.408 3.355s1.442 3.891 1.643 4.16c.201.268 2.837 4.333 6.875 6.075.961.415 1.711.662 2.295.848.964.307 1.842.264 2.536.16.774-.116 2.379-.973 2.715-1.912.335-.939.335-1.743.235-1.912-.101-.168-.369-.268-.771-.469z" />
  </svg>
);

const FloatingWhatsApp = () => {

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
};

export default FloatingWhatsApp;
