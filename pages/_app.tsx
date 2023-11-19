import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,smartWallet
} from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";


const secretKey="JpSxBi9l35njYqaiIIy9CH6JNtj4yXLHxxzEoQrmRp_9SD5JJhFCM37wlelE-8OXz6tKo4fsaiz5pRN5D_lYkw"

const smartWalletOptions = {
  factoryAddress: "0x2ace847964fE70D38EA6dAd726e3A230dca244bd",
  gasless: true,
};
function MyApp({ Component, pageProps }: AppProps) {
  return (
     <ThirdwebProvider
    activeChain="mumbai"
    clientId="010124cb5900deaf37ccf93e63fdd568"
    supportedWallets={[
      smartWallet(
        metamaskWallet(),
        smartWalletOptions,
      ),
      smartWallet(
        coinbaseWallet({ recommended: true }),
        smartWalletOptions,
      ),
      smartWallet(
        walletConnect(),
        smartWalletOptions,
      ),
      smartWallet(
        localWallet(),
        smartWalletOptions,
      ),
      smartWallet(
        embeddedWallet({
          auth: {
            options: [
              "email",
              "google",
              "apple",
              "facebook",
            ],
          },
        }),
        smartWalletOptions,
      ),
    ]}
  >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
