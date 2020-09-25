import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const sleectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
