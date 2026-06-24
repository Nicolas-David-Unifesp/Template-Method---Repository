import Comparator from './Comparator'

export class compararAlfabetico extends Comparator {
    constructor(name: string) {
        super(name);
    }

    protected compararCritério(a: string, b: string): number {
        return a.localeCompare(b);
    }
}

export class compararTamanho extends Comparator {
    constructor(name: string) {
        super(name);
    }

    protected compararCritério(a: string, b: string): number {
        return a.length - b.length;
    }
}

export class compararUltimaLetra extends Comparator {
    constructor(name: string) {
        super(name);
    }

    protected compararCritério(a: string, b: string): number {
        if (a.length === 0) return -1;
        if (b.length === 0) return 1;

        const ultimaA = a.charAt(a.length - 1).toLowerCase();
        const ultimaB = b.charAt(b.length - 1).toLowerCase();

        return ultimaA.localeCompare(ultimaB);
    }
}
