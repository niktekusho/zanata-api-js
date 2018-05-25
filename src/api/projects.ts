import * as fetch from "node-fetch";
import { resifyUrl } from "./util";
import { ZanataProject } from "../types/ZanataProject";
import { commonHeader } from "./auth";

export function projectsEndpoint(serverUrl: string): string {
	return `${resifyUrl(serverUrl)}/projects`;
}

export async function get(serverUrl: string): Promise<ZanataProject[]> {
	const url = projectsEndpoint(serverUrl);
	const headers = commonHeader();
	return fetch.default(url, { headers }).then(response => response.json());
}