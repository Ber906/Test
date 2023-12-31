declare class AssetManager {
  dir: string;
  loaded: boolean;
  data: Record<string, string>;
  constructor(dir: string);
  load(): Promise<void>;
  clear(): void;
  get(name: string): string;
  set(name: string, data: string): string;
  get size(): number;
}
declare const _default: {
  font: AssetManager;
  image: AssetManager;
  data: AssetManager;
  utils: {
      AssetManager: typeof AssetManager;
  };
};
export = _default;
