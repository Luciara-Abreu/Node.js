## NLW Valoriza

### Regras
- Cadastro de uruário.

[] Não é permitido cadastrar mais de um usuário com o mesmo e-mail.

[] Não é permitido cadastrar usuário sem e-mail.

[] Cadastro de TAG.

[] Não é permitido cadastrar mais de uma TAG com o memso nome.

[] Não é permitido cadastrar TAG sem nome.

[] Não é permitido cadastar usuários que não sejam administradores

[] Não é permitido um usuário cadastrar elogio para si.

[] Não é permitido cadastrar elogios para usuários inválidos.

[] O usuário precisa estar autenticado na aplicação.


**********************************************************
##### PASSOS SEGUNDA AULA
[ok] https://typeorm.io/#/working-with-repository
[ok] orm - database / index
[ok] migrations / yarn typeorm migration:run
[ok] entities / User
[ok] Repositorio na aplicação. Camada entre entidade e o Banco de dados
chamada de repositories.
[ok] Service(serviços ou Cases) - Sererver(usuário) -> (Repositories) -> A camada de Service é responável por processar as regras e validações antes que a requisição seja enviada para o BD ou antes de mandar um retorno para o uruário. 
[ok] Controller - Camada Server recebe a requisição, ele repassa para o controller onde o controller chama o service e o mesmo faz as validações que já comentamos. Então a camada controller funciona como o request e response que fizemos na primeira aula. Dentro dessa camada vamos ter acesso ao Request e Response. Com isso cada classe tem as suas responsabilidades. Ele vai servir para pegar nossa requisição do server e repassar para o services.
[]
[]
[]