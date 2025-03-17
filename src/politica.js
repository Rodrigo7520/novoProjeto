import React from 'react';
import './politicaPrivacidade.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function PoliticaPrivacidade() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
    return (
      <header>
        <img 
          src="./imagem/imgRoroninha.png" 
          alt="Logo Ronroninha Cat Sitter" 
          style={{ width: '100px', height: 'auto' }} // Ajuste o tamanho conforme necessário
        />
        <h2>Ronroninha Cat Sitter</h2>
        <p>SERVIÇO OFERECIDO HÁ 10 ANOS EM PORTO ALEGRE</p>
      </header>
    );
}

// Componente Nav {menu de navegação}
function Nav() {
    return (
      <nav>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href=".sobreNos.js">Sobre nós</a></li>
          <li><a href="./contato.js">Contato</a></li>
          <li><a href="./src/cadastroUsusario.js">Entrar</a></li>
        </ul>
      </nav>
    );
}

function Main() {
  return (
    <main>
      <section>
        <h3>POLÍTICA DE PRIVACIDADE</h3>
        <p>
        Seus dados estão seguros conosco! Em hipótese alguma eles serão publicados, transmitidos a terceiros ou 
        comercializados. Todas as informações pessoais fornecidas por você, como seu nome, CPF, telefone,
        e-mail e endereço são utilizados apenas para envio do seu pedido e para que eventualmente possamos 
        comunicar novidades e promoções da nossa lojinha e você não perder nada!
        IMPORTANTE: Nós nunca mandaremos e-mails solicitando dados pessoais ou que você faça qualquer download, 
        clique em links ou execute arquivos, tá? Para sua segurança nunca compartilhe sua senha 
        com outras pessoas.
        </p>
      </section>

      <section>
        <h3>MÉTODOS DE PAGAMENTO</h3>
        <p>Trabalhamos com pagamento por cartão de crédito via pagseguro 
            (fique atento aos juros cobrados pela operadora para parcelar) ou pix. 
            Na loja física ou compras pelo instagram e whats você consegue parcelar (parcelas de R$100) 
            sem juros, pelo sistema de pagamento da Stone.
            <strong>Faça seu pedido pelo whats ou redes sociais e parcele sem juros!</strong> </p>
      </section>

      <section>
        <h3>ATENDIMENTO AO CLIENTE</h3>
        <p>Caso tenha alguma dúvida ou algum problema entre em contato conosco pelo <strong>e-mail ronroninha.catshop@gmail.</strong>
            com ou por mensagem de texto no  <strong>whatsapp (51)99965.3534.</strong>
            Responderemos assim que possível, dentro do <strong>horário de atendimento: terça a sábado das 9:30 às 18:30.</strong></p>
      </section>

      <section>
        <h3>POLÍTICA DE ENVIO</h3>
        <p>Nós trabalhamos com entregas pelo <strong>MOTOBOY</strong> nas cidades de Porto Alegre, Canoas e Esteio ou você 
            também pode retirar seu pedido sem custo na loja física: Rua Felipe Camarão, 335 - Bairro BomFim, Porto Alegre - RS. 
            O limite de peso para entregar por Motoboy é de 12kg. Se o pedido exceder esse peso,
            podemos alterar a forma de envio ou cobrar um valor extra (combinado antes do envio).
            ​O envio para outras cidades e estados do sul e sudeste do país acontece através dos <strong>CORREIOS.</strong>
            Nessa forma de envio também há limite de peso. Caso escolha o envio para outras cidades ou estados, 
            você receberá um e-mail após a postagem do seu pedido com o código de rastreio. 
            O prazo de envio é de responsabilidade dos Correios e o prazo para despachar pedidos é de até 3 dias úteis.
            Para acompanhar seu pedido você deve entrar no <strong>site dos Correios (www.correios.com.br)</strong> e colocar o seu código para consultar as atualizações.
            Se por algum motivo o seu pedido retornar por ausência do destinatário, endereço incorreto ou qualquer erro 
            que você possa cometer na hora de cadastrar seus dados, será cobrado integralmente o valor de reenvio.
            Preencha com atenção o seu endereço e garanta que tenha alguém para receber sua encomenda no endereço cadastrado!</p>
      </section>

      <section>
        <h3>POLÍTICA DE TROCA, DEVOLUÇÃO OU DESISTÊNCIA</h3>
        <p>Conferimos com muito cuidado <strong>duas vezes</strong> todos os nossos produtos 
            (quando recebemos as mercadorias dos nossos fornecedores e também na separação de cada pedido),
            para que nada seja enviado com defeito para você. Mas caso aconteça de você receber algum 
            produto com defeito de fabricação ou se arrependa da compra, nós vamos efetuar a
            TROCA ou DEVOLUÇÃO do seu dinheiro, de acordo com as normas e prazos descritos abaixo.</p>
      </section>

      <section>
        <h3>PRODUTO COM DEFEITO</h3>
        <p>Caso aconteça de você receber um produto com defeito de fabricação nos envie um e-mail com o assunto <strong>PRODUTO COM DEFEITO</strong> e o número do seu pedido. No corpo do e-mail descreva o problema e envie em anexo as fotos do defeito. Você tem <strong>até sete dias corridos</strong> para fazer esse comunicado a partir da data de recebimento, tá? Depois que autorizarmos o reenvio do produto, também por e-mail, você tem até <strong>três dias úteis</strong> para fazer a postagem nos Correios, via PAC e nos comunicar. O produto precisa ser enviado com todas as etiquetas, sem marcas de uso, sem pelos, não pode ter sido lavado e deve estar em sua embalagem original intacta. 
           Após recebermos seu pacote de volta, vamos analisar o problema para efetuarmos a troca ou devolução do dinheiro, bem como o reembolso do frete. Caso o produto defeituoso que você está devolvendo não esteja mais disponível na nossa loja, você pode trocar por outro em estoque, utilizando o valor do produto que comprou como crédito, ou solicitar o reembolso total do valor da compra. Esse crédito só ficará disponível após recebermos o produto e analisarmos o defeito, tá? Mas fique tranquilo que assim que recebermos nós entraremos em contato!
           Importante: não efetuamos troca nem devolução de produtos com danos que tenham sido ocasionados por mal uso ou que não estejam em suas embalagens originais intactas, com todas as etiquetas ou fora dos prazos estipulados e explicados acima. <strong>Analise todos os produtos com atenção logo que chegarem para você, antes de cortar etiquetas ou descartar suas embalagens e fique atento aos prazos!</strong>
        </p>
      </section>

      <section>
        <h3>DESISTÊNCIA DA COMPRA
        </h3>
        <p>Nós colocamos todas as informações dos produtos no site, inclusive suas medidas, fotos e vídeos, para que você possa ver tudo com detalhes e receber bem o que você imaginou ao comprar cada um de nossos produtos. Mas tudo bem se você se arrepender da compra mesmo assim! Você tem <strong>até sete dias corridos</strong> a partir do recebimento do produto para nos comunicar a sua desistência através do e-mail ronroninha.catshop@gmail.com, <strong>colocando no assunto do e-mail DESISTÊNCIA DA COMPRA e o número do seu pedido</strong>. No corpo do e-mail você deve explicar o motivo da desistência e enviar imagens, caso queira (não é obrigatório no caso de não ser defeito de fabricação). Após a nossa autorização você tem até <strong>três dias úteis</strong> para nos mandar o produto de volta através dos Correios, por sua conta (não reembolsamos o frete de retorno no caso de desistência de compra). 
        Importante: o produto precisa estar intacto, sem marcas de uso, sem pelos, na sua embalagem original intacta, com todas as etiquetas que você recebeu e não pode ter sido lavado, tá? Caso o produto venha com marcas de uso, sem embalagem original, sem alguma etiqueta original ou tenha passado do prazo descrito acima, não efetuaremos a devolução da compra.<strong>Analise com atenção a sua compra logo que ela chegar, antes de usar, para ver se é o que você imaginava!
        </strong> </p>
      </section>
    </main>
  );
}

// Componente Footer
function Footer() {
    return (
      <div>
        {/* Links da barra de navegação */}
        <ul>
          <li><a href=".homePage.js">Loja</a></li>
          <li><a href="./sobreNos">Sobre</a></li>
          <li><a href="politica.js">Política da Loja</a></li>
          <li><a href="./contato.js">Contato</a></li>
        </ul>
  
        {/* Direitos autorais */}
        <div>
          <p>@ 2025 por Ronroninha Cat Shop CNPJ 37.848.640/0001-66</p>
        </div>
      </div>
    );
  }

export default PoliticaPrivacidade;
