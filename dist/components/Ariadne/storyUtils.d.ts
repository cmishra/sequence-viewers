import { Annotation } from './types';

export declare const generateRandomAnnotations: ({ sequence, maxAnnotations, annotationOnClick, }: {
    sequence: string;
    maxAnnotations: number;
    annotationOnClick?: (annotation: Annotation) => void;
}) => Annotation[];
export declare const generateRandomAlignedSequences: ({ maxSequences, maxLength, maxAnnotations, annotationOnClick, }: {
    maxSequences: number;
    maxLength: number;
    maxAnnotations?: number;
    annotationOnClick?: (annotation: Annotation) => void;
}) => {
    sequences: string[];
    annotations: Annotation[];
};
export declare const classNamesBySequenceIdx: ({ sequenceIdx, }: {
    sequenceIdx: number;
}) => {
    charClassName: string;
    selectionClassName: string;
};
