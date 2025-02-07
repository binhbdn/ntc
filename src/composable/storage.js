class Storage {
  get(key) {
    try {
      const value = window.localStorage.getItem(key);
      // Kiểm tra nếu giá trị là JSON
      return value && (value.startsWith("{") || value.startsWith("[")) ? JSON.parse(value) : value;
    } catch (error) {
      console.error("Failed to parse JSON from localStorage:", error);
      return null;
    }
  }

  set(key, value) {
    try {
      const isPrimitive = typeof value === "string" || typeof value === "number" || typeof value === "boolean";
      const valueToStore = isPrimitive ? value : JSON.stringify(value);
      window.localStorage.setItem(key, valueToStore);
    } catch (error) {
      console.error("Failed to store value in localStorage:", error);
    }
  }

  remove(key) {
    window.localStorage.removeItem(key);
  }

  clear() {
    window.localStorage.clear();
  }
}

export const $storage = new Storage();
