"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeedPurchase = void 0;
function getSeedPurchase() {
    return [
        {
            totalPrice: 100,
            totalBooks: 4,
            delivery: {
                name: "Vicor Hugo",
                lastName: "Gomez Tejada",
                email: "victorhugogote@hotmail.com",
                direction: "Carrer de Girona 64",
                city: "Barcelona",
                cp: "08009",
                phone: "661589716",
                deliveryDate: "10/12/2021",
            },
            payment: {
                cvc: "102",
                expiry: "03/26",
                name: "VICTOR HUGO GOMEZ TEJADA",
                number: "4012888888881881",
            },
            books: [
                { n: 1, _id: "61aa432d33d5b82cd854ee35", title: "Doctor Portuondo" },
                {
                    n: 2,
                    _id: "61aa432d33d5b82cd854ee38",
                    title: "Te están robando el alma",
                },
                { n: 1, _id: "61aa432d33d5b82cd854ee37", title: "Prohibido nacer" },
            ],
        },
    ];
}
exports.getSeedPurchase = getSeedPurchase;
//# sourceMappingURL=data-purchase.js.map