export const fullWidth: RegExp =
  /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

export default function isFullWidth(str: string): boolean {
  return fullWidth.test(str);
}
