import * as React from 'react';
import SvarAlternativModell from '../sporsmal/svaralternativ';
import { AlternativTyper } from '../utils/konstanter';
import OverskriftMedHjelpeTekst from './overskrift-med-hjelpetekst';
import { hjelpeTekst } from '../tekster/hjelptetekster';

interface AlternativProps {
    alternativ: SvarAlternativModell;
    erValgt: boolean;
    markerAlternativ: () => void;
    sporsmalId: number;
    sporsmalType: AlternativTyper;
    kanVelges: boolean;
}

function Alternativ({ alternativ, erValgt, markerAlternativ, sporsmalId, sporsmalType, kanVelges }: AlternativProps) {
    const skalHaHjelpetekst: boolean = alternativ.id === '0111';
    return (
        <div key={alternativ.id} className="svar">
            <input
                id={alternativ.id}
                className="svar__radio"
                type={
                    sporsmalType !== AlternativTyper.SKALA
                        ? sporsmalType
                        : AlternativTyper.ETTVALG
                }
                name={sporsmalId.toString()}
                value={alternativ.id}
            />
            <label
                htmlFor={alternativ.id}
                className={`svar__label ${kanVelges ? erValgt
                    ? 'markert'
                    : '' : 'disabled'}`}
                onClick={e => {
                    e.preventDefault();
                    if (kanVelges) {markerAlternativ(); }
                }}
            >
                {alternativ.tekst}
                {skalHaHjelpetekst &&
                <OverskriftMedHjelpeTekst overskriftId="" hjelpetekstId={hjelpeTekst}/>}
            </label>
        </div>
    );
}

export default Alternativ;