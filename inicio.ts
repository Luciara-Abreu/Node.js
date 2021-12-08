function enviarEmail(nome: string, email: string, telefone: string)
{
    console.log('Olá ${nome} seu email é ${email} e seu telefone ${telefone}');
}

enviarEmail("Luci", "luciara.abreu@gmail.com","5552555");


/* ---------- Ou usando uma interface. ---------- 
   ---------- A interrogação no campo de telefone é para dizer que ele pode ou não ser obrigatório */

interface Usuario
{
    nome: string, email: string, telefone?: string
}
function enviarEmail2({nome, email,telefone}: Usuario)
{
    console.log('Olá ${nome} seu email é ${email} e seu telefone ${telefone}');
}

enviarEmail2
(
{
    nome: "Luci",
    email: "luciara.abreu@gmail.com",
    telefone: "5555525"
}
);
