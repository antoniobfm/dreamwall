/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable no-param-reassign */
import { door, window } from '@/configs/dimensions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialLoad } from './wall.actions';

interface IUser {
  walls: {
    width: number;
    height: number;
    dimensionsSaved: boolean;
    windows: number;
    doors: number;
  }[];
  pending: boolean;
  error: boolean;
  messages: { type: 'success' | 'error' | 'info'; message: string }[];
}

const initialState: IUser = {
  walls: [
    { width: 0, height: 0, dimensionsSaved: false, windows: 0, doors: 0 },
    { width: 0, height: 0, dimensionsSaved: false, windows: 0, doors: 0 },
    { width: 0, height: 0, dimensionsSaved: false, windows: 0, doors: 0 },
    { width: 0, height: 0, dimensionsSaved: false, windows: 0, doors: 0 },
  ],
  pending: false,
  error: false,
  messages: [{ type: 'success', message: 'Success' }],
};

export const wallsSlice = createSlice({
  name: 'walls',
  initialState,
  reducers: {
    saveDimensions: (
      state,
      action: PayloadAction<{
        wallIndex: number;
        width: number;
        height: number;
      }>,
    ) => {
      const newWall = [...state.walls];
      const currentWall = newWall[action.payload.wallIndex];

      currentWall.width = action.payload.width;
      currentWall.height = action.payload.height;
      currentWall.dimensionsSaved = true;

      state.walls = [...newWall];
    },
    addWindow: (state, action: PayloadAction<{ wallIndex: number }>) => {
      const newWall = [...state.walls];

      const currentWall = newWall[action.payload.wallIndex];

      const area = currentWall.width * currentWall.height;
      const windowsArea = (currentWall.windows + 1) * window.area;
      const doorsArea = currentWall.doors * door.area;

      if (area / 2 >= windowsArea + doorsArea) {
        currentWall.windows += 1;
        state.walls = [...newWall];
      }
    },
    removeWindow: (state, action: PayloadAction<{ wallIndex: number }>) => {
      const newWall = [...state.walls];

      const currentWall = newWall[action.payload.wallIndex];

      if (currentWall.windows > 0) {
        currentWall.windows -= 1;
        state.walls = [...newWall];
      }
    },
    addDoor: (state, action: PayloadAction<{ wallIndex: number }>) => {
      const newWall = [...state.walls];

      const currentWall = newWall[action.payload.wallIndex];

      const area = currentWall.width * currentWall.height;
      const windowsArea = currentWall.windows * window.area;
      const doorsArea = (currentWall.doors + 1) * door.area;

      if (area / 2 >= windowsArea + doorsArea && currentWall.height >= 210) {
        currentWall.doors += 1;
        state.walls = [...newWall];
      }
    },
    removeDoor: (state, action: PayloadAction<{ wallIndex: number }>) => {
      const newWall = [...state.walls];

      const currentWall = newWall[action.payload.wallIndex];

      if (currentWall.doors > 0) {
        currentWall.doors -= 1;
        state.walls = [...newWall];
      }
    },
  },
  extraReducers(builder) {
    // Sign Out
    builder.addCase(initialLoad.pending, (state, _action) => {
      state.pending = true;
      state.error = false;
    }),
      builder.addCase(initialLoad.fulfilled, (state, _action) => {
        state.pending = false;

        state.walls = initialState.walls;

        state.messages = [
          ...state.messages,
          { message: 'Paredes carregadas com sucesso', type: 'success' },
        ];
      }),
      builder.addCase(initialLoad.rejected, (state, _action) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default wallsSlice.reducer;
