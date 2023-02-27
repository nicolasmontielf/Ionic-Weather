import { Storage } from '@ionic/storage';

class MyStorage {
    storage: Storage;

    constructor() {
        this.storage = new Storage();
        this.init()
    }

    public async init() {
        await this.storage.create();
    }

    public async get(key: string) {
        return await this.storage.get(key);
    }

    public async set(key: string, value: any) {
        return await this.storage.set(key, value);
    }
}

export default new MyStorage();