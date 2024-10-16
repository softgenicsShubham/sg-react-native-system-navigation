const ReactNativeSystemNavigation =
  require('./NativeReactNativeSystemNavigation').default;

export function multiply(a: number, b: number): number {
  return ReactNativeSystemNavigation.multiply(a, b);
}

export function setNavigationBarColor(color: string): number {
  return ReactNativeSystemNavigation.setNavigationBarColor(color);
}

export function setHidden(hidden: boolean): number {
  return ReactNativeSystemNavigation.setHidden(hidden);
}
