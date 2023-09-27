// let time = 0;
// let timer = setInterval(() => {
//   console.log(++time);
//   if (time === 5) {
//     clearInterval(timer);
//   }
// }, 1000);

// Timer
// const timer = (time) => {
//   setInterval(() => {
//     let hours = parseInt(time / 3600);
//     let minutes = parseInt((time - hours * 3600) / 60);
//     let seconds = time - hours * 3600 - minutes * 60;
//     console.log(
//       `${hours >= 10 ? hours : `0${hours}`} : ${
//         minutes >= 10 ? minutes : `0${minutes}`
//       } : ${seconds >= 10 ? seconds : `0${seconds}`}`
//     );
//     time--;
//   }, 1000);
// };
// timer(4 * 3600 + 20 * 60 + 5);