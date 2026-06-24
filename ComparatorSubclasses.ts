export const compararAlfabetico extends Comparator = (a: string, b: string): number => {
    protected compararCritério(a: string, b: string): number {
        return a.localeCompare(b);
    }
};

export const compararTamanho extends Comparator = (a: string, b: string): number => {
    protected compararCritério(a: string, b: string): number {
        return a.length - b.length;
    }
};

export const compararUltimaLetra extends Comparator = (a: string, b: string): number => {
    protected compararCritério(a: string, b: string): number {
        if (a.length === 0) return -1;
        if (b.length === 0) return 1;

        const ultimaA = a.charAt(a.length - 1).toLowerCase();
        const ultimaB = b.charAt(b.length - 1).toLowerCase();

        return ultimaA.localeCompare(ultimaB);
    }
};
