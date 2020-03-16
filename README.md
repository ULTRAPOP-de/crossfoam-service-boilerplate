# crossfoam-dev-service-boilerplate

Service modules allow the extension to integrate social media services. In order to work with the overall structure, services need to meet certain requirements:

## Structure

``
export { createOptions, auth, authRequired, scrape, config };
``

### config

The config can be used for service-specific configurations, but it must contain:

#### config.auth

This tells the system if this module requires authentication
``
"auth":true|false
``

#### \*auth, authRequired

If `config.auth === true` then the module needs to provide to promise-based methods.

authRequired returns true or false, telling the system if authentication is already established or not.

If authRequired returns false, then auth is initated.

### createOptions

This method can create a segment on the options page

### scrape

I guess this is obvious...