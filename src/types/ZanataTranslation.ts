import { ZanataTranslator } from "ZanataTranslator";

export type ZanataTranslation = {
    readonly resId: string,
    readonly state: string,
    readonly translator?: ZanataTranslator,
    readonly content: string,
    readonly extensions: string, // TODO
    readonly revision: number,
    readonly textFlowRevision: number,
};