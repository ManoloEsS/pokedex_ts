import { createInterface } from 'node:readline';
import { exit, stdin, stdout } from 'node:process';

export function startREPL(): void {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Pokedex >'
    });

    rl.prompt();

    rl.on('line', (line: string) => {
        switch (line.trim()) {
            case '':
                break;
            default:
                console.log(`Your command was: ${cleanInput(line)[0]}`);
                break;
        }

        rl.prompt();
    }).on('close', () => {
        console.log('Bye');
        exit(0);
    });
}

export function cleanInput(s: string): string[] {
    return s.toLowerCase().trim().split(' ');
}
