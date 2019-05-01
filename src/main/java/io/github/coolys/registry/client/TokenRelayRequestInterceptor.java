package io.github.coolys.registry.client;

import feign.RequestInterceptor;
import feign.RequestTemplate;
import io.github.coolys.registry.security.oauth2.AuthorizationHeaderUtil;

public class TokenRelayRequestInterceptor implements RequestInterceptor {

    public static final String AUTHORIZATION = "Authorization";

    @Override
    public void apply(RequestTemplate template) {
        template.header(AUTHORIZATION, AuthorizationHeaderUtil.getAuthorizationHeader());
    }
}
