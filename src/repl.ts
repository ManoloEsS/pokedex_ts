import { createInterface } from "node:readline";

export function startREPL(): void {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex >",
    });

    rl.prompt();

    rl.on("line", (line) => {
        const words = cleanInput(line);
        if (words.length === 0) {
            rl.prompt();
            return;
        }

        const commandName = words[0];
        console.log(`Your command was: ${commandName}`);
        rl.prompt();
    });
}

export function cleanInput(s: string): string[] {
    return s
        .toLowerCase()
        .trim()
        .split(" ")
        .filter((word: string) => word !== "");
}
