var FirstUser = /** @class */ (function () {
    function FirstUser() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    FirstUser.prototype.chiamata = function (minutiDurata) {
        var costoChiamata = minutiDurata * 0.2;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Saldo insufficiente");
        }
    };
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
var SecondUser = /** @class */ (function () {
    function SecondUser() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        var costoChiamata = minutiDurata * 0.2;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Saldo insufficiente");
        }
    };
    SecondUser.prototype.numero404 = function () {
        return this.carica;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SecondUser;
}());
var ThirdUser = /** @class */ (function () {
    function ThirdUser() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        var costoChiamata = minutiDurata * 0.2;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Saldo insufficiente");
        }
    };
    ThirdUser.prototype.numero404 = function () {
        return this.carica;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
var utente1 = new FirstUser();
utente1.ricarica(2);
utente1.chiamata(20);
console.log("Saldo residuo utente1:", utente1.numero404());
console.log("Numero di chiamate effettuate da utente1:", utente1.getNumeroChiamate());
utente1.azzeraChiamate();
console.log("Numero di chiamate dopo azzeramento:", utente1.getNumeroChiamate());
var utente2 = new SecondUser();
utente2.ricarica(50);
utente2.chiamata(10);
utente2.chiamata(40);
console.log("Saldo residuo utente2:", utente2.numero404());
console.log("Numero di chiamate effettuate da utente2:", utente2.getNumeroChiamate());
utente2.azzeraChiamate();
console.log("Numero di chiamate dopo azzeramento:", utente2.getNumeroChiamate());
var utente3 = new ThirdUser();
utente3.ricarica(20);
utente3.chiamata(35);
console.log("Saldo residuo utente3:", utente3.numero404());
console.log("Numero di chiamate effettuate da utente3:", utente3.getNumeroChiamate());
utente3.azzeraChiamate();
console.log("Numero di chiamate dopo azzeramento:", utente3.getNumeroChiamate());
