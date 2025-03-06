import { AnnotatedBase, Annotation, AriadneSelection, StackedAnnotation } from '../types';

export declare const SequenceViewer: ({ sequences, annotations, selection, setSelection, containerClassName, charClassName, selectionClassName, hideMetadataBar, noValidate, }: {
    sequences: string[];
    annotations: Annotation[];
    selection: AriadneSelection | null;
    setSelection: (selection: AriadneSelection | null) => void;
    containerClassName?: string;
    charClassName: ({ base, sequenceIdx, }: {
        base: AnnotatedBase;
        sequenceIdx: number;
    }) => string;
    selectionClassName?: string;
    hideMetadataBar?: boolean;
    noValidate?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export declare const SeqContent: ({ annotatedSequences, selection, setSelection, setHoveredPosition, setActiveAnnotation, stackedAnnotations, charClassName, selectionClassName, }: {
    annotatedSequences: AnnotatedBase[][];
    selection: AriadneSelection | null;
    setSelection: (selection: AriadneSelection | null) => void;
    setHoveredPosition: (position: number | null) => void;
    setActiveAnnotation: (annotation: Annotation | null) => void;
    stackedAnnotations: StackedAnnotation[];
    charClassName: ({ base, sequenceIdx, }: {
        base: AnnotatedBase;
        sequenceIdx: number;
    }) => string;
    selectionClassName?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const SeqMetadataBar: ({ hoveredPosition, activeAnnotation, annotatedSequences, charClassName, seqIdxToCopy, setSeqIdxToCopy, selection, className, }: {
    hoveredPosition: number | null;
    activeAnnotation: Annotation | null;
    selection: AriadneSelection | null;
    annotatedSequences: AnnotatedBase[][];
    seqIdxToCopy: number;
    setSeqIdxToCopy: (idx: number) => void;
    charClassName: ({ base, sequenceIdx, }: {
        base: AnnotatedBase;
        sequenceIdx: number;
    }) => string;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const SequenceAnnotation: ({ annotations, maxAnnotationStack, index, setHoveredPosition, setActiveAnnotation, maxSequenceLength, }: {
    annotations: StackedAnnotation[];
    maxAnnotationStack: number;
    setHoveredPosition: (position: number | null) => void;
    setActiveAnnotation: (annotation: Annotation | null) => void;
    maxSequenceLength: number;
    index: number;
}) => import("react/jsx-runtime").JSX.Element;
interface CharProps {
    char: string;
    index: number;
    charClassName: string;
}
export declare const CharComponent: ({ char, charClassName }: CharProps) => import("react/jsx-runtime").JSX.Element;
export declare const CopyDisplay: ({ seqIdxToCopy, setSeqIdxToCopy, annotatedSequences, charClassName, selection, }: {
    seqIdxToCopy: number;
    setSeqIdxToCopy: (idx: number) => void;
    selection: AriadneSelection | null;
    annotatedSequences: AnnotatedBase[][];
    charClassName: ({ base, sequenceIdx, }: {
        base: AnnotatedBase;
        sequenceIdx: number;
    }) => string;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export {};
