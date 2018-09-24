import { NgModule, ModuleWithProviders, Optional, SkipSelf } from "@angular/core";
import { FruitsComponent } from './fruits.component';
import { Fruits2Component } from './fruits2.component';
//import { FruitsService } from "./index";

@NgModule({
    declarations: [FruitsComponent, Fruits2Component],
    imports: [],
    //providers: [FruitsService],
    exports: [FruitsComponent, Fruits2Component],
})
export class FruitsModule {
    /**
     * Returns a `forRoot` module definition.  This should only be called and registered once for the entire application.
     */
    // public static forRoot(): ModuleWithProviders {
    //     return {
    //         ngModule: MyModule2,
    //         providers: []
    //     };
    // }

    constructor( ) {
        console.log('Import: Fruits module constructor.');
    }
}
