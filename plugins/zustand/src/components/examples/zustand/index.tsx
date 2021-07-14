import create from "zustand";

interface Counter {
  count: number;
  inc: () => void;
  dec: () => void;
}

export const useStore = create<Counter>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

export const ZustandExample = () => {
  const { count, inc, dec } = useStore();
  return (
    <div >
      <button onClick={inc}>up</button>
      <span>{count}</span>
      <button onClick={dec}>down</button>
    </div>
  );
};
