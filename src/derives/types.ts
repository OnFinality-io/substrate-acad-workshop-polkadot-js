import {U32, U8aFixed} from '@polkadot/types';
import {Kitty, KittyIndex} from '../interfaces';
import derives from './';

// export class KittyGender extends Enum.with(['Male', 'Female']) {}
export enum KittyGender {
    Male= 'Male',
    Female = 'Female',
}

export interface KittyExtend {
    id: KittyIndex;
    dna: Kitty;
    gender: KittyGender;
}
