import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFavorite = create(
  persist(
    set => ({
      categoryName: [],
      updateCategoryName: (newCategoryName: string) =>
        set(() => ({
          categoryName: newCategoryName,
        })),
    }),
    {
      name: 'cross-app',
    },
  ),
);
