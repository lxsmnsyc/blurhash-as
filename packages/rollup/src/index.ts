import type { Plugin } from 'rollup';
import type { BlurhashConfig } from 'unplugin-blurhash-as';
import { blurhashAS } from 'unplugin-blurhash-as';

export type { BlurhashConfig } from 'unplugin-blurhash-as';

const blurhashASPlugin = blurhashAS.rollup as (
  options: BlurhashConfig,
) => Plugin;

export default blurhashASPlugin;
