import 'dotenv/config';
import 'reflect-metadata';

import fs from 'fs';
import { interfaces } from 'inversify';
import path from 'path';
import raml2html from 'raml2html';

import { container } from '../src/container';
import { Logger } from '../src/lib/logger';
import { TYPES } from '../src/types';

const log = new (container.get<interfaces.Newable<Logger>>(TYPES.NewableLogger))(__filename);

export const generateHtmlDoc = async (): Promise<void> => {
  const config = raml2html.getConfigForTheme();
  const ramlFilePath = path.join(__dirname, '../doc', 'contract.raml');
  const htmlFilePath = path.join(__dirname, '../doc', 'index.html');
  try {
    const html = await raml2html.render(ramlFilePath, config);
    await fs.promises.writeFile(htmlFilePath, html);
    log.info('HTML documentation has been generated');
  } catch (error) {
    log.error('Unable to generate the HTML documentation');
    log.error(error);
  }
};

generateHtmlDoc();
