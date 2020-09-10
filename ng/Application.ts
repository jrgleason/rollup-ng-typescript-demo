import {NgModule} from "@angular/core";
import {TestComponent} from "./TestComponent";
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    declarations: [TestComponent],
    bootstrap: [TestComponent],
    imports:[BrowserModule]
})
class Application{

}
export {Application}
