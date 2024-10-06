'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'; 

const SidebarWrapper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    
    setIsOpen(true);
  }, []);

  return <Sidebar isOpen={isOpen} />;
};

export default SidebarWrapper;
