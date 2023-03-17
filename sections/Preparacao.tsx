export default function Setup() {
  return (
    <section class="flex justify-end text-[20px] relative md:max-w-[1800px] mx-auto">
      <div class="bg-white text-black md:rounded-tl-md md:rounded-bl-md md:w-[1035px] px-[20px] py-[40px] md:p-[60px]">
        <h2 class="text-[38px] md:text-[54px] font-bold uppercase mb-6">
          <div class="w-[40px] h-[12px] bg-green"></div>
          Preparação
        </h2>
        <p>
          Ainda estamos organizando toda a infraestrutura para os times
          trabalharem em seus respectivos sites. Enquanto isso, sugerimos que
          você deixe sua máquina pronta para desenvolver e faça um teste rodando
          nossa loja{" "}
          <a href="https://github.com/deco-sites/fashion" target="_blank">
            fashion
          </a>{" "}
          localmente:
        </p>
        <ol class="flex flex-col gap-6 list-decimal list-outside pl-8 my-6">
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
            <p class="m-0">
              Se você usa o VS Code, recomendamos que instale{"  "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno"
                target="_blank"
              >
                a extensão que dá suporte ao Deno
              </a>.
            </p>
          </li>
          <li>
            <p>
              Com o Deno instalado, clone o repositório da loja{" "}
              <a href="https://github.com/deco-sites/fashion" target="_blank">
                Fashion
              </a>. Para isso, abra seu terminal e digite:
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
              Agora é só acessar{" "}
              <a href="http://localhost:8000/" target="_blank">
                http://localhost:8000/
              </a>{" "}
              e você deve ver a Fashion rodando na sua máquina.
            </p>
          </li>
        </ol>
        <p>
          Fique à vontade para vasculhar e fazer alterações no código! No dia da
          Hackathon você poderá também fazer alterações no conteúdo. Aproveita
          pra dar uma olhada nos{" "}
          <a href="#guides">guias que preparamos pra você</a>!
        </p>
      </div>
    </section>
  );
}
