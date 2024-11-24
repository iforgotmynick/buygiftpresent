import * as path from 'path';
import {strings} from '@angular-devkit/core';
import {formatFiles, generateFiles, Tree} from '@nx/devkit';
import {FeatureGeneratorGeneratorSchema} from './schema';

/**
 * @param tree Tree abstraction
 * @param options CLI input params
 */
export async function featureGeneratorGenerator(tree: Tree, options: FeatureGeneratorGeneratorSchema): Promise<void> {
  const projectRoot = `temp`;
  
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {...strings, ...options});
  await formatFiles(tree);
}

export default featureGeneratorGenerator;
