import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 565,
  site: "hackathon",
  domains: ["hackathon.deco.site"],
});