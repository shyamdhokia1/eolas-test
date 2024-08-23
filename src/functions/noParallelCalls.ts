import { sleep } from "./sleep";

const dangerousFunction = async () => {
  await sleep(100 + Math.random() * 50);
  const hasErrored = Math.random() > 0.5;
  if (hasErrored) {
    return Promise.reject(
      new Error(`Unknown error at ${new Date().toISOString()}`)
    );
  }
  return { message: `Success at ${new Date().toISOString()}` };
};

export const noParallelCalls = async () => {
  return dangerousFunction();
};
