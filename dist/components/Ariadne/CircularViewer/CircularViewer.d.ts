import { Annotation, AriadneSelection } from '@Ariadne/types';

export interface Props {
    sequence: string;
    annotations: Annotation[];
    selection: AriadneSelection | null;
    setSelection: (selection: AriadneSelection) => void;
    containerClassName?: string;
    svgSizePX?: number;
    svgPadding?: number;
}
export declare const CircularViewer: ({ sequence, annotations, selection, setSelection, containerClassName, svgSizePX, svgPadding, }: Props) => import("react/jsx-runtime").JSX.Element;
