import * as fetch from "node-fetch";
import { resifyUrl } from "./util";
import { ZanataIteration } from "../types/ZanataIteration";
import { ZanataDocument } from "../types/ZanataDocument";
import { ZanataLocale } from "../types/ZanataLocale";
import { commonHeader } from "./auth";

export function iterationEndpoint(serverUrl: string, projectID: string, iterationID: string): string {
    return `${resifyUrl(serverUrl)}/project/${projectID}/version/${iterationID}`;
}

export async function get(serverUrl: string, projectID: string, iterationID: string): Promise<ZanataIteration> {
    const url = iterationEndpoint(serverUrl, projectID, iterationID);
    const headers = commonHeader();
    return fetch.default(url, { headers }).then(response => response.json());
}

export async function getDocuments(serverUrl: string, projectID: string, iterationID: string): Promise<ZanataDocument[]> {
    const url = `${iterationEndpoint(serverUrl, projectID, iterationID)}/docs`;
    const headers = commonHeader();
    return fetch.default(url, { headers }).then(response => response.json());
}

export async function getLocales(serverUrl: string, projectID: string, iterationID: string): Promise<ZanataLocale[]> {
    const url = `${iterationEndpoint(serverUrl, projectID, iterationID)}/locales`;
    const headers = commonHeader();
    return fetch.default(url, { headers }).then(response => response.json());
}