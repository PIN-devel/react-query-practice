declare global {
  interface Window {
    test: () => void;
  }
}

export type TodoType = {
  id: number;
  content: string;
};

export type OptionType = {
  todos: boolean;
  attendance: boolean;
  banner: boolean;
};
