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
        const { _id: gianniRodariId } = yield models_1.default.Author.findOne({ firstName: "Gianni", lastName: "Rodari" }, { _id: 1 }).lean();
        const { _id: williamIrwinId } = yield models_1.default.Author.findOne({ firstName: "William", lastName: "Irwin" }, { _id: 1 }).lean();
        const { _id: carlotaJuncosaId } = yield models_1.default.Author.findOne({ firstName: "Carlota", lastName: "Juncosa" }, { _id: 1 }).lean();
        const { _id: comiteId } = yield models_1.default.Author.findOne({ firstName: "Comité", lastName: "Blackie Books" }, { _id: 1 }).lean();
        const { _id: danielTammetId } = yield models_1.default.Author.findOne({ firstName: "Daniel", lastName: "Tammet" }, { _id: 1 }).lean();
        const { _id: davidSedarisId } = yield models_1.default.Author.findOne({ firstName: "David", lastName: "Sedaris" }, { _id: 1 }).lean();
        const { _id: hadleyFreemanId } = yield models_1.default.Author.findOne({ firstName: "Hadley", lastName: "Freeman" }, { _id: 1 }).lean();
        const { _id: jeanSempeId } = yield models_1.default.Author.findOne({ firstName: "Jean-Jacques", lastName: "Sempé" }, { _id: 1 }).lean();
        const { _id: gavinEdwardsId } = yield models_1.default.Author.findOne({ firstName: "Gavin", lastName: "Edwards" }, { _id: 1 }).lean();
        const { _id: santiagoLorenzoId } = yield models_1.default.Author.findOne({ firstName: "Santiago", lastName: "Lorenzo" }, { _id: 1 }).lean();
        const { _id: alfredHitchcockId } = yield models_1.default.Author.findOne({ firstName: "Alfred", lastName: "Hitchcock" }, { _id: 1 }).lean();
        const { _id: jamesRhodesId } = yield models_1.default.Author.findOne({ firstName: "James", lastName: "Rhodes" }, { _id: 1 }).lean();
        const { _id: laraWilliamsId } = yield models_1.default.Author.findOne({ firstName: "Lara", lastName: "Williams" }, { _id: 1 }).lean();
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
                authorId: gianniRodariId,
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
            {
                title: "Los Simpson y la filosofía",
                caption: "Cómo entender el mundo gracias a Homer y compañía",
                sinopsis: [
                    "¿Justificaría Nietzsche las gamberradas de Bart?",
                    "¿Es Lisa una socrática insoportable?",
                    "¿Puede Homer ser esencialmente virtuoso, pero ofrecer su familia a los extraterrestres para salvar el pellejo?",
                    "¿Marge nos hace sentir como en casa porque es una madre y ama de casa machista?",
                    "¿Podemos aprender algo sobre la felicidad gracias a las miserias del señor Burns?",
                    "¿Puedes ser de izquierdas y mofarte de un pueblo como Springfield?",
                    "Los Simpson y la filosofía no solo es un análisis sobre la filosofía en el último gran artefacto cultural, sino también una introducción divertida pero rigurosísima a la obra de pensadores como Aristóteles, Kant, Heidegger o Sartre, entre muchos otros.",
                ],
                price: "14.90",
                stock: 100,
                designer: "Felix Petruska",
                translator: "Diana Hernández",
                authorId: williamIrwinId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 408,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-17059-26-2",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2017/06/Los-Simpson-y-la-filosofia_nueva-ed_BB.jpg",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2017/06/9788417059262.jpg",
                    ],
                },
                colors: ["#000405", "#F1D83D", "#F3F5F4"],
            },
            {
                title: "Carmen de Mairena. Una biografía",
                sinopsis: [
                    "Carmen de Mairena es mucho más que aquello que sabemos de ella. Es una mujer que luchó para ser mujer. Mujer de barrio y de calle, estrella televisiva, amiga de amigos que la timan, emblema de la otra Barcelona, persona de carne y hueso que ríe (cada vez menos) y sufre (cada vez más).",
                    "La joven artista Carlota Juncosa compartió casi un año con Carmen de Mairena. De esa extraña amistad surgió una biografía ilustrada, tan contradictoria y única como su protagonista",
                ],
                price: "19.90",
                stock: 100,
                authorId: carlotaJuncosaId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 224,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-17059-04-0",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2017/05/Carmen-de-Mairena_3D_BB.jpg",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2017/05/9788417059040.jpg",
                    ],
                },
                colors: ["#D0030A", "#E1ADC4", "#000000"],
            },
            {
                title: "Mierda de música",
                caption: "Cómo entender el mundo gracias a Homer y compañía",
                sinopsis: [
                    "¿Justificaría Nietzsche las gamberradas de Bart?",
                    "¿Es Lisa una socrática insoportable?",
                    "¿Puede Homer ser esencialmente virtuoso, pero ofrecer su familia a los extraterrestres para salvar el pellejo?",
                    "¿Marge nos hace sentir como en casa porque es una madre y ama de casa machista?",
                    "¿Podemos aprender algo sobre la felicidad gracias a las miserias del señor Burns?",
                    "¿Puedes ser de izquierdas y mofarte de un pueblo como Springfield?",
                    "Los Simpson y la filosofía no solo es un análisis sobre la filosofía en el último gran artefacto cultural, sino también una introducción divertida pero rigurosísima a la obra de pensadores como Aristóteles, Kant, Heidegger o Sartre, entre muchos otros.",
                ],
                price: "16.90",
                stock: 100,
                authorId: comiteId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 144,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-16290-95-6",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2017/04/Mierda-de-musica_BB_web.jpg",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2017/04/9788416290956.jpg",
                    ],
                },
                colors: ["#002245", "#DDE1E2", "#000000"],
            },
            {
                title: "La poesía de los números",
                caption: "Cómo las matemáticas iluminan mi vida",
                sinopsis: [
                    "¿Justificaría Nietzsche las gamberradas de Bart?",
                    "¿Es Lisa una socrática insoportable?",
                    "¿Puede Homer ser esencialmente virtuoso, pero ofrecer su familia a los extraterrestres para salvar el pellejo?",
                    "¿Marge nos hace sentir como en casa porque es una madre y ama de casa machista?",
                    "¿Podemos aprender algo sobre la felicidad gracias a las miserias del señor Burns?",
                    "¿Puedes ser de izquierdas y mofarte de un pueblo como Springfield?",
                    "Los Simpson y la filosofía no solo es un análisis sobre la filosofía en el último gran artefacto cultural, sino también una introducción divertida pero rigurosísima a la obra de pensadores como Aristóteles, Kant, Heidegger o Sartre, entre muchos otros.",
                ],
                price: "19.90",
                stock: 100,
                designer: "Ignasi Font",
                translator: "Pablo Álvarez Ellacuria",
                authorId: danielTammetId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 288,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-16290-98-7",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2017/03/La-poesia-de-los-numeros_3D_alta.jpg",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2017/03/9788416290987.jpg",
                    ],
                },
                colors: ["#020B14", "#0B4B67", "#E3BA14"],
            },
            {
                title: "La conquista del cerebro",
                caption: "Un viaje a los confines y secretos de la mente",
                sinopsis: [
                    "«Me llamo Daniel Tammet y puedo hacer todo esto gracias al síndrome del sabio, que me diagnosticaron por mis capacidades cognitivas extraordinarias. Pero no soy tan diferente a ti. Quiero ayudarte a conocer los secretos de tu cerebro y los avances de la ciencia en ese campo. A desarrollar la conciencia espacial, la intuición y la empatía. A abrazar nuevas formas de percepción y pensamiento creativo. A ir más allá de la complejidad y las limitaciones de lo que ves. Explicándote cómo funciona mi mente, intentaré que expandas los límites de la tuya. Es hora de emprender La conquista del cerebro.»",
                ],
                price: "19.90",
                stock: 100,
                designer: "Ignasi Font",
                translator: "Ismael Attrache",
                authorId: danielTammetId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 344,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-16290-60-4",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2017/03/LA-conquista-del-cerebro_3D_alta.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2017/03/9788416290604.jpg",
                    ],
                },
                colors: ["#000000", "#8B5543", "#D07900"],
            },
            {
                title: "Calypso",
                sinopsis: [
                    "Sedaris se va a la playa, en la costa de Carolina, para intentar desconectar de todo, pero no puede huir de sí mismo. Ni de su familia. Ni de su trabajo. Ni de su adicción a la pulserita que le cuenta los pasos. Ni del suicidio de su hermana. Ni de su padre de derechas. Ni de Donald Trump. ¿La única solución? Reírse de sí mismo y de sus miserias como catarsis necesaria para seguir viviendo.",
                    "Según The Guardian, el diario británico más prestigioso, «David Sedaris es el rey indiscutible de la literatura humorística». Y Calypso es su obra definitiva, la que contiene toda su risa, toda su melancolía. Chistes escatológicos con una prosa digna de Dorothy Parker, animales acomplejados, fantasmas alcohólicos y toda la ternura del mundo.",
                    "Un libro sobre ese instante en el que te das cuenta de que tu vida tiene mucho más pasado que futuro. Y echas la vista atrás, mientras sonríes.",
                ],
                price: "21.00",
                stock: 100,
                translator: "Jorge de Cascante",
                authorId: davidSedarisId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 272,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-17552-95-4",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2020/02/Calypso_3D_web.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2020/02/9788417552954.jpg",
                    ],
                },
                colors: ["#7F4732", "#000000", "#DCB26C"],
            },
            {
                title: "The Time of My Life",
                sinopsis: [
                    "Dirty Dancing nos enseñó que sí, las mujeres abortan.",
                    "La princesa prometida nos enseñó que el amor verdadero no es un cuento de hadas.",
                    "Cazafantasmas nos enseñó que la amistad masculina no tiene por qué ser inmadura.",
                    "La chica de rosa nos enseñó que la personalidad no depende del vestido que lleves.",
                    "Todo en un día nos enseñó que siempre habrá clases sociales.",
                    "Regreso al futuro nos enseñó que nuestros padres son tan complicados como nosotros.",
                    "No sabíamos que las películas que nos cambiaron la vida también nos estaban preparando para las luchas de hoy. Un ensayo revelador.",
                ],
                price: "19.90",
                stock: 100,
                designer: "Percival Everett",
                translator: "Zulema Couso",
                authorId: hadleyFreemanId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 336,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-16290-76-5",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2016/11/The-Time-of-My-Life_3D_web.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2016/11/thetimeofmylife_1.jpg",
                    ],
                },
                colors: ["#CE127D", "#1C110C", "#F2F1EB"],
            },
            {
                title: "El taller de bicicletas",
                caption: "O el secreto inconfesable de Raoul Taburin",
                sinopsis: [
                    "Todos guardamos un secreto y Raoul Taburin tiene uno inconfesable. Ha aprendido a disimularlo, pero el peso empieza a ser insoportable.",
                    "Siempre se ha entregado en cuerpo y alma a su gran vocación. Si alguien hay que lo sepa todo de cambios de marchas, calapiés, rodamientos de bolas, piñones, cámaras y neumáticos, ese es Raoul Taburin, el dueño del taller de bicicletas del pequeño municipio francés de Saint-Céron. Su reputación es tal que, en toda la región, una bici no es una bici, sino una taburina.",
                    "Pero Raoul Taburin no deja de pensar en su abrumador secreto… Y es que él, el mejor reparador de bicis del mundo, no sabe montar en bicicleta. Es absolutamente incapaz.",
                    "Todos, en algún momento de nuestras vidas, necesitamos contarle nuestros secretos a alguien. Y cuando entra en el taller un misterioso fotógrafo, Raoul sabe que el momento se acerca. Y que nada volverá a ser igual.",
                ],
                price: "18.00",
                stock: 100,
                translator: "Miguel Azaola",
                authorId: jeanSempeId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 104,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-17552-42-8",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2019/07/El-taller-de-bicicletas_3D_web.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2019/06/9788417552428.jpg",
                    ],
                },
                colors: ["#112679", "#E39A93", "#1A1A19"],
            },
            {
                title: "Cómo ser Bill Murray",
                sinopsis: [
                    "El mundo es un escenario y Bill Murray no entiende la vida sin improvisación ni sorpresa: irrumpe en fiestas anónimas y monta congas, se fuma pitillos de desconocidos o se pasea por ciudades en carrito de golf.",
                    "Todo apunta a que Bill Murray tiene una misión: quiere que seamos mejores personas: más divertidas, menos robóticas, más profundas, menos pedantes. Más libres.",
                ],
                price: "23.00",
                stock: 100,
                designer: "Jonathan Millán",
                translator: "Ismael Attrache",
                authorId: gavinEdwardsId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 320,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-81-16290-71-0",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2016/11/Como-ser-Bill-Murray_3D_web-e1479897567631.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2016/11/como_ser_billmurray_01.jpg",
                    ],
                },
                colors: ["#636162", "#1D1713", "#927151"],
            },
            {
                title: "Los asquerosos",
                sinopsis: [
                    "Manuel acuchilla a un policía antidisturbios que quería pegarle. Huye. Se esconde en una aldea abandonada. Sobrevive de libros Austral, vegetales de los alrededores, una pequeña compra en el Lidl que le envía su tío. Y se da cuenta de que cuanto menos tiene, menos necesita. Un thriller estático, una versión de Robinson Crusoe ambientada en la España vacía, una redefinición del concepto «austeridad». Una historia que nos hace plantearnos si los únicos sanos son los que saben que esta sociedad está enferma. Santiago Lorenzo ha escrito su novela más rabiosamente política, lírica y hermosa.",
                ],
                price: "21.00",
                stock: 100,
                designer: "Guim Tió",
                authorId: santiagoLorenzoId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 222,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "9788417059997",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2018/09/Los-asquerosos_3D_alta.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2018/09/9788417059996.jpg",
                    ],
                },
                colors: ["#789848", "#CA9440", "#BCD9E2"],
            },
            {
                title: "Cuentos que mi madre nunca me contó",
                caption: "Los relatos favoritos del maestro del suspense",
                sinopsis: [
                    "«Te aseguro que el título de este libro es una descripción totalmente exacta del contenido. No creo que mi madre me hubiera contado las historias que he recopilado aquí, ni aunque hubieran estado a su alcance. Te espera todo un abanico de emociones, exceptuando, claro está, aquellos sentimientos más tiernos y amables, con los que yo no tengo nada que ver…» Alfred Hitchcock",
                ],
                price: "21.00",
                stock: 100,
                translator: "Haizea Beitia",
                authorId: alfredHitchcockId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 320,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-18187-43-8",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2020/10/CUB_Cuentos-que-mi-madre-nunca-me-conto%CC%81-peque.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2020/10/9788418187438.jpg",
                    ],
                },
                colors: ["#D55D07", "#BE0069", "#E1DD8C"],
            },
            {
                title: "Toca el piano",
                sinopsis: [
                    "James Rhodes es autor del bestseller «Instrumental» y uno de los concertistas de piano más reconocidos. Ahora te enseña a tocar el Preludio nº1 en Do Mayor de Bach en seis semanas.",
                    "Solo necesitas dos manos. Un simple teclado o un piano Steinway. Unos 45 minutos al día durante seis semanas. Y ganas. Ganas de lograrlo. Olvida el móvil, cierra el ordenador, apaga la televisión. Silencio.",
                    "Toca el piano.",
                ],
                price: "14.90",
                stock: 100,
                designer: "David de las Heras",
                translator: "Ismael Attrache",
                authorId: jamesRhodesId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 96,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-16290-57-4",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2016/11/fict-ESP.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2016/11/toca-el-piano_spn_01.jpg",
                    ],
                },
                colors: ["#001144", "#B97E86", "#FFFFFF"],
            },
            {
                title: "Las ganas",
                sinopsis: [
                    "Benito vive desganado, aunque se muere de ganas: anda destrozado porque lleva tres años sin sexo. Por eso colecciona llaveros, sufre lo indecible cuando ve a una mujer bonita en el metro y bebe demasiado chinchón. Sólo se lo ha contado a su hermana, aunque todo el mundo, también en el trabajo (es químico y emprendedor; es decir: empresario pobre) nota su abstinencia y su angustia. Sus problemas podrían tener una salida: María.",
                    "«Sentía envidia de María porque ella estaba consigo misma. Sólo le cupo razonar el desperdicio que sería que ellos dos no se juntaran para siempre. “Te quiero porque quiero parecerme a ti”, le escribió un día (por supuesto, No enviado). Con la sospecha feliz de que si se hicieran novios y rompieran, les costaría un trabajo ímprobo dejar de ser amigos. Sería un trabajo que nadie se tomaría, de puro irrealizable.»",
                ],
                price: "12.90",
                stock: 100,
                designer: "Gorka Olmo",
                authorId: santiagoLorenzoId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 256,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-17552-57-2",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2019/10/Las-ganas_3D_web.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2019/09/9788417552572.jpg",
                    ],
                },
                colors: ["#CA4B8E", "#0D1316", "#EAEDED"],
            },
            {
                title: "Los huerfanitos",
                sinopsis: [
                    "La muerte de Ausias Susmozas, el manirroto patriarca del Pigalle, un teatro de pasado glorioso, reúne a sus tres hijos. Todos pretenden recoger algún consuelo monetario que compense el nulo cariño que les dispensó su progenitor. Pero este sólo les ha dejado una deuda inabordable: el banco se quedará el Pigalle si no logran saldarla. No tienen experiencia, pero deciden montar en tiempo récord, y con un equipo desastroso, una obra que podría salvar la vida de su teatro… e incluso la suya. Una tremenda y divertida sátira sobre el mundo teatral y sobre el mundo, en general, en quiebra.",
                    "«Al enfrentarse a la ingente tarea de la producción de su obra de teatro, los tres Susmozas imaginaban un álbum de cromos recién comprado. Que había que rellenar a base de comer pastelitos, atesorar estampas, negociar los cromos repetidos, perseverar con perspicacia hasta dar con los difíciles y pegarlos con cuidado para que quedaran derechos. Pero sin paga de domingo para comprar los pastelitos.»",
                ],
                price: "12.90",
                stock: 100,
                designer: "Gorka Olmo",
                authorId: santiagoLorenzoId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 368,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-17552-40-4",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2019/04/Los-huerfanitos_3D_web.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2019/04/9788417552404.jpg",
                    ],
                },
                colors: ["#58CFF8", "#0D1417", "#EAEDEE"],
            },
            {
                title: "Los millones",
                sinopsis: [
                    "A uno del grapo le toca la Primitiva. No puede cobrar, porque no tiene DNI. En los 90 días de plazo para intentar recibir el dinero del premio, conocerá a una mujer con la que compartirá un alto déficit de cariño y una pasión casi infantil por los trenes. Manual de supervivencia, retrato de la tiranía del dinero y de la búsqueda de identidad, el debut en la narrativa de Santiago Lorenzo es un clásico de culto de nuestras letras",
                    "«Metió toda la chatarra en una caja vacía de galletas Reglero. Luego, muy quedito, Francisco se echó a llorar. Se sintió pobre, como pobre se había sabido siempre. Pero ese día, con las piezas de su tren de plástico escondiéndose bajo los tres muebles de su piso sobrecogedor, su pobreza le cayó antipática. Por oír a alguien, habló él. “Para no haber creído nunca en la suerte, qué mala que la tengo”.»",
                ],
                price: "12.90",
                stock: 100,
                designer: "Gorka Olmo",
                authorId: santiagoLorenzoId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 256,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-17552-03-9",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2019/01/Los-millones_3D_web.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2018/12/9788417552039.jpg",
                    ],
                },
                colors: ["#32AE6D", "#0A1218", "#EAEDED"],
            },
            {
                title: "Las devoradoras",
                sinopsis: [
                    "Esta es la historia de un hambre que no se va. Y de Roberta, que vive intentando ocupar el mínimo espacio posible. A sus treinta años está atrapada en un trabajo sin sentido. Un día conoce a Stevie, una mujer libre y peligrosa. Se hacen amigas, se van a vivir juntas. Luego crean el Supper Club: un colectivo de mujeres cansadas de que les digan que tienen que hablar menos, comer menos, ser menos. Pero cuanto más popular y subversivo se vuelve ese club, más obligada se ve Roberta a reconciliarse con la vulnerabilidad de su propio cuerpo (y con ese pasado que se esfuerza tanto en reprimir.) Las devoradoras habla sobre el hambre de vivir. Sobre crecer y encontrar tu lugar en el mundo.",
                ],
                price: "22.90",
                stock: 100,
                designer: "Ignasi Monreal",
                translator: "Laura Ibáñez",
                authorId: laraWilliamsId,
                techData: {
                    releaseYear: 2017,
                    pagesNumber: 336,
                    size: "14 x 21",
                    bindings: "Cartoné",
                    ISBN: "978-84-18733-01-7",
                },
                images: {
                    main: "https://blackiebooks.org/wp-content/uploads/2021/04/CUB_Las-devoradoras-peque.png",
                    other: [
                        "https://blackiebooks.org/wp-content/uploads/2021/04/9788418733017.jpg",
                    ],
                },
                colors: ["#AE000F", "#E897A2", "#1A1A19"],
            },
            ////////////////////////////////////////////////////////////////
        ];
    });
}
exports.getSeedBooks = getSeedBooks;
//# sourceMappingURL=data-books.js.map