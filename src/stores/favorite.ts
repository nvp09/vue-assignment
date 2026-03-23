import { defineStore } from "pinia";

// TODO1: สร้าง store ชื่อ useFavoriteStore
export const useFavoriteStore = defineStore("favorite", {
  // state
  state: () => ({
    username: "" as string,      // ชื่อผู้ใช้
    favorites: [] as any[],      // รายการคอร์สที่ถูกใจ
  }),

  // actions
  actions: {
    // เก็บชื่อผู้ใช้
    setUsername(name: string) {
      this.username = name;
    },

    // เพิ่มคอร์สใน favorites
    addFavorite(course: any) {
      this.favorites.push(course);
    },
  },
});