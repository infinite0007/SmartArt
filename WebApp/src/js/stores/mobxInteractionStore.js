import { observable, action } from 'mobx';

class MobxInteractionStore {
    // diese Variable ist ein Observable. Wenn in einer Komponente auf diese Variable gehört wird
    // wird die Komponente neu gerendert.
    @observable stylesArray = null;

    // 3. Action wird aufgerufen. Übergebene Werte werden nun in Variablen gesetzt
    @action setStylesArray(stylesArray) {
        this.stylesArray = stylesArray;
    }

}

const store = new MobxInteractionStore();

export default store;