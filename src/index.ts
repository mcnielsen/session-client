
import {AlSession} from './al-session';

export * from './types';
export * from './events';
export * from './utilities';
export {
    AlSessionInstance,
    AlSession,
} from './al-session';

// tslint:disable:variable-name
/*
     * @deprecated Use AlSession instead, lower case l
     */
export const ALSession = AlSession;
