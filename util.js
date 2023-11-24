export const accountStorage = {
  get: () => {
    return localStorage.getItem('username');
  },
  set: (value) => {
    localStorage.setItem('username', value);
  },
  remove: () => {
    localStorage.removeItem('username')
  }
}

// 辅助函数：如果数字小于10，在前面加上一个零
function padZero(number) {
  return number < 10 ? "0" + number : number;
}


export function manipulateDate(inputDate, offset = 0) {
  const date = new Date(inputDate);
  date.setDate(date.getDate() + offset);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

