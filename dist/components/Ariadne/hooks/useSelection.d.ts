import { Coor } from '@Ariadne/types';
import { RefObject } from 'react';

export declare const useLinearSelectionRect: <T extends {
    getBoundingClientRect(): DOMRect;
    addEventListener: (type: string, listener: (e: MouseEvent) => void) => void;
    removeEventListener: (type: string, listener: (e: MouseEvent) => void) => void;
}>({ ref, onMouseUp, onMouseDown, onMouseMove, }: {
    ref: RefObject<T | null>;
    onMouseUp?: (payload: {
        start: Coor;
        end: Coor;
    }) => void;
    onMouseDown?: (payload: {
        start: Coor;
    }) => void;
    onMouseMove?: (payload: {
        start: Coor;
        end: Coor;
    }) => void;
}) => {
    start: {
        x: number;
        y: number;
    } | null;
    end: {
        x: number;
        y: number;
    } | null;
    direction: "reverse" | "forward";
};
export declare const useCircularSelectionRect: (ref: RefObject<SVGSVGElement | null>) => {
    start: {
        degrees: number;
        center: {
            x: number;
            y: number;
        };
    } | null;
    end: {
        degrees: number;
        center: {
            x: number;
            y: number;
        };
    } | null;
    direction: "clockwise" | "counterclockwise" | null;
};
