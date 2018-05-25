import * as fetch from "node-fetch";
import { resifyUrl } from "./util";
import { ZanataIteration } from "ZanataIteration";
import { ZanataDocument } from "ZanataDocument";
import { ZanataLocale } from "ZanataLocale";

export function iterationEndpoint(serverUrl: string, projectID: string, iterationID: string): string {
    return `${resifyUrl(serverUrl)}/project/${projectID}/version/${iterationID}`;
}

export async function get(serverUrl: string, projectID: string, iterationID: string): Promise<ZanataIteration> {
    const url = iterationEndpoint(serverUrl, projectID, iterationID);
    return fetch.default(url).then(response => response.json());
}

export async function getDocuments(serverUrl: string, projectID: string, iterationID: string): Promise<ZanataDocument[]> {
    const url = `${iterationEndpoint(serverUrl, projectID, iterationID)}/docs`;
    return fetch.default(url).then(response => response.json());
}

export async function getLocales(serverUrl: string, projectID: string, iterationID: string): Promise<ZanataLocale[]> {
    const url = `${iterationEndpoint(serverUrl, projectID, iterationID)}/locales`;
    return fetch.default(url).then(response => response.json());
}