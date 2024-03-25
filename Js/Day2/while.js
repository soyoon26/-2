let i = 1;
while (i <= 5) {
  //true면 계속됨
  if (i % 2 === 0) {
    continue;
  } //걷어 올림
  console.log(i);
  i++;
}

i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
