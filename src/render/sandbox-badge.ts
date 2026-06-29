import type { SandboxState } from '../types.js';
import type { HudColorOverrides } from '../config.js';
import { green, warning, critical } from './colors.js';

// strict → green "sandbox", fallback → amber "sandbox fallback", off → red "sandbox off".
export function renderSandboxBadge(state: SandboxState, colors?: Partial<HudColorOverrides>): string {
  switch (state) {
    case 'strict':
      return green('sandbox');
    case 'fallback':
      return warning('sandbox fallback', colors);
    case 'off':
      return critical('sandbox off', colors);
  }
}
