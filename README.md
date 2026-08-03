# MoniBank

Aplicação web estática que simula a abertura de uma conta digital no MoniBank. O projeto apresenta uma página institucional e um cadastro em três etapas, com validação de dados pessoais e captura de uma foto pela câmera do dispositivo.

## Funcionalidades

- Página inicial com apresentação de serviços e benefícios do banco.
- Formulário de cadastro com validação em tempo real.
- Validação dos dígitos verificadores do CPF.
- Verificação de idade mínima de 18 anos.
- Aceite obrigatório dos termos de privacidade.
- Captura de foto usando a câmera do dispositivo.
- Persistência temporária dos dados no `localStorage`.
- Tela de confirmação da abertura da conta.
- Layout responsivo para diferentes tamanhos de tela.

## Tecnologias

- HTML5
- CSS3
- JavaScript com módulos ES
- Web APIs: MediaDevices, Canvas e Local Storage
- Google Fonts

Não há framework, gerenciador de pacotes ou etapa de compilação.

## Estrutura do projeto

```text
.
├── index.html                         # Página inicial
├── pages/
│   ├── abrir-conta-form.html          # Etapa 1: dados pessoais
│   ├── abrir-conta-form-2.html        # Etapa 2: reconhecimento facial
│   └── abrir-conta-form-3.html        # Etapa 3: confirmação
├── js/
│   ├── script.js                      # Controle e validação do formulário
│   ├── valida-cpf.js                  # Algoritmo de validação do CPF
│   ├── valida-idade.js                # Validação da idade mínima
│   └── camera.js                      # Captura e armazenamento da imagem
├── styles/
│   ├── styles.css                     # Agregador dos estilos globais
│   ├── header.css
│   ├── footer.css
│   ├── reset.css
│   ├── pagina-inicial/
│   └── formulario/
└── img/                               # Imagens e ícones
```

## Como executar

Como o projeto usa módulos JavaScript e a API da câmera, abra-o por meio de um servidor HTTP local. Evite abrir os arquivos diretamente com o protocolo `file://`.

Com Python 3:

```bash
python3 -m http.server 8000
```

Depois, acesse `http://localhost:8000` no navegador.

Também é possível usar uma extensão de servidor local, como Live Server, em um editor de código.

## Fluxo do cadastro

1. Na primeira etapa, o usuário informa nome, e-mail, RG, CPF e data de nascimento, além de aceitar os termos.
2. O navegador valida os campos, o CPF e a idade mínima.
3. Os dados válidos são salvos no `localStorage` sob a chave `cadastro`.
4. Na segunda etapa, o navegador solicita permissão para acessar a câmera.
5. A foto é desenhada em um elemento `canvas`, convertida para JPEG e adicionada ao cadastro.
6. O usuário é direcionado à tela de conclusão.

## Validações

### CPF

O campo aceita CPF com ou sem pontuação. Antes da validação, caracteres não numéricos são removidos. O algoritmo rejeita sequências repetidas e confere os dois dígitos verificadores.

### Idade

A data em que o usuário completa 18 anos é calculada a partir da data de nascimento. O cadastro somente prossegue quando essa data é anterior ou igual à data atual.

### Validação nativa

Os atributos HTML `required`, `minlength`, `maxlength`, `pattern` e `type` complementam as validações feitas em JavaScript. As mensagens são exibidas junto ao campo correspondente.

## Câmera e privacidade

A captura usa `navigator.mediaDevices.getUserMedia()`, normalmente disponível apenas em contexto seguro (`https://`) ou em `localhost`. O usuário precisa conceder permissão ao navegador.

Os dados e a imagem ficam somente no armazenamento local do navegador nesta versão. O projeto não possui backend e não envia informações a um servidor. Ainda assim, dados pessoais e imagens não devem ser usados em produção sem medidas adequadas de segurança, consentimento, retenção e conformidade com a LGPD.

Para apagar os dados de teste, remova a chave `cadastro` do armazenamento local nas ferramentas de desenvolvimento do navegador.

## Limitações atuais

- Não existe integração com uma API ou banco de dados.
- O reconhecimento facial é apenas uma simulação de captura de imagem.
- Links institucionais e de redes sociais são demonstrativos.
- Não há suíte de testes automatizados configurada.
- O tratamento de indisponibilidade ou recusa da câmera ainda pode ser aprimorado.

## Origem

Projeto educacional desenvolvido durante estudos de JavaScript e validação de formulários na Alura, posteriormente revisado e aprimorado.
