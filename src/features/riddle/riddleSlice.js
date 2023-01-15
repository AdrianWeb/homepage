import { createSlice } from '@reduxjs/toolkit';

export const riddleSlice = createSlice({
  name: 'riddle',
  initialState: {
    answer: '',
    passed: false,
    hint: '',
    failCount: 0,
    totalFailure: false
  },
  reducers: {
    updateAnswer: (state, action) => {
      state.answer = action.payload;
    },
    skipRiddle: (state) => {
      state.passed = true;
    },
    checkSolution: (state) => {
      const solutions = [
        'mellon',
        'melon',
        'melllon',
        'friend',
        'fren',
        'freind',
        'freund',
        'barát',
        'barat',
        'haver',
        'mate',
        'love',
        'lover',
        'pal',
        'buddy',
        'partner',
        'pardner',
        'chum',
        'choom',
        'brother',
        'sister',
        'bro',
        'sis',
        'fam',
        'boss',
        'homie',
        'comrade'
      ];
      const fail = ['Wrong answer', 'Try again', 'Not quite', 'Access denied'];
      const answer = state.answer.toLocaleLowerCase().trim();
      if (solutions.includes(answer)) {
        state.passed = true;
      } else if (state.failCount < 3) {
        state.failCount++;
        state.hint = fail[Math.floor(Math.random() * fail.length)];
      } else if (state.failCount === 3) {
        state.failCount++;
        state.hint = "Haven't you watched The Fellowship of the Ring?";
      } else if (state.failCount === 4) {
        state.failCount++;
        state.hint = "It's around the 2-hour mark in the extended cut.";
      } else if (state.failCount === 5) {
        state.failCount++;
        state.hint = 'Read this wiki then ';
      } else if (state.failCount === 6) {
        state.failCount++;
        state.hint = "It's mellon. The solution is mellon. Or friend.";
      } else {
        state.failCount++;
        document.getElementById('riddleForm').style.visibility = 'hidden';
        state.hint = 'Go away, servant of Sauron!';
      }
    }
  }
});

export const { updateAnswer, skipRiddle, checkSolution } = riddleSlice.actions;

export default riddleSlice.reducer;
