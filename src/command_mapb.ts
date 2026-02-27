import { State } from "./state.js";

import { printLocations } from "./command_map.js";
export async function commandMapb(state: State): Promise<void> {
    try {
        const locations = await state.pokeApi.fetchLocations(state.prevLocationsURL)
        if (!locations) {
            throw new Error(`Could not fetch locations ${locations}`)
        }
        printLocations(locations)
        state.nextLocationsURL = locations.next
        state.prevLocationsURL = locations.previous
    } catch (error) {
        throw new Error(`could not get previous locations: ${error}`)
    }
}
