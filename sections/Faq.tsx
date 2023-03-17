import FaqDetail from "$store/components/FaqDetail.tsx";

export interface Item {
  question: string;
  answer: string;
}

export interface Props {
  items: Item[];
}

function Faq(
  { items }: Props,
) {
  return (
    <section class="text-[20px] text-white mt-[60px] md:mt-[120px] relative md:max-w-[1800px] mx-auto">
      <div class="md:ml-[400px] md:pr-[300px] px-[20px] md:px-[0]">
        <h2 class="text-[38px] md:text-[54px] font-bold uppercase mb-6">
          <div class="w-[40px] h-[12px] bg-white"></div>
          <div class="text-green">FAQ</div>
        </h2>
        <div class="flex flex-col gap-8">
          {items.map(({ question, answer }) => (
            <FaqDetail summary={question}>
              {answer}
            </FaqDetail>
          ))}
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
        </div>
      </div>
    </section>
  );
}

export default Faq;
