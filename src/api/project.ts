import * as fetch from "node-fetch";
import { projectsEndpoint } from "./projects";
import { ZanataProject } from "../types/ZanataProject";
import { ZanataIni } from "../types/ZanataIni";
import { commonHeader } from "./auth";

/**
 * Returns the endpoint for a single Zanata Project resource
 * @param serverUrl Server URL in the form of: "http|https://{server}:{port}"
 * @param projectID ID of the Project Resource to manipulate
 */
export function projectEndpoint(serverUrl: string, projectID: string): string {
    return `${projectsEndpoint(serverUrl)}/p/${projectID}`;
}

/**
 * Returns the Project details for the specified Project ID.
 * Possible responses are:
 * - 200: OK, Response Body contains the Project Details
 * - 404: NOT FOUND
 * - 500: INTERNAL SERVER ERROR
 * @param serverUrl Server URL in the form of: "http|https://{server}:{port}"
 * @param projectID ID of the Project Resource to fetch
 */
export async function get(serverUrl: string, projectID: string): Promise<ZanataProject> {
    const url = projectEndpoint(serverUrl, projectID);
    const headers = commonHeader();
    return fetch.default(url, { headers }).then(response => response.json());
}

/**
 * Creates or updates the Project specified.
 * Returns the Project details for the specified Project ID.
 * Possible responses are:
 * - 200: OK if an already existing project was updated
 * - 201: CREATED if a new project was created
 * - 401: UNAUTHORIZED if the user does not have proper permissions
 * - 403: FORBIDDEN if the user was not allowed to create/modify the project
 * - 500: INTERNAL SERVER ERROR
 * @param serverUrl Server URL in the form of: "http|https://{server}:{port}"
 * @param projectID ID of the Project Resource to fetch
 * @param authHeaders Headers for authentication (use provided auth Headers creator function)
 * @param newProject Details of the Project to update/create
 */
export async function put(serverUrl: string, projectID: string, authHeaders: fetch.Headers, newProject: ZanataProject): Promise<fetch.Response> {
    const url = projectEndpoint(serverUrl, projectID);
    const requestOpts: fetch.RequestInit = {
        headers: authHeaders,
        method: "PUT",
        body: JSON.stringify(newProject),
    };
    return fetch.default(url, requestOpts);
}