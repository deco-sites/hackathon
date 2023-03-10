export default function Cronograma() {
  return (
    <section class="text-[20px] pl-[240px] text-white mt-[120px] w-[990px]">
        <h2 class="text-[54px] font-bold uppercase mb-6">
            <div class="w-[40px] h-[12px] bg-white"></div>
            <div class="text-green">Regras do jogo</div>
        </h2>
        <div class="flex flex-col gap-16">
            <div class="">
                <h3 class="uppercase font-bold text-[34px] mb-6">1. Premiação por entrega</h3>
                <div class="">
                    <p>Serão selecionadas e premiadas todas as PoCs que entregarem a PoC pronta e passarem pelos critérios de aprovação.</p>
                    <p>Prêmio: R$ 500 / PoC</p>
                    <p>Critérios de aprovação:</p>
                    <ol class="flex flex-col gap-5 list-decimal list-outside pl-5">
                        <li>
                            Páginas<br/>
                            Páginas de Home, Product listing page (PLP) e Product detail page (PDP) funcionais. 
                        </li>
                        <li>
                            Performance<br/>
                            O score do Lighthouse mobile das 3 páginas com PageSpeed acima de 90 no mobile. 
                        </li>
                        <li>
                            Identidade visual<br/>
                            O site criado deve ter a logo, favicon, cores e tipografia fiéis ao site original.
                        </li>
                    </ol>
                </div>
            </div>
            <div class="">
                <h3 class="uppercase font-bold text-[34px] mb-6">2. Seleção das Finalistas</h3>
                <div class="">
                    <p>Será selecionada a melhor PoC de cada grupo de mentoria.</p>
                    <p>Avaliadores: mentor(a) + 1 convidado(a) especialista</p>
                    <p>Critérios de avaliação:</p>
                    <ol class="flex flex-col gap-5 list-decimal list-outside pl-5">
                        <li>
                            Performance<br/>
                            O score do Lighthouse mobile das páginas Home, Product listing page (PLP) e Product detail page (PDP) com maior valor.
                        </li>
                        <li>
                            Fidelidade visual<br/>
                            Conteúdo o mais próximo do site original
                        </li>
                        <li>
                            "Editabilidade" das sections<br/>
                            Usuários devem ser capazes de alterar as sections através da UI, definindo valores para suas propriedades.
                        </li>
                        <li>
                            Melhorias na experiência<br/>
                            Propostas de melhoria na experiência da loja atual
                        </li>
                    </ol>
                </div>
            </div>
            <div class="">
                <h3 class="uppercase font-bold text-[34px] mb-6">3. Premiação final</h3>
                <div class="">
                    <p>Será vencedora da Hackathon a PoC com maior média na avaliação.</p>
                    <p>Prêmio: R$ 2.500</p>
                    <p>Avaliadores: 5 convidados(a) especialistas</p>
                    <p>Critérios de avaliação:</p>
                    <ol class="flex flex-col gap-2 list-decimal list-outside pl-5">
                        <li>Performance: peso 3</li>
                        <li>Fidelidade: peso 3</li>
                        <li>"Editabilidade" das sections - peso 2</li>
                        <li>Melhorias na experiência - peso 1</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
  );
}
