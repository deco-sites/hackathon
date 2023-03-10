export default function Cronograma() {
  return (
    <section class="text-[20px] px-[80px] text-white mt-[120px] ">
        <h2 class="text-[54px] font-bold uppercase mb-6">
            <div class="w-[40px] h-[12px] bg-green"></div>
            <div class="text-white">Cronograma</div>
        </h2>
        <div class="flex">
            <div class="flex-none w-1/2">
                <h3 class="uppercase font-bold text-[34px] mb-6">Eventos</h3>
                <div class="flex flex-col gap-4">
                    <div>
                        <strong>Sexta-feira, 17 de Março</strong><br/>
                        17:00h - Abertura do evento e apresentação das regras<br/>
                        17:15h - Apresentação da plataforma deco.cx<br/>
                        18:00h - Introdução às tecnologias que serão utilizadas<br/>
                        19:00h - Distribuição das salas de Discord e mentores
                    </div>
                    <div>
                        <strong>Sábado, 18 de Março</strong><br/>
                        11h - Dicas de performance I<br/>
                        16h - Dicas de performance II<br/>
                        17:30h - Palestra de Bert Belder, co-founder e CTO da Deno
                    </div>
                    <div>
                        <strong>Domingo, 19 de Março</strong><br/>
                        15h - Apresentação final das PoCs<br/>
                        19h - Divulgação do resultado final
                    </div>
                </div>
            </div>
            <div class="flex-auto">
                <h3 class="uppercase font-bold text-[34px] mb-6">Mentorias</h3>
                <div class="flex flex-col gap-4">
                    <div>
                        <strong>Sexta-feira, 17 de Março</strong><br/>
                        19:15h - Equipes 1, 6, 11, 16 e 21<br/>
                        19:45h - Equipes 2, 7, 12, 17 e 22<br/>
                        20:15h - Equipes 3, 8, 13, 18 e 23<br/>
                        20:45h - Equipes 4, 9, 14, 19 e 24<br/>
                        21:15h - Equipes 5, 10, 15, 20 e 25<br/>
                    </div>
                    <div>
                        <strong>Sábado, 18 de Março</strong><br/>
                        14h - Equipes 1, 6, 11, 16 e 21<br/>
                        14:30h - Equipes 2, 7, 12, 17 e 22<br/>
                        15h - Equipes 3, 8, 13, 18 e 23<br/>
                        15:30h - Equipes 4, 9, 14, 19 e 24<br/>
                        16h - Equipes 5, 10, 15, 20 e 25
                    </div>
                    <div>
                        <strong>Domingo, 19 de Março</strong><br/>
                        10h - Equipes 1, 6, 11, 16 e 21<br/>
                        10:30h - Equipes 2, 7, 12, 17 e 22<br/>
                        11h - Equipes 3, 8, 13, 18 e 23<br/>
                        111:30h - Equipes 4, 9, 14, 19 e 24<br/>
                        12h - Equipes 5, 10, 15, 20 e 25
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
