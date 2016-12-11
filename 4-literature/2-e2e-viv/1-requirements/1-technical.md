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
**receipt freedom**
> The functional requirements of an E2E-VIV system deal primarily with the casting
> and recording of ballots and associated voter records. One such requirement is
> that recorded ballots and voters listed as having voted must correspond with
> each other; a ballot cannot be recorded without a voter casting it, and a voter
> cannot be listed as having voted without casting a ballot. If the system tells a
> voter that her ballot has been successfully cast, the system must correctly
> retain the record that she has voted. The system must keep a voter’s cast ballot
> information even if servers fail.
>
> Another functional requirement is receipt freedom: it must be impossible for a
> voter to prove to anybody any information regarding how she voted, beyond what
> someone can mathematically deduced from the final distribution of votes. If a
> referendum passes with 100% of the vote, for example, there is no way to hide
> the fact that every voter approved of the referendum. If the result is mixed, it
> must be impossible for any individual voter to prove how she voted. This must be
> true even when the voter can create digital evidence of her actions by, for
> example, video recording the ballot casting process or photographing a completed
> ballot.

Usability
---------


Accessibility
-------------
**Accessibility** is the property of being usable by and useful to voters with
disabilities.


Security
--------
No data can be permanently lost.

Must maintain integrity of voters, candidates, ballot information, cast ballots,
and other critical information.

Accurate timing information is critical for auditing.

System must perform health checks.

Voting equipment must be protected.

System must perform regular health checks.

Authentication
--------------
Must auth sources of info.

Individuals must be identified uniquely (prevents multi-vote, sybil attacks, and
vote theft).

The system must allow access to services only to auth'd users, e.g., election
officials to load ballot info.

Auditing
--------
The property of **auditability** means that a system is capable of comprehensive
examination.

System Operational
------------------
System operational requirements are those that enforce transparency,
accountability, system configuration, etc. Logs of software used, versions, when
they were updated, etc.

Reliability
-----------
**Reliability** is the property of a system behaving reasonably and as expected
under both normal conditions and while under attack.

During an election period a system should be highly available. 99.9%
availability is a minimum for this system. The system must also be able to
recover from any failure within 10 minutes, with the exception for failure
caused by natural disaster or malicious attack. The system should have redundant
backup systems for critical components of the system.

Internet voting systems are compelling targets for **Distributed Denial of
Service (DDoS)** attacks, therefore it's important that an E2E-VIV system be
able to sustain correct operation during a sustained DDoS.

Interoperability
----------------
An E2E-VIV system must use open standards and for interoperability between
components, services, and other E2E-VIV systems. Logs and documentation must be
published so that anybody can download, inspect, and publish concerns.

Certification
-------------
There should be tests involved with every functional requirement that can be run
on demand. Formal proofs of security and correctness should be provided wherever
possible.


