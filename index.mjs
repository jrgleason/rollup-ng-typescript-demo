// Simple test to find function in output
import {Application} from "./ng/Application";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from "@angular/core";
if(!global.isDev){
    enableProdMode()
}
document.addEventListener(
    "DOMContentLoaded",
    ()=> platformBrowserDynamic().bootstrapModule(Application)
);