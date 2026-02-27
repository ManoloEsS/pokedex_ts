import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type State = {
    readline: Interface,
    commands: Record<string, CLICommand>,
    pokeApi: PokeAPI,
    nextLocationsURL: string | null,
    prevLocationsURL: string | null,
};

export function initState(): State {
    return {
        readline: createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "Pokedex >",
        }),
        commands: getCommands(),
        pokeApi: new PokeAPI,
        nextLocationsURL: null,
        prevLocationsURL: null,
    }
};

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
};

