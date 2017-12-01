import * as React from 'react';
import { connect } from 'react-redux';
import SporsmalModell from '../sporsmal/sporsmal-modell';
import { marker } from '../svar/svar-duck';
import { Dispatch } from '../types';
import { AppState } from '../ducks/reducer';
import SvarAlternativModell from '../sporsmal/svaralternativ';
import BesvarelseModell from '../svar/svar-modell';
import Alternativ from './alternativ';
import { FormattedMessage } from 'react-intl';

interface DispatchProps {
    markerAlternativ: (
        sporsmalId: string,
        alternativ: SvarAlternativModell[]
    ) => void;
}

interface OwnProps {
    nesteSpm: (id: string) => void;
    forrigeSpm: () => void;
    sporsmal: SporsmalModell;
    feil?: boolean;
    spmRef: any; // tslint:disable-line:no-any
}

interface StateProps {
    besvarteSporsmal: BesvarelseModell[];
}

interface EgenStateProps {
    feil: boolean;
}

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
            return alternativListe.filter(
                alt =>
                    !sporsmalAlternativer.find(
                        a => alt.id === a.id && a.skalaId! > alternativ.skalaId!
                    )
            );
        }
        return alternativListe.filter(alt => alt.id !== alternativ.id);
    } else {
        if (
            !!sporsmal.uniktAlternativ &&
            sporsmal.uniktAlternativ === alternativ.id
        ) {
            return [alternativ];
        }
        if (type === 'radio') {
            return [alternativ];
        } else if (type === 'skala') {
            alternativListe = [];
            return [
                ...sporsmalAlternativer.filter(alt => {
                    return alternativ.skalaId! >= alt.skalaId!;
                })
            ];
        }
        return [...alternativListe, alternativ];
    }
}

function erAlternativMulig(
    uniktAlternativId: string,
    gjeldendeAlternativId: string,
    markerteAlternativer: SvarAlternativModell[]
): boolean {
    if (uniktAlternativId === gjeldendeAlternativId) {
        return true;
    } else {
        if (!!markerteAlternativer.find(alt => alt.id === uniktAlternativId)) {
            if (gjeldendeAlternativId === 'intervju-svar-0202') {
                return true;
            }
            return false;
        }
    }
    return true;
}

type SporsmalProps = OwnProps & DispatchProps & StateProps;

class Sporsmal extends React.Component<SporsmalProps, EgenStateProps> {
    constructor(props: SporsmalProps) {
        super(props);
        this.state = { feil: false };
    }

    sjekkSvar(markerteSpm: SvarAlternativModell[], sporsmalId: string) {
        if (markerteSpm.length === 0) {
            this.setState({ feil: true });
        } else {
            return this.props.nesteSpm(sporsmalId);
        }
    }

    render() {
        const {
            sporsmal,
            besvarteSporsmal,
            markerAlternativ,
            forrigeSpm,
            spmRef
        } = this.props;
        const besvartSpm: BesvarelseModell | undefined = besvarteSporsmal.find(
            besvarelse => besvarelse.sporsmalId === sporsmal.id
        );
        const markerteAlternativer: SvarAlternativModell[] = besvartSpm
            ? besvartSpm.svarAlternativer
            : [];
        if (this.state.feil && markerteAlternativer.length !== 0) {
            this.setState({ feil: false });
        }
        return (
            <li
                ref={spmRef}
                id={'sp-' + sporsmal.id}
                className={'sporsmal active'}
                tabIndex={0}
            >
                <section>
                    <h1 className="typo-element blokk-xs">
                        <FormattedMessage id={sporsmal.id} />
                    </h1>
                    {this.state.feil && (
                        <p className="skjemaelement__feilmelding">
                            <FormattedMessage id="feilmelding-mangler-svar" />
                        </p>
                    )}
                    <p className="hjelpetekst">
                        <FormattedMessage id={sporsmal.type} />
                    </p>
                    <div className="alternativer">
                        {sporsmal.alternativer.map(function(
                            alternativ: SvarAlternativModell
                        ) {
                            const erValgt = !!markerteAlternativer.find(
                                alt => alt.id === alternativ.id
                            );
                            const kanVelges: boolean = !!sporsmal.uniktAlternativ
                                ? erAlternativMulig(
                                      sporsmal.uniktAlternativ,
                                      alternativ.id,
                                      markerteAlternativer
                                  )
                                : true;
                            return (
                                <Alternativ
                                    key={alternativ.id}
                                    alternativ={alternativ}
                                    erValgt={erValgt}
                                    sporsmalId={sporsmal.id}
                                    sporsmalType={sporsmal.type}
                                    kanVelges={kanVelges}
                                    markerAlternativ={() =>
                                        markerAlternativ(
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
                    </div>
                    {!sporsmal.erForsteSpm && (
                        <button
                            className="knapp"
                            key="tilbake"
                            onClick={e => {
                                e.preventDefault();
                                forrigeSpm();
                            }}
                        >
                            Tilbake
                        </button>
                    )}
                    {!sporsmal.erSisteSpm && (
                        <button
                            className="knapp knapp--hoved"
                            key="besvar"
                            onClick={e => {
                                e.preventDefault();
                                this.sjekkSvar(
                                    markerteAlternativer,
                                    sporsmal.id
                                );
                            }}
                        >
                            <FormattedMessage id="fortsett-knapp" />
                        </button>
                    )}
                </section>
            </li>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Sporsmal);
