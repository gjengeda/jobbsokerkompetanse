import SvarAlternativModell from './svaralternativ';
import { AlternativTyper } from '../utils/konstanter';

interface SporsmalModell {
    id: string;
    alternativer: SvarAlternativModell[];
    type: AlternativTyper;
    overskriftId?: string;
    erForsteSpm?: boolean;
    erSisteSpm?: boolean;
    uniktAlternativ?: string; // Gjelder når ett alternativ nuller ut og disabler de andre
}

export default SporsmalModell;
