import {Compiler, COMPILER_OPTIONS, CompilerFactory, Injector, NgModule} from "@angular/core";
import {TestComponent} from "./TestComponent";
import {createCustomElement} from "@angular/elements";
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

export function createCompiler(compilerFactory: CompilerFactory) {
    return compilerFactory.createCompiler();
}
// https://medium.com/learnwithrahul/ways-of-bootstrapping-angular-applications-d379f594f604
@NgModule({
    declarations: [TestComponent],
    entryComponents: [TestComponent],
    providers: [
        { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
        { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] },
        { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] }
    ],
})
class Application{
    constructor(private injector:Injector){}
    ngDoBootstrap() {
        const element = createCustomElement(
            TestComponent,
            {
                injector: this.injector
            }
        )
        customElements.get('jrg-ng-test') ||
        customElements.define('jrg-ng-test', element, {});
    }
}
export {Application}
