import { propertyHasId } from "https://denopkg.com/deco-cx/live@0.8.1/utils/page.ts";
import { ComponentChildren } from "preact";

export interface Props {
  summary: string[];
  children: ComponentChildren;
}

function Faq({ summary, children }: Props) {
  return (
    <details>
        <summary class="uppercase text-[22px] cursor-pointer">
            <span class="pl-2">{summary}</span>
        </summary>
        <div class="pl-7 mt-2">
            {children}
        </div>
    </details>
  );
}

export default Faq;