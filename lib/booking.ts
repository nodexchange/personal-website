export const SERVICE_OPTIONS = [
  "Mentorship",
  "Speaking",
  "Workshop",
  "Custom workshop",
  "Advisory",
  "Other",
];

export function normalizeService(input: string | null) {
  if (!input) {
    return "Mentorship";
  }

  const normalizedInput = input.trim().toLowerCase();
  const aliasMap: Record<string, string> = {
    mentorship: "Mentorship",
    mentor: "Mentorship",
    speaking: "Speaking",
    talks: "Speaking",
    talk: "Speaking",
    workshop: "Workshop",
    workshops: "Workshop",
    "custom workshop": "Custom workshop",
    advisory: "Advisory",
    other: "Other",
  };

  const aliased = aliasMap[normalizedInput];
  if (aliased) {
    return aliased;
  }

  const matched = SERVICE_OPTIONS.find(
    (service) => service.toLowerCase() === normalizedInput
  );

  return matched || "Other";
}
