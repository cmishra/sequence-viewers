import { z } from 'zod';

export declare const coorSchema: z.ZodObject<{
    x: z.ZodNumber;
    y: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    x: number;
    y: number;
}, {
    x: number;
    y: number;
}>;
export declare const angleSchema: z.ZodObject<{
    degrees: z.ZodNumber;
    center: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        y: number;
    }, {
        x: number;
        y: number;
    }>;
}, "strip", z.ZodTypeAny, {
    degrees: number;
    center: {
        x: number;
        y: number;
    };
}, {
    degrees: number;
    center: {
        x: number;
        y: number;
    };
}>;
export declare const annotationTypeSchema: z.ZodUnion<[z.ZodLiteral<"CDS">, z.ZodLiteral<"enhancer">, z.ZodLiteral<"intron">, z.ZodLiteral<"misc_feature">, z.ZodLiteral<"polyA_signal">, z.ZodLiteral<"promoter">, z.ZodLiteral<"protein_bind">, z.ZodLiteral<"rep_origin">, z.ZodLiteral<"LTR">, z.ZodString]>;
export declare const annotationSchema: z.ZodObject<{
    type: z.ZodUnion<[z.ZodLiteral<"CDS">, z.ZodLiteral<"enhancer">, z.ZodLiteral<"intron">, z.ZodLiteral<"misc_feature">, z.ZodLiteral<"polyA_signal">, z.ZodLiteral<"promoter">, z.ZodLiteral<"protein_bind">, z.ZodLiteral<"rep_origin">, z.ZodLiteral<"LTR">, z.ZodString]>;
    direction: z.ZodUnion<[z.ZodLiteral<"forward">, z.ZodLiteral<"reverse">]>;
    start: z.ZodNumber;
    end: z.ZodNumber;
    className: z.ZodOptional<z.ZodString>;
    text: z.ZodString;
    onClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    type: string;
    direction: "reverse" | "forward";
    start: number;
    end: number;
    text: string;
    className?: string | undefined;
    onClick?: ((args_0: any, ...args: unknown[]) => unknown) | undefined;
}, {
    type: string;
    direction: "reverse" | "forward";
    start: number;
    end: number;
    text: string;
    className?: string | undefined;
    onClick?: ((args_0: any, ...args: unknown[]) => unknown) | undefined;
}>;
export declare const stackedAnnotationSchema: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodUnion<[z.ZodLiteral<"CDS">, z.ZodLiteral<"enhancer">, z.ZodLiteral<"intron">, z.ZodLiteral<"misc_feature">, z.ZodLiteral<"polyA_signal">, z.ZodLiteral<"promoter">, z.ZodLiteral<"protein_bind">, z.ZodLiteral<"rep_origin">, z.ZodLiteral<"LTR">, z.ZodString]>;
    direction: z.ZodUnion<[z.ZodLiteral<"forward">, z.ZodLiteral<"reverse">]>;
    start: z.ZodNumber;
    end: z.ZodNumber;
    className: z.ZodOptional<z.ZodString>;
    text: z.ZodString;
    onClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodUnknown>>;
}, {
    stack: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    type: string;
    direction: "reverse" | "forward";
    start: number;
    end: number;
    text: string;
    stack: number;
    className?: string | undefined;
    onClick?: ((args_0: any, ...args: unknown[]) => unknown) | undefined;
}, {
    type: string;
    direction: "reverse" | "forward";
    start: number;
    end: number;
    text: string;
    stack: number;
    className?: string | undefined;
    onClick?: ((args_0: any, ...args: unknown[]) => unknown) | undefined;
}>;
export declare const nuclSchema: z.ZodUnion<[z.ZodLiteral<"A">, z.ZodLiteral<"C">, z.ZodLiteral<"G">, z.ZodLiteral<"T">]>;
export declare const aaSchema: z.ZodUnion<[z.ZodLiteral<"A">, z.ZodLiteral<"C">, z.ZodLiteral<"D">, z.ZodLiteral<"E">, z.ZodLiteral<"F">, z.ZodLiteral<"G">, z.ZodLiteral<"H">, z.ZodLiteral<"I">, z.ZodLiteral<"K">, z.ZodLiteral<"L">, z.ZodLiteral<"M">, z.ZodLiteral<"N">, z.ZodLiteral<"P">, z.ZodLiteral<"Q">, z.ZodLiteral<"R">, z.ZodLiteral<"S">, z.ZodLiteral<"T">, z.ZodLiteral<"V">, z.ZodLiteral<"W">, z.ZodLiteral<"Y">]>;
export declare const GapSchema: z.ZodLiteral<"-">;
export declare const StopSchema: z.ZodLiteral<"*">;
export declare const SpaceSchema: z.ZodLiteral<" ">;
export declare const UnknownSchema: z.ZodLiteral<"?">;
export declare const annotatedBaseSchema: z.ZodObject<{
    base: z.ZodString;
    annotations: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodUnion<[z.ZodLiteral<"CDS">, z.ZodLiteral<"enhancer">, z.ZodLiteral<"intron">, z.ZodLiteral<"misc_feature">, z.ZodLiteral<"polyA_signal">, z.ZodLiteral<"promoter">, z.ZodLiteral<"protein_bind">, z.ZodLiteral<"rep_origin">, z.ZodLiteral<"LTR">, z.ZodString]>;
        direction: z.ZodUnion<[z.ZodLiteral<"forward">, z.ZodLiteral<"reverse">]>;
        start: z.ZodNumber;
        end: z.ZodNumber;
        className: z.ZodOptional<z.ZodString>;
        text: z.ZodString;
        onClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodUnknown>>;
    }, {
        stack: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        type: string;
        direction: "reverse" | "forward";
        start: number;
        end: number;
        text: string;
        stack: number;
        className?: string | undefined;
        onClick?: ((args_0: any, ...args: unknown[]) => unknown) | undefined;
    }, {
        type: string;
        direction: "reverse" | "forward";
        start: number;
        end: number;
        text: string;
        stack: number;
        className?: string | undefined;
        onClick?: ((args_0: any, ...args: unknown[]) => unknown) | undefined;
    }>, "many">;
    index: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export declare const annotatedSequenceSchema: z.ZodArray<z.ZodObject<{
    base: z.ZodString;
    annotations: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodUnion<[z.ZodLiteral<"CDS">, z.ZodLiteral<"enhancer">, z.ZodLiteral<"intron">, z.ZodLiteral<"misc_feature">, z.ZodLiteral<"polyA_signal">, z.ZodLiteral<"promoter">, z.ZodLiteral<"protein_bind">, z.ZodLiteral<"rep_origin">, z.ZodLiteral<"LTR">, z.ZodString]>;
        direction: z.ZodUnion<[z.ZodLiteral<"forward">, z.ZodLiteral<"reverse">]>;
        start: z.ZodNumber;
        end: z.ZodNumber;
        className: z.ZodOptional<z.ZodString>;
        text: z.ZodString;
        onClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodUnknown>>;
    }, {
        stack: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        type: string;
        direction: "reverse" | "forward";
        start: number;
        end: number;
        text: string;
        stack: number;
        className?: string | undefined;
        onClick?: ((args_0: any, ...args: unknown[]) => unknown) | undefined;
    }, {
        type: string;
        direction: "reverse" | "forward";
        start: number;
        end: number;
        text: string;
        stack: number;
        className?: string | undefined;
        onClick?: ((args_0: any, ...args: unknown[]) => unknown) | undefined;
    }>, "many">;
    index: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>, "many">;
export declare const ariadneSelectionSchema: z.ZodObject<{
    start: z.ZodNumber;
    end: z.ZodNumber;
    direction: z.ZodUnion<[z.ZodLiteral<"forward">, z.ZodLiteral<"reverse">]>;
}, "strip", z.ZodTypeAny, {
    direction: "reverse" | "forward";
    start: number;
    end: number;
}, {
    direction: "reverse" | "forward";
    start: number;
    end: number;
}>;
