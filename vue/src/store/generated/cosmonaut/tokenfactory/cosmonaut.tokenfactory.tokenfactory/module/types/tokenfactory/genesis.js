/* eslint-disable */
import { Params } from "../tokenfactory/params";
import { Denom } from "../tokenfactory/denom";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "cosmonaut.tokenfactory.tokenfactory";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.denomList) {
            Denom.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.denomList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.denomList.push(Denom.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.denomList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.denomList !== undefined && object.denomList !== null) {
            for (const e of object.denomList) {
                message.denomList.push(Denom.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.denomList) {
            obj.denomList = message.denomList.map((e) => e ? Denom.toJSON(e) : undefined);
        }
        else {
            obj.denomList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.denomList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.denomList !== undefined && object.denomList !== null) {
            for (const e of object.denomList) {
                message.denomList.push(Denom.fromPartial(e));
            }
        }
        return message;
    },
};
