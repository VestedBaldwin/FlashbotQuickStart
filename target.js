const { ethers } = require("ethers");
require('dotenv').config()
console.log(process.env.ETH)



async function main() {


    const {
        FlashbotsBundleProvider,
      } = require("@flashbots/ethers-provider-bundle");
      const provider = new ethers.providers.JsonRpcProvider(process.env.ETH);
      
      const authSigner = new ethers.Wallet(
        "0x2000000000000000000000000000000000000000000000000000000000000000"
      );
      const flashbotsProvider = await FlashbotsBundleProvider.create(
        provider,
        authSigner
      );
      
      const signedBundle = await flashbotsProvider.signBundle([
        {
          signer: SOME_SIGNER_TO_SEND_FROM,
          transaction: SOME_TRANSACTION_TO_SEND,
        },
      ]);
      
      const bundleReceipt = await flashbotsProvider.sendRawBundle(
        signedBundle,
        TARGET_BLOCK_NUMBER
      );

}
main();