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

[ok] migrations / 
criar migrations comando => yarn typeorm migration:create -n CreateUsers  
Rodar => yarn typeorm migration:run

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

[ok] Vamos precisar criar uma migration para inserir um campo dentro da nossa estrutura de banco de dados pois a profe queria mostrar como criar uma coluna após ja ter criado a tabela.
O usuário precisar ter uma senha para fazermos as validações e ver se o mesmo é um admin ou não!! => yarn typeorm migration:create -n AuterUserAddPassword
Após criar os dados da coluna na migration, temos que rodar a mesma para que a coluna seja criada. => yarn typeorm migration:run

[ok] Agora iremos ter que alterar o user, services, controller e add esse novo campo para que seja preenchido.

[ok] Iremos usar uma biblioteca de criptografia de senhas para salvar de maneira segura no banco de dados. => yarn add bcryptjs e após instalar tbm as suas typagens => yarn add @types/bcryptjs - D   <= Dependencia de desenvolvimento.

[ok] Autenticação do usuário - Vamos criar uma rota para autenticar o usuário e gerar um tokem para o mesmo. 

[Ok] Dentro de service vamos criar AuthenticateUserService.ts Essa classe será responsável por autenticar o usuário.

### Dúvidas.:

- Sobre o Tokem, Como gerar a chave automaticamente??? Estou pensando em um sistema com muitos usuários... 
Aqui no curso a profe pegou uma chave de um site e colou no código dando-lhe um dia de vida útil para o mesmo. 

[ok] Dentro de Controller vamos criar AuthenticateUserController.ts
Nessa classe pegamos através do request os dados do usuário e vamos validar chamando um objeto da classe AuthenticateUserService, passando para ela o e-mail e o password do usuário e se tudo estiver certinho,
        const token = await authenticateUserService.execute({
            email,
            password
        });
 o tokem recebe a chave e retorna para o usuário a chave que irá ser usada naquele dia.
 return response.json(token);

 [ok] Vamos add na nossa AuthenticateUserController na nossa rota e depois criar nossa rota no Insomnia e ver se deu bom!! 
 Criado a nova request no insomnia e deu tudo certo. 
 nossa aplicação criou um tokem e nos informou ali no response :))
 {

	"email": "luci.abreu@gmail.com",
	"password": "1234"

}
Foi gerado esse tokem...

"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2kuYWJyZXVAZ21haWwuY29tIiwiaWF0IjoxNjM5NDA2NDE1LCJleHAiOjE2Mzk0OTI4MTUsInN1YiI6IjYwNTlkMWZmLTMyM2YtNDFiNS05MDIyLTBhY2NiNjZiMTA5NSJ9.ROa9dPJ1RFi1_rMTPEOH2vPUAV17rwBr0FDlsHv36UE"

Colei no site  https://jwt.io/ sem as aspas e dá para ver no campo=> PAYLOAD:DATA os dados não tão criticos que foi passado pelo usuário na request. 

 [ok] Migration compliments 53:00+- para crir os relacionamentos entre as tabelas.
 Agora temos que rodar nossa migration => yarn typeorm migration:run
 Depois vamos dar um refresh no Beekeeper e ver nossa tabelinha criada <3

[ok] Agora vamos criar uma entidade Compliments com os mesmos atributos da Migration. 

[ok] Agora criar um repositório para nossa compliments

[ok] Criado a classe de Compliments Service.

[ok] Agora iremos criar nosso controller => CreateComplimentsController

[ok] Criar nossa rota CreatecomplimentController e depois rodar a aplicação.


[ok] rodar a aplicação => yarn dev 

********************************************

### PASSOS QUINTO DIA DE AULA
[] Vamos criar um middleware para garantir que o usuário esteja autenticado na aplicação. Para navegar nas nossas rodas e garantir que o usuários já tenha o tokem  valido ... 

No insomnia dentro de Criate Tag na segunda aba iremos usar o Bearer tokem, passando o tokem gerado em Authenticate User no campo tokem para dentro da nossa aplicação sem as aspas. 


[] 

[]

[]

[]

[]

[]

[]

[]

********************************************
