export interface Shift {
  id: string;
  startTime: string;
  endTime: string | null;
  ward: string;
  nurseInitials: string;
}

export interface Patient {
  id: string;
  roomNumber: string;
  alias: string;
  admittedDate: string;
  isActive: boolean;
  priority: 'routine' | 'watch' | 'critical';
  tags: string[];
}

export interface Note {
  id: string;
  patientId: string;
  shiftId: string;
  content: string;
  timestamp: string;
  type: 'clinical' | 'handoff' | 'general';
  isPinned: boolean;
}

export interface Task {
  id: string;
  patientId: string | null;
  shiftId: string;
  description: string;
  dueTime: string | null;
  type: 'medication' | 'procedure' | 'assessment' | 'documentation' | 'other';
  status: 'pending' | 'done' | 'skipped';
  priority: 'routine' | 'urgent' | 'stat';
  completedAt: string | null;
  notes: string;
}

export interface Protocol {
  id: string;
  title: string;
  category: 'medication' | 'procedure' | 'emergency' | 'assessment' | 'documentation';
  content: string;
  tags: string[];
  isFavourite: boolean;
}

export interface AppState {
  theme: 'night' | 'winter';
  currentShiftId: string | null;
  shifts: Shift[];
  patients: Patient[];
  notes: Note[];
  tasks: Task[];
  protocols: Protocol[];
}
