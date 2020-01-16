define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NoteItem = /** @class */ (function () {
        function NoteItem(item) {
            this.date = item.date;
            this.noteMessage = item.noteMessage;
            this.noteOwner = item.noteOwner;
        }
        return NoteItem;
    }());
    exports.NoteItem = NoteItem;
});
//# sourceMappingURL=noteitem.js.map