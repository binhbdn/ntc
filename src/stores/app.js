import { defineStore } from "pinia";
import { $fetch } from "@/composable/api";

export const useAppStore = defineStore("app", {
  state: () => ({
    banners: null
  }),
  actions: {
    async getBanners() {
      const errMsg = "Không tải được danh sách banner. Vui lòng thử lại sau!";
      try {
        const res = await $fetch("banners");
        if (res.success) {
          this.banners = res.data;
          return true;
        }
        window.$toastError(errMsg);
        return false;
      } catch (err) {
        window.$toastError(errMsg);
        return false;
      }
    }
  }
});
