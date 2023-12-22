import mockFetch from 'jest-fetch-mock';
import monstersData from '../../../server/monsters.json';
import { BattleArguments } from '../../models/interfaces/monster.interface';

import { MonsterService } from './monsters.service';

describe('Monsters Service', () => {
  beforeAll(() => {
    mockFetch.enableMocks();
  });

  it('should return the monsters list empty', async () => {
    jest.spyOn(MonsterService, 'getAll').mockResolvedValue([]);
    const response = await MonsterService.getAll();
    expect(response).toEqual([]);
  });

  it('should return the monsters list with data', async () => {
    jest
      .spyOn(MonsterService, 'getAll')
      .mockResolvedValue([monstersData.monsters[0], monstersData.monsters[1]]);
    const response = await MonsterService.getAll();
    expect(response).toEqual([
      monstersData.monsters[0],
      monstersData.monsters[1],
    ]);
  });

  it('should return the battle result', async () => {
    const battleArguments: BattleArguments = {
      monster1Id: monstersData.monsters[0].id,
      monster2Id: monstersData.monsters[1].id,
    };
    mockFetch.mockResponseOnce(
      JSON.stringify({
        winner: monstersData.monsters[0],
        tie: false,
      }),
    );
    const response = await MonsterService.startBattleAPI(battleArguments);
    expect(response).toEqual({
      winner: monstersData.monsters[0],
      tie: false,
    });
  });
});
