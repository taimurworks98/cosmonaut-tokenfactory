// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateDenom } from "./types/tokenfactory/tx";
import { MsgUpdateDenom } from "./types/tokenfactory/tx";
import { MsgDeleteDenom } from "./types/tokenfactory/tx";
const types = [
    ["/cosmonaut.tokenfactory.tokenfactory.MsgCreateDenom", MsgCreateDenom],
    ["/cosmonaut.tokenfactory.tokenfactory.MsgUpdateDenom", MsgUpdateDenom],
    ["/cosmonaut.tokenfactory.tokenfactory.MsgDeleteDenom", MsgDeleteDenom],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreateDenom: (data) => ({ typeUrl: "/cosmonaut.tokenfactory.tokenfactory.MsgCreateDenom", value: MsgCreateDenom.fromPartial(data) }),
        msgUpdateDenom: (data) => ({ typeUrl: "/cosmonaut.tokenfactory.tokenfactory.MsgUpdateDenom", value: MsgUpdateDenom.fromPartial(data) }),
        msgDeleteDenom: (data) => ({ typeUrl: "/cosmonaut.tokenfactory.tokenfactory.MsgDeleteDenom", value: MsgDeleteDenom.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
