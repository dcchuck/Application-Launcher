import { AppInfo } from "./ContentManager";
/**
 * @class App Handles individual Application functionality
 */
export declare class App {
    /**
     * @member _appInfo Contains the information for this application
     */
    private _appInfo;
    /**
     * @constructor Constructor for App Class.
     * @param appInfo Contains the information for this application.
     */
    constructor(appInfo: AppInfo);
    /**
     * @method render Returns HTMLElement for this application
     */
    render(hotbar?: boolean): HTMLElement;
    /**
     * @method info Returns information about the application
     */
    readonly info: AppInfo;
}
