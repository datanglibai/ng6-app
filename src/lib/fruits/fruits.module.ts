import { NgModule, ModuleWithProviders, Optional, SkipSelf } from "@angular/core";
import { FruitsComponent } from './fruits.component';
import { FruitsService } from "./fruits.service";


@NgModule({
    declarations: [FruitsComponent],
    imports: [],
    providers: [],
    exports: [FruitsComponent],
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

    constructor(/*private fruitsService: FruitsService*/) {
        console.log('Import: Fruits module constructor.');
    }
}
