import { AnnotatedBase, AriadneSelection } from '../types';

declare const _default: {
    title: string;
    component: ({ sequences, annotations, selection, setSelection, containerClassName, charClassName, selectionClassName, hideMetadataBar, noValidate, }: {
        sequences: string[];
        annotations: import('../types').Annotation[];
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
};
export default _default;
export declare const OneSequence: () => import("react/jsx-runtime").JSX.Element;
export declare const TwoSequences: () => import("react/jsx-runtime").JSX.Element;
export declare const EightSequences: () => import("react/jsx-runtime").JSX.Element;
export declare const SequenceViewerStoryForwardSelectionOverSeam: () => import("react/jsx-runtime").JSX.Element;
export declare const SequenceViewerStoryReverseSelection: () => import("react/jsx-runtime").JSX.Element;
export declare const SequenceViewerStoryReverseSelectionOverSeam: () => import("react/jsx-runtime").JSX.Element;
export declare const SequenceViewerStoryCustomClassNames: () => import("react/jsx-runtime").JSX.Element;
export declare const SequenceViewerStorySecondSequence: () => import("react/jsx-runtime").JSX.Element;
export declare const SequenceViewerInvalid: () => import("react/jsx-runtime").JSX.Element;
export declare const SequenceViewerDarkMode: () => import("react/jsx-runtime").JSX.Element;
export declare const HideMetadataBar: () => import("react/jsx-runtime").JSX.Element;
