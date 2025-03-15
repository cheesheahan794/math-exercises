  const randomTSCode = () => {
    const numbers = [];
    for (let i = 1; i <= 10; i++) {
      numbers.push(i);
    }

    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    return sum;
  };

randomTSCode();