import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safehtml'})
export class SafeHtmlPipe implements PipeTransform {

    constructor(
        private _sanitizer:DomSanitizer
    ){}

    transform(html: any): any {
        return this._sanitizer.bypassSecurityTrustHtml(html);
    }
}