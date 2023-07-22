import { FeatureFlags } from '@/shared/types/featureFlags'

let featureFlags: FeatureFlags;

export function setFeatureFlags (newFlags?: FeatureFlags) {
  if(newFlags) {
    featureFlags = newFlags;
  }
}
export function getFeatureFlags (featureFlag: keyof FeatureFlags) {
  console.log(featureFlags);
  return featureFlags[featureFlag]
}