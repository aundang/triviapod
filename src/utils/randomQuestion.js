// const questions = [
//   {
//     question: 'Who is the CEO of Cognizant ?',
//     choices: [
//       'A] Linus Torvalds',
//       'B] James Gosling',
//       'C] Steve Jobs',
//       'D] Brian Humphries'
//     ],
//     answer: 3
//   },
//   {
//     question: 'What do you mean by CDE?',
//     choices: [
//       'A] Cognizant Digital Education',
//       'B] Cognizant Digital Engineers',
//       'C] Cognizant Digital Engineering',
//       'D] Cognizant Digital Enterprise'
//     ],
//     answer: 2
//   },
//   {
//     question: 'First principal technical architect in CDE?',
//     choices: [
//       'A] Linus Torvalds',
//       'B] Rizal Jose',
//       'C] RizaLino Yabut',
//       'D] Robiol Bahoo'
//     ],
//     answer: 2
//   }
// ];

const randomQuestions = async () => {
  let response = await fetch('https://api.myjson.com/bins/11cla4');
  //let response = await fetch('http://ambsg000031.local:8080/');
  let data = await response.json();

  console.log(data);

  const newQuestions = data.map(item => {
    return {
      ...item,
      choices: item.choices.split('|')
    };
  });

  let rand = Math.floor(Math.random() * newQuestions.length);
  return newQuestions[rand];
};

export default randomQuestions;
