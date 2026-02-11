import React, { memo } from 'react';

// Inline ShinyButton
interface ShinyButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

const ShinyButton: React.FC<ShinyButtonProps> = memo(({ children, onClick, disabled, className = "" }) => {
    return (
        <button
            className={`shiny-cta ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            <span>{children}</span>
        </button>
    );
});

ShinyButton.displayName = 'ShinyButton';

export default ShinyButton;
