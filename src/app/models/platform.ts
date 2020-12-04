import { Game } from './game';
import { PlatformType } from './platformtype';

export class Platform {
    id: number;
    name: string;
    type: PlatformType;
    games: Game[];
}