/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
export const protobufPackage = "cosmonaut.tokenfactory.tokenfactory";
const baseMsgCreateDenom = {
    owner: "",
    denom: "",
    description: "",
    ticker: "",
    precision: 0,
    url: "",
    maxSupply: 0,
    supply: 0,
    canChangeMaxSupply: false,
};
export const MsgCreateDenom = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.ticker !== "") {
            writer.uint32(34).string(message.ticker);
        }
        if (message.precision !== 0) {
            writer.uint32(40).int32(message.precision);
        }
        if (message.url !== "") {
            writer.uint32(50).string(message.url);
        }
        if (message.maxSupply !== 0) {
            writer.uint32(56).int32(message.maxSupply);
        }
        if (message.supply !== 0) {
            writer.uint32(64).int32(message.supply);
        }
        if (message.canChangeMaxSupply === true) {
            writer.uint32(72).bool(message.canChangeMaxSupply);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateDenom };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.ticker = reader.string();
                    break;
                case 5:
                    message.precision = reader.int32();
                    break;
                case 6:
                    message.url = reader.string();
                    break;
                case 7:
                    message.maxSupply = reader.int32();
                    break;
                case 8:
                    message.supply = reader.int32();
                    break;
                case 9:
                    message.canChangeMaxSupply = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateDenom };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = String(object.ticker);
        }
        else {
            message.ticker = "";
        }
        if (object.precision !== undefined && object.precision !== null) {
            message.precision = Number(object.precision);
        }
        else {
            message.precision = 0;
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = "";
        }
        if (object.maxSupply !== undefined && object.maxSupply !== null) {
            message.maxSupply = Number(object.maxSupply);
        }
        else {
            message.maxSupply = 0;
        }
        if (object.supply !== undefined && object.supply !== null) {
            message.supply = Number(object.supply);
        }
        else {
            message.supply = 0;
        }
        if (object.canChangeMaxSupply !== undefined &&
            object.canChangeMaxSupply !== null) {
            message.canChangeMaxSupply = Boolean(object.canChangeMaxSupply);
        }
        else {
            message.canChangeMaxSupply = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.denom !== undefined && (obj.denom = message.denom);
        message.description !== undefined &&
            (obj.description = message.description);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.precision !== undefined && (obj.precision = message.precision);
        message.url !== undefined && (obj.url = message.url);
        message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply);
        message.supply !== undefined && (obj.supply = message.supply);
        message.canChangeMaxSupply !== undefined &&
            (obj.canChangeMaxSupply = message.canChangeMaxSupply);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateDenom };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = object.ticker;
        }
        else {
            message.ticker = "";
        }
        if (object.precision !== undefined && object.precision !== null) {
            message.precision = object.precision;
        }
        else {
            message.precision = 0;
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = "";
        }
        if (object.maxSupply !== undefined && object.maxSupply !== null) {
            message.maxSupply = object.maxSupply;
        }
        else {
            message.maxSupply = 0;
        }
        if (object.supply !== undefined && object.supply !== null) {
            message.supply = object.supply;
        }
        else {
            message.supply = 0;
        }
        if (object.canChangeMaxSupply !== undefined &&
            object.canChangeMaxSupply !== null) {
            message.canChangeMaxSupply = object.canChangeMaxSupply;
        }
        else {
            message.canChangeMaxSupply = false;
        }
        return message;
    },
};
const baseMsgCreateDenomResponse = {};
export const MsgCreateDenomResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateDenomResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateDenomResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateDenomResponse };
        return message;
    },
};
const baseMsgUpdateDenom = {
    owner: "",
    denom: "",
    description: "",
    ticker: "",
    precision: 0,
    url: "",
    maxSupply: 0,
    supply: 0,
    canChangeMaxSupply: false,
};
export const MsgUpdateDenom = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.ticker !== "") {
            writer.uint32(34).string(message.ticker);
        }
        if (message.precision !== 0) {
            writer.uint32(40).int32(message.precision);
        }
        if (message.url !== "") {
            writer.uint32(50).string(message.url);
        }
        if (message.maxSupply !== 0) {
            writer.uint32(56).int32(message.maxSupply);
        }
        if (message.supply !== 0) {
            writer.uint32(64).int32(message.supply);
        }
        if (message.canChangeMaxSupply === true) {
            writer.uint32(72).bool(message.canChangeMaxSupply);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateDenom };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.ticker = reader.string();
                    break;
                case 5:
                    message.precision = reader.int32();
                    break;
                case 6:
                    message.url = reader.string();
                    break;
                case 7:
                    message.maxSupply = reader.int32();
                    break;
                case 8:
                    message.supply = reader.int32();
                    break;
                case 9:
                    message.canChangeMaxSupply = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateDenom };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = String(object.ticker);
        }
        else {
            message.ticker = "";
        }
        if (object.precision !== undefined && object.precision !== null) {
            message.precision = Number(object.precision);
        }
        else {
            message.precision = 0;
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = "";
        }
        if (object.maxSupply !== undefined && object.maxSupply !== null) {
            message.maxSupply = Number(object.maxSupply);
        }
        else {
            message.maxSupply = 0;
        }
        if (object.supply !== undefined && object.supply !== null) {
            message.supply = Number(object.supply);
        }
        else {
            message.supply = 0;
        }
        if (object.canChangeMaxSupply !== undefined &&
            object.canChangeMaxSupply !== null) {
            message.canChangeMaxSupply = Boolean(object.canChangeMaxSupply);
        }
        else {
            message.canChangeMaxSupply = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.denom !== undefined && (obj.denom = message.denom);
        message.description !== undefined &&
            (obj.description = message.description);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.precision !== undefined && (obj.precision = message.precision);
        message.url !== undefined && (obj.url = message.url);
        message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply);
        message.supply !== undefined && (obj.supply = message.supply);
        message.canChangeMaxSupply !== undefined &&
            (obj.canChangeMaxSupply = message.canChangeMaxSupply);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateDenom };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = object.ticker;
        }
        else {
            message.ticker = "";
        }
        if (object.precision !== undefined && object.precision !== null) {
            message.precision = object.precision;
        }
        else {
            message.precision = 0;
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = "";
        }
        if (object.maxSupply !== undefined && object.maxSupply !== null) {
            message.maxSupply = object.maxSupply;
        }
        else {
            message.maxSupply = 0;
        }
        if (object.supply !== undefined && object.supply !== null) {
            message.supply = object.supply;
        }
        else {
            message.supply = 0;
        }
        if (object.canChangeMaxSupply !== undefined &&
            object.canChangeMaxSupply !== null) {
            message.canChangeMaxSupply = object.canChangeMaxSupply;
        }
        else {
            message.canChangeMaxSupply = false;
        }
        return message;
    },
};
const baseMsgUpdateDenomResponse = {};
export const MsgUpdateDenomResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateDenomResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateDenomResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateDenomResponse };
        return message;
    },
};
const baseMsgDeleteDenom = { owner: "", denom: "" };
export const MsgDeleteDenom = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteDenom };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteDenom };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteDenom };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        return message;
    },
};
const baseMsgDeleteDenomResponse = {};
export const MsgDeleteDenomResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteDenomResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteDenomResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteDenomResponse };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateDenom(request) {
        const data = MsgCreateDenom.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.tokenfactory.tokenfactory.Msg", "CreateDenom", data);
        return promise.then((data) => MsgCreateDenomResponse.decode(new Reader(data)));
    }
    UpdateDenom(request) {
        const data = MsgUpdateDenom.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.tokenfactory.tokenfactory.Msg", "UpdateDenom", data);
        return promise.then((data) => MsgUpdateDenomResponse.decode(new Reader(data)));
    }
    DeleteDenom(request) {
        const data = MsgDeleteDenom.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.tokenfactory.tokenfactory.Msg", "DeleteDenom", data);
        return promise.then((data) => MsgDeleteDenomResponse.decode(new Reader(data)));
    }
}
