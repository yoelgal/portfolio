import React, {useEffect} from 'react';

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
          className="z-50 w-4 h-4 bg-non_photo_blue-400 rounded-full fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
      ></div>
  );
};

export default Blob;
