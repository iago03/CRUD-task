import { FormControl } from '@angular/forms';

export const isValidDate = (c: FormControl) => {
  const date = new Date(c.value);
  const newDate = new Date();
  const year = newDate.getFullYear() - date.getFullYear();

  return newDate > date && year >= 18
    ? null
    : {
        isValidDate: true,
      };
};
