// Simple test to find function in output
import {Application} from "./ng/Application";
import {platformBrowser} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

const findMeAfter = "";
const app = platformBrowserDynamic().bootstrapModule(Application)
// const app = platformBrowser().bootstrapModule(Application)
export {app}