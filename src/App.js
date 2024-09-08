import React, { useRef, useState, useEffect } from 'react';
import './App.css'; // Importing the CSS file

function App() {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    // Update dimensions on mount and on resize
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="App">
      <div
        ref={containerRef}
        className="container"
      >
        <p>
          Width: {dimensions.width}px<br />
          Height: {dimensions.height}px
        </p>
      </div>
    </div>
  );
}

export default App;
