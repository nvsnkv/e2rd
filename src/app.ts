class E2RD {
    private static Annoucement = "Under construction...";

    Anounce() {
        this._writeLine(E2RD.Annoucement);
    }

    constructor(writeLine: (s: string) => void) {
        this._writeLine = writeLine;
    }

    private _writeLine: (s: string) => void;
}


const e2rd = new E2RD((s: string) => document.writeln(s));

e2rd.Anounce();