/**
 * @class WindowManager Handles all Window Related Functionality
 */
export declare class WindowManager {
    private static INSTANCE;
    private _application;
    private _window;
    private _isTrayOpen;
    /**
     * @member _hotBarHeight The height of the hotbar when minimized.  Rounded up to the nearest 10th.  Real value is 67. 70 Used due to bug.
     */
    private readonly _hotBarHeight;
    constructor();
    /**
     * @method setWindowDefaults Sets default window attributes and Event Listeners
     */
    private setWindowDefaults;
    /**
     * @method createEventListeners Creates Windows Event Listeners
     */
    private createEventListeners;
    /**
     * @method handleUnload Fires before the DOM is unloaded.
     * Removes the current tray icon, then allows the reload to continue
     */
    private handleUnload;
    /**
     * @method handleWindowClose Fires when the window is attempted to be closed
     */
    private handleWindowClose;
    /**
     * @method windowResized Fires on the windows bounds-changed event
     * @param e fin.WindowsBoundsEvent
     */
    private windowResized;
    /**
     * @method toggleTray Toggles the tray open or close depending on current state.
     */
    toggleTray(): void;
    /**
     * @method openTray Opens the tray regardless of current state.
     */
    openTray(): void;
    /**
     * @method closeTray Closes the tray regardless of current state.
     */
    closeTray(): void;
    /**
     * @method _moveTray Opens or Closes the tray based on param.
     * @param open True if the tray should open, False if should close.
     */
    private _moveTray;
    /**
     * @method _calculateTrayHeight Calculates the height that the tray should stretch out to.
     */
    private _calculateTrayHeight;
    /**
     * @method isTrayOpen Returns if the tray is currently open or not.
     * @returns boolean
     */
    readonly isTrayOpen: boolean;
    closeWindow(): void;
    /**
     * @method instance returns the Window Manager INSTANCE
     * @returns WindowManager
     */
    static readonly instance: WindowManager;
}
