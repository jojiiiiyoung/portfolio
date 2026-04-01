export function initAnalytics(): void {
  // Firebase analytics can be initialized here in production
}

export function trackSection(name: string): void {
  if (import.meta.env.PROD) {
    console.log(`[Analytics] Section viewed: ${name}`);
  }
}
