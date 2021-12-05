class utils {
  static instance = new utils();

  calculateScore = (level, coin, time) => {
    try {
      let score = parseInt(level) * parseInt(coin) + parseInt(time);
      return score;
    } catch (error) {
      console.log("get error", error);
      throw Error(error);
    }
  };

  calculateScoreGlobal = (data,user,validate) => {
    try {
      let score = 0;
      let arrayPosition = [];
      data.forEach((element) => {
        if(validate(element,user)) {
        console.log(element.level + ' - '+ element.coins + ' - '+ element.time);
        score = this.calculateScore(element.level, element.coins, element.time);

        arrayPosition.push({ userId: element.userId, score: score });
      } 
      });
      arrayPosition.sort((function(a, b) {
        if (a.score < b.score) {
          return 1;
        }
        if (a.score > b.score) {
          return -1;
        }
        return 0;
      }));
      console.log('array', arrayPosition);
      return arrayPosition;
    } catch (error) {
      console.log("get error", error);
      throw Error(error);
    }
  };
}

export default utils;
