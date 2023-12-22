import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  BattleArguments,
  BattleResponse,
  Monster,
} from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const startBattle = createAsyncThunk<BattleResponse, BattleArguments>(
  'monsters/startBattle',
  MonsterService.startBattleAPI,
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const setComputerMonster = createAction<Monster | null>(
  'monsters/setComputerMonster',
);
