import { createReducer } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  fetchMonstersData,
  setComputerMonster,
  setSelectedMonster,
  startBattle,
} from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  computerMonster: Monster | null;
  match: {
    winner: Monster | null;
    tie: boolean;
    inProgress: boolean;
  };
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  computerMonster: null,
  match: {
    winner: null,
    tie: false,
    inProgress: false,
  },
};

export const monstersReducer = createReducer(initialState, builder => {
  builder.addCase(fetchMonstersData.pending, state => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, state => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
    match: {
      ...state.match,
      winner: null,
      tie: false,
    },
  }));
  builder.addCase(setComputerMonster, (state, action) => ({
    ...state,
    computerMonster: action.payload,
  }));
  builder.addCase(startBattle.pending, state => ({
    ...state,
    match: {
      ...state.match,
      inProgress: true,
    },
  }));

  builder.addCase(startBattle.rejected, state => ({
    ...state,
    match: {
      ...state.match,
      inProgress: false,
      winner: null,
      tie: false,
    },
  }));

  builder.addCase(startBattle.fulfilled, (state, action) => ({
    ...state,
    match: {
      ...state.match,
      inProgress: false,
      ...action.payload,
    },
  }));
});
