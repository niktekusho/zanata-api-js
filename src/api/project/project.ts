import * as fetch from "node-fetch";
import { projectsEndpoint } from "../projects/listprojects";
import { ZanataProject } from "ZanataProject";
import { ZanataIni } from "ZanataIni";

export function projectEndpoint(serverUrl: string, projectID: string): string {
    return `${projectsEndpoint(serverUrl)}/p/${projectID}`;
}

export async function get(serverUrl: string, projectID: string): Promise<ZanataProject> {
    const url = projectEndpoint(serverUrl, projectID);
    return fetch.default(url).then(response => response.json());
}

export async function put(serverUrl: string, projectID: string, auth: ZanataIni, newProject: ZanataProject): Promise<fetch.Response> {
    const url = projectEndpoint(serverUrl, projectID);
    return fetch.default(url);
}