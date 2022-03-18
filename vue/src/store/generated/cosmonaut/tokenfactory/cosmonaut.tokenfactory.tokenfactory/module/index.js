// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateDenom } from "./types/tokenfactory/tx";
import { MsgCreateDenom } from "./types/tokenfactory/tx";
import { MsgMintAndSendTokens } from "./types/tokenfactory/tx";
import { MsgUpdateOwner } from "./types/tokenfactory/tx";
const types = [
    ["/cosmonaut.tokenfactory.tokenfactory.MsgUpdateDenom", MsgUpdateDenom],
    ["/cosmonaut.tokenfactory.tokenfactory.MsgCreateDenom", MsgCreateDenom],
    ["/cosmonaut.tokenfactory.tokenfactory.MsgMintAndSendTokens", MsgMintAndSendTokens],
    ["/cosmonaut.tokenfactory.tokenfactory.MsgUpdateOwner", MsgUpdateOwner],
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
        msgUpdateDenom: (data) => ({ typeUrl: "/cosmonaut.tokenfactory.tokenfactory.MsgUpdateDenom", value: MsgUpdateDenom.fromPartial(data) }),
        msgCreateDenom: (data) => ({ typeUrl: "/cosmonaut.tokenfactory.tokenfactory.MsgCreateDenom", value: MsgCreateDenom.fromPartial(data) }),
        msgMintAndSendTokens: (data) => ({ typeUrl: "/cosmonaut.tokenfactory.tokenfactory.MsgMintAndSendTokens", value: MsgMintAndSendTokens.fromPartial(data) }),
        msgUpdateOwner: (data) => ({ typeUrl: "/cosmonaut.tokenfactory.tokenfactory.MsgUpdateOwner", value: MsgUpdateOwner.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
