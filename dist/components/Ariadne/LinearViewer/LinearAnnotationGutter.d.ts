import { AnnotatedSequence, StackedAnnotation } from '../types';

export interface LinearAnnotationGutterProps {
    stackedAnnotations: StackedAnnotation[];
    sequence: AnnotatedSequence;
    containerClassName?: string;
}
export declare const LinearAnnotationGutter: ({ stackedAnnotations, sequence, containerClassName, }: LinearAnnotationGutterProps) => import("react/jsx-runtime").JSX.Element;
