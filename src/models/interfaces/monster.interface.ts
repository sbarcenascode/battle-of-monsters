export interface Monster {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
}

export interface BattleArguments {
  monster1Id: string;
  monster2Id: string;
}

export interface BattleResponse {
  winner: Monster;
  tie: boolean;
}
