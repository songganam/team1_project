const { atom, selector } = require("recoil");

export const refreshState = atom({
  key: "refreshState",
  default: 0,
});

export const refreshSelector = selector({
  key: "refreshSelector",
  get: ({ get }) => get(refreshState),
});
