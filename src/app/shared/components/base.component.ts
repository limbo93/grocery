import { DomSanitizer } from '@angular/platform-browser';
import { OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscriber } from 'rxjs';



export class BaseComponent implements OnDestroy {

    subscribers: any = {};

    isFunction(value) { return typeof value === 'function'; }
    isArray(arr) { return Array.isArray(arr) || arr instanceof Array; }
    isString(value) { return typeof value === 'string'; }
    isNumber(value) { return typeof value === 'number'; }
    isWindow(obj) { return obj && obj.window === obj; }
    isBlankObject(value) { return value !== null && typeof value === 'object' && !Object.getPrototypeOf(value); }
    isEmptyOrNullString(value: string) { return value == null || value.trim() === '' };

    // Unsubscribe from all subscribers on component destroy
    ngOnDestroy() {
        for (let subscriberKey in this.subscribers) {
            let subscriber = this.subscribers[subscriberKey];
            if (subscriber instanceof Subscriber) {
                subscriber.unsubscribe();
            }
        }
    }

    // recursively mark form group controls as touched
    protected markFormGroupAsTouched(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach(control => {
            control.markAsDirty();
            if (control.controls) {
                control.controls.forEach(ctrl => this.markFormGroupAsTouched(ctrl));
            }
        });
    }

    // recursively mark form group controls as untouched
    protected markFormGroupAsUnTouched(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach(control => {
            control.markAsPristine();
            if (control.controls) {
                control.controls.forEach(ctrl => this.markFormGroupAsUnTouched(ctrl));
            }
        });
    }

    protected isIntegerTyped(evt) {
        evt = (evt) ? evt : window.event;
        let charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) { return false; }
        return true;
    }

    protected isDecimalNumberTyped(evt, context) {
        evt = (evt) ? evt : window.event;
        let charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode == 46 && context.value % 1 == 0) return true;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) { return false; }
        return true;
    }

    protected getKeysOfMap(map: Map<any, any>) {
        return Array.from(map.keys());
    }

    protected scrollToTop() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    protected wait(ms) {
        let d = new Date();
        let d2 = null;
        do { d2 = new Date(); } while (d2.getTime() - d.getTime() < ms);
    }

    indexTrackerFn(item, index) {
        return index;
    }
}
