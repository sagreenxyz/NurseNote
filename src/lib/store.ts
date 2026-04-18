import type { AppState } from '../types';
import { DEFAULT_STATE } from './defaultState';

const KEY = 'nursenote:state';

export function loadState(): AppState {
  if (typeof localStorage === 'undefined') return DEFAULT_STATE;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULT_STATE;
    return JSON.parse(raw) as AppState;
  } catch {
    return DEFAULT_STATE;
  }
}

export function saveState(s: AppState): void {
  localStorage.setItem(KEY, JSON.stringify(s));
}

export function getState(): AppState {
  return loadState();
}

export function updateState(fn: (s: AppState) => AppState): void {
  saveState(fn(loadState()));
}
