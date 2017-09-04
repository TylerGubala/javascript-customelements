(function(exports){

    class CustomElement extends HTMLElement{
        constructor(){
            super();
            const Factory = new Events.Factory();
            this.addAttributeListener = Factory.addEventListener;
            this.removeAttributeListener = Factory.removeEventListener;
            this.attributeChangedCallback = function(attribute, oldValue, newValue){
                Factory.dispatchEvent(attribute, {detail: {oldValue: oldValue, newValue: newValue, value: newValue, attribute: attribute}});
            }
            this.attachShadow({mode:'open'});
        }
    }

    exports.CustomElement = CustomElement;

})(typeof exports === 'undefined'? this['CustomElements']={}: exports);
