// -----------------------------------------------------------------------------
// Deck Class
// -----------------------------------------------------------------------------
var Deck = Pile.extend({
	
	_cardsInDeck: null,
	
	init: function (cards) {
		this._super(cards);
		// TODO: Make this happen during addCards(), make sure this isn't a references to the actual _cards array.
		this._cardsInDeck = this._cards;
		
		// TODO: Get rid of this terrible setTimeout!
		// Triggering this event in init() is preventing me from listening to it right away!
		//setTimeout($.proxy(function() {
		//	this._activateCard(this.nextCard());
		//}, this), 500);
	},
	
	activate: function() {
		this._activateCard(this.nextCard());
	},
	
	nextCard: function() {
		return this._cardsInDeck[this._cardsInDeck.length - 1];
	}/*,
    
    handleEvent: function (type, target, data) {
        switch (type) {
            case SomeComponent.SOME_EVENT:
                // Do stuff.
                break;
            // ... other event routing happens here.
            default:
                throw new Error("Unknown event type, '" + type + "' passed to Deck");
        }
    }*/
});

/*
 * Define constants for Event types.
 */
Deck.CREATED = "deckCreated";
Deck.SHUFFLED = "deckShuffled";
Deck.CARD_CREATED = "cardCreated";