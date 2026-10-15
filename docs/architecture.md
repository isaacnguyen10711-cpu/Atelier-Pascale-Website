# Architecture

## Overview
<!-- 2–3 sentences: what runs where, and how a visitor's request reaches the site. -->

## Diagram
<!-- Draw the flow, e.g. Visitor → Route 53 → ALB → EC2 → S3 / RDS. A code block with arrows is fine. -->

```
```

## AWS services
<!-- One row per service. Keep the "why" to one line. -->

| Service | What it does here | Why I chose it |
|---|---|---|
| | | |

## Network (VPC)
<!-- Region, CIDR range, availability zones, public vs private subnets, NAT gateway choice. -->

## Security
<!-- Security groups and their rules, IAM users/roles, how secrets are stored, who can SSH in. -->

| Security group | Inbound rules | Attached to |
|---|---|---|
| | | |

## Cost
<!-- Rough monthly cost per service, billing alarm amount, what you'd turn off to save money. -->

## Decisions and trade-offs
<!-- Things you chose on purpose and why, e.g. "EC2 in a public subnet instead of private + NAT, to save ~$40/month". -->

## Open questions
<!-- Things you haven't decided yet. -->
