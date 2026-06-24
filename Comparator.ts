export default abstract class Comparator {
    public readonly nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public exibirCabecalho(): void {
        console.log(`\n=== ${this.nome} ===`);
    }

    public printar(resultado: string[]): void {
        console.log(`> Resultado final: [ ${resultado.join(", ")} ]`);
    }
  
    public ordenar(palavras: string[]): string[] {
        this.exibirCabecalho();
      
        const copiaLista = [...palavras]; //novo array
        copiaLista.sort((a, b) => this.compararCritério(a, b));

        this.printar(copiaLista);
        return copiaLista;
    }

    protected abstract compararCritério(a: string, b: string): number;
}

