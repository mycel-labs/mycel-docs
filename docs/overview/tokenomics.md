---
sidebar_position: 4
---

# Tokenomics

Mycel is driven by the belief that:

- Domain registration fees should be dedicated to domain management expenses.
- Interoperable domains should be managed not by a single governance entity but by a governance structure formed by the network that manages the domains.

![incentives](../assets/incentive.png)

Mycel's platform aims to create a decentralized and fair ecosystem for domain name registration and management. Instead of distributing domain registration fees directly, Mycel burns a calculated amount of MYCEL tokens, using this mechanism to compensate Validators and other network participants for their contribution to maintaining the network's security and stability.

## Token Burning Process

1. **Calculate the Total Domain Registration Fees**: Determine the total amount of domain registration fees collected during the period in accepted tokens (e.g., USDC).
2. **Determine the Amount of MYCEL to Burn**: Utilize the collected fees and a specific rate to calculate the MYCEL tokens to burn. This rate takes into account factors such as the price of MYCEL in accepted tokens, staking rate, inflation rate, and other predetermined parameters.
3. **Burn the MYCEL Tokens**: Execute the burning process, removing the calculated MYCEL tokens from circulation. The amount burned translates into compensation for Validators, incentivizing them to operate nodes and contribute to the network.

## Burn Mechanism

$B$ : Amount of MYCEL to burn  
$X$: Amount of token (e.g., USDC) required for registration fee  
$P$: Price of MYCEL in token X  
$S$: Rate of staking, representing the proportion of tokens that are staked in the system  
$I$: Rate of inflation, indicating the yearly increase in the total supply of tokens  
$\alpha$: A parameter, ranging from 0 to 1, used to balance the influence of staking and inflation

### Calculating the Burn Amount

The weight is determined using the equation:

$$
W= \alpha S+(1-\alpha)I
$$

This equation calculates the weight $w$ that takes into account both the rate of staking $S$ and the rate of inflation $I$. The parameter $\alpha$ is used to determine the relative importance of staking versus inflation in the weight.

The amount of MYCEL tokens to be burned is calculated using the equation:

$$
B=\frac{X}{WP}
$$

This equation calculates the amount of MYCEL tokens to burn ($B$) for a given registration fee in tokens $X$.

The burn amount is inversely proportional to the product of the weight $w$ and the price of MYCEL in tokens $P$. Therefore, if the weight is high due to higher staking or inflation, fewer MYCEL tokens will be burned for the same registration fee.
