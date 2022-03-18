package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/cosmonaut/tokenfactory/testutil/keeper"
	"github.com/cosmonaut/tokenfactory/x/tokenfactory/keeper"
	"github.com/cosmonaut/tokenfactory/x/tokenfactory/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.TokenfactoryKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
