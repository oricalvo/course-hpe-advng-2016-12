"use strict";
var ContactService = (function () {
    function ContactService() {
    }
    ContactService.prototype.getAll = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve([
                    { id: 1, name: "Ori" },
                    { id: 2, name: "Roni" },
                ]);
            }, 1500);
        });
    };
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map