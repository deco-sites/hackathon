export interface Guide {
  text: string;
  /**
   * @description Href to the article
   */
  link: string;
}

export interface Props {
  links: Guide[];
}

function Guides(
  { links }: Props,
) {
  return (
    <section class="flex justify-start text-[20px] mt-[60px] md:mt-[120px] relative md:max-w-[1800px] mx-auto">
      <div class="bg-white text-black md:rounded-tr-full md:rounded-br-full md:w-[1035px] px-[20px] py-[40px] md:p-[60px]">
        <h2 class="text-[38px] md:text-[54px] font-bold uppercase mb-6">
          <div class="w-[40px] h-[12px] bg-green"></div>
          Guides
        </h2>
        <ul class="flex flex-col gap-2 list-disc list-outside pl-5">
          {links.map(({ text, link }) => (
            <li>
              <a href={link} target="_blank">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Guides;
