import * as React from 'react';
import alleSporsmal from '../sporsmal/sporsmal-alle';
import ScrollView from './scrollview';
import Sporsmal from './sporsmal';

/* tslint:disable:no-any */

interface SkjemaProps {
    handleSubmit: () => void;
}

class Skjema extends React.Component<SkjemaProps, {}> {

    render() {
        let sporsmalRefs = {};

        const settFokusPaSporsmal = (id: number) => {
            const spm = sporsmalRefs[id];
            spm.focus();
            const scrollTil = spm.offsetTop - (( window.innerHeight - spm.clientHeight) / 2 );
            window.scrollTo(0, scrollTil);

        };
        const fokusNesteSporsmal = (id: number) => {
            const nySporsmalId = alleSporsmal[id].id; // spm.id starter på 1, men 0 er første index
            settFokusPaSporsmal(nySporsmalId);
        };

        const sporsmal = alleSporsmal.map(spm => {
            return (
                <Sporsmal
                    isActive={false}
                    key={spm.id}
                    gaTilNesteSpm={fokusNesteSporsmal}
                    sporsmal={spm}
                    spmRef={(ref: any) => ( sporsmalRefs[spm.id] = ref )}
                />
            );
        });
        return (
            <form className="sporsmalsskjema">
                <ScrollView>{sporsmal}</ScrollView>
                <button
                    onClick={() => this.props.handleSubmit()}
                >
                    Send inn
                </button>
            </form>
        );
    }
}

export default Skjema;
