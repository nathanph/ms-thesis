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

Voting systems in practice are composed of four important components which form
the voting process: registration, verification, vote casting, and
collection/processing.

Voting Process
--------------
### Registration
The **registration** component of the voting process is how the collection of
eligible voters is established. The registration process varies from state to
state in the US. Some states allow election day registration, a process whereby
you can register to vote in major federal elections on the same day you go to
vote; however, most states require their citizens to register themselves before
the election in order to have enough time to disseminate the collection of
eligible voters to polling stations officials. Several states require that the
voting actor register up to 30 days before the day of the vote. Currently only
five states in the US have automatic voter registration, or "opt-out"
registration, a process by which citizens of that state are automatically
granted voting rights if they meet eligible voter requirements, e.g., are over
the age of 18.

### Verification, Authentication, and Authorization
The **verification** component of a vote is the process by which a voting actor
provides some form of identification in order prove they are who they claim to
be. The identity is then **authenticated** via some data source by a polling
place. After the polling place is confident that the voting actor is who they
claim to be and the polling place has confirmed that the voting actor is
registered to vote, the polling place will **authorize** the voting actor to
cast their vote.  These steps combined with the registration process prevents
what is known as a **Sybil attack** in peer-to-peer networks, an attack on a
system by creating false identities to gain influence over a system.

### Vote Casting
The next step in the voting process is **vote casting**, the voting actor is
given a ballot and a place submit their choice(s). The US doesn't have a
consistent vote casting process across states. Some states use paper ballots,
others use paper ballots, and still others use electronic machines.  Special
precautions must be taken here to ensure that votes are cast securely and
privately.

### Collection and Processing
The final step of the voting process is the **collection and processing**
component. This step requires that the polling places aggregate and tally all of
the votes to determine a final result. In electronic machines this would be done
by reading \*. Mechanical machines \*. Paper ballots, perhaps the most
difficult, require \*. Records must be kept which would provide a means to
audit and recount votes if necessary.


System
------
### Ballot
How the ballot is cast is an important part of securing

#### Secret Ballot
A **secret ballot** is a ballot which conceals a voting actor's choice. This is
done for several reasons, mainly it helps to prevent intimidation and vote
buying. Secret ballots are a right provided by several treaties; e.g., the
*Universal Declaration of Human Rights*, the *American Convention on Human
Rights*, and *Convention on the Standards of Democratic Elections, Electoral
Rights and Freedoms*.

#### Electronic Machines

####

### Tallying Method

###

#### Voting
There are four important components of any voting system: registration,
authentication, vote casting, and vote counting.

##### Vote Casting
**Privacy** implemented via **secret ballot**.

