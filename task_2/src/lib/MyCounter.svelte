
<script lang="ts">

  let inputLeftValue: number = 0
  let inputRightValue: number = 0
  
  let leftRatio: number = 1
  let rightRatio: number = 1
  
  async function handleSetLeftCurrency(ev) {
    let response = await fetch("https://open.er-api.com/v6/latest/RUB")
    let ratesArr = await response.json()
    leftRatio = ratesArr.rates[ev.target.value]
    inputRightValue = parseFloat(inputLeftValue * rightRatio / leftRatio).toFixed(2)
  }

  async function  handleSetRightCurrency (ev) {
    let response = await fetch("https://open.er-api.com/v6/latest/RUB")
    let ratesArr = await response.json()
    rightRatio = ratesArr.rates[ev.target.value]
    inputLeftValue = parseFloat(inputRightValue * leftRatio / rightRatio).toFixed(2)
  }

  // При пустой строке появляется ошибка, нужно поправить 

  const handleInputLeftValue = (ev) => {
    inputLeftValue = parseFloat(ev.target.value)
    inputRightValue = parseFloat(ev.target.value * rightRatio / leftRatio).toFixed(2)
  }

  const handleInputRightValue = (ev) => {
    inputRightValue = parseFloat(ev.target.value)
    inputLeftValue = parseFloat(ev.target.value * leftRatio / rightRatio).toFixed(2)
  }

</script>

<div class="container">
  <h1>Конвертер валют</h1>
  <div class="cards">
    <div class="card">
      <input type="number" bind:value={inputLeftValue} on:input={handleInputLeftValue}>
      <select on:change={handleSetLeftCurrency}>
        <option value='RUB'>RUB</option>
        <option value='CNY'>CNY</option>
        <option value='EUR'>EUR</option>
        <option value='USD'>USD</option>
      </select>
    </div>
    <div class="card">
      <input type="number" bind:value={inputRightValue} on:input={handleInputRightValue}>
      <select on:change={handleSetRightCurrency}>
        <option value='RUB'>RUB</option>
        <option value='CNY'>CNY</option>
        <option value='EUR'>EUR</option>
        <option value='USD'>USD</option>
      </select>
    </div>
  </div>
</div>

<style>
.container {
  display: flex;
  flex-direction: column;
  font-size: 15px;
}

.cards {
  display: flex;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin-bottom: 40px;
  height: 30px;
  width: 200px;
  font-size: 25px;
  text-align: center;
  transition: 300ms;
}

input:hover {
  filter: drop-shadow(0 0 2em #2652a3aa);
}

select {
  height: 30px;
  width: 75px;
  font-size: 20px;
  text-align: center;
  transition: 300ms;
}

select:hover {
  filter: drop-shadow(0 0 2em #2652a3aa);
}

</style>