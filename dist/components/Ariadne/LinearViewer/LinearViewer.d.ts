import { AriadneSelection, Annotation, AnnotatedBase, StackedAnnotation } from '../types';

export interface Props {
    sequences: string[];
    annotations: Annotation[];
    selection: AriadneSelection | null;
    setSelection: (selection: AriadneSelection | null) => void;
    onDoubleClick?: () => void;
    selectionClassName?: (selection: AriadneSelection) => string;
    containerClassName?: string;
    sequenceClassName: ({ sequenceIdx }: {
        sequenceIdx: number;
    }) => string;
    mismatchClassName?: (mismatchedBase: AnnotatedBase) => string;
    stackingFn?: (annotations: Annotation[]) => StackedAnnotation[];
}
export declare const LinearViewer: (props: Props) => import("react/jsx-runtime").JSX.Element;
