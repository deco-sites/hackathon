export default function Setup() {
  return (
    <section class="flex justify-end text-[20px] relative md:max-w-[1800px] mx-auto">
      <div class="bg-white text-black md:rounded-tl-md md:rounded-bl-md md:w-[1035px] px-[20px] py-[40px] md:p-[60px]">
        <h2 class="text-[38px] md:text-[54px] font-bold uppercase mb-6">
          <div class="w-[40px] h-[12px] bg-green"></div>
          Setup
        </h2>
        <ol class="flex flex-col gap-6 list-decimal list-outside pl-8">
          <li>
            <p class="m-0">
              Caso ainda não tenha o Deno instalado na sua máquina,{" "}
              <a
                href="https://deno.land/manual@v1.31.2/getting_started/installation"
                target="_blank"
              >
                siga os passos de instalação
              </a>.
            </p>
          </li>
          <li>
            <p>
              Com o Deno instalado, clone o repositório do seu site. Para isso,
              abra seu terminal e digite:
            </p>
            <div class="rounded-sm bg-code text-sm px-5 py-3 flex justify-between">
              <code class="">
                $ git clone git@github.com:deco-sites/fashion.git
              </code>
            </div>
          </li>
          <li>
            <p>
              Com o site clonado na sua máquina, você já poderá rodar o projeto
              digitando no seu terminal:
            </p>
            <div class="rounded-sm bg-code text-sm px-5 py-3 flex justify-between">
              <code class="">
                $ deno task start
              </code>
            </div>
          </li>
          <li>
            <p>
              Agora, é só acessar{" "}
              <a href="http://localhost:8000/" target="_blank">
                http://localhost:8000/
              </a>{" "}
              e você deve ver seu site com o template da loja fashion rodando na
              sua máquina.
            </p>
            <p>
              Para alterar o conteúdo, acesse o admin no{" "}
              <a href="https://admin.deco.site/" target="_blank">
                https://admin.deco.site/
              </a>{" "}
              e faça o login com Github.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
