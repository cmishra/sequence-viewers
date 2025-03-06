import { ParsedGenbank } from 'genbank-parser';
import { AnnotatedSequence, Annotation, AriadneSelection, StackedAnnotation } from './types';

export declare const getComplement: (sequence: string) => string;
export declare const getAnnotatedSequence: ({ sequence, stackedAnnotations, noValidate, }: {
    sequence: string;
    stackedAnnotations: Annotation[];
    noValidate?: boolean;
}) => AnnotatedSequence;
interface Stackable {
    start: number;
    end: number;
}
export declare const stackElements: <T extends Stackable>(elements: T[]) => T[][];
export declare const getStackedAnnotations: (annotations: Annotation[]) => StackedAnnotation[];
export declare const baseInSelection: ({ baseIndex, selection, sequenceLength, }: {
    baseIndex: number;
    sequenceLength: number;
    selection: AriadneSelection | null;
}) => boolean;
export declare const inRange: (value: number, min: number, max: number) => boolean;
export declare const getSubsequenceLength: ({ start, end }: AriadneSelection, sequenceLength: number) => number;
interface StringSource {
    payloadType: "genbank" | "fasta" | "raw";
    payload: string;
    annotations?: Annotation[];
    annotationOnClick?: (annotation: Annotation) => void;
}
interface GenbankSource {
    payloadType: "parsed-genbank";
    payload: ParsedGenbank;
    annotations?: undefined;
    annotationOnClick?: (annotation: Annotation) => void;
}
type AnythingSource = StringSource | GenbankSource;
type ParseError = {
    source: AnythingSource;
    error: string;
};
type ParseSuccess = {
    source: AnythingSource;
    sequences: AnnotatedSequence[];
    annotations: Annotation[];
};
export declare const anythingToAnnotatedSequences: ({ payload, payloadType, annotations, annotationOnClick, }: AnythingSource) => {
    sequences: AnnotatedSequence[];
    stackedAnnotations: StackedAnnotation[];
};
export declare const safeAnythingToAnnotatedSequences: ({ payload, payloadType, annotations, annotationOnClick, }: AnythingSource) => {
    successes: ParseSuccess[];
    failures: ParseError[];
};
export declare const stringToAnnotatedSequence: ({ sequence, annotations, }: {
    sequence: string;
    annotations?: Annotation[];
}) => AnnotatedSequence;
export declare const annotationsHaveOverlap: (a1: Annotation, a2: Annotation, maxLen: number) => boolean;
export declare const stackAnnotationsNoOverlap: (annotations: Annotation[], maxLen: number) => StackedAnnotation[];
export declare const stackAnnsByType: (annotations: Annotation[]) => StackedAnnotation[];
interface FastqRecord {
    id: string;
    sequence: string;
    optionalId: string;
    quality: string;
}
export declare function parseFastq(data: string): FastqRecord[];
interface FastaRecord {
    id: string;
    sequence: string;
}
export declare function parseFasta(data: string): FastaRecord[];
export {};
