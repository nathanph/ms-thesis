Proxy Contract
==============
The Proxy Contract enables voters to delegate their vote to another voter.

| Key               | Type     | Description                                                                       |
|-------------------|----------|-----------------------------------------------------------------------------------|
| name              | String   | A name for this proxy (Science, Economics, Social).                               |
| auth_contract     | Contract | The authentication contract which contains the set of eligible voters.            |
| parent_proxy      | Contract | The parent proxy contract of this proxy contract (hierarchical proxy capability). |
| proxies           | Set<Key> | A collection of public keys which have agreed to act as proxies                   |
| election_contract | Contract | An election contract with proxies as options.                                     |

Note: The `auth_contract` and `parent_proxy` contract are mutually exclusive.
Note: The root `parent_proxy` must contain an `auth_contract`.

Functionality 1: Proxy Consent
------------------------------
To become an eligible proxy you must first consent to act as a proxy. This is
done by calling `proxy.consent()` with a valid public key from `auth_contract`.

*TODO: Merkle tree to store the state of the contract at a particular block?
Used to get a static version of valid keys.*

Functionality 2: Create Election
--------------------------------
Register a new election with all proxies and parent proxies as choices in the
election. If an election already exists then the election should pre-seed with
the encrypted votes from the previous proxy election (effectively keeping
previous delegations).
