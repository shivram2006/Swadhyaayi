import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  leftIcon,
  rightIcon,
  className,
  id,
  ...props
}) => {
  const inputId = id || props.name || Math.random().toString(36).substring(2, 9);

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-xs font-medium text-[#a1a1a6] mb-1.5">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute left-3 flex items-center pointer-events-none text-[#85858b]">
            {leftIcon}
          </div>
        )}
        <input
          id={inputId}
          className={twMerge(
            clsx(
              'w-full bg-[#0f0f10] border border-white/[0.08] rounded-lg text-sm text-[#ededed] placeholder-[#85858b] h-10 px-3.5 transition-colors focus:outline-none focus:border-white/[0.24] disabled:opacity-50',
              leftIcon && 'pl-9',
              rightIcon && 'pr-9',
              error && 'border-[#e5484d] focus:border-[#e5484d]',
              className
            )
          )}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 flex items-center text-slate-500">
            {rightIcon}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-xs text-rose-400">{error}</p>}
    </div>
  );
};
