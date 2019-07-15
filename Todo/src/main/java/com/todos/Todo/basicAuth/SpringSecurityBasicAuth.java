package com.todos.Todo.basicAuth;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;


@Configuration
@EnableWebSecurity
public class SpringSecurityBasicAuth extends WebSecurityConfigurerAdapter {
	List<String> allowedOrigins = new ArrayList();
	List<String> allowedHeaders = new ArrayList();
	List<String> allowedHeaders2 = new ArrayList();
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http.cors().and().csrf().disable().authorizeRequests().antMatchers(HttpMethod.OPTIONS,"/**").permitAll().anyRequest().authenticated().and().httpBasic();
		
		
		
		
	}
	

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
    	
    	allowedOrigins.add("*");
    	allowedHeaders.add("HEAD");
    	allowedHeaders.add("GET");
    	allowedHeaders.add("POST");
    	allowedHeaders.add("PUT");
    	allowedHeaders.add("DELETE");
    	allowedHeaders.add("PATCH");
    	
    	allowedHeaders2.add("Authorization");
    	allowedHeaders2.add("Cache-Control");
    	allowedHeaders2.add("Content-Type");
    	
        final CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(allowedOrigins);
        configuration.setAllowedMethods(allowedHeaders);
        // setAllowCredentials(true) is important, otherwise:
        // The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'.
        configuration.setAllowCredentials(true);
        // setAllowedHeaders is important! Without it, OPTIONS preflight request
        // will fail with 403 Invalid CORS request
        configuration.setAllowedHeaders(allowedHeaders2);
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
