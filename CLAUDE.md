# CLAUDE.md — yndexa.com

## O projeto

Site institucional da Yndexa Tecnologia e Informação. Site estático (HTML/CSS/JS puro), sem frameworks ou dependências externas.

## Fluxo de deploy

O código fonte fica em `website/`. O repositório GitHub está clonado separadamente em `/tmp/yndexa-repo` (pode não existir entre sessões). Para publicar:

```bash
git clone git@github.com:rsandrade/yndexa.com.git /tmp/yndexa-repo
cp -r website/* /tmp/yndexa-repo/
cd /tmp/yndexa-repo && git add -A && git commit -m "..." && git push origin main
```

- Branch publicado: `main`
- Branch de backup do site Hugo anterior: `backup-hugo-site`
- O repositório deve sempre conter `CNAME` (conteúdo: `yndexa.com`) e `.nojekyll`

## Estrutura de arquivos

```
website/
  index.html        # versão em português (página raiz)
  styles.css        # CSS compartilhado por todas as versões
  script.js         # JS compartilhado por todas as versões
  en/index.html     # versão em inglês
  es/index.html     # versão em espanhol
  ro/index.html     # versão em romeno
  *.png             # logos e imagens
```

As páginas em subdiretórios referenciam assets com `../` (ex: `../styles.css`, `../Yndexa.png`).

## Idiomas

O site tem quatro versões linguísticas com seletor de idioma no nav (componente `.nav-lang`):

- **PT** — `/` — `website/index.html`
- **EN** — `/en/` — `website/en/index.html`
- **ES** — `/es/` — `website/es/index.html`
- **RO** — `/ro/` — `website/ro/index.html`

Ao alterar conteúdo no PT, replicar as mesmas alterações nas outras três versões.

## Decisões de design

- Todas as seções usam o layout `about-grid`: coluna esquerda estreita (180px) para a `section-tag`, coluna direita para o conteúdo. A coluna esquerda pode receber imagens/logos além da tag.
- A seção Farinha tem fundo escuro (`#4a4740`) para se destacar das demais.
- Paleta: fundo pergaminho `#faf9f6`, dourado `#9a7b3f` como acento, tipografia EB Garamond (títulos) + Inter (corpo).
- Evitar itálico no corpo do texto — dificulta a leitura.

## Conteúdo e ordem das seções

1. **Hero** — CTA principal aponta para `#farinha`
2. **Farinha** (`#farinha`) — label "Destaque"; logo na coluna esquerda
3. **Sobre** (`#sobre`) — apresentação da empresa
4. **Serviços** (`#servicos`) — dois serviços ativos: implantação/suporte ao Farinha e consultoria para arquivos permanentes
5. **Trajetória** (`#trajetoria`) — iniciativas encerradas na ordem: Editora 9Bravos, Yndexa Cursos, Portal do Arquivista
6. **Contato** (`#contato`) — e-mail e localização apenas (sem formulário)

## O que está encerrado vs. ativo

- **Ativo:** Farinha (farinha.info), serviços de consultoria e suporte
- **Encerrado:** Editora 9Bravos, Yndexa Cursos, Portal do Arquivista (arquivista.net)

## Imagens

Os arquivos originais dos logos ficam na raiz de `site-yndexa/`. Cópias otimizadas para o site ficam em `website/`. As páginas de subidioma referenciam as imagens com `../`. Ao adicionar novos logos, copiar para ambos os lugares.
