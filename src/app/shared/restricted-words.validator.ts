import {FormControl} from '@angular/forms';

export function restrictedWords(words) {
  return (control: FormControl): {[key: string]: any} => {
    if (!words) {
      return null;
    }
    const invalidWords = words.map(word => control.value.includes(word) ? word : null)
      .filter(word => word != null);

    if (invalidWords && invalidWords.length > 0) {
      return {restrictedWords: invalidWords.join(', ')};
    } else {
      // if null then it's valid
      return null;
    }
    // alternative way to short code style:
    // return invalidWords && invalidWords.length > 0
    //         ? {restrictedWords: invalidWords.join(', ')} : null;
  };
}
