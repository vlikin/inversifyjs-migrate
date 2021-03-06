import {MigrationContainerBase} from "./migration-container-base";

export const name = "migration-manager";

export interface IGroupMetadata {
    name: string;
    target: any;
}

export type TGroupsMetadata = IGroupMetadata[];

export interface IMigrationContainer {
    up(): Promise<void> | void;
    down(): Promise<void> | void;
}

export const ContainerType = {
    CurrentVersion: `${name}:current-version`,
    MigrationManager: `${name}:migration-manager`,
    Migration: `${name}:migration`
};

export interface ICurrentVersionContainer {
    getVersion(): Promise<string> | string;
    setVersion(version: string): Promise<void> | void;
}

export interface IMigrationManagerContainer {
    getMigrations(version?: string, down?: boolean): Promise<MigrationContainerBase[]>;
    getCurrentVersion(): Promise<string> | string;
    run(version?: string, down?: boolean): Promise<void> | void;
}
