import { AppDocSectionTextComponent } from '@/components/doc/app.docsectiontext.component';
import { Code } from '@/domain/code';
import { Component, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'responsive-doc',
    standalone: false,
    template: ` <app-docsectiontext>
            <p>It is the option used to determine in which mode it should appear according to the given <i>media</i> or <i>breakpoint</i>.</p>
        </app-docsectiontext>
        <app-code [code]="code" [hideToggleCode]="true"></app-code>

        <p class="doc-section-description">Valid values of the <i>direction</i> property would be;</p>
        <div class="card">
            <ul>
                <li>center (default)</li>
                <li>top</li>
                <li>top-start</li>
                <li>top-end</li>
                <li>bottom</li>
                <li>bottom-start</li>
                <li>bottom-end</li>
                <li>left</li>
                <li>left-start</li>
                <li>left-end</li>
                <li>right</li>
                <li>right-start</li>
                <li>right-end</li>
            </ul>
        </div>`
})
export class ResponsiveDoc {
    @Input() id: string;

    @Input() title: string;

    @ViewChild('docsectiontext', { static: true }) docsectiontext: AppDocSectionTextComponent;

    code: Code = {
        basic: `import { OverlayOptions, ResponsiveOverlayDirectionType } from 'primeng/api';
import { PrimeNG } from 'primeng/config';

const responsiveOptions: ResponsiveOverlayOptions = {
    // style?: any;                                     // Style of component in given breakpoint or media query
    // styleClass?: string;                             // Style class of component in given breakpoint or media query
    // contentStyle?: any;                              // Style of content in given breakpoint or media query
    // contentStyleClass?: string;                      // Style class of content in given breakpoint or media query
    // breakpoint?: string;                             // Breakpoint required to show component in modal mode. Exp: '640px', '10rem' etc.
    // media?: string;                                  // Media query required to show component in modal mode. Exp: '@media screen and (max-width: 640px)', '@media screen and (min-width: 640px) and (max-width: 900px)' etc.
    // direction?: ResponsiveOverlayDirectionType;      // Direction in which the component will be displayed in modal mode.
    // hideOnEscape?: boolean;                          // Hides overlay when escape key pressed.
}

this.primeng.overlayOptions: OverlayOptions = {
    responsive: responsiveOptions
};`
    };
}
