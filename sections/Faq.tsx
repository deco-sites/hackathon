import FaqDetail from "$store/components/FaqDetail.tsx";

export default function Cronograma() {
  return (
    <section class="text-[20px] text-white mt-[60px] md:mt-[120px] relative md:max-w-[1800px] mx-auto">
      <div class="md:ml-[400px] md:pr-[300px] px-[20px] md:px-[0]">
        <h2 class="text-[38px] md:text-[54px] font-bold uppercase mb-6">
          <div class="w-[40px] h-[12px] bg-white"></div>
          <div class="text-green">FAQ</div>
        </h2>
        <div class="flex flex-col gap-8">
          <FaqDetail summary="Onde e com quem tiro dúvidas durante a hackathon?">
            Se você tiver dúvidas durante o evento, fique à vontade para entrar
            em nosso discord e conversar com a gente no canal #deco-hackathon.
            Você também pode tirar dúvidas com seu mentor durante os horários
            estipulados.
          </FaqDetail>
          <FaqDetail summary="Como vai funcionar a mentoria?">
            Cada time será mentorado por uma pessoa especialista da área de
            e-commerce, que auxiliará nas decisões do projeto e dará suporte
            tirando dúvidas. Serão 3 encontros de mentoria: um no primeiro dia,
            após as atividades de abertura do evento e mais um em cada dia
            seguinte, com horário a definir com o time.
          </FaqDetail>
          <FaqDetail summary="Preciso estar online o dia inteiro?">
            Não. Cada time pode se organizar da maneira que achar mais
            conveniente. É importante atentar e estar presente online apenas no
            horário combinado para a mentoria e nos eventos marcados no
            cronograma.
          </FaqDetail>
          <FaqDetail summary="Como será a apresentação final?">
            <p>
              Cada time selecionado para a etapa final terá até 5 minutos para
              apresentar sua PoC e fazer uma demo das páginas desenvolvidas. É
              importante mostrar na apresentação:
            </p>
            <ul class="flex flex-col gap-2 list-disc list-outside pl-10 mb-4">
              <li>
                As 3 principais páginas desenvolvidas (home, product listing
                page e product description page)
              </li>
              <li>O score do lighthouse</li>
              <li>A configuração de pelo menos umas das sections criadas</li>
              <li>Possíveis melhorias de experiência</li>
            </ul>
            <p>
              Não é necessário preparar apresentação com slides. Infelizmente
              não teremos tempo para perguntas e dúvidas.
            </p>
          </FaqDetail>
          <FaqDetail summary="Como será a distribuição das lojas entre os times?">
            Vamos disponibilizar 5 opções de lojas em produção para cada time
            escolher a sua preferida.
          </FaqDetail>
          <FaqDetail summary="Existe limite de times para a primeira premiação?">
            Não. Todos os times que atenderem os critérios estipulados receberão
            o prêmio de R$500,00, porém apenas um time receberá o prêmio
            adicional de R$2.500,00.
          </FaqDetail>
          <FaqDetail summary="Como será feito o pagamento dos prêmios?">
            Estamos definindo detalhes burocráticos dos pagamentos.
          </FaqDetail>
          <FaqDetail summary="Posso continuar usando deco.cx depois da Hackathon?">
            Sim. Um dos principais objetivos da Hackathon é apresentar{" "}
            <a class="text-white" href="http://deco.cx/" target="_blank">
              deco.cx
            </a>{" "}
            para mais pessoas e estimulá-las a usar cada vez mais a ferramenta.
            Como uma startup muito jovem, estamos sempre buscando por feedbacks
            de usuários que nos ajudem a melhorar o produto.
          </FaqDetail>
        </div>
      </div>
    </section>
  );
}
