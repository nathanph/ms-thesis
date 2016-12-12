Technical Requirements
======================
A 2015 study on, End-to-End Verifiable Internet Voting determined ten technical
requirements of E2E-VIV systems:

- functional
- accessibility
- usability
- security
- authentication
- auditing
- system operational
- reliability
- interoperability
- certification

Functional
----------
> The functional requirements of an E2E-VIV system deal primarily with the
> casting and recording of ballots and associated voter records.

**Receipt freedom** is one such functional requirement, a property where it is
impossible for a voter to prove to anybody how they voted.

Others include:
- Ensuring that a voter cast a ballot if such an act is recorded.
- Data retention in case of failure.
- Multi-vote functionality to overwrite a previous votes.
- Maintaining voter anonymity.

Usability
---------
> The usability of an E2E-VIV system is critical to its successful adoption and
> use.

Usability is mostly concerned with user experience and confirmation guarantees.
For example, voters should be confident that their vote was cast by being
provided a confirmation screen. The voting process should be both intuitive and
guide the voter through the process. Presentations such as the butterfly ballot
should be avoided at all costs.

Accessibility
-------------
> **Accessibility** is the property of being usable by and useful to voters with
> disabilities.

Digital voting systems have the potential to provide wider accessibility
guarantees than traditional paper ballots. To provide these guarantees
developers must involve voters throughout the development process to identify
accessibility issues and implement solutions.


Security
--------
Security is one of the most integral properties to maintain for voting systems.
Included in this requirement is that:

- No data can be permanently lost.
- Integrity of voters, candidates, ballot information, cast ballots, and other
  critical information must be maintained.
- Accurate timing information is critical for auditing.
- System must perform regular health checks.
- Voting equipment must be protected.
- The system must perform regular health checks.

Authentication
--------------
**Authentication** is the process of ascertaining the validity of a claimed
identity. Authentication ensures that the voting system can enforce privacy and
prevent multi-voting, Sybil attacks, and vote theft. All individuals must be
identified uniquely.

The system must allow access to services only to authorized users, e.g., only
allow election officials to load ballot info.

Auditing
--------
The property of **auditability** means that a voting system is capable of
comprehensive examination. Auditability must exist at all stages and levels of
the voting process. The system must keep auditable logs of all relevant activity
and the logs must be public and write only. Furthermore, the logs cannot leak
any data regarding voters or the way any ballot was cast.  Privacy must always
be the foremost concern.

The auditing system must actively report issues and information in
real-time.

At least the following events should be recorded:

> - all voting-related information, including the number of eligible voters and
>   votes cast, the number of invalid votes, count and recount results, etc.;
> - any detected attacks on the operation of the system or its communication
>   infrastructure; and
> - any system failures, malfunctions, or other detected threats to proper
>   system operation.

And at least the following features must exist:

> - cross-check and verify the correct operation of the voting system and the
>   accuracy of the election results;
> - detect voter fraud; and
> - prove that all counted votes are legitimate and that all ballots have been
>   counted.

Auditability must extend to the source code, actions performed, and
documentation itself.

System Operational
------------------
**System operational** requirements are those that enforce and regulate
transparency, accountability, system configuration, and updates. Logs: software
used, configurations, versions, updates, etc. must all be managed and produced
to audit for tampering. Protocols should be in place to guard sensitive
equipment at all times and handle system failures. Officials managing these
systems and the procedures themselves must be scrutinized closely to prevent
insider attacks and election fraud.

Reliability
-----------
**Reliability** is the property of a system behaving reasonably and as expected
under both normal conditions and while under attack.

During an election period a system should be highly available. 99.9%
availability is a minimum for voting systems. The system must also be able to
recover from any failure within 10 minutes, with the exception for failure
caused by natural disaster or malicious attack. The system should have redundant
backup systems for critical components of the system.

Internet voting systems are compelling targets for **Distributed Denial of
Service (DDoS)** attacks, therefore it's important that an E2E-VIV system be
able to continue operation with correctness during a sustained DDoS.

Interoperability
----------------
An E2E-VIV system must use open standards for interoperability between
components, services, and other E2E-VIV systems. Logs and documentation of such
standards must be published so that anybody can download, inspect, and publish
analysis and concerns.

Certification
-------------
There should be tests involved for every functional requirement; these tests
should be able to be run on demand. Formal proofs of security and correctness
should be provided wherever possible. Third parties should also review, audit,
and test the system.

