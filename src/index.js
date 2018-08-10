async function* gen() {
  yield 1;
}

async function main() {
  for await (const value of gen()) {
    console.log(value);
  }
}
main().catch(console.error.bind(console));
