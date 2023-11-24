interface Smartphone {
  carica: number;
  numeroChiamate: number;

  ricarica(unaRicarica: number): void;
  chiamata(minutiDurata: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class FirstUser implements Smartphone {
  carica: number = 0;
  numeroChiamate: number = 0;

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
  }

  chiamata(minutiDurata: number): void {
    const costoChiamata = minutiDurata * 0.2;
    if (this.carica >= costoChiamata) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
    } else {
      console.log("Saldo insufficiente");
    }
  }

  numero404(): number {
    return this.carica;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

class SecondUser implements Smartphone {
  carica: number = 0;
  numeroChiamate: number = 0;

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
  }

  chiamata(minutiDurata: number): void {
    const costoChiamata = minutiDurata * 0.2;
    if (this.carica >= costoChiamata) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
    } else {
      console.log("Saldo insufficiente");
    }
  }

  numero404(): number {
    return this.carica;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

class ThirdUser implements Smartphone {
  carica: number = 0;
  numeroChiamate: number = 0;

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
  }

  chiamata(minutiDurata: number): void {
    const costoChiamata = minutiDurata * 0.2;
    if (this.carica >= costoChiamata) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
    } else {
      console.log("Saldo insufficiente");
    }
  }

  numero404(): number {
    return this.carica;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

const utente1 = new FirstUser();
utente1.ricarica(2);
utente1.chiamata(20);
console.log("Saldo residuo utente1:", utente1.numero404());
console.log(
  "Numero di chiamate effettuate da utente1:",
  utente1.getNumeroChiamate()
);

utente1.azzeraChiamate();
console.log(
  "Numero di chiamate dopo azzeramento:",
  utente1.getNumeroChiamate()
);

const utente2 = new SecondUser();
utente2.ricarica(50);
utente2.chiamata(10);
utente2.chiamata(40);
console.log("Saldo residuo utente2:", utente2.numero404());
console.log(
  "Numero di chiamate effettuate da utente2:",
  utente2.getNumeroChiamate()
);

utente2.azzeraChiamate();
console.log(
  "Numero di chiamate dopo azzeramento:",
  utente2.getNumeroChiamate()
);

const utente3 = new ThirdUser();
utente3.ricarica(20);
utente3.chiamata(35);
console.log("Saldo residuo utente3:", utente3.numero404());
console.log(
  "Numero di chiamate effettuate da utente3:",
  utente3.getNumeroChiamate()
);

utente3.azzeraChiamate();
console.log(
  "Numero di chiamate dopo azzeramento:",
  utente3.getNumeroChiamate()
);
