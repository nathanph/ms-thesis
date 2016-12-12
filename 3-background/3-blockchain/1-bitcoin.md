Bitcoin
-------
In 2008 the seminal white paper, *Bitcoin: A Peer-to-Peer Electronic Cash
System*, was published under the moniker Satoshi Nakamoto. This white paper
outlined ideas for a new form of currency, Bitcoin.  Bitcoin promised to be the
first of its kind; in theory it would be the world's first decentralized digital
currency which would require no trust to authenticate timestamped transactions.
It would do this by combining cryptography, a proof-of-work system, and "miners"
to create a revolutionary new concept which is now known as blockchain
technology. In short, blockchain technology enables enables individuals who do
not trust one another to reach consensus via a trustless platform.

## Network
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

## The Blockchain
The bitcoin blockchain is a linked list of blocks. Each block contains a set of
transactions and a reference to the previous block in the chain. The block is
identified by a SHA-256 hash of its header. It's helpful to imagine the
blockchain as being blocks stacked vertically, each additional block helping to
secure the previous blocks.

|  Block #  |
|:---------:|
|  Block 9  |
|  Block 8  |
|    ...    |
|  Block 1  |
|  Block 0  |


### Block Structure
| Size               | Field               | Description                                           |
|--------------------|---------------------|-------------------------------------------------------|
| 4 bytes            | Block Size          | The size of the block, in bytes, following this field |
| 80 bytes           | Block Header        | Several fields form the block header                  |
| 1-9 bytes (VarInt) | Transaction Counter | How many transactions follow                          |
| Variable           | Transactions        | The transactions recorded in this block               |
Source: Mastering Bitcoin

#### Block Header
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
The bitcoin protocol uses a proof-of-work algorithm, similar to hashcash, that
Satoshi Nakamoto proposed. The goal of the proof-of-work algorithm is to create
a problem that is easy to verify for correctness but difficult to solve for the
answer (read: NP-complete).

The proof-of-work algorithm provides a means for mining nodes to be
pseudorandomly selected to build a block of transactions. The probability that a
miner will be selected is directly tied to the amount of *work* a miner does. 

#### Network
In actuality, miners aren't "selected" to build a block, so much as have a
chance of building a correct block at a probability of
(miner_hashrate/network_hashrate). 

If a miner finds a correct solution it will propagate its solution into the
network. Once other nodes have verified that the solution is correct they will
accept that block as correct, append it to their chain, and reward the miner
with a coinbase reward, a sum of bitcoin.

#### Algorithm
idea SHA-256

#### Difficulty

#### Nonce

#### Security









