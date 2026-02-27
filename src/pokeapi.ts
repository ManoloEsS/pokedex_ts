export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() { }

    async fetchLocations(pageURL: string | null): Promise<ShallowLocations> {
        let url = PokeAPI.baseURL + "/location-area"
        if (pageURL !== null) {
            url = pageURL
        }

        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }

            const result = await response.json();
            return result;
        } catch (error) {
            throw new Error(`Could not fetch locations: ${error}`)
        }
    }

    // async fetchLocation(locationName: string): Promise<Location> {
    // }
}

export type ShallowLocations = {
    count: number;
    next: string | null;
    previous: string | null;
    results: { name: string; url: string }[];
};

// export type Location = {
// };
