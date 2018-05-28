export type ZanataSourceText = {
	readonly id: string,
	readonly lang: string,
	readonly content: string,
	readonly plural: boolean,
	readonly extensions: string[], // TODO
	readonly revision: number,
};
