package io.github.coolys.registry.filters;

import io.github.coolys.config.CoolybotProperties;
import io.github.coolys.registry.filters.accesscontrol.AccessControlFilter;
import io.github.coolys.registry.filters.responserewriting.SwaggerBasePathRewritingFilter;
import org.springframework.cloud.netflix.zuul.filters.RouteLocator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RegistryConfiguration {

    @Configuration
    public static class SwaggerBasePathRewritingConfiguration {

        @Bean
        public SwaggerBasePathRewritingFilter swaggerBasePathRewritingFilter(){
            return new SwaggerBasePathRewritingFilter();
        }
    }

    @Configuration
    public static class AccessControlFilterConfiguration {

        @Bean
        public AccessControlFilter accessControlFilter(RouteLocator routeLocator, CoolybotProperties jHipsterProperties){
            return new AccessControlFilter(routeLocator, jHipsterProperties);
        }
    }

}
