export function saveUser(user) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("UserDB", 1);

    request.onupgradeneeded = function (event) {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("users")) {
        db.createObjectStore("users", { keyPath: "email" });
      }
    };

    request.onsuccess = function (event) {
      const db = event.target.result;
      const transaction = db.transaction("users", "readwrite");
      const store = transaction.objectStore("users");

      store.add(user);
      transaction.oncomplete = function () {
        resolve();
      };
      transaction.onerror = function (event) {
        reject(event.target.error);
      };
    };

    request.onerror = function (event) {
      reject(event.target.error);
    };
  });
}
