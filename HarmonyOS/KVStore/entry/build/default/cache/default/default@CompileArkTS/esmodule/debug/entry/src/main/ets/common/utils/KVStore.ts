import distributedKVStore from "@ohos:data.distributedKVStore";
import bundleManager from "@ohos:bundle.bundleManager";
import hilog from "@ohos:hilog";
import { KVStoreType } from "@bundle:com.example.kvstore/entry/ets/viewmodel/KVStoreType";
export default class KVStore {
    private kvManager: distributedKVStore.KVManager | undefined = undefined;
    private context = getContext(this);
    private kvStore: distributedKVStore.SingleKVStore | undefined = undefined;
    private bundleName: string = '';
    constructor(encrypt: boolean, securityLevel: distributedKVStore.SecurityLevel) {
        let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_DEFAULT;
        bundleManager.getBundleInfoForSelf(bundleFlags, (err, data) => {
            this.bundleName = data.name;
            const kvManagerConfig: distributedKVStore.KVManagerConfig = {
                context: this.context,
                bundleName: this.bundleName
            };
            this.kvManager = distributedKVStore.createKVManager(kvManagerConfig);
            const options: distributedKVStore.Options = {
                createIfMissing: true,
                backup: false,
                autoSync: false,
                kvStoreType: distributedKVStore.KVStoreType.SINGLE_VERSION,
                encrypt: encrypt,
                securityLevel: securityLevel
            };
            this.kvManager.getKVStore<distributedKVStore.SingleKVStore>(`${securityLevel}${JSON.stringify(encrypt)}`, options, (err, store: distributedKVStore.SingleKVStore) => {
                if (err) {
                    hilog.error(0x0000, 'KVStore', `Failed to get KVStore: Code:${err.code},message:${err.message}`);
                    return;
                }
                hilog.info(0x0000, 'KVStore', 'Succeeded in getting KVStore.');
                this.kvStore = store;
            });
        });
    }
    async put(key: string, value: Uint8Array | string | number | boolean) {
        this.kvStore!.put(key, value, (err) => {
            if (err !== undefined) {
                hilog.error(0x0000, 'KVStore', `Failed to put data. Code:${err.code},message:${err.message}`);
                return;
            }
            hilog.info(0x0000, 'KVStore', 'Succeeded in putting data.');
        });
    }
    delete(key: string) {
        this.kvStore!.delete(key, (err) => {
            if (err !== undefined) {
                hilog.error(0x0000, 'KVStore', `Failed to delete data. Code:${err.code},message:${err.message}`);
                return;
            }
            hilog.info(0x0000, 'KVStore', 'Succeeded in deleting data.');
        });
    }
    async getAll(): Promise<KVStoreType[]> {
        let allKVStore: KVStoreType[] = [];
        await this.kvStore!.getEntries('^').then((entries: distributedKVStore.Entry[]) => {
            let i = 0;
            for (i; i < entries.length; i++) {
                let type: string = typeof entries[i].value.value;
                if (type === 'object') {
                    type = 'Uint8Array';
                }
                let kvStoreType = new KVStoreType(entries[i].key, entries[i].value.value, type);
                allKVStore.push(kvStoreType);
            }
        });
        hilog.info(0x0000, 'KVStore', `kvStoreType: ${JSON.stringify(allKVStore)}`);
        return allKVStore;
    }
}
