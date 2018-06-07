export type ZanataTranslation = {
	readonly resId: string,
	readonly state: ZanataTranslationState,
	readonly translator?: ZanataTranslator,
	readonly content: string,
	readonly extensions: string[], // TODO
	readonly revision: number,
	readonly textFlowRevision: number,
};

export enum ZanataTranslationState {
	New, NeedReview, Translated, Approved, Rejected,
}

export type ZanataTranslationResponse = {
	readonly extensions?: string[], // TODO
	readonly textFlowTargets: ZanataTranslation[],
};

export type ZanataTranslator = {
	readonly email: string,
	readonly name: string,
};
