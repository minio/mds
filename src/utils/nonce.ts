let nonce: string | null = null;

export const getNonce = (): string => {
  if (!nonce) {
    nonce = "test-nonce"; // Replace with your nonce generation logic
  }
  return nonce;
};
