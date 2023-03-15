export default function Cronograma() {
  return (
    <section class="text-[20px] px-[20px] md:pl-[240px] text-white mt-[60px] md:mt-[120px] relative md:max-w-[1800px] mx-auto">
      <div class="md:w-[990px]">
        <h2 class="text-[38px] md:text-[54px] font-bold uppercase mb-6">
          <div class="w-[40px] h-[12px] bg-white"></div>
          <div class="text-green leading-[44px] mt-2 md:leading-normal md:mt-0">
            Regras do jogo
          </div>
        </h2>
        <div class="flex flex-col gap-8 md:gap-16">
          <div>
            <h3 class="uppercase font-bold text-[24px] md:text-[34px] mb-6">
              1. Distribuição das lojas entre os times
            </h3>
            <div>
              <p>
                Vamos disponibilizar algumas opções de lojas em produção e cada
                time escolherá a sua preferida para trabalhar em uma PoC. A
                distribuição ocorrerá no início da Hackathon.
              </p>
            </div>
          </div>
          <div class="">
            <h3 class="uppercase font-bold text-[24px] md:text-[34px] mb-6">
              2. Premiação por entrega
            </h3>
            <div class="">
              <p>
                <strong>🏆 Prêmio: R$ 500 / PoC</strong>
              </p>
              <p>
                Serão selecionadas e premiadas todas as equipes que entregarem a
                PoC pronta de acordo com os seguintes critérios:
              </p>
              <ol class="flex flex-col gap-5 list-decimal list-outside pl-8">
                <li>
                  <strong>Páginas funcionais</strong>
                  <br />
                  Páginas de Home, Product listing page (PLP) e Product detail
                  page (PDP) funcionando com dados reais.
                </li>
                <li>
                  <strong>Identidade visual</strong>
                  <br />
                  O site criado deve ter elementos visuais - como a logo,
                  favicon, cores e tipografia, fiéis ao site original.
                </li>
                <li>
                  <strong>Performance</strong>
                  <br />
                  O score de performance do PageSpeed das 3 páginas construídas
                  deve ser acima de 90 no mobile.
                </li>
                <li>
                  <strong>"Editabilidade" das sections</strong>
                  <br />
                  Usuários devem ser capazes de alterar as sections através da
                  UI da deco, definindo valores para suas propriedades.
                </li>
              </ol>
            </div>
          </div>
          <div class="">
            <h3 class="uppercase font-bold text-[24px] md:text-[34px] mb-6">
              3. Seleção das PoCs Finalistas
            </h3>
            <div class="">
              <p>
                Cada mentor(a) com a ajuda de um convidado(a) especialista irá
                selecionar a melhor PoC do grupo que estiver mentorando.
              </p>
              <p>Nessa seleção será levado em consideração:</p>
              <ol class="flex flex-col gap-5 list-decimal list-outside pl-8">
                <li>
                  <strong>Excelência nos critérios da etapa anterior</strong>
                </li>
                <li>
                  <strong>
                    Propostas de melhoria na experiência da loja atual
                  </strong>
                  <br />
                  Os times podem criar novas páginas, sections e animações que
                  justifiquem algum ganho na experiência de compra do cliente
                  final.
                </li>
              </ol>
            </div>
          </div>
          <div class="">
            <h3 class="uppercase font-bold text-[24px] md:text-[34px] mb-6">
              4. Apresentação das PoCs
            </h3>
            <div class="">
              <p>
                Cada time selecionado para a etapa final terá até 5 minutos para
                apresentar sua PoC e fazer uma demo das páginas desenvolvidas. É
                importante mostrar na apresentação:
              </p>
              <ul class="flex flex-col gap-2 list-disc list-outside pl-8 mb-5">
                <li>
                  As 3 principais páginas desenvolvidas (home, product listing
                  page e product detail page)
                </li>
                <li>A configuração de pelo menos umas das sections criadas</li>
                <li>Possíveis melhorias de experiência</li>
                <li>O score de performance do PageSpeed mobile</li>
              </ul>
              <p>
                Não é necessário preparar apresentação com slides. Infelizmente
                não teremos tempo para perguntas e dúvidas.
              </p>
            </div>
          </div>
          <div class="">
            <h3 class="uppercase font-bold text-[24px] md:text-[34px] mb-6">
              5. Premiação final
            </h3>
            <div class="">
              <p>
                <strong>🏆 Prêmio: R$ 2.500</strong>
              </p>
              <p>
                As PoCs apresentadas serão analisadas por uma grupo de
                especialistas e receberão notas individuais para cada critério.
                A PoC com a melhor média receberá o prêmio final.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
