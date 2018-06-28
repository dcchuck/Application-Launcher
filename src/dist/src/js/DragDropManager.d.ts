/**
 * Helper class that initiates and manages drag and drop functionality
 */
export declare class DragDropManager {
    /** Maximum number of hotbar icons */
    private _maxChildren;
    /** Current number of icons in the hotbar */
    private _hotBarChildCount;
    /** Pointers to the two container elements */
    private _appHotBar;
    private _appList;
    /** Instance of the dragula drake class which actually does the DnD logic */
    private _drake;
    /**
     * @param {number} maxChildren Maximum number of hotbar icons allowed
     */
    constructor(maxChildren?: number);
    /**
     * Initializes the dragula library to manage drag and drop
     */
    private _initializeDragula;
    /** Registers listeners against the drake object to customise behaviour */
    private _registerListeners;
    /**
     * Initializes the hotbar count tracker to the number of icons in the hotbar when called.
     * Should be called once the app lists are fully rendered, but before any drag and drop
     * functionality is required.
     */
    initChildCount(): void;
}
