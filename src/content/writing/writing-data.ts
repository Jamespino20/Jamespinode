export type WritingEntry = {
  id: string;
  title: string;
  kind: "fiction" | "worldbuilding" | "essay";
  summary: string;
};

export const writingData: WritingEntry[] = [
  {
    id: "dawn-of-dilemmas",
    title: "Dawn of Dilemmas",
    kind: "fiction",
    summary: "Long-form fantasy series. Private draft — index only.",
  },
];

export function getAllWriting(): WritingEntry[] {
  return writingData;
}
