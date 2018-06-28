import { App } from './App';
/**
 * @interface AppInfo Interface for the Application Info loaded from the application metadata file
 */
export interface AppInfo {
    name: string;
    title: string;
    manifest_url: string;
    icon: string;
    images: Array<{
        url: string;
    }>;
    description: string;
    hidden?: boolean;
    startup?: boolean;
}
/**
 * @class ContentManager A manager to handle content additions to the DOM
 */
export declare class ContentManager {
    /**
     * @member INSTANCE Contains the instance of the ContentManager Class
     */
    private static INSTANCE;
    /**
     * @member _loadSettingsFileUrl The path to the default settings .json
     */
    private _localSettingsFileUrl;
    /**
     * @member _trayApps Holds all of the loaded applications.
     */
    private _trayApps;
    /**
     * @member _hasRenderedOnce Checks if we have rendered to the hotbar at least one time.
     */
    private _hasRenderedOnce;
    /**
     * @member _dragDropManager Sets the DragDropManager instance.
     */
    private _dragDropManager;
    /**
     * @constructor Constructor for the ContentManager Class
     */
    constructor();
    /**
     * @method _createEventListeners Creates Event Listeners
     */
    private _createEventListeners;
    /**
     * @method _handleSearchInput Handles input from the search bar.
     * @param e Keyboard Event captured from the keyup event listener.
     */
    private _handleSearchInput;
    /**
     * @method _loadConfigurationFile Loads in the Configuration File and initates processing
     * @param fileUrl Url of metadata
     */
    private _loadConfigurationFile;
    /**
     * @method _loadAppMetadataAndProcess Loads Application Metadata and Processes
     * @param fileUrl Url of Metadata
     */
    private _loadAppMetadataAndProcess;
    /**
     * @method _loadConfigFileAndProcess Loads Application Settings and Processes
     * @param fileUrl Url of Metadata
     */
    private _loadConfigFileAndProcess;
    /**
     * @method _processAppConfigs Process the Application configuration and handles.
     * @param config ConfigInfo
     */
    private _processAppConfigs;
    /**
     * @method writeCSS Writes a raw CSS string into a style tag.
     * @param style CSS Style String
     */
    private _writeCSS;
    /**
     * @method _processAppList Process the Array of Applications and handles.
     * @param apps AppInfo Array
     */
    private _processAppList;
    /**
     * @method _renderHotBar Renders the Hotbar Apps.
     * @param apps Array of Applications
     * @param clearExistingIcons Remove any existing Icons
     */
    private _renderHotBar;
    /**
     * @method _renderAppList Renders Application from an array of applications.
     * @param apps Array of Applications
     * @param renderHotBar Boolean if we should consider the top bar items or render only to the tray.
     */
    private _renderAppList;
    /**
     * @method _renderTo A helper to render HTML to the DOM.
     * @param toElement Element to Render to.
     * @param renderElement Element to Render.
     */
    private _renderTo;
    /**
     * @method getTrayApps Returns an Array of items from Tray
     * @returns {App[]} App[]
     */
    readonly getTrayApps: App[];
    /**
     * @method _createFromManifestAndRun Creates an Openfin Application from Manifest and runs it.
     * @param manifest A URL to the Application Manifest.
     */
    static createFromManifestAndRun(manifest: string): void;
    /**
     * @method instance returns the Content Manager INSTANCE
     * @returns ContentManager
     */
    static readonly instance: ContentManager;
}
