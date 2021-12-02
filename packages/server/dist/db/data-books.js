"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeedBooks = void 0;
const models_1 = __importDefault(require("../models"));
function getSeedBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        const { _id: gloriaFuertesId } = yield models_1.default.Author.findOne({ firstName: "Gloria", lastName: "Fuertes" }, { _id: 1 }).lean();
        const { _id: carloPadialId } = yield models_1.default.Author.findOne({ firstName: "Carlo", lastName: "Padial" }, { _id: 1 }).lean();
        const { _id: florenceParryId } = yield models_1.default.Author.findOne({ firstName: "Florence", lastName: "Parry Heide" }, { _id: 1 }).lean();
        const { _id: trevorNoahId } = yield models_1.default.Author.findOne({ firstName: "Trevor", lastName: "Noah" }, { _id: 1 }).lean();
        const { _id: ianSvenoniusId } = yield models_1.default.Author.findOne({ firstName: "Ian", lastName: "Svenonius" }, { _id: 1 }).lean();
        const { _id: alastairBonnett } = yield models_1.default.Author.findOne({ firstName: "Alastair", lastName: "Bonnett" }, { _id: 1 }).lean();
        const { _id: cristopheGalfardId } = yield models_1.default.Author.findOne({ firstName: "Christophe", lastName: "Galfard" }, { _id: 1 }).lean();
        const { _id: gianniRodari } = yield models_1.default.Author.findOne({ firstName: "Gianni", lastName: "Rodari" }, { _id: 1 }).lean();
        return [
            {
                title: "El libro de Gloria Fuertes",
                caption: "La verdadera Gloria Fuertes. El libro definitivo",
                sinopsis: [
                    "Al fin en un mismo libro la vida y la obra de una poeta genial que vio su carrera ensombrecida primero por su género, después por su clase social y finalmente por su fama. El libro sobre la verdadera Gloria Fuertes.",
                ],
                designer: "Jorge de Cascante",
                price: "24.90",
                stock: 100,
                authorId: gloriaFuertesId,
                techData: {
                    releaseYear: 2021,
                    pagesNumber: 448,
                    size: "16 x 23",
                    bindings: "Cartoné",
                    ISBN: "9788418733284",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2021/07/gloria-fuertes.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2021/07/9788418733284-scaled.jpg",
                    ],
                },
                colors: ["#0097D8", "#DCDBCD", "#000000"],
            },
            {
                title: "Doctor Portuondo",
                caption: "Mis días de psicoanálisis con un sabio desquiciado",
                sinopsis: [
                    "Sentía vergüenza de existir, miedo a la muerte, angustia oceánica… ¡y solo tenía ocho años!",
                    "Desde pequeño, soy un neurótico. Con doce años me daban miedo los cuartos vacíos y las habitaciones con demasiada gente. Con catorce, los insectos y los calvos. Y con dieciocho, las canciones de U2 y las palomas.",
                    "Ésta era mi filosofía de vida: Visualiza tus metas y objetivos. ¿Los ves? Pues ahora sigue comiendo Doritos. O bien: Antes de rendirte, mira en tu interior. Luego ríndete.",
                    "Mi única esperanza era el doctor Portuondo, un psicoanalista cubano exiliado en Barcelona que gritaba a sus pacientes, juraba en nombre de Freud y bebía whisky Johnnie Walker.",
                    "Es la persona más asombrosa que he conocido en mi vida. También la más sabia. La más imprevisible. Y la más divertida.",
                    "***",
                    "Carlo Padial, considerado el Woody Allen de aquí, relata la terapia que cambió su vida. El resultado demuestra que un libro hilarante puede ser, también, rotundamente desolador, profundo y, al mismo tiempo, vitalista.",
                ],
                designer: "Jonathan Millán",
                price: "19.00",
                stock: 100,
                authorId: carloPadialId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 272,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-17059-43-9",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2017/02/Doctor-Portuondo_2-ed_3D_alta.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2017/02/9788417059439.jpg",
                    ],
                },
                colors: ["#DC0100", "#FFE800", "#1C1000"],
            },
            {
                title: "Tristán encoge",
                caption: "Un clásico de la literatura, prologado por David Trueba",
                sinopsis: [
                    "A Tristán le está pasando algo muy extraño: está encogiendo y no sabe por qué. Los adultos no le hacen caso. Tienen demasiadas cosas que hacer para andar preocupados por los problemas de un niño.",
                    "Todos nos hemos sentido demasiado pequeños, casi invisibles, alguna vez. ¿Qué pasaría si un día encogieras de verdad?",
                    "Un libro tierno, inquietante y divertidísimo sobre la ceguera del mundo adulto.",
                ],
                designer: "Edward Gorey",
                translator: "Manuel Broncano",
                price: "16.00",
                stock: 100,
                authorId: florenceParryId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 80,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-17059-22-4",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2017/09/Tristan_3D_alta.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2017/09/9788417059224.jpg",
                    ],
                },
                colors: ["#1C110C", "#459D28", "#FFFFFF"],
            },
            {
                title: "Prohibido nacer",
                designer: "David de las Heras",
                translator: "Javier Calvo",
                price: "19.00",
                stock: 100,
                authorId: trevorNoahId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 336,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-17059-12-5",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2017/09/Prohibido-nacer-3D-WEB.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2017/09/9788417059125.jpg",
                    ],
                },
                colors: ["#DEBC00", "#66A6B1", "#01040A"],
            },
            {
                title: "Te están robando el alma",
                designer: "Roger Adam",
                translator: "Lucía Barahona",
                sinopsis: [
                    "Te animaron a bailar twist sin tocar a tu pareja para aislarte en un nuevo mundo individualista × Te colocaron en las orejas auriculares como parte de un experimento de control social × Te aconsejaron que te afeitaras el vello púbico para que fueras más insensible y mecánico × Te dijeron que abrazaras Apple para arrebatarte todas tus posesiones × Te regalaron manuales de instrucciones de Ikea para que rompieras con tu pareja × Te invitaron a ser alternativo, pero no te dieron alternativa a serlo × Te convencieron de que debías seguir a ídolos de escayola de un rock de derechas × Te atiborraron de bebidas azucaradas imperialistas hasta hacerte adicto × Te obligaron a trabajar gratis en Wikipedia como trabajaron otros esclavos en las pirámides × Te vendieron pop-art para que no lucharas por un mundo más humano × Te engancharon a series de HBO para que solo quisieras comprar y mirar. Nunca crear × Te enrolaron en una sociedad sin conciencia de clase, pero con miedo y asco de los pobres × ¡Te están robando el alma!",
                    "Ian Svenonius enlaza con su lógica lúdica y delirante el azúcar de caña, las nuevas tecnologías, los bailes de moda o la geopolítica mundial en una bomba ensayística que oscila entre lo certero, lo conspiranoico y lo tristemente real. Un libelo siempre crítico con el mundo de ayer e incendiario con el mundo de hoy para crear algún tipo de mundo del mañana donde los humanos podamos estar vivos. Sentirnos vivos.",
                ],
                price: "18.90",
                stock: 100,
                authorId: ianSvenoniusId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 224,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-16290-64-2",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2017/09/Te-estan-robando-el-alma_3D_alta.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2017/09/9788416290642.jpg",
                    ],
                },
                colors: ["#E80288", "#008ABB", "#180102"],
            },
            {
                title: "Fuera del mapa",
                designer: "Ignasi Font",
                translator: "Javier Calvo",
                sinopsis: [
                    "Alastair Bonnett escribe sobre 48 lugares fuera del mapa. Una oda a la peculiaridad de un lugar frente a un mundo globalizado. A lo inesperado en un planeta mapeado (y por tanto explicado) por las nuevas grandes corporaciones. A las fronteras difusas y las fantasías reales. A la idea de que ni el hombre actual lo sabe todo ni todo está descubierto y conquistado. Al territorio como fábrica de nuestras vidas, donde construimos nuestra identidad y memoria.",
                ],
                price: "23.00",
                stock: 100,
                authorId: alastairBonnett,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 336,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-17059-02-6",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2017/07/Fuera-del-mapa_3D_web.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2017/07/9788417059026.jpg",
                    ],
                },
                colors: ["#001A3E", "#009D88", "#F4F5F6"],
            },
            {
                title: "Para entender a Einstein",
                designer: "David de las Heras",
                translator: "Pablo Álvarez Ellacuria",
                sinopsis: [
                    "«E» simboliza la energía. La que hace que tu coche se mueva y las bombillas se enciendan.",
                    "«m» representa la masa. Esa de la que están hechos el aire, el mar, las nubes. Y también tú y yo.",
                    "«c2» es la velocidad de la luz al cuadrado. Siempre es la misma. Tú jamás serás tan rápido.",
                    "«E=mc2» afirma que la energía puede convertirse en masa. Y la masa en energía. Nos explica por qué podemos dividir el átomo y cómo brillan las estrellas.",
                    "También nos dice que el espacio y el tiempo no son lo que parecen. Ni nuestro planeta. Ni nosotros. Esta fórmula de Einstein es una de las más importantes y bellas de la historia de la humanidad.",
                    "La nueva obra de uno de los divulgadores científicos del momento: Christophe Galfard. 5 ediciones y 35.000 ejemplares vendidos de su anterior libro, El universo en tu mano.",
                ],
                price: "13.90",
                stock: 100,
                authorId: cristopheGalfardId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 96,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-17059-08-8",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2017/08/Para-entender-a-Einstein.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2017/08/9788417059088-768x1142.jpg",
                    ],
                },
                colors: ["#08173F", "#DE4A4B", "#F0F7F8"],
            },
            {
                title: "Escuela de fantasía",
                caption: "Reflexiones sobre educación para profesores, padres y niños",
                sinopsis: [
                    "Estos textos de Gianni Rodari, el maestro de la fantasía, fueron escritos en los años setenta, pero su apuesta insobornable por una enseñanza más plena y creativa sigue siendo totalmente moderna.",
                ],
                price: "17.90",
                stock: 100,
                authorId: gianniRodari,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 200,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-17059-09-5",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2017/08/Escuela-de-fantasi%CC%81a.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2017/08/9788417059095.jpg",
                    ],
                },
                colors: ["#08173F", "#DE4A4B", "#F0F7F8"],
            },
        ];
    });
}
exports.getSeedBooks = getSeedBooks;
//# sourceMappingURL=data-books.js.map