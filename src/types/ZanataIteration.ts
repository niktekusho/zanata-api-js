import { ZanataLink } from "./ZanataLink";
import { ZanataStatus } from "./ZanataStatus";

export type ZanataIteration = {
    id: string,
    link: ZanataLink[],
    status: ZanataStatus,
    projectType: string,
};