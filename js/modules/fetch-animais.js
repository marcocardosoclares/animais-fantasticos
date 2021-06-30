import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  const numerosGrid = document.querySelector(target);
  function preencherAnimal(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaNumerosAnimais() {
    const animaNumeros = new AnimaNumeros('[data-numero]','.numeros','ativo');
    animaNumeros.init();
  }

  async function criaAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      animaisJSON.forEach(animal => preencherAnimal(animal));
      animaNumerosAnimais();
      
    } catch (erro) {
      console.log(erro);
    }
  }

  return criaAnimais();
}
