import { asset } from "@/lib/asset";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
};

/** Static-export safe image: always prefixes NEXT_PUBLIC_BASE_PATH. */
export function SmartImg({
  src,
  alt,
  className = "",
  priority,
  fill,
}: Props) {
  const resolved = asset(src);
  if (fill) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={resolved}
        alt={alt}
        className={`absolute inset-0 h-full w-full ${className}`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : undefined}
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolved}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
    />
  );
}
