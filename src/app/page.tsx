export default function Home() {
  return (
    <div className="container mx-auto px-4 flex items-center justify-center min-h-[70vh]">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-blue-500 opacity-10 blur-xl rounded-full"></div>
          <h1 className="relative text-5xl font-semibold text-neutral-800 mb-6">
            Site under (re)construction!
          </h1>
        </div>
        <p className="text-xl text-neutral-600 leading-relaxed">
          We&apos;re working on something exciting to serve you better. Our new website is coming soon with enhanced features and capabilities.
        </p>
        <div className="pt-8">
          <a
            href="mailto:info@isievetech.com"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
