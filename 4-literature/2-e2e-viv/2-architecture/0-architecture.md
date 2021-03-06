Architecture
============
There are over 127,000 possible architectural variants. They are modeled as
follows:

```
static_diagram E2EVIV_Architecture_Dimensions
	-- This diagram shows the various dimensions of an E2EVIV architecture
component
	class E2EVIV_ARCHITECTURE
	feature
		authority_distribution: SET[VALUE]
			ensure 0 < Result.count;
				for_all v: VALUE such_that v member_of Result
					it_holds v member_of { Centralized, Distributed };
			end
		crypto_protocols: SET[VALUE]
			ensure 0 < Result.count;
				for_all v: VALUE such_that v member_of Result
					it_holds v member_of { On_Paper, Mechanized,
										   Verified, Generated };
			end
		correctness_evidence: SET[VALUE]
			ensure 0 < Result.count;
				for_all v: VALUE such_that v member_of Result
				it_holds v member_of { Process_Based, Assertions };
			end
		implementation_type: SET[VALUE]
			ensure 0 < Result.count;
				for_all v: VALUE such_that v member_of Result
					it_holds v member_of { Golden_Implementation,
										   Open_Protocols_and_Specs };
			end
		key_distribution_method: SET[VALUE]
			ensure 0 < Result.count;
				for_all v: VALUE such_that v member_of Result
					it_holds v member_of { Public_Ceremony, Threshold_Cryptography,
										   PKI, Web_of_Trust };
			end
		deployment_style: SET[VALUE]
			ensure 0 < Result.count;
				for_all v: VALUE such_that v member_of Result
					it_holds v member_of { Trusted_Servers, Public_Cloud, Peer_to_Peer };
			end
		client_technology: SET[VALUE]
			ensure 0 < Result.count;
				for_all v: VALUE such_that v member_of Result
					it_holds v member_of { Custom_App, Web_Based };
			end
	end
end
```

