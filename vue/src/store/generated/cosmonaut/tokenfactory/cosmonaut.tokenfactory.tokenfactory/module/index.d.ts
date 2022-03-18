import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateDenom } from "./types/tokenfactory/tx";
import { MsgMintAndSendTokens } from "./types/tokenfactory/tx";
import { MsgUpdateOwner } from "./types/tokenfactory/tx";
import { MsgUpdateDenom } from "./types/tokenfactory/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgCreateDenom: (data: MsgCreateDenom) => EncodeObject;
    msgMintAndSendTokens: (data: MsgMintAndSendTokens) => EncodeObject;
    msgUpdateOwner: (data: MsgUpdateOwner) => EncodeObject;
    msgUpdateDenom: (data: MsgUpdateDenom) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
