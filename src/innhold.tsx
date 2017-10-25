import * as React from 'react';
import Skjema from './skjema/skjema';
import Resultat from './resultat/resultat';
import { AppState } from './reducer';
import { connect } from 'react-redux';
import { selectErAlleSpormalBesvart } from './svar/svar-selector';

interface InnholdProps {
    erAlleSpormalBesvart: boolean;
}

function Innhold({erAlleSpormalBesvart}: InnholdProps) {
    return (
        erAlleSpormalBesvart ? <Resultat/> : <Skjema/>
    );
}

const mapStateToProps = (state: AppState): InnholdProps => ({
    erAlleSpormalBesvart: selectErAlleSpormalBesvart(state)
});

export default connect(mapStateToProps)(Innhold);
