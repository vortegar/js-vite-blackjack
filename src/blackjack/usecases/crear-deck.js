import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCartas Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tipoEspeciales Ejemplo: ['A','J','Q','K'] 
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = ( tiposDeCartas , tipoEspeciales ) => {
    
    if( !tiposDeCartas || tiposDeCartas.length === 0 ) 
        throw new Error ('tipodeCarta es Obligatorio como un arreglo de string');
    
    if( !tipoEspeciales || tipoEspeciales.length === 0 ) 
        throw new Error ('tipoEspeciales es Obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tipoEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}