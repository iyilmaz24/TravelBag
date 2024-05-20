/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Item, initialItems } from "../lib/constants";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (newItemText: string) => {
        const newItem = {
          id: new Date().getTime(),
          text: newItemText,
          packed: false,
        };
        set((state: any) => ({ items: [...state.items, newItem] }));
      },
      deleteItem: (id: number) => {
        set((state: any) => {
          const newItems = state.items.filter((item: Item) => item.id !== id);
          return { items: newItems };
        });
      },
      toggleItem: (id: number) => {
        set((state: any) => {
          const newItems = state.items.map((item: Item) => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }

            return item;
          });
          return { items: newItems };
        });
      },
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        set(() => ({ items: initialItems }));
      },
      markAllAsComplete: () => {
        set((state: any) => {
          const newItems = state.items.map((item: Item) => {
            return { ...item, packed: true };
          });

          return { items: newItems };
        });
      },
      markAllAsIncomplete: () => {
        set((state: any) => {
          const newItems = state.items.map((item: Item) => {
            return { ...item, packed: false };
          });

          return { items: newItems };
        });
      },
    }),
    {
      name: "itemsList",
    }
  )
);
