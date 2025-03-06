import { ReactNode } from 'react';

export declare const CopyButton: ({ label, buttonClassName, logoClassName, textToCopy, disabled, }: {
    label: ReactNode;
    textToCopy: () => string;
    buttonClassName?: string;
    logoClassName?: string;
    disabled?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
