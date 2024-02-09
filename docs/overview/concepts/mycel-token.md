---
sidebar_position: 10
---

# MYCEL Token

In the Mycel project, the process of domain name registration is centrally governed by MYCEL tokens. Initially, the registration fee is paid using tokens (e.g., USDC), which are temporarily stored within the Mycel system. Subsequently, based on a predetermined rate, the quantity of MYCEL tokens to be burned is calculated from the locked registration fee, and said tokens are burned, thus removing them from circulation. This approach strategically provides rewards to validators and other network participants without directly allocating the domain registration fees. The act of burning MYCEL tokens contributes to a reduction in token supply, adjustment of its value, and sustenance of the network's security and stability.

## Token Burning Process

1. **Calculate the Total Domain Registration Fees**: Determine the total amount of domain registration fees collected during the period in accepted tokens (e.g., USDC).
2. **Determine the Amount of MYCEL to Burn**: Calculate the amount of MYCEL tokens to burn using the collected fees and a specific rate, which considers factors including the price of MYCEL in accepted tokens, the staking rate, the inflation rate, and other set parameters. Concurrently, determine the token amounts to allocate to the community pool.
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
B=\frac{WX}{P}
$$

This equation calculates the amount of MYCEL tokens to burn ($B$) for a given registration fee in tokens $X$.

The burn amount is inversely proportional to the product of the weight $w$ and the price of MYCEL in tokens $P$. Therefore, if the weight is high due to higher staking or inflation, fewer MYCEL tokens will be burned for the same registration fee.

### Calculating the Non-Burned Token Amount

The non-burned token amount is calculated using the equation:
$$Y=(1−W)X$$

This equation calculates the amount of token ($Y$) that is not burned and instead kept in the community pool. The weight $W$ is calculated as $W = \alpha \cdot S + (1 - \alpha) \cdot I$, taking into account both the rate of staking $S$ and the rate of inflation $I$. The parameter $\alpha$ is used to determine the relative importance of staking versus inflation in the weight.

The non-burned token amount is directly proportional to the registration fee in tokens $X$ and inversely proportional to the weight $W$. Therefore, if the weight is high due to higher staking or inflation, a smaller portion of the registration fee will be kept as non-burned token in the community pool.
