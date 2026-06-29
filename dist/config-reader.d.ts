import type { SandboxState } from './types.js';
export interface ConfigCounts {
    claudeMdCount: number;
    rulesCount: number;
    mcpCount: number;
    hooksCount: number;
    outputStyle?: string;
    sandboxState: SandboxState;
}
export declare function countConfigs(cwd?: string): Promise<ConfigCounts>;
//# sourceMappingURL=config-reader.d.ts.map