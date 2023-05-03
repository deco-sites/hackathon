export interface Column {
    title: string,
    /** @format textarea */
    text: string,
}

export interface Props {
    title: string;
    titlePadding?: string;
    /** @format textarea */
    text: string;
    columns?: Array<Column>
}

export default function TextSection({
    title,
    titlePadding = "80px",
    text,
    columns,
  }: Props) {
  return (
    <div class="font-mono mb-[132px] text-white">
        <span class="underline"></span>
        <div class="h-[60px] md:h-[80px] bg-accent flex items-center w-full mb-[52px]">
            <div class={`ml-[40px] md:ml-[80px] lg:ml-[${titlePadding}] bg-primary text-accent text-3xl md:text-[48px] leading-[1] px-8 pt-5 pb-6`}>{title}</div>
        </div>
        <div class="flex flex-col container mx-auto px-5 md:px-0 gap-[52px] md:text-xl leading-[1.5] mb-[52px]" dangerouslySetInnerHTML={{ __html: text }}></div>
        {
            columns && columns.length > 0 && (
                <div class="container mx-auto px-5 md:px-0 flex flex-col lg:flex-row gap-[84px]">
                    {
                        columns.map(col => {
                            return (
                                <div class="flex-auto flex flex-col gap-7" style="flex-basis: 0">
                                    <div class="text-2xl md:text-3xl leading-[1.3]" dangerouslySetInnerHTML={{ __html: col.title }}></div>
                                    <div class="md:text-xl leading-[1.5]" dangerouslySetInnerHTML={{ __html: col.text }}></div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    </div>
  );
}
