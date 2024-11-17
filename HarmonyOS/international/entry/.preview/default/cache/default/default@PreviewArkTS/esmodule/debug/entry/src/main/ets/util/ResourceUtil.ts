import type common from "@ohos:app.ability.common";
class ResourceUtil {
    async getString(id: number, context: common.Context): Promise<string> {
        let rscManager = context.resourceManager;
        let str: string = await rscManager.getStringValue(id);
        return str;
    }
    async getStringArray(id: number, context: common.Context): Promise<Array<string>> {
        let rscManager = context.resourceManager;
        let strArray: Array<string> = await rscManager.getStringArrayValue(id);
        return strArray;
    }
    async getPluralString(id: number, num: number, context: common.Context): Promise<string> {
        let rscManager = context.resourceManager;
        let plural: string = await rscManager.getPluralStringValue(id, num);
        return plural;
    }
    async getDirection(context: common.Context): Promise<string> {
        let rscManager = context.resourceManager;
        let configuration = await rscManager.getConfiguration();
        if (configuration.direction === 1) { // 1 is Horizontal，0 is Vertical
            return 'Horizontal';
        }
        else {
            return 'Vertical';
        }
    }
}
export default new ResourceUtil();
