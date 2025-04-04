export class Tag {

    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('Typescript', 'blue');
    static readonly NODEJS = new Tag('Node.js', 'green');
    static readonly PYTHON = new Tag('Python', '#ffd700'); // jaune
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly JAVAFX = new Tag('JavaFX', 'grey');

    private constructor(private readonly key: string, public readonly color: string) {}

    toString() {
        return this.key;
    }
}