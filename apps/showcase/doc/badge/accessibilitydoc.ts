import { Component } from '@angular/core';

@Component({
    selector: 'badge-accessibility-doc',
    standalone: false,
    template: ` <app-docsectiontext>
        <h3>Screen Reader</h3>
        <p>
            Badge does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the badges are dynamic,
            <i>aria-live</i> may be utilized as well. In case badges need to be tabbable, <i>tabIndex</i> can be added to implement custom key handlers.
        </p>

        <h3>Keyboard Support</h3>
        <p>Component does not include any interactive elements.</p>
    </app-docsectiontext>`
})
export class AccessibilityDoc {}
