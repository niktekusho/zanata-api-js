import { ZanataLink } from "./ZanataLink";
import { ZanataStatus } from "./ZanataStatus";
import { ZanataIteration } from "./ZanataIteration";

export type ZanataProject = {
    readonly id: string,
    readonly defaultType: string,
    readonly name: string,
    readonly description: string,
    readonly sourceViewURL: string,
    readonly sourceCheckoutURL: string,
    readonly links: ZanataLink[],
    readonly iterations: ZanataIteration[],
    readonly status: ZanataStatus,
};