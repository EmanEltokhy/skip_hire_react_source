import React, { useState, useEffect } from 'react';
import SkipCarousel from './components/SkipCarousel';
import SkipService from './services/SkipService';
import './App.css';

function App() {
  const [skips, setSkips] = useState([]);
  const [selectedSkipId, setSelectedSkipId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        setLoading(true);
        const data = await SkipService.getAllSkips();
        setSkips(data);
        if (data.length > 0 && !selectedSkipId) {
          setSelectedSkipId(data[0].id);
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to load skip data. Please try again later.');
        setLoading(false);
        console.log('Error fetching skips:', err);
      }
    };

    fetchSkips();
  }, []);

  const handleSelectSkip = (skipId) => {
    setSelectedSkipId(skipId);
  };

  const handleContinue = () => {
    alert(`Selected skip ID: ${selectedSkipId}`);
  };

  const handleBack = () => {
    alert('Going back to previous step');
  };

  return (
    <div className="app">
      <div className="progress-indicators">
        <div className="progress-dot active"></div>
        <div className="progress-dot active"></div>
        <div className="progress-dot active current"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
        <div className="progress-dot"></div>
      </div>

      <header className="app-header">
        <h1>Choose Your Skip Size</h1>
        <h3>Select the skip size that best suits your needs</h3>
      </header>

      <main className="app-main">
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading skip options...</p>
          </div>
        ) : error ? (
          <div className="error-message">
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>Retry</button>
          </div>
        ) : (
          <SkipCarousel 
            skips={skips} 
            selectedSkipId={selectedSkipId} 
            onSelectSkip={handleSelectSkip} 
          />
        )}
      </main>

      <footer className="app-footer">
        <button className="back-button" onClick={handleBack}>Back</button>
        <button className="continue-button" onClick={handleContinue}>Continue</button>
      </footer>
    </div>
  );
}

export default App;
