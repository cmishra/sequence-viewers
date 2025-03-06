import { Angle, AriadneSelection, Coor } from '../types';

/**
 * Taken from seqviz
 * Given an inner and outer radius, and the length of the element, return the
 * path for an arc that circles the plasmid. The optional paramters sweepFWD and sweepREV
 * are needed for selection arcs (where the direction of the arc isn't known beforehand)
 * and arrowFWD and arrowREV are needed for annotations, where there may be directionality
 */
export declare const genArc: ({ center, innerRadius, largeArc, length, offset, outerRadius, seqLength, }: {
    center: Coor;
    innerRadius: number;
    largeArc: boolean;
    length: number;
    offset: number;
    outerRadius: number;
    seqLength: number;
}) => string;
/**
 * Given an index along the plasmid and its radius, find svg coordinate
 * from seqviz
 */
export declare const findCoor: ({ index, radius, center, seqLength, }: {
    index: number;
    radius: number;
    center: Coor;
    seqLength: number;
}) => Coor;
export declare const findIndexFromCoor: ({ coor, center, seqLength, }: {
    coor: Coor;
    center: Coor;
    seqLength: number;
}) => number;
export declare const findAngleFromCoor: ({ coor, center, }: {
    coor: Coor;
    center: Coor;
}) => number;
export declare const findAngleBetweenCoors: ({ coor1, coor2, center, }: {
    coor1: Coor;
    coor2: Coor;
    center: Coor;
}) => number;
export declare const findIndexFromAngle: ({ angle, seqLength, }: {
    angle: Angle;
    seqLength: number;
}) => number;
export declare const clampSlice: ({ slice, firstIdx, lastIdx, }: {
    slice: AriadneSelection | null | undefined;
    firstIdx: number;
    lastIdx: number;
}) => AriadneSelection | null;
