export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

// Deterministic gradient picker so avatars are stable between renders.
export function avatarGradient(seed: string): string {
  const gradients = [
    "from-brand-700 to-brand-900",
    "from-crimson-600 to-crimson-800",
    "from-brand-600 to-crimson-700",
    "from-brand-800 to-brand-600",
    "from-crimson-700 to-brand-800",
  ];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  return gradients[Math.abs(hash) % gradients.length];
}
