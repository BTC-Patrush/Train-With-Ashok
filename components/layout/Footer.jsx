// components/Footer.jsx

// 1. IMPORT brand icons from the Bootstrap Icons subset (bs) via react-icons
import { 
  BsFacebook, 
  BsInstagram, 
  BsYoutube, 
  BsTiktok 
} from 'react-icons/bs'; 

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-gray-500">
        
        {/* Branding */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p className="text-xl font-extrabold text-lime-electric mb-2">
            PROTOCOL/FIT
          </p>
          <p className="text-sm">
            &copy; 2025 Performance Coaching. All rights reserved.
          </p>
        </div>

        {/* Social Icons + Utility Links */}
        <div className="flex flex-wrap items-center space-x-6">
          
          {/* Facebook (Bootstrap Icon) - w-5 h-5 */}
          <a 
            href="YOUR_FACEBOOK_URL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-lime-electric transition duration-200" 
            aria-label="Facebook"
          >
            <BsFacebook className="w-5 h-5" />
          </a>

          {/* Instagram (Bootstrap Icon) - w-5 h-5 */}
          <a 
            href="YOUR_INSTAGRAM_URL" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram" 
            className="text-gray-400 hover:text-lime-electric transition duration-200"
          >
            <BsInstagram className="w-5 h-5" />
          </a>
          
          {/* YouTube (Bootstrap Icon) - w-5 h-5 */}
          <a
            href="YOUR_YOUTUBE_URL"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-lime-electric transition duration-200"
            aria-label="YouTube"
          >
            <BsYoutube className="w-5 h-5" />
          </a>

          {/* TikTok (Bootstrap Icon) - w-5 h-5 */}
          <a
            href="YOUR_TIKTOK_URL"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-lime-electric transition duration-200"
            aria-label="TikTok"
          >
            <BsTiktok className="w-5 h-5" /> 
          </a>

          {/* Utility Links */}
          <a
            href="#"
            className="text-gray-400 hover:text-lime-electric transition duration-200 text-sm"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-lime-electric transition duration-200 text-sm"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}