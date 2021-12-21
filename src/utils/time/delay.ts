const toMs = (seconds: number) => seconds * 1000;

export async function delay(seconds: number) {
  const ms = toMs(seconds);

  return new Promise(resolve => setTimeout(resolve, ms));
}
