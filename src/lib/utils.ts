export function formatRelativeTime(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins} min${diffMins === 1 ? '' : 's'} ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours} hr${diffHours === 1 ? '' : 's'} ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;
}

export function formatTime(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}

export function formatDate(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
}

export function formatElapsed(startIso: string): string {
  const start = new Date(startIso);
  const now = new Date();
  const diffMs = now.getTime() - start.getTime();
  const hours = Math.floor(diffMs / 3600000);
  const mins = Math.floor((diffMs % 3600000) / 60000);
  return `${hours}h ${mins}m`;
}

export function isOverdue(dueTime: string | null): boolean {
  if (!dueTime) return false;
  return new Date(dueTime) < new Date();
}

export function isDueSoon(dueTime: string | null, minutes = 60): boolean {
  if (!dueTime) return false;
  const due = new Date(dueTime);
  const now = new Date();
  const diff = due.getTime() - now.getTime();
  return diff > 0 && diff <= minutes * 60000;
}

export function generateId(): string {
  return crypto.randomUUID();
}
