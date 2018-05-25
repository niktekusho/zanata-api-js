import * as fetch from "node-fetch";
import { resifyUrl } from "./util";
import { ZanataProject } from "ZanataProject";

export function projectsEndpoint(serverUrl: string): string {
    return `${resifyUrl(serverUrl)}/projects`;
}

export async function get(serverUrl: string): Promise<ZanataProject[]> {
    const url = projectsEndpoint(serverUrl);
    return fetch.default(url).then(response => response.json());
}