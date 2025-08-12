
"use client";

import './ShinyText.css';
import { cn } from '@/lib/utils';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' } : {text: string, disabled?: boolean, speed?: number, className?: string}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={cn(`shiny-text`, { 'disabled': disabled }, className)}
      style={{ animationDuration } as React.CSSProperties}
    >
      {text}
    </div>
  );
};

export default ShinyText;
