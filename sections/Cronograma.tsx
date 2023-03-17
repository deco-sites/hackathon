export interface Item {
  title?: string;
  content: string;
}

export interface Props {
  items: Item[];
}

function Cronograma(
  { items }: Props,
) {
  return (
    <section class="text-[20px] px-[20px] md:px-[80px] text-white mt-[60px] md:mt-[120px] relative md:max-w-[1800px] mx-auto">
      <h2 class="text-[38px] md:text-[54px] font-bold uppercase mb-6">
        <div class="w-[40px] h-[12px] bg-green"></div>
        <div class="text-white">Programação</div>
      </h2>
      <div class="md:w-2/3">
        <h3 class="uppercase font-bold text-[34px] mb-6 hidden">Eventos</h3>
        <div class="flex flex-col gap-8">
          {items.map(({ title, content }) => (
            <div>
              <strong>{title}</strong>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cronograma;
