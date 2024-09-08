# NHub

NHub é uma solução de hub de projetos baseada em NGINX que facilita o acesso a múltiplos projetos através de um único ponto de entrada. O objetivo do NHub é proporcionar um gerenciamento centralizado e simplificado dos projetos, permitindo que eles permaneçam organizados e acessíveis de maneira eficiente dentro de um hub geral.

## Visão Geral

O NHub utiliza o NGINX como servidor de proxy reverso para consolidar o acesso a diferentes projetos. Isso oferece uma forma prática de direcionar o tráfego para os projetos hospedados, mantendo uma interface limpa e organizada para os usuários.

### Funcionalidades

- **Centralização de Projetos:** Acesso a múltiplos projetos a partir de uma única URL.
- **Configuração Simples:** Facilmente configurável através de arquivos de configuração do NGINX.
- **Gerenciamento Eficiente:** Organize e mantenha os projetos em um hub centralizado.

## Estrutura do Projeto

- **nginx.conf:** Arquivo de configuração principal do NGINX que define as regras de roteamento para os projetos.
- **projects/:** Diretório contendo todos os projetos que serão gerenciados pelo NHub.

## Instalação

1. **Instale o NGINX:**
   ```bash
   sudo apt update
   sudo apt install nginx
