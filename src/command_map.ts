import { ShallowLocations } from "./pokeapi.js";
import { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
    try {
        const locations = await state.pokeApi.fetchLocations(state.nextLocationsURL)
        if (!locations) {
            throw new Error(`Could not fetch locations ${locations}`)
        }
        printLocations(locations)
        state.nextLocationsURL = locations.next
        state.prevLocationsURL = locations.previous
    } catch (error) {
        throw new Error(`could not get next locations: ${error}`)
    }
}

export function printLocations(locations: ShallowLocations): void {
    for (const area of locations.results) {
        console.log(area.name)
    }
}
