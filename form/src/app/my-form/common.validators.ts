import { AbstractControl, ValidationErrors } from '@angular/forms';

export const helperCannotContainSpace = (
  control: AbstractControl
): ValidationErrors | null => {
  if ((control.value as string).indexOf(' ') >= 0) {
    return { cannotContainSpace: true };
  }
  return null;
};

export const helperCompareDbData = (
  control: AbstractControl,
  dbValue: string,
  resolveNameValue: string
): any => {
  const result = new Promise((resolve) => {
    setTimeout(() => {
      if (control.value !== dbValue) {
        resolve({ [resolveNameValue]: true });
      } else {
        resolve({ [resolveNameValue]: false });
      }
    }, 5000);
  });

  return result;
};
