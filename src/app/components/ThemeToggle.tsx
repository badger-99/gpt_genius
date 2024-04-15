'use client';

import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { useState } from 'react';

const themes = {
  winter: 'winter',
  dark: 'dark',
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.dark);
  
  const toggleTheme = () => {
    const newTheme = theme === themes.dark ? themes.winter : themes.dark;
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };
  console.log(theme)

  return (
    <button onClick={toggleTheme} className='btn btn-sm btn-outline'>
      {theme === 'winter' ? (
        <BsMoonFill className='h-4 w-4 ' />
      ) : (
        <BsSunFill className='h-4 w-4' />
      )}
    </button>
  );
};

export default ThemeToggle;
