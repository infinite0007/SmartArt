import { observable, action } from 'mobx';

class MobxInteractionStore {
    // diese Variable ist ein Observable. Wenn in einer Komponente auf diese Variable gehört wird
    // wird die Komponente neu gerendert.
    @observable stylesArray = null;

    // Speichert welcher Style ausgewählt wurde
    @observable choosedStyle = null;

    // Action wird aufgerufen. Übergebene Werte werden nun in Variablen gesetzt
    @action setStylesArray(stylesArray) {
        this.stylesArray = stylesArray;
    }

    @action setChoosedStyle(choosedStyle) {
        this.choosedStyle = choosedStyle;
    }

}

const store = new MobxInteractionStore();

export default store;