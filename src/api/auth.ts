import { Headers } from "node-fetch";
import { ZanataIni } from "../types/ZanataIni";

export function commonHeader(): Headers {
	const header = new Headers();
	header.append("Accept", "application/json");
	return header;
}

export function putPostHeader(): Headers {
	const headers = commonHeader();
	headers.append("Content-Type", "application/json");
	return headers;
}

export function authHeader(auth: ZanataIni): Headers {
	const header = putPostHeader();
	header.append("X-Auth-User", auth.username);
	header.append("X-Auth-Token", auth.apiKey);
	return header;
}
