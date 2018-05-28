import { ZanataSourceText } from "./ZanataSourceText";

export type ZanataDocument = {
	readonly name: string,
	readonly contentType: string,
	readonly lang: string,
	readonly type: string,
	readonly revision: number,
	readonly extensions?: string[],
	readonly textFlows?: ZanataSourceText[],
};
