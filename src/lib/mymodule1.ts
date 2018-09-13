import { NgModule, ModuleWithProviders, Optional, SkipSelf } from "@angular/core";

/**
 * Module for registering the core level providers for web-core
 *
 * This service should only be registered once in the root module so that external
 * services have a default implementation to use.  Data services should register their
 * own custom implementation of of this service using InjectionTokens.
 *
 */
@NgModule({
    imports: [],
    providers: []
})
export class MyModule1 {
    /**
     * Returns a `forRoot` module definition.  This should only be called and registered once for the entire application.
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: MyModule1,
            providers: [...LoggerModule.forRoot().providers, ...SignalRModule.forRoot().providers]
        };
    }

    constructor( ) {  }
}
