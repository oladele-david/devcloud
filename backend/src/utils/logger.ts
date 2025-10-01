interface LogData {
  [key: string]: any;
}

class Logger {
  private formatMessage(level: string, message: string, data?: LogData): string {
    const timestamp = new Date().toISOString();
    const baseMessage = `[${timestamp}] [${level}] ${message}`;
    
    if (data && Object.keys(data).length > 0) {
      return `${baseMessage} ${JSON.stringify(data)}`;
    }
    
    return baseMessage;
  }

  info(message: string, data?: LogData): void {
    console.log(this.formatMessage('INFO', message, data));
  }

  error(message: string, error?: Error | LogData): void {
    if (error instanceof Error) {
      console.error(this.formatMessage('ERROR', message, {
        error: error.message,
        stack: error.stack,
      }));
    } else {
      console.error(this.formatMessage('ERROR', message, error));
    }
  }

  warn(message: string, data?: LogData): void {
    console.warn(this.formatMessage('WARN', message, data));
  }

  debug(message: string, data?: LogData): void {
    if (process.env.NODE_ENV === 'development') {
      console.debug(this.formatMessage('DEBUG', message, data));
    }
  }
}

export const logger = new Logger();