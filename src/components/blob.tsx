import React, { useEffect } from 'react';

const Blob: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const blob = document.getElementById('blob');
      if (blob) {
        blob.style.left = `${event.pageX}px`;
        blob.style.top = `${event.pageY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      id="blob"
      className="pointer-events-none fixed z-50 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-non_photo_blue-400 transition-transform duration-100"
    ></div>
  );
};

export default Blob;
