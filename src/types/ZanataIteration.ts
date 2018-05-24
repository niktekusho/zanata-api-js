import { ZanataLink } from "ZanataProjectLink";
import { ZanataStatus } from "ZanataProjectStatus";

export type ZanataIteration = {
    id: string,
    link: ZanataLink[],
    status: ZanataStatus,
    projectType: string,
};