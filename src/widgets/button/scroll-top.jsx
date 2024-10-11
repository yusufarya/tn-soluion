import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid';
import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  // Show the button when the user scrolls down 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll smoothly to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
  };

  return (
    <div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed z-40 bottom-8 right-8 bg-white px-3 py-2.5 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors"
        >
            {React.createElement(ChevronDoubleUpIcon, { className: 'w-6 h-6 pb-1.5 inline-block text-blue-800 hover:text-white ' })}
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
