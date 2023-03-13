export default function Guides() {
  return (
    <section class="flex justify-start text-[20px] mt-[60px] md:mt-[120px] relative md:max-w-[1800px] mx-auto">
      <div class="bg-white text-black md:rounded-tr-full md:rounded-br-full md:w-[1035px] px-[20px] py-[40px] md:p-[60px]">
        <h2 class="text-[38px] md:text-[54px] font-bold uppercase mb-6">
          <div class="w-[40px] h-[12px] bg-green"></div>
          Guides
        </h2>
        <ul class="flex flex-col gap-2 list-disc list-outside pl-5">
          <li>
            <a href="https://www.deco.cx/docs/pt/guides/101" target="_blank">
              Criano um site Live
            </a>
          </li>
          <li>
            <a
              href="https://www.deco.cx/docs/pt/concepts/section"
              target="_blank"
            >
              Conceitos: Section
            </a>
          </li>
          <li>
            <a
              href="https://github.com/deco-cx/live/blob/70806da879cfad860a3a2563c0150f9bafe1bd74/README_pt.md "
              target="_blank"
            >
              Carregamento de dados no Live
            </a>
          </li>
          <li>
            <a
              href="https://www.deco.cx/docs/pt/performance/images"
              target="_blank"
            >
              Performance: Imagens
            </a>
          </li>
          <li>
            <a
              href="https://www.deco.cx/docs/pt/performance/svg-sprites"
              target="_blank"
            >
              Performance: SVG Sprites
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PLGXfp7aORhWDTfCwZBXE1IK3wsudUZXUB"
              target="_blank"
            >
              [video] Curso Sites Customizáveis com Deno, Fresh, Twind e Live
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
