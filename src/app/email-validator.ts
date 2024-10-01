import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const emailRegex = RegExp('(?=^[\\w-\\.]+@wilder.school)');
    const valid = emailRegex.test(control.value);
    const errors = {
        email: {
            rules: 'must be a valid email'
        }
    }
    return !valid ? errors : null;
}