import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Cyberpunk geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 animate-float-slow border border-cyan-400/30 transform rotate-45"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 animate-float-medium border-2 border-pink-400/30"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 animate-float-fast border border-cyan-400/30 rounded-full"></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 animate-float-slow border-2 border-pink-400/30 transform rotate-12"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-r from-cyan-400/30 to-pink-400/30 animate-float-medium border border-cyan-400/50"></div>
      <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-gradient-to-r from-pink-400/30 to-cyan-400/30 animate-float-fast border-2 border-pink-400/50 transform rotate-45"></div>
      
      {/* Neon orbs with cyberpunk glow */}
      <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-gradient-radial from-cyan-600/20 to-transparent rounded-full animate-pulse-slow border border-cyan-400/20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-radial from-pink-600/20 to-transparent rounded-full animate-pulse-medium border border-pink-400/20"></div>
      <div className="absolute top-3/4 left-1/3 w-28 h-28 bg-gradient-radial from-cyan-600/20 to-transparent rounded-full animate-pulse-fast border border-cyan-400/20"></div>
      
      {/* Matrix-style falling elements */}
      <div className="absolute top-0 left-1/4 w-1 h-20 bg-gradient-to-b from-cyan-400/50 to-transparent animate-matrix-fall"></div>
      <div className="absolute top-0 left-3/4 w-1 h-16 bg-gradient-to-b from-pink-400/50 to-transparent animate-matrix-fall-slow"></div>
      <div className="absolute top-0 right-1/3 w-1 h-24 bg-gradient-to-b from-cyan-400/50 to-transparent animate-matrix-fall-fast"></div>
      
      {/* Cyberpunk grid lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-pink-400/30 to-transparent animate-pulse"></div>
      
      {/* Holographic panels */}
      <div className="absolute top-32 right-32 w-32 h-20 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-cyan-400/30 animate-float-slow transform skew-x-12 backdrop-blur-sm"></div>
      <div className="absolute bottom-32 left-32 w-28 h-16 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-pink-400/30 animate-float-medium transform -skew-x-12 backdrop-blur-sm "></div>
    </div>
  );
};

export default FloatingElements;