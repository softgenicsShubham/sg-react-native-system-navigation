import type { TurboModule } from 'react-native';
import { Platform, TurboModuleRegistry } from 'react-native';

if (Platform.OS !== 'android') {
  throw new Error('This TurboModule is only supported on Android.');
}

export interface Spec extends TurboModule {
  multiply(a: number, b: number): number;
  setNavigationBarColor(color: string): void;
  setHidden(hidden: boolean): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
  'ReactNativeSystemNavigation'
);
