export default function Setup() {
  return (
    <section class="flex justify-end text-[20px]">
        <div class="bg-white text-black rounded-tl-md rounded-bl-md w-[1035px] p-[60px]">
            <h2 class="text-[54px] font-bold uppercase mb-6">
                <div class="w-[40px] h-[12px] bg-green"></div>
                Setup
            </h2>
            <ol class="flex flex-col gap-6 list-decimal list-outside pl-5">
                <li>
                    <p>Para começar, clone o repositório do seu site. Para isso, abra seu terminal e digite:</p>
                    <div class="rounded-sm bg-code text-sm px-5 py-3 flex justify-between">
                        <code class="">
                            $ git clone git@github.com:deco-sites/fashion.git
                        </code>
                    </div>
                </li>
                <li>
                    <p>Com o site clonado na sua máquina, você já poderá rodar o projeto digitando no seu terminal:</p>
                    <div class="rounded-sm bg-code text-sm px-5 py-3 flex justify-between">
                        <code class="">
                            $ deno task start
                        </code>
                    </div>
                </li>
                <li>
                    <p>Agora, é só acessar <a href="http://localhost:8000/" target="_blank">http://localhost:8000/</a> e você deve ver seu site com o template da loja fashion rodando na sua máquina.</p>
                    <p>Para alterar o conteúdo, acesse o admin no <a href="https://admin.deco.site/" target="_blank">https://admin.deco.site/</a> e faça o login com Github.</p>
                </li>
            </ol>
        </div>
    </section>
  );
}
