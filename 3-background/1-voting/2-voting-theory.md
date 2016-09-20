Theory
======
**Voting theory**, also known as **social choice theory**, is the mathematical
study of voting systems. Voting theory is used as a tool to examine voting
systems, their caveats, and their benefits. As it turns out, there are lots of
interesting and often unexpected results that can occur depending on the voting
system being used.



Arrow's Impossibility Theorem
-----------------------------
When considering governance and voting Arrow's impossibility theorem is a good
place to start, it grounds one to the difficulties of voting. Arrow's
impossibility theorem states:

> When voters have three or more distinct alternatives (options), no ranked
> order voting system can convert the ranked preferences of individuals into a
> community-wide (complete and transitive) ranking while also meeting a
> pre-specified set of [fairness] criteria.

> Fairness criteria:
> * If every voter prefers alternative X over alternative Y, then the group
>   prefers X over Y.
> * If every voter's preference between X and Y remains unchanged, then the
>   group's preference between X and Y will also remain unchanged (even if
>   voters' preferences between other pairs like X and Z, Y and Z, or Z and W
>   change).
> * There is no "dictator": no single voter possesses the power to always
>   determine the group's preference.
https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem

The following example illustrates Arrow's impossibility theorem:



Condorcet's Paradox
-------------------
Condorcet's paradox is a paradox which demonstrates that the collective
preferences of voting actors can be cyclical (non-transitive), despite the
individual preferences of the voting actor's choices being non-cyclical.

The following example illustrates Condorcet's paradox:

> Suppose we have 3 voting actors: A, B, and C voting for choices X, Y, and Z.
> They rank their votes sequentially from 1 to 3; lower numbers indicating a
> more favorable choice.
>
> |   | X | Y | Z |
> |---|---|---|---|
> | A | 1 | 2 | 3 |
> | B | 2 | 3 | 1 |
> | C | 3 | 1 | 2 |
>
> A favors X > Y > Z.
> B favors Z > X > Y.
> C favors Y > Z > X.
>
> It's clear from this that choice X is preferred to Y, choice Y is preferred to
> Z, and choice Z is preferred to X; a paradoxical result (X > Y; Y > Z; Z > X).



