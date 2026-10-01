# Stacked PR TypeScript Repro

This intentionally imperfect TypeScript service is a fixture for reproducing
duplicate SonarQube PR decorations after stacked pull-request restacks.

The base branch contains six source modules. Subsequent branches should form a
stack, for example `stack/01-catalog` → `stack/02-billing` → `stack/03-reports`.
Each branch should update enough TypeScript code to trigger CI analysis when its
parent branch is restacked.

## Local check

```sh
npm install
npm run build
```

The code intentionally contains maintainability issues such as repeated literals,
console logging, nested conditionals, broad mutable state, and complex methods.
