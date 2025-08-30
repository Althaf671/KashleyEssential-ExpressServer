// Global logger

import chalk from "chalk";

export class Logger {
    
    // Get current timestamp
    private static getTimestamp(): string {
        const now = new Date();
        return now.toTimeString().slice(0, 8); 
    }

    // start
    static start = (message: string): void => {
        const timestamp = Logger.getTimestamp();
        if (process.env.NODE_ENV === "development") {
            console.log(chalk.bgBlue(`[DEV][OPERATION START] ${timestamp} ${message}`));
        };
    };

    // end
    static end = (message: string): void => {
        const timestamp = Logger.getTimestamp();
        if (process.env.NODE_ENV === "development") {
            console.log(chalk.bgYellow(`[DEV][OPERATION END] ${timestamp} ${message}`));
        };
    };

    // Info
    static info = (message: string, meta?: unknown): void => {
        const timestamp = Logger.getTimestamp();
        if (process.env.NODE_ENV === "development") {
            if (meta) {
                console.log(chalk.grey(`[DEV][INFO] ${timestamp} ${message}`), JSON.stringify(meta, null, 2));
            } else {
                console.log(chalk.grey(`[DEV][INFO] ${timestamp} ${message}`));
            }
        }
    };

    // Warn
    static warn = (message: string, meta?: unknown): void => {
        const timestamp = Logger.getTimestamp();
        if (process.env.NODE_ENV === "development") {
            if (meta) {
                console.log(chalk.yellow(`[DEV][WARN] ${timestamp} ${message}`), JSON.stringify(meta, null, 2));
            } else {
                console.log(chalk.yellow(`[DEV][WARN] ${timestamp} ${message}`));
            }
        }
    };

    // Error
    static error = (message: string, meta?: unknown): void => {
        const timestamp = Logger.getTimestamp();
        if (process.env.NODE_ENV === "development") {
            if (meta) {
                console.log(chalk.red(`[DEV][ERROR] ${timestamp} ${message}`), JSON.stringify(meta, null, 2));
            } else {
                console.log(chalk.red(`[DEV][ERROR] ${timestamp} ${message}`));
            }
        }
    };

    // Success
    static success = (message: string, meta?: unknown): void => {
        const timestamp = Logger.getTimestamp();
        if (process.env.NODE_ENV === "development") {
            if (meta) {
                console.log(chalk.green(`[DEV][SUCCESS] ${timestamp} ${message}`), JSON.stringify(meta, null, 2));
            } else {
                console.log(chalk.green(`[DEV][SUCCESS] ${timestamp} ${message}`));
            }
        }
    };

    // Critical
    static critical = (message: string, meta?: unknown): void => {
        const timestamp = Logger.getTimestamp();
        if (process.env.NODE_ENV === "development") {
            if (meta) {
                console.log(chalk.redBright(`[DEV][CRITICAL] ${timestamp} ${message}`), JSON.stringify(meta, null, 2));
            } else {
                console.log(chalk.redBright(`[DEV][CRITICAL] ${timestamp} ${message}`));
            }
        }
    };

};