import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";

import type { CLICommand } from "./state.js";


export function getCommands(): Record<string, CLICommand> {
    return {
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,

        },
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        map: {
            name: "map",
            description: "Displays next 20 locations",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays previous 20 locations",
            callback: commandMapb,
        },
    };
}

