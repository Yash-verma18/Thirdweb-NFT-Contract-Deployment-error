export let env = "local";

const config = {
  local: {
    NETWORK_CHAIN_ID: 80001,
  },
};
export default config[env];
