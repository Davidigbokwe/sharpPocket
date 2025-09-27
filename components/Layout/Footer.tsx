export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
  <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <span className="w-40 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
                <img src="/sharp_pocket.png" alt="Sharp Pocket Logo" width={128} height={40} className="object-contain" />
              </span>
            </div>
            <p className="text-gray-400">© {new Date().getFullYear()} Hallatech. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="mailto:support@hallatech.com" className="text-gray-400 hover:text-white transition-colors">support@hallatech.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};