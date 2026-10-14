import { cacheLife } from "next/cache";

/** Current year, prerendered and refreshed daily. */
export default async function Year() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
