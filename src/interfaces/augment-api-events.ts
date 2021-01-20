// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { bool, u32 } from '@polkadot/types';
import type { BalanceStatus } from '@polkadot/types/interfaces/balances';
import type { AuthorityList } from '@polkadot/types/interfaces/grandpa';
import type { AccountId, Balance } from '@polkadot/types/interfaces/runtime';
import type { DispatchError, DispatchInfo, DispatchResult } from '@polkadot/types/interfaces/system';
import type { Kitty, KittyIndex } from 'kitty-workshop/interfaces/kitties';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/events' {
  export interface AugmentedEvents<ApiType> {
    balances: {
      /**
       * A balance was set by root. \[who, free, reserved\]
       **/
      BalanceSet: AugmentedEvent<ApiType, [AccountId, Balance, Balance]>;
      /**
       * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
       **/
      Deposit: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss. \[account, balance\]
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was created with some free balance. \[account, free_balance\]
       **/
      Endowed: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was reserved (moved from free to reserved). \[who, value\]
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * \[from, to, balance, destination_status\]
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [AccountId, AccountId, Balance, BalanceStatus]>;
      /**
       * Transfer succeeded. \[from, to, value\]
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * Some balance was unreserved (moved from reserved to free). \[who, value\]
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    grandpa: {
      /**
       * New authority set has been applied. \[authority_set\]
       **/
      NewAuthorities: AugmentedEvent<ApiType, [AuthorityList]>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
    };
    kitties: {
      /**
       * A new kitten is bred. \[owner, kitty_id, kitty\]
       **/
      KittyBred: AugmentedEvent<ApiType, [AccountId, KittyIndex, Kitty]>;
      /**
       * A kitty is created. \[owner, kitty_id, kitty\]
       **/
      KittyCreated: AugmentedEvent<ApiType, [AccountId, KittyIndex, Kitty]>;
      /**
       * A kitty is transferred. \[from, to, kitty_id\]
       **/
      KittyTransferred: AugmentedEvent<ApiType, [AccountId, AccountId, KittyIndex]>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied.
       **/
      KeyChanged: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [DispatchResult]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [bool]>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed. \[error, info\]
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [DispatchError, DispatchInfo]>;
      /**
       * An extrinsic completed successfully. \[info\]
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [DispatchInfo]>;
      /**
       * An \[account\] was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A new \[account\] was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [AccountId]>;
    };
    templateModule: {
      /**
       * Event documentation should end with an array that provides descriptive names for event
       * parameters. [something, who]
       **/
      SomethingStored: AugmentedEvent<ApiType, [u32, AccountId]>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
  }
}
