import { parse, UrlWithStringQuery } from "url";

function validateHostName(url: UrlWithStringQuery): boolean {
	return url.host != undefined;
}

function validateProtocol(url: UrlWithStringQuery): boolean {
	return url.protocol != undefined;
}

export function restifyUrl(serverUrl: string): string {
	const parsedUrl = parse(serverUrl);

	let protocol: string;
	let host: string;
	if (validateProtocol(parsedUrl)) {
		protocol = parsedUrl.protocol;
		host = parsedUrl.host;
	} else {
		// if the protocol cannot be found in the parsed url, we can extract the host from the path property
		protocol = "http:";
		host = parsedUrl.path;
	}

	// using host as it includes the port
	return `${protocol}//${host}/rest`;
}
