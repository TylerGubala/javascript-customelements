(function(exports){

    class CustomElement extends HTMLElement{
        constructor(){
            super();
            const Factory = new Events.Factory();
            this.addAttributeListeners = Factory.addEventListeners;
            this.removeAttributeListeners = Factory.removeEventListeners;
            this.attributeChangedCallback = function(attribute, oldValue, newValue){
                Factory.dispatchEvent(attribute, {details: {oldValue: oldValue, newValue: newValue, attribute: attribute}});
            }
            this.attachShadow({mode:'open'});
        }
    }

    exports.CustomElement = CustomElement;

})(typeof exports === 'undefined'? this['CustomElements']={}: exports);