Non-Functional Requirements
===========================
The same 2015 study study found 5 non-functional requirements for an E2E-VIV
systems:

- operational
- procedural
- legal
- assurance
- maintenance/evolvability

Operational
-----------
Within the operational requirements the authors describe several operational
requirements: voter assistance, election and registration timing, voter
registration, candidate nominations and lists receipt freedom, voter assistance,
election integrity, and openness.

### Voter Assistance
Voters must be well informed on how to register, vote, and protect their privacy
in the voting system.

### Election and Registration Timing
Clear instruction on when voting and registration occurs should be announced far
in advance for the voters benefits. When multiple forms of remote voting take
place votes cast over the Internet should not be accepted after other forms of
remote voting end.

### Voter Registration
E2E-VIV systems must publish a voters' register that is regularly updated.
Voters should be able to check that information in the register is accurate and
request corrections.

### Candidate Nominations and Lists
The ballot presented to voters must be consistent, fair, unbiased, and free from
any superfluous information about candidates/choices.

### Receipt Freedom
Operational receipt freedom represents two different requirements depending on
whether a voter is voting from a supervised or unsupervised location.

In a supervised location receipt freedom requires that the voting terminal clear
all indication of how a ballot was cast and ensure that no paper trail
representing how the ballot was cast is able to leave the polling place (except
by official means).

In an unsupervised location any visual proof of vote should not be able to be
used to determine how a vote was cast or will be tallied.

### Election Integrity
If test ballots are able to be submitted then those ballots must be clearly
marked as a test ballot with instruction on how to cast a real ballot.

The voting system should not disclose any results to any person until after the
voting period has ended, including alternative forms of voting. Tallying should
be done as soon as possible afterwards. The tallying process should be
transparent, recorded, and be able to be replayed.

Irregularities which affect the integrity of votes should be recorded.

### Openness
An E2E-VIV system must be open and function properly regardless of the hardware
and software stack the voting machine is running.

Procedural
----------
Procedural requirements define the processes required to deploy and run the
E2E-VIV system. Procedures should be published regarding provisioning,
certification, maintenance, availability, and use.

For example, when updates occur, election officials must call upon an
independent body to perform verifications of performance and certification of
intent.

Procedures should be in place to teach voters the voting process and election
officials should have maintenance and security procedures to ensure that voting
equipment is operating nominally and has not been tampered with. An example of a
security procedure would be enforcing that teams of at least two people be
required to perform sensitive operations.

As much as possible there should be procedures in place to allow observers to
watch election procedures.

Procedures should be in place in the event that a voter proves that their vote
was not accurately received or counted.


Legal
-----
There are a number of national, state, and local law that apply to voting
systems, e.g., accessibility, anonymity, and availability guarantees. Any
deployed E2E-VIV system must comply with these laws.

Election officials must ensure that only one vote by each voter is counted. This
is especially relevant when multiple means of voting exist, e.g., remote and
traditional vote.

Voters must be able to restart, discard, or alter their votes at any point
during a voting process. The system must allow the voter to participate in an
election without marking choices, i.e., casting blank or partially blank
ballots. The voting system must always preserve anonymity and indicate clearly
that the voters ballot has been cast and voting procedure completed.

> There must be no impediments to interested parties who want to study the
> E2E-VIV system. In particular, no nondisclosure agreement or contract of any
> kind may be required for download and study of, or for building, testing and
> publishing test results for, the E2E-VIV system.

Assurance
---------
Client-side software must be functional and free of bugs across a wide range of
hardware and software stack combinations. There must be strong security with
respect to authentication such that voter credentials cannot be forged or
invalidated without breaking underlying cryptographic protocols.

The entirety of the voting system --- e.g., software, documentation, design,
architecture, algorithms, build scripts, issue tracking system, etc. --- must be
free, open, and public. All available resources should be up to date, certified,
and released under license that permits anyone to download, build, test, or
modify the source.


Maintenance and Evolvability
----------------------------
Election officials must have the right and ability to update the election system
to conform to law, technology, or threat independent of the original vendor
(read: the software must be free).

