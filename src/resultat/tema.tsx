import { defaultType, TemaModell } from './tema-modell';

const temaer: TemaModell[] = [
    {
        id: 'Finn jobben på nav.no',
        prioritet: 31,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Abonner på stillinger',
        prioritet: 9,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Registrer deg flere steder',
        prioritet: 23,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Bruk nettverket ditt',
        prioritet: 10,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Bruk sosiale medier i jobbjakten',
        prioritet: 24,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Bruk LinkedIn',
        prioritet: 22,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Delta på jobbmesser',
        prioritet: 30,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Brede vs. smale søk "NY"',
        prioritet: 1,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Under 18 og vil ha fast jobb',
        prioritet: 1000,
        defaultPosisjon: defaultType.INGEN
    }, {
        id: 'Hvordan få ny jobb som nyutdannet',
        prioritet: 1000,
        defaultPosisjon: defaultType.INGEN
    }, {
        id: 'Ung og jobb i utlandet',
        prioritet: 1000,
        defaultPosisjon: defaultType.INGEN
    }, {
        id: 'Delta på karrieredager',
        prioritet: 1000,
        defaultPosisjon: defaultType.INGEN
    }, {
        id: 'Lag en god CV',
        prioritet: 10,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Bruk sosiale medier i jobbjakten',
        prioritet: 8,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Skriv en god søknad',
        prioritet: 2,
        defaultPosisjon: defaultType.LEGGES_TIL
    }, {
        id: 'Skaff dokumentasjon på utdanning og attester',
        prioritet: 1000,
        defaultPosisjon: defaultType.INGEN
    }, {
        id: 'Sjekk referansene dine',
        prioritet: 1000,
        defaultPosisjon: defaultType.INGEN
    }, {
        id: 'Logg jobbene du søker på',
        prioritet: 13,
        defaultPosisjon: defaultType.LEGGES_TIL
    }, {
        id: 'Send en åpen søknad',
        prioritet: 7,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Lag en utradisjonell søknad eller CV',
        prioritet: 1000,
        defaultPosisjon: defaultType.INGEN
    }, {
        id: 'Hvordan kontakte en arbeidsgiver',
        prioritet: 3,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Hvordan skrive om hull i CV-en',
        prioritet: 1000,
        defaultPosisjon: defaultType.INGEN
    }, {
        id: 'Finn ut hva slags intervju',
        prioritet: 25,
        defaultPosisjon: defaultType.LEGGES_TIL
    }, {
        id: 'Forbered deg til intervjuet',
        prioritet: 4,
        defaultPosisjon: defaultType.LEGGES_TIL
    }, {
        id: 'Hva er dine sterke sider',
        prioritet: 26,
        defaultPosisjon: defaultType.LEGGES_TIL
    }, {
        id: 'Hva er dine svake sider',
        prioritet: 21,
        defaultPosisjon: defaultType.LEGGES_TIL
    }, {
        id: 'Øv på intervjusituasjonen',
        prioritet: 6,
        defaultPosisjon: defaultType.LEGGES_TIL
    }, {
        id: 'Gjør et godt førsteinntrykk',
        prioritet: 19,
        defaultPosisjon: defaultType.LEGGES_TIL
    }, {
        id: 'Still spørsmål til bedriften',
        prioritet: 14,
        defaultPosisjon: defaultType.LEGGES_TIL
    }, {
        id: 'Hvordan gikk intervjuet',
        prioritet: 18,
        defaultPosisjon: defaultType.LEGGES_TIL
    }, {
        id: 'Fikk du ikke jobben',
        prioritet: 29,
        defaultPosisjon: defaultType.LEGGES_TIL
    }, {
        id: 'Lag en plan',
        prioritet: 15,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Reflekter over jobbene du søker på',
        prioritet: 20,
        defaultPosisjon: defaultType.LEGGES_TIL
    }, {
        id: 'Vær aktiv',
        prioritet: 1000,
        defaultPosisjon: defaultType.INGEN
    }, {
        id: 'Delta i frivillig arbeid',
        prioritet: 27,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Meld deg på jobbsøkerkurs',
        prioritet: 32,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Kom i gang',
        prioritet: 17,
        defaultPosisjon: defaultType.LEGGES_TIL
    }, {
        id: 'Beskriv kompetansen din',
        prioritet: 11,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Sett deg mål',
        prioritet: 1000,
        defaultPosisjon: defaultType.INGEN
    }, {
        id: 'Ta interessetest',
        prioritet: 16,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Ta personlighetstest',
        prioritet: 1000,
        defaultPosisjon: defaultType.INGEN
    }, {
        id: 'Gjør avtale med karrieresenter',
        prioritet: 1000,
        defaultPosisjon: defaultType.INGEN
    }, {
        id: 'Meld deg på kurs',
        prioritet: 28,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Ta mer utdanning',
        prioritet: 19,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Har du krav på voksenopplæring',
        prioritet: 1000,
        defaultPosisjon: defaultType.INGEN
    }, {
        id: 'Google deg selv',
        prioritet: 1000,
        defaultPosisjon: defaultType.INGEN
    }, {
        id: 'Start en egen virksomhet',
        prioritet: 1000,
        defaultPosisjon: defaultType.INGEN
    }, {
        id: 'Hvor kan du jobbe? Flytte eller pendle',
        prioritet: 5,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Hva kan jeg bruke kompetansen til',
        prioritet: 12,
        defaultPosisjon: defaultType.FAST
    }, {
        id: 'Har du språkutfordringer',
        prioritet: 1000,
        defaultPosisjon: defaultType.INGEN
    }
];

export default temaer;
