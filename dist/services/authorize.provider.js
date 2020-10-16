"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyAuthorizationProvider = void 0;
const authorization_1 = require("@loopback/authorization/");
class MyAuthorizationProvider {
    constructor() { }
    /**
     * @returns authenticateFn
     */
    value() {
        return this.authorize.bind(this);
    }
    async authorize(authorizationCtx, metadata) {
        console.log('working');
        const clientRole = authorizationCtx.principals[0].role;
        const allowedRoles = metadata.allowedRoles;
        return (allowedRoles === null || allowedRoles === void 0 ? void 0 : allowedRoles.includes(clientRole)) ? authorization_1.AuthorizationDecision.ALLOW
            : authorization_1.AuthorizationDecision.DENY;
    }
}
exports.MyAuthorizationProvider = MyAuthorizationProvider;
//# sourceMappingURL=authorize.provider.js.map