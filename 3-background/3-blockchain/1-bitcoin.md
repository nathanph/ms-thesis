Bitcoin
=======
In 2008 the seminal white paper, *Bitcoin: A Peer-to-Peer Electronic Cash
System*, was published under the moniker Satoshi Nakamoto. This white paper
outlined ideas for a new form of currency, Bitcoin.  Bitcoin promised to be the
first of its kind; in theory it would be the world's first decentralized digital
currency which would require no trust to authenticate timestamped transactions.
It would do this by combining cryptography, a proof-of-work system, and "miners"
to create a revolutionary new concept which is now known as blockchain
technology. In short, blockchain technology enables enables individuals who do
not trust one another to reach consensus via a trustless platform.

Network
-------
The Bitcoin network is structured as a peer-to-peer network with a variety of
nodes and node functionalities.

### Functionality
Nodes in the bitcoin network have various functionality depending on their use
case:

- A **miner** creates new blocks by solving proof-of-work problems.
- A **wallet** offers users a way to manage their keys plus send and receive
    transactions.
- A copy of the **full blockchain** allows nodes to verify transactions
	independent of other nodes in the network.
- Node **network routing** functionality allows nodes to propagate
	transactions and discover new nodes.

### Node Types
There are various types of nodes on the bitcoin network. They are classified by
their functionalities

- A **reference client** contains wallet, miner, a full copy of the blockchain,
	and network routing functionality.
- A **full node** contains a fully copy of the blockchain and network routing
	functionality.
- A **mining node** contains a miner, a full copy of the blockchain, and network
	routing functionality.
- A **lightweight wallet** contains a wallet and network routing functionality.
	These nodes depend on *full nodes* to verify transactions for them. These
	nodes are usually found on mobile device where storage is limited and the
	size of the blockchain is inhibitive.

The variety of nodes within the bitcoin ecosystem actually extends beyond this
to include things such as pool miners and various other protocols to optimize
the network for various use cases (ignored for the sake of brevity).

The Blockchain
--------------
The bitcoin blockchain is a linked list of blocks. Each block contains a set of
transactions and a reference to the previous block in the chain. The block is
identified by a SHA-256 hash of its header. It's helpful to imagine the
blockchain as being blocks stacked vertically, each additional block helping to
secure the previous blocks.


**Blockchain Stack**

|  Block #  |
|:---------:|
|  Block 9  |
|  Block 8  |
|    ...    |
|  Block 1  |
|  Block 0  |


**Block Structure**

| Size               | Field               | Description                                           |
|--------------------|---------------------|-------------------------------------------------------|
| 4 bytes            | Block Size          | The size of the block, in bytes, following this field |
| 80 bytes           | Block Header        | Several fields form the block header                  |
| 1-9 bytes (VarInt) | Transaction Counter | How many transactions follow                          |
| Variable           | Transactions        | The transactions recorded in this block               |
Source: Mastering Bitcoin

**Block Header**

| Size     | Field               | Description                                                           |
|----------|---------------------|-----------------------------------------------------------------------|
| 4 bytes  | Version             | A version number to track software/protocol upgrades                  |
| 32 bytes | Previous Block Hash | A reference to the hash of the previous (parent) block in the chain   |
| 32 bytes | Merkle Root         | A hash of the root of the Merkle tree of this block's transactions    |
| 4 bytes  | Timestamp           | The approximate creation time of this block (seconds from Unix Epoch) |
| 4 bytes  | Difficulty Target   | The proof-of-work algorithm difficulty target for this block          |
| 4 bytes  | Nonce               | A counter used for the proof-of-work algorithm                        |
Source: Mastering Bitcoin

### Merkle Trees
A Merkle tree is a data structure that allows one to efficiently verify the
contents of a large amount of data. Merkle trees are used extensively in
peer-to-peer networks to ensure that blocks of data arrive unaltered and
undamaged. The root of a Merkle tree is called a Merkle root. Merkle trees are
composed of nodes of hashes. They have the unique property of allowing the
verification of the existence of a hash in the tree in log(N) time.

[!Merkle Tree Image]()


### Proof-of-Work
The bitcoin protocol uses a **Proof-Of-Work (POW)** algorithm, similar to
hashcash, that Satoshi Nakamoto proposed. The goal of the proof-of-work
algorithm is to create a problem that is easy to verify for correctness but
difficult to solve for (read: NP-complete (?)).

The proof-of-work algorithm provides a means for mining nodes to be
pseudorandomly selected to build a block of transactions. The probability that a
miner will be selected is directly tied to the amount of *work* a miner does.

#### Algorithm
The proof-of-work algorithm depends on the SHA-256 algorithm. **SHA-256**, a
member of the **Secure Hash Algorithm 2 (SHA-2)** family, is a cryptographic
hash function that produces a 256-bit, 32-byte, hash result.

The main properties of a **cryptographic hash function** are that it be:
- deterministic, i.e., the same input will always produce the same output,
- quick to compute,
- infeasible to determine the input from the output, i.e., a small change in the
  input will produce a major, seemingly random, change to the output, and
- infeasible to find a collision in resulting hashes.

These properties of cryptographic hash functions provide **collision
resistance** meaning it is computationally impossible to find an input that
produces a randomly selected hash output. This property can be used as a sort of
pseudorandom selection.

#### Difficulty
The Bitcoin network has a global **difficulty** --- a 256-bit value, 32-bytes
--- that is recalculated every 2016 blocks. The value is recalculated such that
the pseudorandom selection process takes approximately 10 minutes to complete
for each block.

In actuality, miners aren't "selected" to build a block, so much as have a
chance of building a correct block at a probability of
`(miner_hashrate/network_hashrate)`.

By using the hash of the previous block in the blockchain combined with a
**nonce**, a value the miner selects, they have a chance of finding a nonce
such that when combined with the previous block's hash (and current block's
data) is less than the current difficulty. This is considered a correct
solution and the "work" required in Proof-of-Work.

#### Network
If a miner finds a solution it will propagate its solution into the network.
Once other nodes have verified that the solution is correct they will accept
that block as correct, append it to their chain, and reward the miner with a
coinbase reward, a sum of bitcoin.


#### Security
These properties, combined with the incentive of coinbase rewards, provide
security in the form of cryptography, electricity, and hardware. Attacks that
would threaten this security depend on breaking the cryptographic primitives in
action, finding ways of reducing electricity/hardware costs to out perform the
rest of the network in the PoW algorithm, attacking nodes in the network, or
colluding with other nodes in the network to out perform the remainder of the
network.

