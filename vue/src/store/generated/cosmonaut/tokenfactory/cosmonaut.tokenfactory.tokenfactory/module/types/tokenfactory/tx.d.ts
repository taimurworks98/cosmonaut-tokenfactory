import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "cosmonaut.tokenfactory.tokenfactory";
export interface MsgCreateDenom {
    owner: string;
    denom: string;
    description: string;
    ticker: string;
    precision: number;
    url: string;
    maxSupply: number;
    supply: number;
    canChangeMaxSupply: boolean;
}
export interface MsgCreateDenomResponse {
}
export interface MsgUpdateDenom {
    owner: string;
    denom: string;
    description: string;
    ticker: string;
    precision: number;
    url: string;
    maxSupply: number;
    supply: number;
    canChangeMaxSupply: boolean;
}
export interface MsgUpdateDenomResponse {
}
export interface MsgDeleteDenom {
    owner: string;
    denom: string;
}
export interface MsgDeleteDenomResponse {
}
export declare const MsgCreateDenom: {
    encode(message: MsgCreateDenom, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDenom;
    fromJSON(object: any): MsgCreateDenom;
    toJSON(message: MsgCreateDenom): unknown;
    fromPartial(object: DeepPartial<MsgCreateDenom>): MsgCreateDenom;
};
export declare const MsgCreateDenomResponse: {
    encode(_: MsgCreateDenomResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDenomResponse;
    fromJSON(_: any): MsgCreateDenomResponse;
    toJSON(_: MsgCreateDenomResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateDenomResponse>): MsgCreateDenomResponse;
};
export declare const MsgUpdateDenom: {
    encode(message: MsgUpdateDenom, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDenom;
    fromJSON(object: any): MsgUpdateDenom;
    toJSON(message: MsgUpdateDenom): unknown;
    fromPartial(object: DeepPartial<MsgUpdateDenom>): MsgUpdateDenom;
};
export declare const MsgUpdateDenomResponse: {
    encode(_: MsgUpdateDenomResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDenomResponse;
    fromJSON(_: any): MsgUpdateDenomResponse;
    toJSON(_: MsgUpdateDenomResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateDenomResponse>): MsgUpdateDenomResponse;
};
export declare const MsgDeleteDenom: {
    encode(message: MsgDeleteDenom, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteDenom;
    fromJSON(object: any): MsgDeleteDenom;
    toJSON(message: MsgDeleteDenom): unknown;
    fromPartial(object: DeepPartial<MsgDeleteDenom>): MsgDeleteDenom;
};
export declare const MsgDeleteDenomResponse: {
    encode(_: MsgDeleteDenomResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteDenomResponse;
    fromJSON(_: any): MsgDeleteDenomResponse;
    toJSON(_: MsgDeleteDenomResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteDenomResponse>): MsgDeleteDenomResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteDenom(request: MsgDeleteDenom): Promise<MsgDeleteDenomResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>;
    DeleteDenom(request: MsgDeleteDenom): Promise<MsgDeleteDenomResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
