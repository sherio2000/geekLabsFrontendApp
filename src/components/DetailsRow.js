import React, { useState } from 'react';

const DetailsRow = ({ text1, text2, text3, text4 }) => {
  const [expanded, setExpanded] = useState(false); // State to track expansion

  // Toggle expansion state
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  // Determine text color based on the value of the third parameter
  const textColor = parseFloat(text3) < 0 ? 'red' : 'green';

  return (
    <div className={`detailsrow ${expanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
      <div className="column">
        <img src={require('../icons/price_tage_icon.png')} alt="Icon 1" className="icon" />
        <span className="text">{text1}</span>
      </div>
      <div className="separator"></div> {/* Separator */}
      <div className="column">
        <img src={require('../icons/note.png')} alt="Icon 2" className="icon" />
        <span className="text">{text2}</span>
      </div>
      <div className="separator"></div> {/* Separator */}
      <div className="column">
        <img src={require('../icons/trend.png')} alt="Icon 3" className="icon" />
        <span className="text" style={{ color: textColor }}>{text3}%</span>
      </div>
      <div className="separator"></div> {/* Separator */}
      <div className="column">
        <img src={require('../icons/money_bill.png')} alt="Icon 4" className="icon" />
        <span className="text">{text4}</span>
      </div>
      {/* Additional details shown when expanded */}
      {expanded && (
        <div className="additional-details">
          {/* Add additional details here */}
          <p>Additional details...</p>
        </div>
      )}
    </div>
  );
}

export default DetailsRow;
