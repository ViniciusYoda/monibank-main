export default function ehMaiorDeIdade(campo) {
   const dataNascimento = new Date(`${campo.value}T00:00:00`)
   if (!validaIdade(dataNascimento)) {
      campo.setCustomValidity('O usuário não é maior de idade')
   }
}

function validaIdade(data) {
   const dataAtual = new Date();
   const dataMais18 = new Date(data.getFullYear() + 18, data.getMonth(), data.getDate());

   return dataAtual >= dataMais18;
}