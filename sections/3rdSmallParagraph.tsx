export interface Props {
    title: string;
    /** @format textarea */
    text: string;
  }

export default function Paragraph({
    title,
    text,
  }: Props) {
  return (
    <div class="font-mono flex flex-col lg:flex-row container px-5 md:px-0 lg:max-w-[980px] mx-auto mb-[112px] lg:items-center gap-12">
        <div class="flex-none w-[280px] flex flex-col gap-3 text-accent">
            <div class="text-xl">&gt;_</div>
            <h2 class="font-bold md:font-normal text-3xl leading-[1.2]">{title}</h2>
        </div>
        <div class="flex-auto md:text-xl text-white leading-[1.5]" dangerouslySetInnerHTML={{ __html: text }}></div>
    </div>
  );
}
