import { buildSelector } from '@/shared/lib/store';
import { JsonSettings } from '../types/jsonSettings';

const defaultJsonSettings: JsonSettings = {};
export const [useJsonSettings, getJsonSettings] = buildSelector(
  (state) => state.user.dataAuth?.jsonSettings ?? defaultJsonSettings,
);
