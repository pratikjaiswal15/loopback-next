import { AuthorizationContext, AuthorizationDecision, AuthorizationMetadata, Authorizer } from '@loopback/authorization/';
import { Provider } from '@loopback/core';
export declare class MyAuthorizationProvider implements Provider<Authorizer> {
    constructor();
    /**
     * @returns authenticateFn
     */
    value(): Authorizer;
    authorize(authorizationCtx: AuthorizationContext, metadata: AuthorizationMetadata): Promise<AuthorizationDecision.ALLOW | AuthorizationDecision.DENY>;
}
