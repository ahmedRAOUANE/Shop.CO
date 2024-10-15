"use client";

import { Range, getTrackBackground } from 'react-range';
import React, { useState } from 'react';

const PriceRange = () => {
    const [values, setValues] = useState([2500, 3500]);
    const STEP = 1;
    const MIN = 0;
    const MAX = 5000;

    return (
        <div className="price-range full-width">
            <h3>Price</h3>

            <Range
                values={values}
                step={STEP}
                min={MIN}
                max={MAX}
                onChange={(values) => setValues(values)}

                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                    >
                        <div
                            ref={props.ref}
                            className='box small'
                            style={{
                                position: 'relative',
                                height: '8px',
                                background: getTrackBackground({
                                    values,
                                    colors: ['#ddd', 'var(--black-color)', '#ddd'],
                                    min: MIN,
                                    max: MAX,
                                }),
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}

                renderThumb={({ props }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '20px',
                            width: '20px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--black-color)',
                            border: '1px solid var(--white-color)',
                            position: 'absolute',
                            top: '0',
                        }}
                    >
                    </div>
                )}
            />

            <div className="price-values box">
                <span>${values[0]}</span>
                <span>${values[1]}</span>
            </div>
        </div>
    );
};

export default PriceRange;
