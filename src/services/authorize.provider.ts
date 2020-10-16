import { AuthorizationContext, AuthorizationDecision, AuthorizationMetadata, Authorizer } from '@loopback/authorization/';
import { Provider } from '@loopback/core';

export class MyAuthorizationProvider implements Provider<Authorizer> {
  constructor() { }

  /**
   * @returns authenticateFn
   */
  value(): Authorizer {
    return this.authorize.bind(this);
  }

  async authorize(
    authorizationCtx: AuthorizationContext,
    metadata: AuthorizationMetadata,
  ) {

    console.log('authorization provider not getting called')
    const clientRole = authorizationCtx.principals[0].role;
    const allowedRoles = metadata.allowedRoles;
    return allowedRoles?.includes(clientRole)
      ? AuthorizationDecision.ALLOW
      : AuthorizationDecision.DENY;
  }
}
