 // soal - 03
  
  // dibawah ini merupakan history transasksi yang telah kalian lakukan
  const items = [
    {
      btc: { buy: 10, sell: 9 },
      eth: { buy: 8, sell: 7.5 },
      doge: { buy: 7, sell: 6.5 },
      day: 1,
    },
    {
      btc: { buy: 9, sell: 5 },
      eth: { buy: 7, sell: 4 },
      doge: { buy: 6, sell: 3 },
      day: 2,
    },
    {
      btc: { buy: 5, sell: 10 },
      eth: { buy: 4, sell: 6 },
      doge: { buy: 3, sell: 4 },
      day: 3,
    },
  ];
  
  const calculateIncome = (items) => {
    /// EDIT DOWN HERE
  let hasilIncome = function (nilaiAwal, nilaiAkhir){
    let nilaiAwalBtc = nilaiAkhir.btc.sell - nilaiAkhir.btc.buy
    let nilaiAwalDoge = nilaiAkhir.doge.sell - nilaiAkhir.doge.buy
    let nilaiAwalEth = nilaiAkhir.eth.sell - nilaiAkhir.eth.buy
    
    return {btc : nilaiAwal.btc + nilaiAwalBtc, doge: nilaiAwal.doge + nilaiAwalDoge, eth: nilaiAwal.eth + nilaiAwalEth}
  }
    return items.reduce(hasilIncome, {btc: 0, doge: 0, eth: 0})
  }
  
  console.log(calculateIncome(items))