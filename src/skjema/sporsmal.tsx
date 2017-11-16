import * as React from 'react';
import { connect } from 'react-redux';
import SporsmalModell from '../sporsmal/sporsmal-modell';
import { marker } from '../svar/svar-duck';
import { Dispatch } from '../types';
import { AppState } from '../reducer';
import {
    ettValgHjelpetekst,
    flereValgHjelpetekst, ikkeIntervjuMellomtekst,
    skalaHjelpetekst
} from '../tekster/hjelptetekster';
import SvarAlternativModell from '../sporsmal/svaralternativ';
import BesvarelseModell from '../svar/svar-modell';
import Alternativ from './alternativ';
import Avhengigheter, { AvhengighetModell } from '../utils/avhengigheter';
import { AlternativTyper } from '../utils/konstanter';

function finnHjelpetekst(type: AlternativTyper): string {
    switch (type) {
        case AlternativTyper.FLERVALG:
            return flereValgHjelpetekst;
        case AlternativTyper.ETTVALG:
            return ettValgHjelpetekst;
        case AlternativTyper.SKALA:
            return skalaHjelpetekst;
        default:
            return '';
    }
}

interface DispatchProps {
    markerAlternativ: (
        sporsmalId: number,
        alternativ: SvarAlternativModell[]
    ) => void;
}

interface OwnProps {
    isActive: boolean;
    sporsmal: SporsmalModell;
    feil?: boolean;
    gaTilNesteSpm: (id: number) => void;
    spmRef: any; // tslint:disable-line:no-any
}

interface StateProps {
    besvarteSporsmal: BesvarelseModell[];
}

interface EgenStateProps {
    feil: boolean;
}

export type SporsmalProps = DispatchProps & OwnProps & StateProps;

function prepMarkerAlternativ(
    alternativ: SvarAlternativModell,
    erValgt: boolean,
    alternativListe: SvarAlternativModell[],
    sporsmal: SporsmalModell,
    type: string
): SvarAlternativModell[] {
    let sporsmalAlternativer = [...sporsmal.alternativer];
    if (erValgt) {
        if (type === 'radio') {
            return alternativListe;
        } else if (type === 'skala') {
            return alternativListe
                .filter((alt) => !(sporsmalAlternativer
                    .find(a => (alt.id === a.id && (a.skalaId! > alternativ.skalaId!)))));
        }
        return alternativListe.filter(alt => alt.id !== alternativ.id);
    } else {
        if (type === 'radio') {
            return [alternativ];
        } else if (type === 'skala') {
            alternativListe = [];
            return [...sporsmalAlternativer.filter((alt) => {
                return (alt.skalaId!) <= (alternativ.skalaId!);
            })];
        }
        return [...alternativListe, alternativ];
    }
}

function leggTilMellomTekst(sporsmalId: number, besvarelse: BesvarelseModell[]) {
    if (sporsmalId === 14) {
        const be = besvarelse.filter(b => b.sporsmalId === 12 || b.sporsmalId === 11)
        if (!!be) {
            if (!!be.filter(b => b.svarAlternativer.find(svar => svar.id === '1101' || svar.id === '1201'))) {
                return (
                    <section>
                        {ikkeIntervjuMellomtekst}
                    </section>
                );
            }
        }
    }
    return null;
}

function sjekkOmAlternativErMulig(sporsmalId: number,
                                  alternativ: SvarAlternativModell, markerteAlternativer: SvarAlternativModell[]) {
    if (sporsmalId === 16 && alternativ.id !== '1601') {
        if (markerteAlternativer.find(a => a.id === '1601')) {
            return false;
        }
    }
    return true;
}

function sjekkAvhengigheter(sporsmalId: number, svarteAlternativ: SvarAlternativModell[]): number {
    const avhengighet: AvhengighetModell | undefined = Avhengigheter.find(avh => avh.sporsmalId === sporsmalId);
    if ( !!avhengighet &&
        !!svarteAlternativ.find(a => a.id === avhengighet.harSvartAlternativId) ) {
        return avhengighet.sendesTilSporsmalId;
    }
    return 0;
}

type SporsmalProps = OwnProps & Dispatch & StateProps;

class Sporsmal extends React.Component<SporsmalProps, EgenStateProps> {
    constructor(props: SporsmalProps) {
        super(props);
        this.state = {feil: false};
    }

    componentDidUpdate() {
        if (this.props.isActive) {
            document.getElementById(`sp-${this.props.sporsmal.id}`)!.focus();
        }
    }

    sjekkSvar(markerteSpm: SvarAlternativModell[], sporsmalId: number) {
        if (markerteSpm.length === 0) {
            this.setState({feil: true});
        } else if (sjekkAvhengigheter(sporsmalId, markerteSpm) > 0) {
            this.props.gaTilNesteSpm(sjekkAvhengigheter(sporsmalId, markerteSpm) - 1);
        } else {
                this.props.gaTilNesteSpm(sporsmalId);
        }
    }

    render() {
        const { sporsmal, besvarteSporsmal, markerAlternativ, isActive, spmRef  } = this.props;
        const hjelpetekst: string = finnHjelpetekst(sporsmal.type);
        const besvartSpm: BesvarelseModell | undefined = besvarteSporsmal.find(
            besvarelse => besvarelse.sporsmalId === sporsmal.id
        );
        const alleBesvarteSpm = [...besvarteSporsmal];
        const markerteAlternativer: SvarAlternativModell[] = besvartSpm
            ? besvartSpm.svarAlternativer
            : [];
        const cls = ['sporsmal', isActive ? 'active' : ''].join(' ');
        if (this.state.feil && markerteAlternativer.length !== 0) {
            this.setState({feil: false});
        }
        return (
                <div>
                    {leggTilMellomTekst(sporsmal.id, alleBesvarteSpm)}
            <li ref={spmRef} tabIndex={0} id={'sp-' + sporsmal.id} className={cls} >
                <h1 className="typo-element blokk-xs">{sporsmal.id + '.' + ' ' + sporsmal.sporsmal}</h1>
                {this.state.feil && <p className="skjemaelement__feilmelding">
                    Du må svare på spørsmålet før du kan gå videre</p>}
                <p className="hjelpetekst">{hjelpetekst}</p>
                {sporsmal.alternativer.map(function(
                    alternativ: SvarAlternativModell
                ) {
                    const erValgt = !!markerteAlternativer.find(
                        alt => alt.id === alternativ.id
                    );
                    const erMulig = sjekkOmAlternativErMulig(sporsmal.id, alternativ, markerteAlternativer);
                    return (
                        <Alternativ
                            key={alternativ.id}
                            alternativ={alternativ}
                            erValgt={erValgt}
                            sporsmalId={sporsmal.id}
                            sporsmalType={sporsmal.type}
                            kanVelges={erMulig}
                            markerAlternativ={() => markerAlternativ(
                                sporsmal.id,
                                prepMarkerAlternativ(
                                    alternativ,
                                    erValgt,
                                    markerteAlternativer,
                                    sporsmal,
                                    sporsmal.type
                                )
                            )}
                        />
                    );
                })}
                <button
                    className="knapp knapp--hoved"
                    key="besvar"
                    onClick={e => {
                        e.preventDefault();
                        this.sjekkSvar(markerteAlternativer, sporsmal.id);
                    }}
                >
                    Fortsett
                </button>
            </li>
                </div>);
    }
}

const mapStateToProps = (state: AppState): StateProps => ({
    besvarteSporsmal: state.svar.data
});

const mapDispatchToProps = (
    dispatch: Dispatch,
    props: OwnProps
): DispatchProps => ({
    markerAlternativ: (sporsmalId, alternativ: SvarAlternativModell[]) =>
        dispatch(marker(sporsmalId, alternativ))
});

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Sporsmal);
