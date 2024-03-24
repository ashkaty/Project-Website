// components/LoadingScreen.js
import React from 'react';

const LoadingScreen = () => (
  <div className="h-screen bg-black text-green-400 font-mono p-5 text-left">
    <p className="animate-pulse animate-ellipsis">Initializing server</p>
    <p className="animate-pulse animate-ellipsis">Panicking immediately</p>
    <p className="animate-pulse animate-ellipsis">Is computation running infinitely</p>
  </div>
);

export default LoadingScreen;

