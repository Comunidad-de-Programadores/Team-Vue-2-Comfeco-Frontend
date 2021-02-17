export default class manageStorage {
    setObject(key, value) {
        return Promise.resolve().then(function() {
            localStorage.setItem(key, JSON.stringify(value));
        });
    }

    getObject(key) {
        return Promise.resolve().then(function() {
            return JSON.parse(localStorage.getItem(key) || "{}");
        });
    }

    setItem(key, value) {
        return Promise.resolve().then(function() {
            localStorage.setItem(key, JSON.stringify(value));
        });
    }

    getItem(key) {
        return Promise.resolve().then(function() {
            return localStorage.getItem(key);
        });
    }

    removeItem(key) {
        return Promise.resolve().then(function() {
            return localStorage.removeItem(key);
        });
    }

    keys() {
        return Promise.resolve().then(function() {
            return Object.entries(localStorage);
        });
    }

    clear() {
        return Promise.resolve().then(function() {
            return localStorage.clear();
        });
    }
}
