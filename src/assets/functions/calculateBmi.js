const calcBmi = () => {

    const personName = document.querySelector('[data-personname]');
    const personWeight = document.querySelector('[data-personweight]');
    const personHeight = document.querySelector('[data-personheight]');

    const heightInDecimals = personHeight.value / 100;
    
  

    const bmi = Math.round(personWeight.value / (heightInDecimals * heightInDecimals));
    
  
    console.log(bmi);
  }



export default calcBmi