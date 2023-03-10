// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { context } from "$live/live.ts";
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/[...catchall].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/_middleware.ts";
import * as $3 from "./routes/api/[...catchall].tsx";
import * as $4 from "./routes/index.tsx";
import * as $5 from "./routes/inspect-vscode.ts";
import * as $$0 from "./islands/AddToCartButton.tsx";
import * as $$1 from "./islands/HeaderButton.tsx";
import * as $$2 from "./islands/HeaderModals.tsx";
import * as $$3 from "./islands/LiveControls.tsx";
import * as $$4 from "./islands/SearchControls.tsx";
import * as $$$0 from "./sections/Cronograma.tsx";
import * as $$$1 from "./sections/Faq.tsx";
import * as $$$2 from "./sections/Footer.tsx";
import * as $$$3 from "./sections/Guides.tsx";
import * as $$$4 from "./sections/Header.tsx";
import * as $$$5 from "./sections/Regras.tsx";
import * as $$$6 from "./sections/Setup.tsx";
import * as $$$7 from "deco-sites/std/sections/SEO.tsx";
import * as $$$8 from "deco-sites/std/sections/SEOPDP.tsx";
import * as $$$9 from "deco-sites/std/sections/SEOPLP.tsx";
import * as $$$10 from "deco-sites/std/sections/configOCC.global.tsx";
import * as $$$11 from "deco-sites/std/sections/configShopify.global.tsx";
import * as $$$12 from "deco-sites/std/sections/configVTEX.global.tsx";
import * as $$$$0 from "$live/functions/EffectSelectPage.ts";
import * as $$$$1 from "$live/functions/MatchDate.ts";
import * as $$$$2 from "$live/functions/MatchEnvironment.ts";
import * as $$$$3 from "$live/functions/MatchRandom.ts";
import * as $$$$4 from "$live/functions/MatchSite.ts";
import * as $$$$5 from "$live/functions/MatchUserAgent.ts";
import * as $$$$6 from "deco-sites/std/functions/occProductDetailsPage.ts";
import * as $$$$7 from "deco-sites/std/functions/shopifyProductDetailsPage.ts";
import * as $$$$8 from "deco-sites/std/functions/shopifyProductList.ts";
import * as $$$$9 from "deco-sites/std/functions/shopifyProductListingPage.ts";
import * as $$$$10 from "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts";
import * as $$$$11 from "deco-sites/std/functions/vtexLegacyProductList.ts";
import * as $$$$12 from "deco-sites/std/functions/vtexLegacyProductListingPage.ts";
import * as $$$$13 from "deco-sites/std/functions/vtexProductDetailsPage.ts";
import * as $$$$14 from "deco-sites/std/functions/vtexProductList.ts";
import * as $$$$15 from "deco-sites/std/functions/vtexProductListingPage.ts";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/_middleware.ts": $2,
    "./routes/api/[...catchall].tsx": $3,
    "./routes/index.tsx": $4,
    "./routes/inspect-vscode.ts": $5,
  },
  islands: {
    "./islands/AddToCartButton.tsx": $$0,
    "./islands/HeaderButton.tsx": $$1,
    "./islands/HeaderModals.tsx": $$2,
    "./islands/LiveControls.tsx": $$3,
    "./islands/SearchControls.tsx": $$4,
  },
  sections: {
    "./sections/Cronograma.tsx": $$$0,
    "./sections/Faq.tsx": $$$1,
    "./sections/Footer.tsx": $$$2,
    "./sections/Guides.tsx": $$$3,
    "./sections/Header.tsx": $$$4,
    "./sections/Regras.tsx": $$$5,
    "./sections/Setup.tsx": $$$6,
    "deco-sites/std/sections/SEO.tsx": $$$7,
    "deco-sites/std/sections/SEOPDP.tsx": $$$8,
    "deco-sites/std/sections/SEOPLP.tsx": $$$9,
    "deco-sites/std/sections/configOCC.global.tsx": $$$10,
    "deco-sites/std/sections/configShopify.global.tsx": $$$11,
    "deco-sites/std/sections/configVTEX.global.tsx": $$$12,
  },
  functions: {
    "$live/functions/EffectSelectPage.ts": $$$$0,
    "$live/functions/MatchDate.ts": $$$$1,
    "$live/functions/MatchEnvironment.ts": $$$$2,
    "$live/functions/MatchRandom.ts": $$$$3,
    "$live/functions/MatchSite.ts": $$$$4,
    "$live/functions/MatchUserAgent.ts": $$$$5,
    "deco-sites/std/functions/occProductDetailsPage.ts": $$$$6,
    "deco-sites/std/functions/shopifyProductDetailsPage.ts": $$$$7,
    "deco-sites/std/functions/shopifyProductList.ts": $$$$8,
    "deco-sites/std/functions/shopifyProductListingPage.ts": $$$$9,
    "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts": $$$$10,
    "deco-sites/std/functions/vtexLegacyProductList.ts": $$$$11,
    "deco-sites/std/functions/vtexLegacyProductListingPage.ts": $$$$12,
    "deco-sites/std/functions/vtexProductDetailsPage.ts": $$$$13,
    "deco-sites/std/functions/vtexProductList.ts": $$$$14,
    "deco-sites/std/functions/vtexProductListingPage.ts": $$$$15,
  },
  schemas: {
    "./sections/Cronograma.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/Faq.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/Footer.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/Guides.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/Header.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/Regras.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/Setup.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "$live/functions/EffectSelectPage.ts": {
      "inputSchema": {
        "title": " Effect Select Page",
        "type": "object",
        "properties": {
          "pageIds": {
            "type": "array",
            "items": {
              "type": "number",
            },
            "title": "Page Ids",
          },
        },
        "required": [
          "pageIds",
        ],
      },
      "outputSchema": null,
    },
    "$live/functions/MatchDate.ts": {
      "inputSchema": {
        "title": " Match Date",
        "type": "object",
        "properties": {
          "start": {
            "type": [
              "string",
              "null",
            ],
            "title": "Start",
            "format": "date-time",
          },
          "end": {
            "type": [
              "string",
              "null",
            ],
            "title": "End",
            "format": "date-time",
          },
          "session": {
            "type": "boolean",
            "title": "Session",
          },
        },
        "required": [
          "session",
        ],
      },
      "outputSchema": null,
    },
    "$live/functions/MatchEnvironment.ts": {
      "inputSchema": {
        "title": " Match Environment",
        "type": "object",
        "properties": {
          "environment": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "production",
              },
              {
                "type": "string",
                "const": "development",
              },
            ],
            "title": "Environment",
          },
        },
        "required": [
          "environment",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "c995d72dc372b1b50bf9f70943e37fc94e1ccac9",
          },
        },
        "additionalProperties": true,
      },
    },
    "$live/functions/MatchRandom.ts": {
      "inputSchema": {
        "title": " Match Random",
        "type": "object",
        "properties": {
          "traffic": {
            "type": "number",
            "title": "Traffic",
          },
          "session": {
            "type": "boolean",
            "title": "Session",
          },
        },
        "required": [
          "traffic",
          "session",
        ],
      },
      "outputSchema": null,
    },
    "$live/functions/MatchSite.ts": {
      "inputSchema": {
        "title": " Match Site",
        "type": "object",
        "properties": {
          "siteId": {
            "type": "number",
            "title": "Site Id",
          },
        },
        "required": [
          "siteId",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "c995d72dc372b1b50bf9f70943e37fc94e1ccac9",
          },
        },
        "additionalProperties": true,
      },
    },
    "$live/functions/MatchUserAgent.ts": {
      "inputSchema": {
        "title": " Match User Agent",
        "type": "object",
        "properties": {
          "includes": {
            "type": [
              "string",
              "null",
            ],
            "title": "Includes",
          },
          "match": {
            "type": [
              "string",
              "null",
            ],
            "title": "Match",
          },
        },
        "required": [],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "c995d72dc372b1b50bf9f70943e37fc94e1ccac9",
          },
        },
        "additionalProperties": true,
      },
    },
    "deco-sites/std/sections/SEO.tsx": {
      "inputSchema": {
        "title": " S E O",
        "type": "object",
        "properties": {
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description",
          },
          "url": {
            "type": [
              "string",
              "null",
            ],
            "title": "Url",
          },
          "imageUrl": {
            "type": [
              "string",
              "null",
            ],
            "title": "Image Url",
          },
          "themeColor": {
            "type": [
              "string",
              "null",
            ],
            "title": "Theme Color",
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "deco-sites/std/sections/SEOPDP.tsx": {
      "inputSchema": {
        "title": " S E O P D P",
        "type": "object",
        "properties": {
          "page": {
            "$id": "78c64adae4b16df19c6019918cf3380bc0a3ea85",
            "format": "live-function",
            "type": "string",
            "title": "Page",
          },
          "titleTemplate": {
            "type": "string",
            "title": "Title template",
            "description":
              "add a %s whenever you want it to be replaced with the product name",
            "default": "%s | Fashion Store",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Meta tag description",
            "description":
              "If not set, the product description will be used instead",
          },
          "themeColor": {
            "type": [
              "string",
              "null",
            ],
            "title": "Theme Color",
          },
        },
        "required": [
          "page",
          "titleTemplate",
        ],
      },
      "outputSchema": null,
    },
    "deco-sites/std/sections/SEOPLP.tsx": {
      "inputSchema": {
        "title": " S E O P L P",
        "type": "object",
        "properties": {
          "page": {
            "$id": "05ecb684cf4ee00e98171fdc45227df637e4804e",
            "format": "live-function",
            "type": "string",
            "title": "Page",
          },
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description",
          },
          "url": {
            "type": [
              "string",
              "null",
            ],
            "title": "Url",
          },
          "imageUrl": {
            "type": [
              "string",
              "null",
            ],
            "title": "Image Url",
          },
          "themeColor": {
            "type": [
              "string",
              "null",
            ],
            "title": "Theme Color",
          },
        },
        "required": [
          "page",
        ],
      },
      "outputSchema": null,
    },
    "deco-sites/std/sections/configOCC.global.tsx": {
      "inputSchema": {
        "title": "Config O C C.global",
        "type": "object",
        "properties": {
          "baseUrl": {
            "type": "string",
            "title": "Base Url",
          },
          "nrpp": {
            "type": [
              "string",
              "null",
            ],
            "title": "Nrpp",
          },
        },
        "required": [
          "baseUrl",
        ],
      },
      "outputSchema": null,
    },
    "deco-sites/std/sections/configShopify.global.tsx": {
      "inputSchema": {
        "title": "Config Shopify.global",
        "type": "object",
        "properties": {
          "storeName": {
            "type": "string",
            "title": "Store Name",
            "description": "Shopify store name.",
          },
          "storefrontAccessToken": {
            "type": "string",
            "title": "Storefront Access Token",
            "description": "Shopify storefront access token.",
          },
        },
        "required": [
          "storeName",
          "storefrontAccessToken",
        ],
      },
      "outputSchema": null,
    },
    "deco-sites/std/sections/configVTEX.global.tsx": {
      "inputSchema": {
        "title": "Config V T E X.global",
        "type": "object",
        "properties": {
          "account": {
            "type": "string",
            "title": "Account",
            "description":
              "VTEX Account name. For more info, read here: https://help.vtex.com/en/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC.",
          },
          "defaultLocale": {
            "type": "string",
            "title": "Default Locale",
            "description": "Locale used for VTEX Intelligent Search client.",
          },
          "defaultPriceCurrency": {
            "type": "string",
            "title": "Default Price Currency",
            "description": "Default price currency.",
            "default": "USD",
          },
          "defaultSalesChannel": {
            "type": "string",
            "title": "Default Sales Channel",
            "description":
              "VTEX sales channel. This will be the default sales channel your site. For more info, read here: https://help.vtex.com/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV",
          },
          "defaultRegionId": {
            "type": [
              "string",
              "null",
            ],
            "title": "Default Region Id",
          },
          "defaultHideUnnavailableItems": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Default Hide Unnavailable Items",
          },
        },
        "required": [
          "account",
          "defaultLocale",
          "defaultPriceCurrency",
          "defaultSalesChannel",
        ],
      },
      "outputSchema": null,
    },
    "deco-sites/std/functions/occProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Occ Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "78c64adae4b16df19c6019918cf3380bc0a3ea85",
          },
        },
        "additionalProperties": true,
      },
    },
    "deco-sites/std/functions/shopifyProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Shopify Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "78c64adae4b16df19c6019918cf3380bc0a3ea85",
          },
        },
        "additionalProperties": true,
      },
    },
    "deco-sites/std/functions/shopifyProductList.ts": {
      "inputSchema": {
        "title": "Shopify Product List",
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "title": "Query",
            "description": "search term to use on search",
          },
          "count": {
            "type": "number",
            "title": "Count",
            "description": "total number of items to display",
          },
        },
        "required": [
          "query",
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "4745e1202484ea61e4cdd1a83ec4c56d9e4dce67",
          },
        },
        "additionalProperties": true,
      },
    },
    "deco-sites/std/functions/shopifyProductListingPage.ts": {
      "inputSchema": {
        "title": "Shopify Product Listing Page",
        "type": "object",
        "properties": {
          "query": {
            "type": [
              "string",
              "null",
            ],
            "title": "Query",
            "description": "overides the query term",
          },
          "count": {
            "type": "number",
            "title": "Items per page",
            "description": "number of products per page to display",
          },
        },
        "required": [
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "05ecb684cf4ee00e98171fdc45227df637e4804e",
          },
        },
        "additionalProperties": true,
      },
    },
    "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Vtex Legacy Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "78c64adae4b16df19c6019918cf3380bc0a3ea85",
          },
        },
        "additionalProperties": true,
      },
    },
    "deco-sites/std/functions/vtexLegacyProductList.ts": {
      "inputSchema": {
        "title": "Vtex Legacy Product List",
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "title": "Query",
            "description": "query to use on search",
          },
          "count": {
            "type": "number",
            "title": "Count",
            "description": "total number of items to display",
          },
          "sort": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "",
              },
              {
                "type": "string",
                "const": "price:desc",
              },
              {
                "type": "string",
                "const": "price:asc",
              },
              {
                "type": "string",
                "const": "orders:desc",
              },
              {
                "type": "string",
                "const": "name:desc",
              },
              {
                "type": "string",
                "const": "name:asc",
              },
              {
                "type": "string",
                "const": "release:desc",
              },
              {
                "type": "string",
                "const": "discount:desc",
              },
            ],
            "title": "Sort",
            "description": "search sort parameter",
          },
        },
        "required": [
          "query",
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "4745e1202484ea61e4cdd1a83ec4c56d9e4dce67",
          },
        },
        "additionalProperties": true,
      },
    },
    "deco-sites/std/functions/vtexLegacyProductListingPage.ts": {
      "inputSchema": {
        "title": "Vtex Legacy Product Listing Page",
        "type": "object",
        "properties": {
          "term": {
            "type": [
              "string",
              "null",
            ],
            "title": "Term",
            "description": "overides the query term",
          },
          "count": {
            "type": "number",
            "title": "Items per page",
            "description": "number of products per page to display",
          },
          "ft": {
            "type": [
              "string",
              "null",
            ],
            "title": "Ft",
            "description": "FullText term",
          },
          "fq": {
            "type": [
              "string",
              "null",
            ],
            "title": "Fq",
          },
          "map": {
            "type": [
              "string",
              "null",
            ],
            "title": "Map",
            "description": "map param",
          },
        },
        "required": [
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "05ecb684cf4ee00e98171fdc45227df637e4804e",
          },
        },
        "additionalProperties": true,
      },
    },
    "deco-sites/std/functions/vtexProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Vtex Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "78c64adae4b16df19c6019918cf3380bc0a3ea85",
          },
        },
        "additionalProperties": true,
      },
    },
    "deco-sites/std/functions/vtexProductList.ts": {
      "inputSchema": {
        "title": "Vtex Product List",
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "title": "Query",
            "description": "query to use on search",
          },
          "count": {
            "type": "number",
            "title": "Count",
            "description": "total number of items to display",
          },
          "sort": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "",
              },
              {
                "type": "string",
                "const": "price:desc",
              },
              {
                "type": "string",
                "const": "price:asc",
              },
              {
                "type": "string",
                "const": "orders:desc",
              },
              {
                "type": "string",
                "const": "name:desc",
              },
              {
                "type": "string",
                "const": "name:asc",
              },
              {
                "type": "string",
                "const": "release:desc",
              },
              {
                "type": "string",
                "const": "discount:desc",
              },
            ],
            "title": "Sort",
            "description": "search sort parameter",
          },
        },
        "required": [
          "query",
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "4745e1202484ea61e4cdd1a83ec4c56d9e4dce67",
          },
        },
        "additionalProperties": true,
      },
    },
    "deco-sites/std/functions/vtexProductListingPage.ts": {
      "inputSchema": {
        "title": "Vtex Product Listing Page",
        "type": "object",
        "properties": {
          "query": {
            "type": [
              "string",
              "null",
            ],
            "title": "Query",
            "description": "overides the query term",
          },
          "count": {
            "type": "number",
            "title": "Items per page",
            "description": "number of products per page to display",
          },
        },
        "required": [
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "05ecb684cf4ee00e98171fdc45227df637e4804e",
          },
        },
        "additionalProperties": true,
      },
    },
  },
  baseUrl: import.meta.url,
  config,
};

// live — this exposes the manifest so the live server can render components dynamically
context.manifest = manifest;

export default manifest;
