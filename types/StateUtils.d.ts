/**
 * Utilities to perform atomic operation with navigate state and routes.
 *
 * ```javascript
 * const state1 = {key: 'screen 1'};
 * const state2 = NavigationStateUtils.push(state1, {key: 'screen 2'});
 * ```
 */
interface Route {
    key: string;
}
interface State {
    routes: Route[];
    index: number;
}
declare const StateUtils: {
    /**
     * Gets a route by key. If the route isn't found, returns `null`.
     */
    get(state: State, key: string): Route | null;
    /**
     * Returns the first index at which a given route's key can be found in the
     * routes of the navigation state, or -1 if it is not present.
     */
    indexOf(state: State, key: string): number;
    /**
     * Returns `true` at which a given route's key can be found in the
     * routes of the navigation state.
     */
    has(state: State, key: string): boolean;
    /**
     * Pushes a new route into the navigation state.
     * Note that this moves the index to the position to where the last route in the
     * stack is at.
     */
    push(state: State, route: Route): State;
    /**
     * Pops out a route from the navigation state.
     * Note that this moves the index to the position to where the last route in the
     * stack is at.
     */
    pop(state: State): State;
    /**
     * Sets the focused route of the navigation state by index.
     */
    jumpToIndex(state: State, index: number): State;
    /**
     * Sets the focused route of the navigation state by key.
     */
    jumpTo(state: State, key: string): State;
    /**
     * Sets the focused route to the previous route.
     */
    back(state: State): State;
    /**
     * Sets the focused route to the next route.
     */
    forward(state: State): State;
    /**
     * Replace a route by a key.
     * Note that this moves the index to the position to where the new route in the
     * stack is at and updates the routes array accordingly.
     */
    replaceAndPrune(state: State, key: string, route: Route): State;
    /**
     * Replace a route by a key.
     * Note that this moves the index to the position to where the new route in the
     * stack is at. Does not prune the routes.
     * If preserveIndex is true then replacing the route does not cause the index
     * to change to the index of that route.
     */
    replaceAt(state: State, key: string, route: Route, preserveIndex?: boolean): State;
    /**
     * Replace a route by a index.
     * Note that this moves the index to the position to where the new route in the
     * stack is at.
     */
    replaceAtIndex(state: State, index: number, route: Route): State;
    /**
     * Resets all routes.
     * Note that this moves the index to the position to where the last route in the
     * stack is at if the param `index` isn't provided.
     */
    reset(state: State, routes: Route[], index: number): State;
};
export default StateUtils;
