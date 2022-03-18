package keeper

import (
	"github.com/cosmonaut/tokenfactory/x/tokenfactory/types"
)

var _ types.QueryServer = Keeper{}
