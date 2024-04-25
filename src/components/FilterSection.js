import React from 'react';
import { TextField, Checkbox, FormControlLabel, Typography } from '@mui/material';

const FilterSection = () => {

    const items = [
        { name: 'Healthcare', icon: 'note.png' },
        { name: 'Materials', icon: 'note.png' },
        { name: 'Energy', icon: 'note.png' },
        { name: 'Consumer Discretionery', icon: 'note.png' },
        { name: 'Consumer Stapies', icon: 'note.png' },
        { name: 'Real Estate', icon: 'note.png' },
        { name: 'IT', icon: 'note.png' },
        { name: 'Communication', icon: 'note.png' },
        { name: 'Industrials', icon: 'note.png' },
        { name: 'Utilities', icon: 'note.png' },
        { name: 'Financies', icon: 'note.png' }
      ];

  return (
    <div>
        <div className='row'>
            <div class="left-text">Filters Applied</div>
            <div class="right-text">Clear All</div>
        </div>
        <div class="row">
            <div class="filtersApplied">
                <div class="new-text">
                    Real Estate X
                </div>
                <div class="new-text">
                Energy X
                </div>
            </div>
        </div>
        <div className='filtercontainer'>
            <div className='row' style={{marginTop: '8px'}}>
                <div class="left-text" style={{fontWeight: 'bold', color: 'white'}}>Industry</div>
            </div>

            <div className='row' style={{marginTop: '8px'}}>
                <div className="column">
                    {items.slice(0, 6).map((item, index) => (
                    <div key={index} className="item">
                        <img src={require(`../icons/${item.icon}`)} alt={item.name} className="item-icon" />
                        <span className="item-text">{item.name}</span>
                    </div>
                    ))}
                </div>
                <div className="column">
                    {items.slice(6, 12).map((item, index) => (
                    <div key={index} className="item">
                        <img src={require(`../icons/${item.icon}`)} alt={item.name} className="item-icon" />
                        <span className="item-text">{item.name}</span>
                    </div>
                    ))}
                </div>
            </div>

        </div>

        <div className='radiocontainer'>
            <div className='row' style={{marginTop: '8px'}}>
                <div class="left-text" style={{fontWeight: 'bold', color: 'white', marginLeft: '10px'}}>Market Cap</div>
                <div class="right-text" style={{fontWeight: 'bold', color: 'white', marginRight: '10px'}}>Risk Level</div>
            </div>
            <div className='row' style={{marginTop: '8px'}}>
                <div className="column">
                    <div className="item">
                        <input type="radio" name="industry" className="radio-button" />
                        <label  className="radio-item-text">Micro</label>
                    </div>
                    <div className="item">
                        <input type="radio" name="industry" className="radio-button" />
                        <label  className="radio-item-text">Small</label>
                    </div>
                    <div className="item">
                        <input type="radio" name="industry" className="radio-button" />
                        <label  className="radio-item-text">Large</label>
                    </div>
                </div>
        
                <div className="column">
                    <div className="item">
                        <input type="radio" name="industry" className="radio-button" />
                        <label  className="radio-item-text">High Risk</label>
                    </div>
                    <div className="item">
                        <input type="radio" name="industry" className="radio-button" />
                        <label  className="radio-item-text">Mid Risk</label>
                    </div>
                    <div className="item">
                        <input type="radio" name="industry" className="radio-button" />
                        <label  className="radio-item-text">Low Risk</label>
                    </div>
                </div>
            </div>

        </div>

        <div className="apply-button">
    <button className="apply-button">Apply</button>
</div>
        
        
    </div>

  );
}

export default FilterSection;
