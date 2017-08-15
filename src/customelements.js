(function(exports){

    class CustomElement extends HTMLElement{
        constructor(){
            super();
            const Factory = new Events.Factory();
            this.addAttributeListener = Factory.addEventListener.bind(Factory);
            this.removeAttributeListener = Factory.removeEventListener.bind(Factory);
            this.attributeChangedCallback = function(attribute, oldValue, newValue){
                Factory.dispatchEvent(attribute, {detail: {oldValue: oldValue, newValue: newValue, attribute: attribute}});
            }
            this.attachShadow({mode:'open'});
        }
    }

    exports.CustomElement = CustomElement;

})(typeof exports === 'undefined'? this['CustomElements']={}: exports);
