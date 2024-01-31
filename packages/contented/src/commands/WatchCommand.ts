import { ContentedProcessor } from '@contentedjs/contented-processor';

import { BaseCommand } from './BaseCommand.js';
import { ContentedWatcher } from './contented/ContentedWatcher.js';

/**
 * `contented watch` files and automatically rebuild when changed into output directory `.contented`
 * @deprecated use `contented build --watch` instead
 */
export class WatchCommand extends BaseCommand {
  static paths = [[`watch`]];

  async execute() {
    const config = await this.loadConfig();
    const processor = new ContentedProcessor(config.processor);

    const watcher = new ContentedWatcher(this.context, processor);
    await watcher.watch();
  }
}
