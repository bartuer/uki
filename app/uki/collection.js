include('../uki.js');
include('attr.js');
include('attachment.js');


(function() {
    uki.Collection = function( elems ) {
        this.length = 0;
    	Array.prototype.push.apply( this, elems );
    };

    var self = uki.Collection.prototype = {};
    
    self.each = function( callback ) {
        uki.each( this, callback );
        return this;
    };
    
    self.attr = function( name, value ) {
        if (value !== undefined) {
            this.each(function() {
                uki.attr( this, name, value );
            });
            return this;
        } else {
            return uki.attr( this[0], name );
        }
    };
    
    self.find = function( selector ) {
        return uki.find( selector, this );
    };
    
    self.attachTo = function( node, minSize ) {
        this.each(function() {
            new uki.Attachment( node, this, minSize );
        });
        return this;
    };
    
    self.append = function( views ) {
        if (!this[0]) return this;
        views = views.length !== undefined ? views : [views];
        for (var i=0; i < views.length; i++) {
            this[0].appendChild(views[i]);
        };
        return this;
    };
    
    uki.each(['bind', 'unbind', 'trigger'], function(i, name) {
        self[name] = function() {
            for (var i=0; i < this.length; i++) {
                this[i][name].apply(this[i], arguments);
            };
            return this;
        };
    });
})();