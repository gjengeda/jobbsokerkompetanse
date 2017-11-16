import SporsmalModell from './sporsmal-modell';
import { AlternativTyper } from '../utils/konstanter';

const spm: SporsmalModell[] = [
    {
        id: 1,
        sporsmal: 'Hvor finner du ledige stillinger?',
        alternativer: [
            { id: '0101', tekst: 'På internett' },
            { id: '0102', tekst: 'På jobbmesser' },
            {
                id: '0103',
                tekst: 'Har registrert et abonnement på ledige stillinger'
            },
            {
                id: '0104',
                tekst: 'Følger bedrifter på Facebook, LinkedIn etc.'
            },
            { id: '0105', tekst: 'Bruker jobb-apper som indeed.no og jyb.no' },
            { id: '0106', tekst: 'Sjekker nettsidene til bedrifter' },
            { id: '0107', tekst: 'Bruker nettverket mitt' },
            { id: '0108', tekst: 'Blir "headhuntet" av arbeidsgivere' },
            { id: '0109', tekst: 'Gjennom bemanningsbyråer.' },
            { id: '0110', tekst: 'Kontakter arbeidsgivere direkte' },
            { id: '0111', tekst: 'Annet' }
        ],
        type: AlternativTyper.FLERVALG
    },
    {
        id: 2,
        sporsmal: 'Hvor ser du etter jobber?',
        alternativer: [
            { id: '0201', tekst: 'I nærområdet mitt' },
            { id: '0202', tekst: 'Under én times reisevei' },
            { id: '0203', tekst: 'I flere fylker' },
            { id: '0204', tekst: 'I hele landet' },
            { id: '0205', tekst: 'I utlandet' },
            { id: '0206', tekst: 'Ingen begrensninger' }
        ],
        type: AlternativTyper.FLERVALG
    },
    {
        id: 3,
        sporsmal: 'Søker du på flere type stillinger?',
        alternativer: [
            { id: '0301', tekst: 'Jeg søker bare én type stillinger' },
            { id: '0302', tekst: 'Jeg søker på litt forskjellig' },
            { id: '0303', tekst: 'Jeg søker på alt jeg kommer over' }
        ],
        type: AlternativTyper.ETTVALG
    },
    {
        id: 4,
        sporsmal: 'Hvilken type ansettelse ser du etter?',
        alternativer: [
            { id: '0401', tekst: 'Fast' },
            { id: '0402', tekst: 'Vikariat' },
            { id: '0403', tekst: 'Midlertidig' },
            { id: '0404', tekst: 'Tilkallingshjelp' },
            { id: '0405', tekst: 'Heltid' },
            { id: '0406', tekst: 'Deltid' }
        ],
        type: AlternativTyper.FLERVALG
    },
    {
        id: 5,
        sporsmal: 'Hvor fornøyd er du med måten du leter etter jobb på?',
        alternativer: [
            { id: '0501', tekst: 'Svært fornøyd' },
            { id: '0502', tekst: 'Fornøyd' },
            { id: '0503', tekst: 'Kunne vært bedre' },
            { id: '0504', tekst: 'Misfornøyd' }
        ],
        type: AlternativTyper.ETTVALG
    },
    {
        id: 6,
        sporsmal: 'Hvor har du registrert CV-en din?',
        alternativer: [
            { id: '0601', tekst: 'nav.no' },
            { id: '0602', tekst: 'Finn.no' },
            { id: '0603', tekst: 'LinkedIn' },
            { id: '0604', tekst: 'Bemanningsbyråer ol.' },
            { id: '0605', tekst: 'På nettsidene til bedrifter' },
            { id: '0606', tekst: 'Jobb-apper' },
            { id: '0607', tekst: 'Andre steder' },
            { id: '0608', tekst: 'Jeg har ikke registrert CV-en min' }
        ],
        type: AlternativTyper.FLERVALG
    },
    {
        id: 7,
        sporsmal: 'Hvor synlig er du for en arbeidsgiver som leter etter deg?',
        alternativer: [
            { id: '0701', tekst: 'Lite synlig' },
            { id: '0702', tekst: 'Ganske synlig' },
            { id: '0703', tekst: 'Veldig synlig' }
        ],
        type: AlternativTyper.ETTVALG
    },
    {
        id: 8,
        sporsmal: 'Tilpasser du CV-en til hver enkelt stillingsannonse?',
        alternativer: [
            { id: '0801', tekst: 'Skreddersyr hver CV' },
            { id: '0802', tekst: 'Gjør noen tilpasninger' },
            { id: '0803', tekst: 'Sender samme CV til alle' }
        ],
        type: AlternativTyper.ETTVALG
    },
    {
        id: 9,
        sporsmal: 'Hvor etterspurt er kompetansen sin på arbeidsmarkedet?',
        alternativer: [
            { id: '0901', tekst: '1', skalaId: 1 },
            { id: '0902', tekst: '2', skalaId: 2 },
            { id: '0903', tekst: '3', skalaId: 3 },
            { id: '0904', tekst: '4', skalaId: 4 },
            { id: '0905', tekst: '5', skalaId: 5 }
        ],
        type: AlternativTyper.SKALA
    },
    {
        id: 10,
        sporsmal: 'Hvilken erfaring har du som jobbsøker?',
        alternativer: [
            {
                id: '1001',
                tekst: 'Fått tilbud om jobb gjennom nettverket mitt'
            },
            { id: '1002', tekst: 'Tatt direkte kontakt med en arbeidsgiver' },
            { id: '1003', tekst: 'Sendt søknad på utlyste stillinger' },
            { id: '1004', tekst: 'Sendt en åpen søknad' },
            {
                id: '1005',
                tekst: 'Levert en åpne søknad ved personlig oppmøte'
            },
            { id: '1006', tekst: 'Tilbudt stilling uten å ha søkt' },
            { id: '1007', tekst: 'Lite eller ingen erfaring' }
        ],
        type: AlternativTyper.FLERVALG
    },
    {
        id: 11,
        sporsmal: 'Hvor mange stillinger har du søkt det siste året?',
        alternativer: [
            { id: '1101', tekst: 'Ingen' },
            { id: '1102', tekst: '1-5' },
            { id: '1103', tekst: '6-20' },
            { id: '1104', tekst: '21-50' },
            { id: '1105', tekst: '50+' }
        ],
        type: AlternativTyper.ETTVALG
    },
    {
        id: 12,
        sporsmal:
            'Hvor mange ganger har du blitt innkalt til intervju det siste året?',
        alternativer: [
            { id: '1201', tekst: 'Ingen' },
            { id: '1202', tekst: 'Noen få' },
            { id: '1203', tekst: 'Flere' }
        ],
        type: AlternativTyper.ETTVALG
    },
    {
        id: 13,
        sporsmal:
            'Hvor mange ganger har du blitt innkalt til intervju det siste året?',
        alternativer: [
            { id: '1301', tekst: 'Ingen' },
            { id: '1302', tekst: 'Noen få' },
            { id: '1303', tekst: 'Flere' }
        ],
        type: AlternativTyper.ETTVALG
    },
    {
        id: 14,
        sporsmal: 'Er søknaden din et direkte svar på stillingsannonsen?',
        alternativer: [
            { id: '1401', tekst: 'Sender samme søknad til alle' },
            { id: '1402', tekst: 'Gjør noen tilpasninger' },
            { id: '1403', tekst: 'Skreddersyr alle søknader' }
        ],
        type: AlternativTyper.ETTVALG
    },
    {
        id: 15,
        sporsmal: 'Hvor trygg er du i en intervjusituasjon?',
        alternativer: [
            { id: '1501', tekst: 'Jeg føler meg ikke trygg eller konfortabel i intervju'},
            { id: '1502', tekst: 'Jeg føler meg litt utrygg i intervju' },
            { id: '1503', tekst: 'Jeg føler meg litt trygg i intervju' },
            { id: '1504', tekst: 'Jeg føler meg ganske trygg i intervju' },
            { id: '1505', tekst: 'Jeg føler meg veldig trygg i intervju' }
        ],
        type: AlternativTyper.ETTVALG
    },
    {
        id: 16,
        sporsmal: 'Hvor trygg er du i en intervjusituasjon?',
        alternativer: [
            {
                id: '1601',
                tekst: 'Forbereder meg ikke, tar det som det kommer'
            },
            { id: '1602', tekst: 'Vet ikke hvordan man forbereder seg' },
            { id: '1603', tekst: 'Tenker igjennom hvordan jeg skal kle meg' },
            {
                id: '1604',
                tekst:
                    'Tenker igjennom hvordan jeg skal oppføre meg (kroppspråk)'
            },
            { id: '1605', tekst: 'Leser om bedriften på forhånd' },
            {
                id: '1606',
                tekst: 'Leser utlysningsteksten og søknaden på nytt'
            },
            { id: '1607', tekst: 'Øver på å presentere meg selv' }
        ],
        type: AlternativTyper.FLERVALG
    },
    {
        id: 17,
        sporsmal: 'Hvordan pleier du å gjøre det på intervju?',
        alternativer: [
            { id: '1701', tekst: '1', skalaId: 1 },
            { id: '1702', tekst: '2', skalaId: 2 },
            { id: '1703', tekst: '3', skalaId: 3 },
            { id: '1704', tekst: '4', skalaId: 4 },
            { id: '1705', tekst: '5', skalaId: 5 },
            { id: '1706', tekst: '6', skalaId: 6 }
        ],
        type: AlternativTyper.SKALA
    },
    {
        id: 18,
        sporsmal: 'Hva har du gjort for å øke sjansene dine for å få en jobb?',
        alternativer: [
            { id: '1801', tekst: 'Tatt interessetester' },
            { id: '1802', tekst: 'Benyttet meg av nettverket mitt' },
            { id: '1803', tekst: 'Gått på jobbsøkerkurs' },
            { id: '1804', tekst: 'Søkt jobb i flere bransjer' },
            { id: '1805', tekst: 'Tatt kurs etter utdanning' },
            { id: '1806', tekst: 'Søkt jobber andre steder i landet' },
            { id: '1807', tekst: 'Engasjert meg i frivillig arbeid' },
            { id: '1808', tekst: 'Annet' },
            { id: '1809', tekst: 'Ikke noe spesielt' }
        ],
        type: AlternativTyper.FLERVALG
    },
    {
        id: 19,
        sporsmal: 'Hvordan vurderer du din egen innsats som jobbsøker?',
        alternativer: [
            { id: '1901', tekst: 'Har ikke begynt å søkte jobber enda' },
            { id: '1902', tekst: 'Ikke fornøyd med egen innsats' },
            { id: '1903', tekst: 'Kan gjøre en større innsats' },
            { id: '1904', tekst: 'Synes jeg har gjort en brukbar jobb' },
            { id: '1905', tekst: 'Er veldig fornøyd med egen innsats' }
        ],
        type: AlternativTyper.ETTVALG
    }
];

export default spm;
