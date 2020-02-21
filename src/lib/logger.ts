import { injectable, optional } from 'inversify';
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as path from 'path';
import winston, { configure, format, transports } from 'winston';

import { LoggerInterface } from '../api/interfaces';

configure({
  transports: [
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
      format:
        process.env.NODE_ENV === 'production'
          ? format.combine(format.json())
          : format.combine(format.colorize(), format.simple()),
    }),
  ],
});

@injectable()
export class Logger implements LoggerInterface {
  public static DEFAULT_SCOPE = 'server';

  private scope: string;

  constructor(@optional() scope?: string) {
    this.scope = this.parsePathToScope(scope ? scope : Logger.DEFAULT_SCOPE);
  }

  public debug(message: string, ...args: any[]): void {
    this.log('debug', message, args);
  }

  public info(message: string, ...args: any[]): void {
    this.log('info', message, args);
  }

  public warn(message: string, ...args: any[]): void {
    this.log('warn', message, args);
  }

  public error(message: string, ...args: any[]): void {
    this.log('error', message, args);
  }

  private log(level: string, message: string, args: any[]): void {
    (winston as any)[level](`${this.formatScope()} ${message}`, args);
  }

  private formatScope(): string {
    return `[${this.scope}]`;
  }

  private parsePathToScope(filepath: string): string {
    if (filepath.indexOf(path.sep) >= 0) {
      filepath = filepath.replace(process.cwd(), '');
      filepath = filepath.replace(`${path.sep}src${path.sep}`, '');
      filepath = filepath.replace(`${path.sep}dist${path.sep}`, '');
      filepath = filepath.replace(`${path.sep}scripts${path.sep}`, '');
      filepath = filepath.replace('.ts', '');
      filepath = filepath.replace('.js', '');
      filepath = filepath.replace(path.sep, ':');
    }
    return filepath;
  }
}
