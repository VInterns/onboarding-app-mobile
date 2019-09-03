export interface UiState {
  loading: boolean;
  currentSection:number;
}

export const UiInitialState: UiState = {
  loading: false,
  currentSection:0
};
