import type { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET() {
    const url =
      "https://us06web.zoom.us/j/89604943319?pwd=TzFxUEdLdDNLZUNBNWVVL3hUNkludz09";

    return new Response(`Redirecting to ${url}`, {
      status: 302,
      headers: {
        Location: url,
      },
    });
  },
};
