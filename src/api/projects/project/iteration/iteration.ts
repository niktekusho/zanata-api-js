import * as fetch from "node-fetch";
import { resifyUrl } from "../../../util";
import { ZanataIteration } from "ZanataIteration";

export function iterationEndpoint(serverUrl: string, projectID: string, iterationID: string): string {
    return `${resifyUrl(serverUrl)}/project/${projectID}/version/${iterationID}`;
}

export async function get(serverUrl: string, projectID: string, iterationID: string): Promise<ZanataIteration> {
    const url = iterationEndpoint(serverUrl, projectID, iterationID);
    return fetch.default(url).then(response => response.json());
}