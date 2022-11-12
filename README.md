# locadora-back

Back-end do projeto locadora feito para testar s habilidades em typescript da driven

## Como executar o projeto

1. Cone o repositório
2. Entre na pasta do projeto

```bash
cd locadora-back
```
3. Instale as dependências

```bash
npm i
```
4. Crie um arquivo `.env` e configure ele usando o arquivo `.env_exemple`

5. para criar o banco e seguir os passos abaixo vai precisar ter o postgresql e o utilitário psql instalados e configurados

6. Logue com usuário `postgres`

```bash
sudo -i -u postgres
```

7. Entre no utilitário `psql`

```bash
psql
```

8. Crie um banco de dados PostgreSQL com o nome que você quiser (substitua `nome_do_banco` pelo `nome que vc quiser dar ao seu banco de dados`)

```bash
CREATE DATABASE nome_do_banco TEMPLATE templete0;
```
9. Saia do utilitário `psql`

```bash
exit
```

10. Saia do terminal postgres e volte para seu terminal normal

```bash
exit
```
11. Importe o `dump.sql` para o banco que vc acabou de criar ( substitua `nome_do_banco` pelo nome que vc criou do banco no `passo 7`)

```bash
sudo -u postgres psql nome_do_banco < dump.sql
```
12. Execute o projeto

```bash
npx nodemon src/app.ts
```