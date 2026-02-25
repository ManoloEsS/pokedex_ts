import { State } from "./state.js";

export function startREPL(state: State): void {
    state.readline.prompt();

    state.readline.on("line", async (line) => {
        const words = cleanInput(line);
        if (words.length === 0) {
            state.readline.prompt();
            return;
        }

        const commandName = words[0];
        const cmd = state.commands[commandName];
        if (!cmd) {
            console.log("Unknown command");
            return state.readline.prompt();
        }

        try {
            cmd.callback(state);

        } catch (e) {
            console.error(e);
        }

        state.readline.prompt();
    });
}

export function cleanInput(s: string): string[] {
    return s
        .toLowerCase()
        .trim()
        .split(" ")
        .filter((word: string) => word !== "");
}


