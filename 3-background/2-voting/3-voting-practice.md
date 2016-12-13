Practice
========
In practice implementing a voting system is a massive undertaking. Major
elections in the US dictate how and what polices will be implemented over the
next several years. As such, there are serious risks and concerns that must be
considered when attempting to actually build such a system. First and foremost,
an implemented voting system should protect the voting actors; second, such a
system should ensure that the voting process itself is secure (resistant to
corruption and manipulation); finally an implemented voting system must be
scalable to be effective in large-scale elections.

Voting systems in practice require a process which enables a voting actor to
cast a vote, this voting process consists of four components: registration,
verification, vote casting, and collection and processing.

Voting Process
--------------
### Registration
The **registration** component of the voting process is how the collection of
eligible voters is established. The registration process varies from state to
state in the US. Some states allow *election day registration*, a process
whereby you can register to vote in major federal elections on the same day you
vote; however, most states require their citizens to register themselves before
the election in order to have enough time to disseminate the collection of
eligible voters to polling station officials. Several states require that the
voting actor register up to 30 days before the day of the vote. Currently only
five states in the US have automatic voter registration, or "opt-out"
registration, a process by which citizens of that state are automatically
granted voting rights in upcoming elections if they meet eligible voter
requirements, e.g., are over the age of 18.

### Verification, Authentication, and Authorization
The **verification** component of a vote is the process by which a voting actor
provides some form of identification in order prove they are who they claim to
be. The identity is then **authenticated** via some data source by a polling
station. After the polling station has confirmed that the voting actor is who
they claim to be and is also registered to vote, the polling place will
**authorize** the voting actor to cast their vote.  These steps combined with
the registration process prevent what is known as **Sybil attacks** in
peer-to-peer networks, an attack on a system by creating false identities to
gain influence over a system.

### Vote Casting
The next step in the voting process is **vote casting**, the voting actor is
given a ballot and a place submit their choice(s). The US doesn't have a
consistent vote casting process across states; some states use paper ballots,
others use mechanical voting machines, and others use electronic machines.
Special precautions must be taken here to ensure that votes are cast securely
and privately.

### Collection and Processing
The final step of the voting process is the **collection and processing**
component. This step requires that the polling places aggregate and tally all of
the votes to determine a final result. Records must be kept which would provide
a means to audit and recount votes if necessary. In electronic machines the
collection and tallying process would be done by reading \*. Mechanical machines
\*. Paper ballots, perhaps the most difficult, require \*.


System
------
### Ballot
As it turns out the ballot and the vote casting process are very dependent on
one another. How the ballot is cast is an important part of protecting the voter
and securing the voting system itself.

#### Secret Ballot
A **secret ballot** is a ballot which anonymizes a voting actor's choice. This
is done for several reasons, namely to prevent voter intimidation and vote
buying. Secret ballots are a right provided by several treaties; e.g., the
*Universal Declaration of Human Rights*, the *American Convention on Human
Rights*, and the *Convention on the Standards of Democratic Elections, Electoral
Rights and Freedoms*. Secret ballots are one of the most important rights
offered by democratic societies, it allows voters to vote on topics without fear
of retaliation or outcast by the rest of society. However, the term secret
*ballot* is somewhat of a misnomer; a secret ballot is generally a normal
ballot that is cast in such a way that it wouldn't be possible to know who cast
the ballot. Imagine, for example, if everyone's paper ballots were dropped into
a sealed box while no one was watching.

While there are many benefits to secret ballots, secret ballots are not always
necessary or good to have during a voting process.  For example, if a unanimous
vote were required on a topic it might be helpful for individuals to make their
opinions public to promote discussion. Another example would be if a
representative were voting on a citizen's behalf, for the sake of transparency,
an open ballot would be more appropriate.

#### Electronic Machines

> These universal democratic principles can be summarized as a list of
> fundamental requirements, or 'six commandments', for electronic voting
> systems[citation needed]:
>
> 1. Keep each voter's choice an inviolable secret.
> 2. Allow each eligible voter to vote only once, and only for those offices for
>    which he/she is authorized to cast a vote.
> 3. Do not permit tampering with the voting systems operations, nor allow
>    voters to sell their votes.
> 4. Report all votes accurately
> 5. The voting system shall remain operable throughout each election.
> 6. Keep an audit trail to detect any breach of [2] and [4] but without
>    violating [1].

### Tallying Method

#### Voting
There are four important components of any voting system: registration,
authentication, vote casting, and vote counting.

##### Vote Casting
**Privacy** implemented via **secret ballot**.

