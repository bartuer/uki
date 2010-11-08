include('../background.js');

/**
 * @class
 */
uki.background.Multi = uki.newClass({
  init: function () {
    this._bgs = Array.prototype.slice.call(arguments, 0);
  },
  attachTo: function (comp) {
    for (var i = 0, $this$_bgs$length = this._bgs.length; i < $this$_bgs$length; i += 1) {
      this._bgs[i].attachTo(comp);
    };
  },
  detach: function () {
    for (var i = 0, $this$_bgs$length = this._bgs.length; i < $this$_bgs$length; i += 1) {
      this._bgs[i].detach();
    };
  }
});