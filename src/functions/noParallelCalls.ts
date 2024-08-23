import { sleep } from "./sleep";

// random delay then
// either returns error via rejected Promise or success string
const dangerousFunction = async () => {
  // sleep returns a Promise that resolves after a random time
  await sleep(100 + Math.random() * 50);
  const hasErrored = Math.random() > 0.5;
  if (hasErrored) {
    return Promise.reject(
      new Error(`Unknown error at ${new Date().toISOString()}`)
    );
  }
  return { message: `Success at ${new Date().toISOString()}` };
};

let running: boolean = false
//initiliase currently running function with placeholder
let currentCall:Promise<{message: string}>= Promise.resolve({message: ""});

export const noParallelCalls = async () => {
  //check if prev call awaiting resolution
  if (running) {
    //if so await res of that Promise
    try{
      const res = await currentCall;
      return res;
    } catch (err) {
      return err;
    }
  }
  running = true
  try {
    // assign current call to global variable
    currentCall = dangerousFunction();
    const res = await currentCall;
    return res;
  } catch (err) {
    return err;
  } finally {
    running = false;
  }
};
