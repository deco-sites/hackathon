export default function Cronograma() {
  return (
    <section class="text-[20px] px-[20px] md:px-[80px] text-white mt-[60px] md:mt-[120px] relative md:max-w-[1800px] mx-auto">
      <h2 class="text-[38px] md:text-[54px] font-bold uppercase mb-6">
        <div class="w-[40px] h-[12px] bg-green"></div>
        <div class="text-white">Cronograma</div>
      </h2>
      <div class="md:w-1/2">
        <h3 class="uppercase font-bold text-[34px] mb-6 hidden">Eventos</h3>
        <div class="flex flex-col gap-8">
          <div>
            <strong>Sexta-feira, 17 de Março</strong>
            <br />
            17h - Abertura do evento e apresentação das regras<br />
            17:15h - Apresentação da plataforma deco.cx<br />
            18h - Introdução às tecnologias que serão utilizadas<br />
            19h - Distribuição das salas de Discord e mentores
          </div>
          <div>
            <strong>Sábado, 18 de Março</strong>
            <br />
            11h - Dicas de performance I<br />
            16h - Dicas de performance II<br />
            17:30h - Palestra de Bert Belder, co-founder e CTO da Deno
          </div>
          <div>
            <strong>Domingo, 19 de Março</strong>
            <br />
            12h - Entrega das PoCs<br />
            13h - Premiação por entrega e divulgação das equipes
            finalistas<br />
            17h - Apresentação final das PoCs<br />
            19h - Premiação final
          </div>
        </div>
      </div>
    </section>
  );
}
