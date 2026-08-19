const KEY = "streak:selected-track";

export function getSelectedTrack(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

export function setSelectedTrack(id: string) {
  try {
    window.localStorage.setItem(KEY, id);
  } catch {
    /* ignore */
  }
}

export function clearSelectedTrack() {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}
