
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNReactNativeSystemNavigationSpec.h"

@interface ReactNativeSystemNavigation : NSObject <NativeReactNativeSystemNavigationSpec>
#else
#import <React/RCTBridgeModule.h>

@interface ReactNativeSystemNavigation : NSObject <RCTBridgeModule>
#endif

@end
