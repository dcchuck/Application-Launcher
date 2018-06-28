/**
 * @class TrayWindowManager Handles Tray menu functionality.
 */
export declare class TrayWindowManager {
    private static INSTANCE;
    private _window;
    private _icon;
    constructor();
    /**
     * @method _createTrayWindow Creates the tray menu window
     */
    private _createTrayWindow;
    /**
     * @method _createTrayIcon Sets Tray Icon and sets up menu event
     */
    private _createTrayIcon;
    /**
     * @method _trayMenuHandler Handles events for when the tray menu is activated.  Fired from tray icon click.
     * @param e fin.TrayIconClickedEvent
     */
    private _trayMenuHandler;
    /**
     * @method destroyTrayWindow Removes the current tray icon
     * Intended to be called when unloading the main window to
     * ensure errant tray icons are not left around.
     */
    destroyTrayWindow(): Promise<void[]>;
    /**
     * @method updateTrayIcon Updates Tray Icon
     * @param imageURL Image URL
     */
    updateTrayIcon(imageURL: string): void;
    /**
     * @method instance Returns the TrayWindowManager INSTANCE
     */
    static readonly instance: TrayWindowManager;
}
