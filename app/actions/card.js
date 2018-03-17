
export const CARD_ADD = 'CARD_ADD';
export function cardAdd(card) {
    return {
        type: CARD_ADD,
        card,
    }
}