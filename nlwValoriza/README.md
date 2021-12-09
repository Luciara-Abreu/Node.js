## NLW Valoriza

### Regras
********************************************
- Cadastro de uruário.

[ok] Não é permitido cadastrar mais de um usuário com o mesmo e-mail.

[ok] Não é permitido cadastrar usuário sem e-mail.

[ok] Cadastro de TAG.

[ok] Não é permitido cadastrar mais de uma TAG com o memso nome.

[ok] Não é permitido cadastrar TAG sem nome.

[ok] Não é permitido cadastar usuários que não sejam administradores

[ok] Não é permitido um usuário cadastrar elogio para si.

[ok] Não é permitido cadastrar elogios para usuários inválidos.

[ok] O usuário precisa estar autenticado na aplicação.


********************************************

### PASSOS SEGUNDA DIA DE AULA
[ok] https://typeorm.io/#/working-with-repository


[ok] comando para criar o banco => após definir as configurações do banco de dados no arquivo ormconfig, após criar a pasta do banco e o arquivo index dentro da pasta e importar a conexão e configurar, após importar o database para o arquivo server, rodar o comando yarn dev para criar a base de dados / 30:00min da segunda aula. 

[ok] orm - database / index

[ok] migrations / criar migrations comando => yarn typeorm migration:create -n CreateUsers / Rodar => yarn typeorm migration:run

[ok] entities / User

[ok] Repositorio na aplicação. Camada entre entidade e o Banco de dados
chamada de repositories.

[ok] Service(serviços ou Cases) - Sererver(usuário) -> (Repositories) -> A camada de Service é responável por processar as regras e validações antes que a requisição seja enviada para o BD ou antes de mandar um retorno para o uruário. 

[ok] Controller - Camada Server recebe a requisição, ele repassa para o controller onde o controller chama o service e o mesmo faz as validações que já comentamos. Então a camada controller funciona como o request e response que fizemos na primeira aula. Dentro dessa camada vamos ter acesso ao Request e Response. Com isso cada classe tem as suas responsabilidades. Ele vai servir para pegar nossa requisição do server e repassar para o services.
********************************************

### PASSOS TERCEIRO DIA DE AULA
[ok] Tratamento de erros - Onde está nosso throw new error?? Está na Service e a service manda o erro para a camada acima. Só para entendermos.
server -> routes -> controller -> service. Quando a service recebe o erro ela manda para a controller tratar porém podemos criar na camada SERVER midware de erro.

[ok]  Middleware - de erro tem que ter 4 parametros. Os paramentros devem ser tipados. 

[ok] instalar a biblioteca que saberá lidar com os erros => yarn add express-async-errors

### TAGS curso 3 aula =:>18:27min
[ok] Estruturas de tags - Criar nossa migration de tags => yarn typeorm migrition:create -n CreateTags,
após criar a estrutura da tabela de tags rodar =>yarn typeorm migration:run para que seja criado no banco de dados a tabela.

[ok] Repositório das Tags - TagsRepositories.ts - Após criar o repositório, criar a TagService. 

[ok] TagService - que verificam se as tags estão cadastadas ou se precisa cadastrar. Depois de criar o Service temos que criar o controller

[ok] Controller - Depois que o controller for criado e add todos os metodos é preciso referenciar ele na nossa rota. Apos tudo certo, rodar a aplicação com o comando = > yarn dev após ir no insomnia e criar a outra request tag

[ok] Ordenação de criação==> Migrations => Entities => Repositories => Services => Routes => Controllers

[ok] Amando o curso <3

[ok] middleware - Diretório middleware que irá validar algumas informações dos usuários vindos da requisição.

[ok] Finalizado a parte das tags

********************************************

### PASSOS QUARTO DIA DE AULA
[ok] JWT - O que é o JTW ==> JSON Web Tokens são métodos para representar reivindicações com segurança entre duas partes.
JWT.IO permite decodificar, verificar e gerar JWT.
Nada mais é do que um token para autenticação e validação de dados.

[ok] instalar a biblioteca para usar o JWT => yarn add jsonwebtoken.

[ok] Nós vamos precisar das tipagens. Obs.: Tipagens só usamos em ambiente de desenvolvimento.
=> yarn add @types/jsonwebtoken -D

[ok] Vamos precisar criar uma migration para inserir um campo dentro da nossa estrutura de banco de dados pois esquecemos que o usuário precisar ter uma senha para fazermos as validações e ver se o mesmo é um admin ou não!! => yarn typeorm migration:create -n AuterUserAddPassword
Após criar os dados da coluna na migration, temos que rodar a mesma para que a coluna seja criada. => yarn typeorm migration:run

[ok] Agora iremos ter que alterar o user, services, controller e add esse novo campo para que seja preenchido.

[ok] Iremos usar uma biblioteca de criptografia de senhas para salvar de maneira segura no banco de dados. => yarn add bcryptjs e após instalar tbm as suas typagens => yarn add @types/bcryptjs - D   <= Dependencia de desenvolvimento.

[ok] Autenticação do usuário - Vamos criar uma rota para autenticar o usuário e gerar um tokem para o mesmo. 

[Ok] Dentro de service vamos criar AuthenticateUserService. Essa classe será responsável por autenticar o usuário.

[]


********************************************

### PASSOS QUINTO DIA DE AULA
[]

[]

[]

[]

[]

[]

[]

[]

[]

********************************************