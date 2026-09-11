# Potential Bugs / Risk Areas

These were identified from the requirements before execution. They should be verified by testing before being reported as confirmed defects.

| ID | Potential Bug / Risk | Severity | Reason / Impact |
|---|---|---|---|
| BUG-01 | Duplicate email may be accepted during registration | Major | Can create duplicate accounts and authentication confusion |
| BUG-02 | Authentication may accept an incorrect password | Critical | Unauthorized account access |
| BUG-03 | A user may access another user's task by changing an ID/client-side value | Critical | Confidentiality and data-integrity issue |
| BUG-04 | UI may show task saved when persistence fails | Major | User can lose data while believing it was saved |
| BUG-05 | Blank or spaces-only task may be accepted | Major | Invalid records and poor data quality |
| BUG-06 | Multiple Save clicks may create duplicate tasks | Major | Duplicate records |
| BUG-07 | Deleted task may reappear after refresh | Major | Database/persistence inconsistency |
| BUG-08 | Very long input may crash or break the page | Major | Stability and validation problem |
| BUG-09 | Password may be visible as plain text | Critical | Credential exposure |
| BUG-10 | Technical errors may be displayed directly to users | Minor/Major | Poor UX and possible information disclosure |

## Severity guide

- Critical: security, unauthorized access, severe data loss, or application unusable
- Major: important functionality is broken or data integrity is affected
- Minor: limited impact, cosmetic or low-impact usability issue
