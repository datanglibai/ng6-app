import { NgModule, ModuleWithProviders, Optional, SkipSelf } from "@angular/core";
import { ScienceFictionComponent } from './science-fiction/science-fiction.component';
import { BooksService } from './books.service';
import { AuthorsService } from './authors.service';
/**
 * A template can use exported declarables from any imported module, including those from modules that are imported indirectly and re-exported. 
 * For example, ModuleA imports ModuleB, and also exports it, which makes the declarables from ModuleB available wherever ModuleA is imported.
 */

@NgModule({
    declarations: [ScienceFictionComponent],
    imports: [],
    providers: [],
    //exports is a sub set of declarations and imports, 
    //that means for the component you defined in the module, you can only export if after declare it.
    exports: [ScienceFictionComponent], 
})
export class BooksModule {
    constructor() {
        console.log('Import: Books module constructor.');
    }
}
