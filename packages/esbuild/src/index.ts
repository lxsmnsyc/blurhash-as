import type { Plugin } from 'esbuild';
import type { BlurhashConfig } from 'unplugin-blurhash-as';
import { blurhashAS } from 'unplugin-blurhash-as';

export type { BlurhashConfig } from 'unplugin-blurhash-as';

const blurhashASPlugin = blurhashAS.esbuild as (
  options: BlurhashConfig,
) => Plugin;

export default blurhashASPlugin;
