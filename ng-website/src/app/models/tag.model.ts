export class Tag {

    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('Typescript', 'blue');
    static readonly NODEJS = new Tag('Node.js', 'green');
    static readonly PYTHON = new Tag('Python', '#ffd700'); // jaune
    static readonly CSHARP = new Tag('C#', 'purple');
    static readonly AVALONIA = new Tag('Avalonia', 'grey');
    static readonly CPP = new Tag('C++', 'blue');
    static readonly QT = new Tag('Qt', 'green');

    private constructor(private readonly key: string, public readonly color: string) {}

    toString() {
        return this.key;
    }
}