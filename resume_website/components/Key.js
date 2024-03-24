import { useState, useEffect } from 'react';
import KeySVG from '../public/KeyCircle.svg';
import Image from 'next/image';
import KeyPressedSvg from '../public/KeyPressed.svg';
import { Space_Mono } from 'next/font/google'


const spaceMono = Space_Mono({weight: '400', subsets:['latin']});

function KeyComponent({ label, isPressed }) {
    const containerStyle = {
        position:'relative',
        display: 'inline-block'
    }
    const textStyle = {
        position: 'absolute',
        color:'#6EB6E5',
        fontSize: '60px',
        top: '0%',
        left: '32%',
    }
    return (
        
        <div style={containerStyle}>
            {isPressed ? <Image src={KeyPressedSvg} alt="Key" width={100} height={100} /> : <Image src={KeySVG} alt="Key" width={100} height={100} />  }
            <p className={spaceMono.className} style={textStyle}>{label}</p>
        </div>
    );
  }

export default KeyComponent;