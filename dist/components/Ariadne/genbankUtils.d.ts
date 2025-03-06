import { ParsedGenbank } from 'genbank-parser';
import { z } from 'zod';
import { Annotation, AnnotationType } from './types';

export declare const GenbankFeatureSchema: z.ZodObject<{
    name: z.ZodString;
    start: z.ZodNumber;
    end: z.ZodNumber;
    strand: z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<-1>]>;
    type: z.ZodUnion<[z.ZodLiteral<"CDS">, z.ZodLiteral<"enhancer">, z.ZodLiteral<"intron">, z.ZodLiteral<"misc_feature">, z.ZodLiteral<"polyA_signal">, z.ZodLiteral<"promoter">, z.ZodLiteral<"protein_bind">, z.ZodLiteral<"rep_origin">, z.ZodLiteral<"LTR">, z.ZodString]>;
    notes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>>;
}, "strip", z.ZodTypeAny, {
    type: string;
    start: number;
    end: number;
    name: string;
    strand: 1 | -1;
    notes?: Record<string, string[]> | undefined;
}, {
    type: string;
    start: number;
    end: number;
    name: string;
    strand: 1 | -1;
    notes?: Record<string, string[]> | undefined;
}>;
export type GenbankFeature = z.infer<typeof GenbankFeatureSchema>;
export declare const genbankToAnnotatedSequence: ({ genbank, annotationOnClick, }: {
    genbank: ParsedGenbank;
    annotationOnClick?: (annotation: Annotation) => void;
}) => {
    annotatedSequence: {
        base: string;
        annotations: {
            type: string;
            direction: "reverse" | "forward";
            start: number;
            end: number;
            text: string;
            stack: number;
            className?: string | undefined;
            onClick?: ((args_0: any, ...args: unknown[]) => unknown) | undefined;
        }[];
        index: number;
    }[];
    annotations: {
        type: string;
        direction: "reverse" | "forward";
        start: number;
        end: number;
        text: string;
        className?: string | undefined;
        onClick?: ((args_0: any, ...args: unknown[]) => unknown) | undefined;
    }[];
};
export declare const genbankFeaturesToAnnotations: ({ features, annotationOnClick, }: {
    features: GenbankFeature[];
    annotationOnClick?: (annotation: Annotation) => void;
}) => Annotation[];
export declare function getClassNameFromFeatureType(annType: AnnotationType): string;
export declare const zipArrays: <T1, T2>(keys: T1[], values: T2[]) => {
    T1: T2;
};
export declare const parseGenbank: (genbankString: string) => ParsedGenbank[];
