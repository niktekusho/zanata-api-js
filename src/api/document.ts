import * as fetch from "node-fetch";
import { projectEndpoint } from "./project";
import { ZanataSourceText } from "../types/ZanataSourceText";
import { ZanataDocument } from "../types/ZanataDocument";
import { ZanataTranslation, ZanataTranslationResponse } from "../types/ZanataTranslation";
import { commonHeader } from "./auth";

export type DocRequest = {
	readonly projectID: string,
	readonly iterationID: string,
	readonly documentID: string,
};

export function documentEndpoint(serverUrl: string, docRequest: DocRequest): string {
	return `${projectEndpoint(serverUrl, docRequest.projectID)}/iterations/i/${docRequest.iterationID}/r/${docRequest.documentID}`;
}

export async function get(serverUrl: string, docRequest: DocRequest): Promise<ZanataDocument> {
	const url = documentEndpoint(serverUrl, docRequest);
	const header = commonHeader();
	return fetch.default(url, { headers: header }).then(response => response.json());
}

export async function getDocumentTranslation(serverUrl: string, docRequest: DocRequest, translationLanguage: string): Promise<ZanataTranslationResponse> {
	const url = `${documentEndpoint(serverUrl, docRequest)}/translations/${translationLanguage}`;
	const headers = commonHeader();
	return fetch.default(url, { headers }).then(response => response.json());
}

export async function putSourceDocument(serverUrl: string, docRequest: DocRequest, newDocument: ZanataDocument, authHeaders: fetch.Headers): Promise<fetch.Response> {
	const url = documentEndpoint(serverUrl, docRequest);
	console.log(JSON.stringify(newDocument));
	const requestOpts: fetch.RequestInit = {
		headers: authHeaders,
		method: "PUT",
		body: JSON.stringify(newDocument),
	};
	return fetch.default(url, requestOpts);
}

export async function putTranslations(serverUrl: string, docRequest: DocRequest, translations: ZanataTranslation[], authHeaders: fetch.Headers, lang: string): Promise<fetch.Response> {
	const url = `${documentEndpoint(serverUrl, docRequest)}/translations/${lang}`;
	console.log(JSON.stringify({ textFlowTargets: translations }));
	const requestOpts: fetch.RequestInit = {
		headers: authHeaders,
		method: "PUT",
		body: JSON.stringify({ textFlowTargets: translations }),
	};
	return fetch.default(url, requestOpts);
}
