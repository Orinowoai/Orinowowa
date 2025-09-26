export default function getImg(src?: string, fallback?: string) {
  return src && src.length > 5
    ? src
    : fallback || "https://placehold.co/400x300?text=Image";
}
