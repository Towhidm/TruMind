export const CATEGORY_COVERS: Record<string, string> = {
  life: "/categories/life.svg",
  university: "/categories/university.svg",
  adventure: "/categories/adventure.svg",
  mystery: "/categories/mystery.svg",
  fantasy: "/categories/fantasy.svg",
  family: "/categories/family.svg",
  healing: "/categories/healing.svg",
  dreams: "/categories/dreams.svg",
};

export function getCategoryCover(categorySlug: string): string {
  return CATEGORY_COVERS[categorySlug] ?? CATEGORY_COVERS.life;
}
