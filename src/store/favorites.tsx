import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useFavorite = create(
  persist(
    set => ({
      categoryName: [],
      updateCategoryName: (newCategoryName: string[]) =>
        set(() => ({
          categoryName: newCategoryName,
        })),
      resetCategoryName: () =>
        set(() => ({
          categoryName: [],
        })),
    }),
    {
      name: 'cross-app',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
