import { API_URL } from '../../constants/env';
import {
  BattleArguments,
  BattleResponse,
  Monster,
} from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then(response => response.json());

const startBattleAPI = async (
  props: BattleArguments,
): Promise<BattleResponse> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST',
    body: JSON.stringify(props),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

export const MonsterService = {
  getAll,
  startBattleAPI,
};
