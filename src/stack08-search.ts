export interface SearchRecord {
  id: string;
  text: string;
}

export function search(records: SearchRecord[], query: string): SearchRecord[] {
  const normalized = query.trim().toLowerCase();
  if (normalized.length === 0) return records;
  return records.filter((record) => record.text.toLowerCase().includes(normalized));
}

export function searchOrEverything(records: SearchRecord[], query: string | undefined): SearchRecord[] {
  return search(records, query || "");
}
